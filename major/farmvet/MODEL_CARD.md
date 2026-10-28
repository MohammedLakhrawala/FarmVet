# FarmVet model card

## Summary

FarmVet contains two image classifiers: one for cattle and one for goats. The user selects the animal type before inference. The saved models use a MobileNetV2 feature extractor with a dense classification head.

## Input and output

- Input: one RGB image, resized to 224 × 224 pixels and scaled to `[0, 1]`.
- Cattle labels: `foot-and-mouth`, `healthy`, `lumpy`.
- Goat labels: `healthy`, `orf`.
- Output: a class score for each label; the app sorts these scores and displays the top class.
- The scores have not been calibrated as diagnostic confidence.

## Intended use

This is an educational livestock photo-screening prototype. It is intended to demonstrate image classification and help organize a conversation about an animal's visible condition. It is not a veterinary diagnostic system.

## Training and evaluation status

The trained model files and class-index mappings are included. The original training images, animal/farm identifiers, split manifest, and training script are not present in this repository. Therefore, dataset size, provenance, label-review process, and independent test performance are currently **unknown and unreported**.

Do not publish an accuracy claim until a labeled test set that was not used for training or model selection has been evaluated. Keep related images from the same animal or farm in one split where identifiers are available. Use `evaluate_models.py` to produce per-class precision, recall, F1, support, and confusion matrices from a held-out folder.

## Limitations

- The classes and training distribution are limited to the labels listed above.
- The model may be sensitive to lighting, background, camera, breed, age, skin tone, and image framing.
- It may return a top class for an unrelated or unsuitable image.
- Grad-CAM is an exploratory visualization of image features that influence a score; it does not establish that the model found a disease lesion or that its result is correct.
- The browser history is stored only in that browser's local storage. It is not synced between devices or users, and uploaded images are not saved in history.

## Versioning

Model files are stored as `cattle_disease_model.h5` and `goat_disease_model.h5`. Their embedded Keras version is 3.13.2. Inference dependencies are pinned in `requirements.txt`.
