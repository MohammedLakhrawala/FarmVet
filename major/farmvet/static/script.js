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
    confidence: "model score",
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
  confidence: "मॉडल स्कोर",
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

Object.assign(translations.en, {
  historyLink: "History", historyEyebrow: "YOUR SCREENINGS", historyTitle: "Screening history",
  historyStorageNote: "Records stay in this browser on this device. Photos are not saved.",
  historyEmpty: "Completed screenings will appear here.", clearHistory: "Clear history",
  confirmClearHistory: "Clear all saved screenings from this browser?", historyStorageError: "History could not be saved in this browser.",
  viewReport: "View report", openReport: "Open report", deleteRecord: "Delete",
  scoreNote: "Scores are model outputs and have not been calibrated as diagnostic confidence.",
  visualHighlight: "Visual model highlight",
  gradcamNote: "Highlighted areas show image features that influenced the model score. This is an exploratory visualization, not a diagnosis.",
  photoRequirements: "Use JPEG, PNG, or WebP under 10 MB. Minimum image size: 224 × 224 pixels.",
  printReport: "Print / Save as PDF", close: "Close", reportTitle: "FarmVet screening report",
  reportContext: "Use this summary when discussing the animal's care with a veterinarian.",
  animal: "Animal", recorded: "Recorded", modelScores: "Model scores", precautionTitle: "Suggested next steps",
  unknownPrediction: "Unknown result",
  modelTransparency: "About the models and evaluation",
  modelArchitecture: "FarmVet uses separate MobileNetV2-based image classifiers for cattle and goats. Images are resized to 224 × 224 before inference.",
  evaluationPending: "An independent labeled test set is not included in this project yet, so accuracy and per-class metrics are not reported.",
  modelCardRepo: "The repository includes MODEL_CARD.md and evaluate_models.py for documenting the models and evaluating them on a held-out test set.",
  supportedImageTypes: "Choose a JPEG, PNG, or WebP image.",
  imageTooLarge: "Choose an image smaller than 10 MB.",
  invalidImage: "This file could not be read as an image.",
  imageTooSmall: "Choose an image that is at least 224 by 224 pixels.",
});

