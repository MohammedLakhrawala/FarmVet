// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
  en: {
    tagline: "AI-assisted disease screening for livestock",
    cattle: "Cattle",
    goat: "Goat",
    uploadTitle: "Click to upload",
    uploadOr: "or drag an image here",
    uploadHint: "JPG or PNG · a clear photo of the animal's skin/affected area works best",
    useCamera: "Use Camera",
    capture: "Capture",
    analyze: "Analyze Image",
    analyzing: "Analyzing image…",
    confidence: "confidence",
    cameraError: "Could not access camera. Please check permissions.",
    serverError: "Could not reach the server. Make sure app.py is running.",
    fileTypeError: "Please upload an image file (JPG or PNG).",
    precautionsTitle: "Recommended precautions",
  },
  hi: {
    tagline: "पशुओं के लिए AI-सहायित रोग जांच",
    cattle: "गाय",
    goat: "बकरी",
    uploadTitle: "अपलोड करने के लिए क्लिक करें",
    uploadOr: "या यहाँ फोटो खींचें",
    uploadHint: "JPG या PNG · जानवर की त्वचा/प्रभावित हिस्से की साफ फोटो सबसे अच्छी होती है",
    useCamera: "कैमरा उपयोग करें",
    capture: "फोटो लें",
    analyze: "जांच करें",
    analyzing: "फोटो जांची जा रही है…",
    confidence: "विश्वसनीयता",
    cameraError: "कैमरा एक्सेस नहीं हो पाया। कृपया अनुमति जाँचें।",
    serverError: "सर्वर से संपर्क नहीं हो पाया। सुनिश्चित करें कि app.py चल रहा है।",
    fileTypeError: "कृपया एक इमेज फ़ाइल अपलोड करें (JPG या PNG)।",
    precautionsTitle: "सुझाई गई सावधानियाँ",
  },
};

Object.assign(translations.en, {
  skip: "Skip to screening", screening: "Health screening", photoGuide: "Photo guide",
  eyebrow: "A LITTLE CARE GOES A LONG WAY", headline: "Better care starts with a closer look.",
  intro: "A simple photo can help you take the next step in caring for your cattle and goats.",
  introNote: "Your livestock. Your care. A helping hand from AI.", newScreening: "NEW SCREENING",
  screeningTitle: "Let's check on your animal", selectAnimal: "Choose your animal", addPhoto: "Add a clear photo", getResults: "Review the screening",
  guideTitle: "A clearer photo. A better starting point.", tip1Title: "Find natural light",
  tip1: "Take your photo in a bright area without harsh shadows.", tip2Title: "Focus on the affected area",
  tip2: "Keep the skin or visible concern clear and in focus.", tip3Title: "One animal at a time",
  tip3: "Avoid busy backgrounds and keep the camera steady.",
  guideNote: "Use the screening as a starting point for a conversation with your veterinarian."
});
Object.assign(translations.hi, {
  skip: "जांच पर जाएं", screening: "स्वास्थ्य जांच", photoGuide: "फोटो गाइड",
  eyebrow: "थोड़ी देखभाल, बड़ा बदलाव", headline: "बेहतर देखभाल की शुरुआत, एक नज़दीकी नज़र से।",
  intro: "एक साधारण फोटो आपकी गायों और बकरियों की देखभाल में अगला कदम लेने में मदद कर सकती है।",
  introNote: "आपके पशु। आपकी देखभाल। AI की मदद के साथ।", newScreening: "नई जांच",
  screeningTitle: "आइए आपके पशु की जांच करें", selectAnimal: "अपना पशु चुनें", addPhoto: "एक साफ फोटो जोड़ें", getResults: "जांच का परिणाम देखें",
  guideTitle: "साफ फोटो। बेहतर शुरुआत।", tip1Title: "प्राकृतिक रोशनी चुनें",
  tip1: "तेज़ छाया के बिना अच्छी रोशनी वाली जगह पर फोटो लें।", tip2Title: "प्रभावित हिस्से पर ध्यान दें",
  tip2: "त्वचा या प्रभावित हिस्से को साफ और फोकस में रखें।", tip3Title: "एक बार में एक पशु",
  tip3: "सादी पृष्ठभूमि चुनें और कैमरा स्थिर रखें।",
  guideNote: "इस जांच के आधार पर अपने पशु चिकित्सक से बातचीत शुरू करें।"
});

