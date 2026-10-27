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
import numpy as np
from flask import Flask, request, jsonify, render_template, send_from_directory
from PIL import Image
import tensorflow as tf

app = Flask(__name__)

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
        _loaded_models[animal] = tf.keras.models.load_model(model_path)

        with open(classes_path) as f:
            class_indices = json.load(f)
        # class_indices.json is {"class_name": index} -> invert it
        _loaded_classes[animal] = {v: k for k, v in class_indices.items()}
        print(f"{animal} model loaded. Classes: {_loaded_classes[animal]}")

    return _loaded_models[animal], _loaded_classes[animal]


def preprocess_image(file_stream):
    """Match the exact preprocessing used during training: resize + /255 rescale."""
    img = Image.open(file_stream).convert("RGB")
    img = img.resize(IMG_SIZE)
    arr = np.array(img, dtype=np.float32) / 255.0
    arr = np.expand_dims(arr, axis=0)  # batch dimension
    return arr


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

    try:
        x = preprocess_image(image_file.stream)
        preds = model.predict(x, verbose=0)[0]  # shape: (num_classes,)
    except Exception as e:
        return jsonify({"error": f"Prediction failed: {e}"}), 500

    # Build a sorted list of {label, confidence} for every class
    results = [
        {"label": idx_to_class[i], "confidence": float(preds[i])}
        for i in range(len(preds))
    ]
    results.sort(key=lambda r: r["confidence"], reverse=True)

    return jsonify({
        "animal": animal,
        "top_prediction": results[0],
        "all_predictions": results,
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)
