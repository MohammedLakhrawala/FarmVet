"""
FarmVet — Animal Disease Classifier (Flask backend)
=====================================================
Loads the .h5 models directly (no TFLite/TFJS conversion needed) and serves
predictions to a simple web frontend.

Folder layout expected:
    app.py
    models/
        cattle_disease_model.h5
        cattle_class_indices.json      (rename your class_indices.json to this)
        goat_disease_model.h5
        goat_class_indices.json
    templates/
        index.html
    static/
        style.css
        script.js

Run:
    pip install flask tensorflow pillow numpy
    python app.py

Then open http://localhost:5000 in your browser.
"""

import os
import json
import base64
import io
import numpy as np
from flask import Flask, request, jsonify, render_template, send_from_directory
from PIL import Image, ImageOps, UnidentifiedImageError
import tensorflow as tf

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024
Image.MAX_IMAGE_PIXELS = 20_000_000

IMG_SIZE = (224, 224)
MODELS_DIR = os.path.join(os.path.dirname(__file__), "models")

# ─── LAZY MODEL LOADING (loaded once, cached in memory) ───────────────────────
_loaded_models = {}
_loaded_classes = {}


def get_model_and_classes(animal: str):
    """Load and cache the model + class index mapping for the given animal."""
    animal = animal.lower()
    if animal not in ("cattle", "goat"):
        raise ValueError("animal must be 'cattle' or 'goat'")

    if animal not in _loaded_models:
        model_path = os.path.join(MODELS_DIR, f"{animal}_disease_model.h5")
        classes_path = os.path.join(MODELS_DIR, f"{animal}_class_indices.json")

        if not os.path.exists(model_path):
            raise FileNotFoundError(
                f"Model file not found: {model_path}. "
                f"Place your trained .h5 file there."
            )
        if not os.path.exists(classes_path):
            raise FileNotFoundError(
                f"Class indices file not found: {classes_path}. "
                f"Place your class_indices.json there (renamed appropriately)."
            )

        print(f"Loading {animal} model from {model_path} ...")
        # This app only performs inference; skip restoring the training optimizer/loss.
        _loaded_models[animal] = tf.keras.models.load_model(model_path, compile=False)

        with open(classes_path) as f:
            class_indices = json.load(f)
        # class_indices.json is {"class_name": index} -> invert it
        _loaded_classes[animal] = {v: k for k, v in class_indices.items()}
        print(f"{animal} model loaded. Classes: {_loaded_classes[animal]}")

    return _loaded_models[animal], _loaded_classes[animal]


def preprocess_image(file_stream, return_image=False):
    """Validate an upload and match training preprocessing: resize + /255 rescale."""
    with Image.open(file_stream) as source:
        if source.format not in {"JPEG", "PNG", "WEBP"}:
            raise ValueError("Use a JPEG, PNG, or WebP image.")
        source.load()
        original = ImageOps.exif_transpose(source).convert("RGB")
    if original.width < IMG_SIZE[0] or original.height < IMG_SIZE[1]:
        raise ValueError("The image must be at least 224 by 224 pixels.")

    img = original.resize(IMG_SIZE)
    arr = np.array(img, dtype=np.float32) / 255.0
    arr = np.expand_dims(arr, axis=0)  # batch dimension
    return (arr, original) if return_image else arr


def make_gradcam_overlay(model, image_batch, class_index, original_image):
    """Return a Grad-CAM overlay for the last 4D feature map, when available."""
    feature_layer = next(
        (
            layer for layer in reversed(model.layers)
            if getattr(getattr(layer, "output", None), "shape", None) is not None
            and len(layer.output.shape) == 4
        ),
        None,
    )
    if feature_layer is None:
        return None

    grad_model = tf.keras.Model(
        inputs=model.inputs,
        outputs=[feature_layer.output, model.output],
    )
    with tf.GradientTape() as tape:
        feature_maps, predictions = grad_model(image_batch, training=False)
        class_score = predictions[:, class_index]
    gradients = tape.gradient(class_score, feature_maps)
    if gradients is None:
        return None

    channel_weights = tf.reduce_mean(gradients, axis=(1, 2))
    heatmap = tf.reduce_sum(feature_maps[0] * channel_weights[0], axis=-1)
    heatmap = tf.maximum(heatmap, 0)
    peak = tf.reduce_max(heatmap)
    if float(peak) <= 0:
        return None

    heatmap = (heatmap / peak).numpy()
    red = np.clip(heatmap * 255, 0, 255)
    green = np.clip(np.sqrt(heatmap) * (1 - heatmap) * 510, 0, 255)
    blue = np.clip((1 - heatmap) * 70, 0, 255)
    colors = np.stack([red, green, blue], axis=-1).astype(np.uint8)
    overlay = Image.fromarray(colors, mode="RGB").resize(IMG_SIZE, Image.Resampling.BILINEAR)
    base = original_image.resize(IMG_SIZE, Image.Resampling.LANCZOS)
    output = Image.blend(base, overlay, 0.4)
    buffer = io.BytesIO()
    output.save(buffer, format="PNG", optimize=True)
    return "data:image/png;base64," + base64.b64encode(buffer.getvalue()).decode("ascii")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/service-worker.js")
def service_worker():
    # Serve from the site root so the worker can control the whole app.
    response = send_from_directory(app.static_folder, "service-worker.js")
    response.headers["Service-Worker-Allowed"] = "/"
    response.headers["Cache-Control"] = "no-cache"
    return response


@app.errorhandler(413)
def upload_too_large(_error):
    return jsonify({"error": "Image is too large. Choose an image under 10 MB."}), 413


@app.route("/predict", methods=["POST"])
def predict():
    animal = request.form.get("animal", "").lower()
    image_file = request.files.get("image")

    if not image_file:
        return jsonify({"error": "No image uploaded"}), 400
    if animal not in ("cattle", "goat"):
        return jsonify({"error": "animal must be 'cattle' or 'goat'"}), 400

    try:
        model, idx_to_class = get_model_and_classes(animal)
    except FileNotFoundError as e:
        return jsonify({"error": str(e)}), 500
    except Exception:
        app.logger.exception("Failed to load the %s model", animal)
        return jsonify({"error": f"Could not load the {animal} model. Check the server logs."}), 500

    try:
        x, original_image = preprocess_image(image_file.stream, return_image=True)
    except (UnidentifiedImageError, OSError, ValueError, Image.DecompressionBombError) as e:
        return jsonify({"error": str(e) or "The uploaded image could not be read."}), 400

    try:
        preds = model.predict(x, verbose=0)[0]  # shape: (num_classes,)
    except Exception as e:
        return jsonify({"error": f"Prediction failed: {e}"}), 500

    # Build a sorted list of {label, confidence} for every class
    results = [
        {"label": idx_to_class[i], "confidence": float(preds[i])}
        for i in range(len(preds))
    ]
    results.sort(key=lambda r: r["confidence"], reverse=True)

    try:
        gradcam = make_gradcam_overlay(
            model, x, int(np.argmax(preds)), original_image
        )
    except Exception:
        app.logger.exception("Could not create Grad-CAM for %s", animal)
        gradcam = None

    return jsonify({
        "animal": animal,
        "top_prediction": results[0],
        "all_predictions": results,
        "gradcam_overlay": gradcam,
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)