// Class label -> display name + precautions, per language.
// Keys must match the label strings coming back from class_indices.json
// (lowercase, matches folder names used during training).
const diseaseInfo = {
  "healthy": {
    en: {
      name: "Healthy",
      precautions: [
        "No treatment needed — continue routine care.",
        "Keep housing clean and dry; disinfect regularly.",
        "Maintain a balanced diet and clean drinking water.",
        "Keep up with your vet's vaccination schedule.",
      ],
    },
    hi: {
      name: "स्वस्थ",
      precautions: [
        "किसी इलाज की आवश्यकता नहीं — नियमित देखभाल जारी रखें।",
        "आवास को साफ और सूखा रखें; नियमित रूप से कीटाणुरहित करें।",
        "संतुलित आहार और साफ पानी उपलब्ध कराएं।",
        "पशु चिकित्सक के टीकाकरण कार्यक्रम का पालन करें।",
      ],
    },
  },
  "foot-and-mouth": {
    en: {
      name: "Foot & Mouth Disease",
      precautions: [
        "Isolate the animal immediately — this disease is highly contagious.",
        "Contact a veterinarian right away; this is a notifiable disease in India.",
        "Disinfect the shed, equipment, and footwear before/after contact.",
        "Restrict animal movement in/out of the farm until cleared by a vet.",
        "Provide soft feed and clean water — mouth sores make eating painful.",
      ],
    },
    hi: {
      name: "खुरपका-मुंहपका रोग (FMD)",
      precautions: [
        "जानवर को तुरंत अलग करें — यह रोग अत्यधिक संक्रामक है।",
        "तुरंत पशु चिकित्सक से संपर्क करें; भारत में यह एक अधिसूचित रोग है।",
        "शेड, उपकरण और जूतों को संपर्क से पहले/बाद कीटाणुरहित करें।",
        "पशु चिकित्सक की अनुमति तक फार्म में जानवरों की आवाजाही सीमित करें।",
        "नरम चारा और साफ पानी दें — मुंह के छालों से खाना दर्दनाक होता है।",
      ],
    },
  },
  "lumpy": {
    en: {
      name: "Lumpy Skin Disease",
      precautions: [
        "Isolate the affected animal from the herd immediately.",
        "Control flies, mosquitoes, and ticks — they spread this disease.",
        "Contact a veterinarian for supportive treatment and vaccination advice.",
        "Disinfect shared equipment and clean wounds to prevent infection.",
        "Avoid moving the animal to new locations until it recovers.",
      ],
    },
    hi: {
      name: "लम्पी स्किन रोग",
      precautions: [
        "प्रभावित जानवर को झुंड से तुरंत अलग करें।",
        "मक्खियों, मच्छरों और किलनी को नियंत्रित करें — ये रोग फैलाते हैं।",
        "उपचार और टीकाकरण सलाह के लिए पशु चिकित्सक से संपर्क करें।",
        "साझा उपकरण कीटाणुरहित करें और घावों को साफ रखें।",
        "ठीक होने तक जानवर को नई जगह न ले जाएं।",
      ],
    },
  },
  "orf": {
    en: {
      name: "Orf (Contagious Ecthyma)",
      precautions: [
        "Isolate the affected goat to prevent spread within the herd.",
        "Wear gloves when handling — orf can spread to humans through contact.",
        "Contact a veterinarian for treatment of scabs/lesions.",
        "Disinfect feeding troughs and equipment used by the animal.",
        "Avoid letting young/weak animals nurse from an infected mother directly.",
      ],
    },
    hi: {
      name: "ऑर्फ (संक्रामक एक्थाइमा)",
      precautions: [
        "झुंड में फैलने से रोकने के लिए प्रभावित बकरी को अलग करें।",
        "संभालते समय दस्ताने पहनें — ऑर्फ संपर्क से इंसानों में भी फैल सकता है।",
        "घावों/पपड़ी के इलाज के लिए पशु चिकित्सक से संपर्क करें।",
        "जानवर द्वारा इस्तेमाल किए गए चारे के बर्तन और उपकरण कीटाणुरहित करें।",
        "कमजोर/छोटे बच्चों को संक्रमित मां का सीधा दूध पीने से रोकें।",
      ],
    },
  },
};