Object.assign(translations.hi, {
  historyLink: "जाँच इतिहास", historyEyebrow: "आपकी जाँचें", historyTitle: "जाँच इतिहास",
  historyStorageNote: "रिकॉर्ड केवल इसी डिवाइस और ब्राउज़र में सहेजे जाते हैं। फ़ोटो नहीं सहेजी जातीं।",
  historyEmpty: "पूरी की गई जाँचें यहाँ दिखाई देंगी।", clearHistory: "इतिहास मिटाएँ",
  confirmClearHistory: "इस ब्राउज़र से सभी सहेजी गई जाँचें मिटाएँ?",
  historyStorageError: "इस ब्राउज़र में इतिहास सहेजा नहीं जा सका।",
  viewReport: "रिपोर्ट देखें", openReport: "रिपोर्ट खोलें", deleteRecord: "हटाएँ",
  scoreNote: "स्कोर मॉडल के आउटपुट हैं; इन्हें रोग-निदान की विश्वसनीयता के रूप में कैलिब्रेट नहीं किया गया है।",
  visualHighlight: "मॉडल का दृश्य संकेत",
  gradcamNote: "हाइलाइट किए गए क्षेत्र वे छवि विशेषताएँ दिखाते हैं जिन्होंने मॉडल स्कोर को प्रभावित किया। यह केवल खोजपरक दृश्य है, निदान नहीं।",
  photoRequirements: "JPEG, PNG या WebP फ़ोटो चुनें (10 MB से कम; कम से कम 224 × 224 पिक्सेल)।",
  printReport: "प्रिंट / PDF के रूप में सहेजें", close: "बंद करें", reportTitle: "FarmVet जाँच रिपोर्ट",
  reportContext: "पशु की देखभाल के बारे में पशु चिकित्सक से बात करते समय इस सारांश का उपयोग करें।",
  animal: "पशु", recorded: "समय", modelScores: "मॉडल स्कोर", precautionTitle: "सुझाए गए अगले कदम",
  supportedImageTypes: "JPEG, PNG या WebP फ़ोटो चुनें।",
  imageTooLarge: "10 MB से छोटी फ़ोटो चुनें।",
  invalidImage: "यह फ़ाइल छवि के रूप में पढ़ी नहीं जा सकी।",
  imageTooSmall: "कम से कम 224 × 224 पिक्सेल की फ़ोटो चुनें।",
  modelTransparency: "मॉडल और मूल्यांकन के बारे में",
  modelArchitecture: "FarmVet गाय और बकरी के लिए अलग-अलग MobileNetV2-आधारित छवि क्लासिफ़ायर इस्तेमाल करता है। अनुमान से पहले छवि 224 × 224 पिक्सेल की जाती है।",
  evaluationPending: "इस परियोजना में अभी स्वतंत्र लेबल वाला टेस्ट सेट शामिल नहीं है, इसलिए सटीकता और प्रति-वर्ग मेट्रिक्स रिपोर्ट नहीं किए गए हैं।",
  modelCardRepo: "रिपॉज़िटरी में मॉडल दस्तावेज़ और अलग रखे गए टेस्ट सेट पर मूल्यांकन के लिए MODEL_CARD.md तथा evaluate_models.py शामिल हैं।",
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
  previewUrl: null,
  cameraStream: null,
  lastData: null,
  predictionVersion: 0,
  currentRecordId: null,
};

// Allow supported browsers to offer native PWA installation.
const installBtn = document.getElementById("installBtn");
const iosInstallHelp = document.getElementById("iosInstallHelp");
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const isInstalled = window.matchMedia("(display-mode: standalone)").matches ||
  navigator.standalone === true;
let installPrompt = null;
if (isIOS && !isInstalled) {
  installBtn.textContent = "Add to Home Screen";
  installBtn.hidden = false;
}
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installBtn.hidden = false;
});
installBtn.addEventListener("click", async () => {
  if (!installPrompt) {
    if (isIOS) iosInstallHelp.hidden = !iosInstallHelp.hidden;
    return;
  }
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
const gradcamBox = document.getElementById("gradcamBox");
const gradcamImage = document.getElementById("gradcamImage");
const historyList = document.getElementById("historyList");
const historyEmpty = document.getElementById("historyEmpty");
const historyNote = document.querySelector(".history-note");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const reportDialog = document.getElementById("reportDialog");
const reportSheet = document.getElementById("reportSheet");
const currentReportBtn = document.getElementById("currentReportBtn");
const closeReportBtn = document.getElementById("closeReportBtn");
const printReportBtn = document.getElementById("printReportBtn");
const toggleBtns = document.querySelectorAll(".toggle-btn");
const langBtns = document.querySelectorAll(".lang-btn");

const HISTORY_KEY = "farmvet.screenings.v1";

function translate(key) {
  return translations[state.lang][key] || translations.en[key] || key;
}

function readHistory() {
  try {
    const records = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    return Array.isArray(records) ? records.filter((record) => record && record.id && record.top_prediction) : [];
  } catch (error) {
    return [];
  }
}

let historyRecords = readHistory();

function persistHistory() {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(historyRecords));
    historyNote.textContent = translate("historyStorageNote");
    return true;
  } catch (error) {
    historyNote.textContent = translate("historyStorageError");
    return false;
  }
}

