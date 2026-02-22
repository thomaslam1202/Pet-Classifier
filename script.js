const BACKEND_URL = "https://thomaslam1202-petvision-backend.hf.space";

const uploadArea = document.getElementById("uploadArea");
const uploadInput = document.getElementById("upload");
const uploadPlaceholder = document.getElementById("uploadPlaceholder");
const preview = document.getElementById("preview");
const predictBtn = document.getElementById("predictBtn");
const resultCard = document.getElementById("resultCard");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

let selectedFile = null;

// Click to upload
uploadArea.addEventListener("click", () => uploadInput.click());

// Drag and drop
uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadArea.classList.add("dragover");
});

uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("dragover");
});

uploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadArea.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
});

// File selected
uploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
});

function handleFile(file) {
    selectedFile = file;

    // Show image preview
    const reader = new FileReader();
    reader.onload = (e) => {
        preview.src = e.target.result;
        preview.hidden = false;
        uploadPlaceholder.hidden = true;
    };
    reader.readAsDataURL(file);

    // Enable button
    predictBtn.disabled = false;

    // Hide previous results
    resultCard.hidden = true;
    error.hidden = true;
}

// Predict
predictBtn.addEventListener("click", async () => {
    if (!selectedFile) return;

    // Show loading
    loading.hidden = false;
    resultCard.hidden = true;
    error.hidden = true;
    predictBtn.disabled = true;

    try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await fetch(`${BACKEND_URL}/predict`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) throw new Error("Server error");

        const data = await response.json();

        // Format class name
        const className = data.class.replace(/_/g, " ");
        const confidence = (data.confidence * 100).toFixed(1);

        // Display result
        document.getElementById("className").innerText = `🐾 ${className}`;
        document.getElementById("confidenceText").innerText = `${confidence}%`;

        // Animate bar
        const barFill = document.getElementById("barFill");
        barFill.style.width = "0%";
        setTimeout(() => {
            barFill.style.width = `${confidence}%`;
        }, 100);

        resultCard.hidden = false;

    } catch (err) {
        error.innerText = "⚠️ Could not reach the backend. The model may be waking up, please try again in 30 seconds.";
        error.hidden = false;
    } finally {
        loading.hidden = true;
        predictBtn.disabled = false;
    }
});