function getDiseaseDisplay(label, lang) {
  const key = label.toLowerCase();
  const info = diseaseInfo[key];
  if (!info) {
    return {
      name: label,
      precautions: lang === "hi"
        ? ["सटीक सलाह के लिए कृपया पशु चिकित्सक से संपर्क करें।"]
        : ["Please consult a veterinarian for specific guidance."],
    };
  }
  return info[lang] || info.en;
}

// ─── STATE ───────────────────────────────────────────────────────────────────
const state = {
  animal: "cattle",
  lang: "en",
  file: null,
  cameraStream: null,
  lastData: null,
  predictionVersion: 0,
};

// Allow supported browsers to offer native PWA installation.
const installBtn = document.getElementById("installBtn");
let installPrompt = null;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installBtn.hidden = false;
});
installBtn.addEventListener("click", async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  installBtn.hidden = true;
});
window.addEventListener("appinstalled", () => {
  installPrompt = null;
  installBtn.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch((error) => {
      console.error("FarmVet service worker registration failed:", error);
    });
  });
}

// ─── DOM refs ────────────────────────────────────────────────────────────────
const uploadZone = document.getElementById("uploadZone");
const fileInput = document.getElementById("fileInput");
const uploadPrompt = document.getElementById("uploadPrompt");
const previewImg = document.getElementById("previewImg");
const cameraVideo = document.getElementById("cameraVideo");
const captureCanvas = document.getElementById("captureCanvas");
const cameraBtn = document.getElementById("cameraBtn");
const captureBtn = document.getElementById("captureBtn");
const predictBtn = document.getElementById("predictBtn");
const resultPanel = document.getElementById("resultPanel");
const resultLabel = document.getElementById("resultLabel");
const resultConfidence = document.getElementById("resultConfidence");
const resultBars = document.getElementById("resultBars");
const precautionsTitle = document.getElementById("precautionsTitle");
const precautionsList = document.getElementById("precautionsList");
const errorPanel = document.getElementById("errorPanel");
const loadingPanel = document.getElementById("loadingPanel");
const toggleBtns = document.querySelectorAll(".toggle-btn");
const langBtns = document.querySelectorAll(".lang-btn");

// ─── i18n rendering ──────────────────────────────────────────────────────────
function applyTranslations() {
  const t = translations[state.lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  document.documentElement.lang = state.lang;
}

langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    langBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.lang = btn.dataset.lang;
    langBtns.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    applyTranslations();
    if (!resultPanel.hidden && state.lastData) {
      showResult(state.lastData);
    }
  });
});

// ─── Animal toggle ─────────────────────────────────────────────────────────
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    state.animal = btn.dataset.animal;
    hideResult();
    hideError();
  });
});

// ─── Upload zone interactions ──────────────────────────────────────────────
uploadZone.addEventListener("click", () => {
  if (state.cameraStream) return;
  fileInput.click();
});

uploadZone.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    if (!state.cameraStream) fileInput.click();
  }
});

uploadZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadZone.classList.add("dragover");
});

uploadZone.addEventListener("dragleave", () => {
  uploadZone.classList.remove("dragover");
});

uploadZone.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadZone.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  if (file) handleFile(file);
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) handleFile(file);
});

function handleFile(file) {
  if (!file.type.startsWith("image/")) {
    showError(translations[state.lang].fileTypeError);
    return;
  }
  stopCamera();
  state.file = file;
  hideError();
  hideResult();

  const reader = new FileReader();
  reader.onload = (e) => {
    previewImg.src = e.target.result;
    previewImg.hidden = false;
    uploadPrompt.hidden = true;
  };
  reader.readAsDataURL(file);

  predictBtn.disabled = false;
}

// ─── Camera capture ─────────────────────────────────────────────────────────
cameraBtn.addEventListener("click", async () => {
  hideError();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });
    state.cameraStream = stream;
    cameraVideo.srcObject = stream;

    uploadPrompt.hidden = true;
    previewImg.hidden = true;
    cameraVideo.hidden = false;
    captureBtn.hidden = false;
    cameraBtn.hidden = true;
  } catch (err) {
    showError(translations[state.lang].cameraError);
  }
});