function storeScreening(data) {
  const record = {
    id: (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    animal: data.animal,
    top_prediction: data.top_prediction,
    all_predictions: data.all_predictions,
  };
  historyRecords.unshift(record);
  historyRecords = historyRecords.slice(0, 50);
  persistHistory();
  renderHistory();
  return record;
}

function makeTextElement(tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

function formatRecordDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString(state.lang === "hi" ? "hi-IN" : "en-IN");
}

function renderHistory() {
  historyList.replaceChildren();
  historyEmpty.hidden = historyRecords.length > 0;
  clearHistoryBtn.hidden = historyRecords.length === 0;

  historyRecords.forEach((record) => {
    const card = document.createElement("article");
    card.className = "history-card";
    const summary = document.createElement("div");
    summary.className = "history-summary";
    const animal = record.animal === "goat" ? translate("goat") : translate("cattle");
    const result = getDiseaseDisplay(record.top_prediction.label, state.lang).name;
    summary.append(
      makeTextElement("strong", `${animal} · ${result}`, "history-result"),
      makeTextElement("span", formatRecordDate(record.createdAt), "history-date"),
      makeTextElement("span", `${(record.top_prediction.confidence * 100).toFixed(1)}% ${translate("confidence")}`, "history-score")
    );
    const actions = document.createElement("div");
    actions.className = "history-actions";
    const openButton = makeTextElement("button", translate("openReport"), "secondary-btn");
    openButton.type = "button";
    openButton.addEventListener("click", () => openReport(record));
    const deleteButton = makeTextElement("button", translate("deleteRecord"), "text-btn");
    deleteButton.type = "button";
    deleteButton.addEventListener("click", () => {
      historyRecords = historyRecords.filter((item) => item.id !== record.id);
      persistHistory();
      renderHistory();
      if (state.currentRecordId === record.id) state.currentRecordId = null;
    });
    actions.append(openButton, deleteButton);
    card.append(summary, actions);
    historyList.append(card);
  });
}

function openReport(record) {
  reportSheet.replaceChildren();
  reportSheet.append(
    makeTextElement("p", "FarmVet · Livestock Health Screening", "report-brand"),
    makeTextElement("h1", translate("reportTitle"), "report-title"),
    makeTextElement("p", translate("reportContext"), "report-context")
  );

  const details = document.createElement("dl");
  details.className = "report-details";
  const detailPairs = [
    [translate("animal"), record.animal === "goat" ? translate("goat") : translate("cattle")],
    [translate("recorded"), formatRecordDate(record.createdAt)],
  ];
  detailPairs.forEach(([label, value]) => {
    details.append(makeTextElement("dt", label), makeTextElement("dd", value));
  });
  reportSheet.append(details, makeTextElement("h2", translate("modelScores"), "report-section-title"));

  const table = document.createElement("table");
  table.className = "report-table";
  const body = document.createElement("tbody");
  (record.all_predictions || [record.top_prediction]).forEach((prediction) => {
    const row = document.createElement("tr");
    row.append(
      makeTextElement("th", getDiseaseDisplay(prediction.label, state.lang).name),
      makeTextElement("td", `${(prediction.confidence * 100).toFixed(1)}%`)
    );
    body.append(row);
  });
  table.append(body);
  reportSheet.append(table);

  const topInfo = getDiseaseDisplay(record.top_prediction.label, state.lang);
  reportSheet.append(makeTextElement("h2", translate("precautionTitle"), "report-section-title"));
  const precautions = document.createElement("ul");
  topInfo.precautions.forEach((item) => precautions.append(makeTextElement("li", item)));
  reportSheet.append(precautions);
  reportSheet.append(makeTextElement("p", translate("scoreNote"), "report-footnote"));
  if (!reportDialog.open) reportDialog.showModal();
}

// ─── i18n rendering ──────────────────────────────────────────────────────────
function applyTranslations() {
  const t = translations[state.lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t[key] || translations.en[key];
    if (value) el.textContent = value;
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
    renderHistory();
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
  // Let the user select the same file again after replacing or correcting it.
  e.target.value = "";
});

async function handleFile(file) {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    showError(translate("supportedImageTypes"));
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showError(translate("imageTooLarge"));
    return;
  }

  const dimensions = await new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve({ width: image.naturalWidth, height: image.naturalHeight });
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("invalid-image"));
    };
    image.src = objectUrl;
  }).catch(() => null);
  if (!dimensions) {
    showError(translate("invalidImage"));
    return;
  }
  if (dimensions.width < 224 || dimensions.height < 224) {
    showError(translate("imageTooSmall"));
    return;
  }

  stopCamera();
  state.file = file;
  hideError();
  hideResult();

  if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
  state.previewUrl = URL.createObjectURL(file);
  previewImg.src = state.previewUrl;
  previewImg.hidden = false;
  uploadPrompt.hidden = true;

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
    if (!blob || blob.size > 10 * 1024 * 1024) {
      showError(translate("imageTooLarge"));
      return;
    }
    const file = new File([blob], "camera_capture.jpg", { type: "image/jpeg" });
    state.file = file;
    if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
    state.previewUrl = null;
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
    const data = await res.json().catch(() => ({}));
    if (predictionVersion !== state.predictionVersion) return;

    loadingPanel.hidden = true;
    predictBtn.disabled = false;

    if (!res.ok) {
      showError(data.error || translations[state.lang].serverError);
      return;
    }

    state.lastData = data;
    const record = storeScreening(data);
    state.currentRecordId = record.id;
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
  resultConfidence.textContent = `${(top.confidence * 100).toFixed(1)}% ${translate("confidence")}`;
  gradcamBox.hidden = !data.gradcam_overlay;
  gradcamImage.hidden = !data.gradcam_overlay;
  if (data.gradcam_overlay) gradcamImage.src = data.gradcam_overlay;
  else gradcamImage.removeAttribute("src");

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
  gradcamBox.hidden = true;
  gradcamImage.hidden = true;
  gradcamImage.removeAttribute("src");
  state.currentRecordId = null;
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
currentReportBtn.addEventListener("click", () => {
  const record = historyRecords.find((item) => item.id === state.currentRecordId);
  if (record) openReport(record);
});

clearHistoryBtn.addEventListener("click", () => {
  if (!window.confirm(translate("confirmClearHistory"))) return;
  historyRecords = [];
  state.currentRecordId = null;
  persistHistory();
  renderHistory();
});

closeReportBtn.addEventListener("click", () => reportDialog.close());
printReportBtn.addEventListener("click", () => window.print());

applyTranslations();
renderHistory();

langBtns.forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.lang === state.lang)));
window.addEventListener("pagehide", stopCamera);
