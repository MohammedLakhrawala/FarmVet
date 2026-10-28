# FarmVet — Setup (5 minutes)

## 1. Put your model files in the `models/` folder

You need exactly these 4 files inside `models/`:

```
models/
  cattle_disease_model.h5
  cattle_class_indices.json     <- rename your class_indices.json to this
  goat_disease_model.h5
  goat_class_indices.json       <- already named correctly from Colab
```

## 2. Open Terminal, navigate to this folder, and run:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

That's it. Open **http://localhost:5000** in your browser.

## Notes
- First run may take ~30 seconds to load the models — that's normal.
- To stop the server, press `Ctrl+C` in Terminal.
- Next time you want to run it, you only need:
  ```bash
  source venv/bin/activate
  python app.py
  ```
  (no need to reinstall anything again)

## Install FarmVet on a phone
- FarmVet is a Progressive Web App. Open the deployed site in a supported mobile browser and use its **Install app** prompt or browser menu's **Add to Home Screen** option.
- Camera access and service workers require a secure context: use `localhost` for local development, and HTTPS when hosting the app for phones.
- The app shell can open offline after it has been loaded once. Disease screening still needs an internet connection to reach the Flask server and TensorFlow models.

## Screening history and reports
- Completed screenings are saved in browser local storage on the current device. Uploaded photos are not saved in history.
- Use **View report** or a history record's **Open report** action, then choose **Print / Save as PDF** to create a shareable report.
- Clearing browser data or changing browsers/devices removes access to those local records.

## Model evaluation
The repository currently has no labeled held-out test images, so no accuracy claim is published. Read [MODEL_CARD.md](MODEL_CARD.md) for known model details and limitations.

To evaluate both models, create a test-only dataset with class folder names matching the class-index files:

```text
evaluation_data/test/
  cattle/foot-and-mouth/
  cattle/healthy/
  cattle/lumpy/
  goat/healthy/
  goat/orf/
```

Keep this data separate from training and validation, and keep photos from the same animal or farm in one split where you have those identifiers. Then run:

```bash
python evaluate_models.py
```

The script writes per-class precision, recall, F1, support, accuracy, and confusion matrices into `evaluation_results/`. Do not present these results as independent test performance if the images were used during training or model selection.

## Photo input checks
Uploads must be JPEG, PNG, or WebP, under 10 MB, and at least 224 × 224 pixels. FarmVet applies EXIF orientation before resizing the image for inference.
