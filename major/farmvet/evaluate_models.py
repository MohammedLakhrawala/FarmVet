"""Evaluate FarmVet classifiers on a manually held-out image set.

Expected layout:
    evaluation_data/test/cattle/<class-name>/*.jpg
    evaluation_data/test/goat/<class-name>/*.jpg

Class folder names must match the class-index JSON files. Keep the test set
separate from training and validation data; do not use its results to tune the
model and then report those same results as final test performance.
"""

import argparse
import json
from pathlib import Path

import numpy as np

from app import get_model_and_classes, preprocess_image


SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def score_model(animal: str, test_root: Path, batch_size: int = 16) -> dict:
    model, idx_to_class = get_model_and_classes(animal)
    class_names = [idx_to_class[index] for index in sorted(idx_to_class)]
    animal_dir = test_root / animal
    if not animal_dir.is_dir():
        raise FileNotFoundError(f"Test folder not found: {animal_dir}")

    paths_by_class = {}
    for class_name in class_names:
        folder = animal_dir / class_name
        if not folder.is_dir():
            raise FileNotFoundError(f"Expected class folder not found: {folder}")
        paths_by_class[class_name] = sorted(
            path for path in folder.rglob("*")
            if path.is_file() and path.suffix.lower() in SUPPORTED_EXTENSIONS
        )
        if not paths_by_class[class_name]:
            raise ValueError(f"No supported test images found in {folder}")

    y_true = []
    y_pred = []
    image_batch = []
    label_batch = []

    def flush_batch():
        if not image_batch:
            return
        probabilities = model.predict(np.concatenate(image_batch, axis=0), verbose=0)
        y_pred.extend(np.argmax(probabilities, axis=1).tolist())
        y_true.extend(label_batch)
        image_batch.clear()
        label_batch.clear()

    for true_index, class_name in enumerate(class_names):
        for image_path in paths_by_class[class_name]:
            with image_path.open("rb") as stream:
                image_batch.append(preprocess_image(stream))
            label_batch.append(true_index)
            if len(image_batch) >= batch_size:
                flush_batch()
    flush_batch()

    matrix = [[0 for _ in class_names] for _ in class_names]
    for actual, predicted in zip(y_true, y_pred):
        matrix[actual][predicted] += 1

    class_metrics = []
    for index, class_name in enumerate(class_names):
        true_positive = matrix[index][index]
        support = sum(matrix[index])
        predicted_count = sum(row[index] for row in matrix)
        precision = true_positive / predicted_count if predicted_count else 0.0
        recall = true_positive / support if support else 0.0
        f1 = (2 * precision * recall / (precision + recall)) if precision + recall else 0.0
        class_metrics.append({
            "class": class_name,
            "support": support,
            "precision": precision,
            "recall": recall,
            "f1": f1,
        })

    total = len(y_true)
    correct = sum(matrix[index][index] for index in range(len(class_names)))
    macro = {
        metric: sum(row[metric] for row in class_metrics) / len(class_metrics)
        for metric in ("precision", "recall", "f1")
    }
    return {
        "animal": animal,
        "model_file": f"{animal}_disease_model.h5",
        "test_images": total,
        "accuracy": correct / total if total else 0.0,
        "macro_average": macro,
        "classes": class_metrics,
        "confusion_matrix_labels": class_names,
        "confusion_matrix": matrix,
        "test_data_directory": str(animal_dir),
        "evaluation_note": "Scores apply only to this test set; inspect its split and provenance before reporting them.",
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--test-dir", type=Path, default=Path("evaluation_data/test"))
    parser.add_argument("--output-dir", type=Path, default=Path("evaluation_results"))
    args = parser.parse_args()

    args.output_dir.mkdir(parents=True, exist_ok=True)
    for animal in ("cattle", "goat"):
        report = score_model(animal, args.test_dir)
        output = args.output_dir / f"{animal}_evaluation.json"
        output.write_text(json.dumps(report, indent=2), encoding="utf-8")
        print(f"{animal}: {report['test_images']} images; accuracy {report['accuracy']:.3f}; "
              f"macro F1 {report['macro_average']['f1']:.3f}")
        print(f"Saved {output}")


if __name__ == "__main__":
    main()