captureBtn.addEventListener("click", () => {
  const w = cameraVideo.videoWidth;
  const h = cameraVideo.videoHeight;
  captureCanvas.width = w;
  captureCanvas.height = h;
  const ctx = captureCanvas.getContext("2d");
  ctx.drawImage(cameraVideo, 0, 0, w, h);

  captureCanvas.toBlob((blob) => {
    const file = new File([blob], "camera_capture.jpg", { type: "image/jpeg" });
    state.file = file;
    previewImg.src = captureCanvas.toDataURL("image/jpeg");
    previewImg.hidden = false;
    predictBtn.disabled = false;
    hideResult();
    stopCamera();
  }, "image/jpeg", 0.92);
});

function stopCamera() {
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach((track) => track.stop());
    state.cameraStream = null;
  }
  cameraVideo.hidden = true;
  captureBtn.hidden = true;
  cameraBtn.hidden = false;
}

// ─── Predict button ─────────────────────────────────────────────────────────
predictBtn.addEventListener("click", async () => {
  if (!state.file) return;

  hideError();
  hideResult();
  const predictionVersion = state.predictionVersion;
  loadingPanel.hidden = false;
  predictBtn.disabled = true;

  const formData = new FormData();
  formData.append("animal", state.animal);
  formData.append("image", state.file);

  try {
    const res = await fetch("/predict", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (predictionVersion !== state.predictionVersion) return;

    loadingPanel.hidden = true;
    predictBtn.disabled = false;

    if (!res.ok) {
      showError(data.error || translations[state.lang].serverError);
      return;
    }

    state.lastData = data;
    showResult(data);
  } catch (err) {
    if (predictionVersion !== state.predictionVersion) return;
    loadingPanel.hidden = true;
    predictBtn.disabled = false;
    showError(translations[state.lang].serverError);
  }
});

// ─── Result rendering ───────────────────────────────────────────────────────
function showResult(data) {
  const lang = state.lang;
  const top = data.top_prediction;
  const topDisplay = getDiseaseDisplay(top.label, lang);

  resultLabel.textContent = topDisplay.name;
  resultConfidence.textContent = `${(top.confidence * 100).toFixed(1)}% ${translations[lang].confidence}`;

  resultBars.innerHTML = "";
  data.all_predictions.forEach((pred, i) => {
    const display = getDiseaseDisplay(pred.label, lang);
    const row = document.createElement("div");
    row.className = "bar-row";

    const name = document.createElement("span");
    name.className = "bar-name";
    name.textContent = display.name;

    const track = document.createElement("div");
    track.className = "bar-track";

    const fill = document.createElement("div");
    fill.className = "bar-fill" + (i === 0 ? " top" : "");
    fill.style.width = "0%";

    const pct = document.createElement("span");
    pct.className = "bar-pct";
    pct.textContent = `${(pred.confidence * 100).toFixed(1)}%`;

    track.appendChild(fill);
    row.appendChild(name);
    row.appendChild(track);
    row.appendChild(pct);
    resultBars.appendChild(row);

    requestAnimationFrame(() => {
      fill.style.width = `${pred.confidence * 100}%`;
    });
  });

  precautionsTitle.textContent = translations[lang].precautionsTitle;
  precautionsList.innerHTML = "";
  topDisplay.precautions.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = p;
    precautionsList.appendChild(li);
  });

  resultPanel.hidden = false;
}

function hideResult() {
  // Invalidate pending responses whenever the screening context changes.
  state.predictionVersion += 1;
  state.lastData = null;
  resultPanel.hidden = true;
  resultLabel.textContent = "";
  resultConfidence.textContent = "";
  resultBars.innerHTML = "";
  precautionsTitle.textContent = "";
  precautionsList.innerHTML = "";
  loadingPanel.hidden = true;
  predictBtn.disabled = !state.file;
}

function showError(msg) {
  errorPanel.textContent = msg;
  errorPanel.hidden = false;
}

function hideError() {
  errorPanel.hidden = true;
}

// ─── Init ────────────────────────────────────────────────────────────────────
applyTranslations();

langBtns.forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.lang === state.lang)));
window.addEventListener("pagehide", stopCamera);
