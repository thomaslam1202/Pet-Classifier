# 🐶🐱 Cat & Dog Breed Classifier (38 Classes)
End‑to‑End Machine Learning Project — From Dataset → Training → Deployment
🔗 **Live Demo (Frontend):** https://thomaslam1202.github.io/petvision/
🔗 Backend API (Hugging Face Space): https://huggingface.co/spaces/Thomaslam1202/petvision_backend
🔗 FastAPI Swagger Docs: https://thomaslam1202-petvision-backend.hf.space/docs
This project represents my first full end‑to‑end machine learning system, built completely from scratch to learn the entire ML lifecycle: data preparation, model training, optimization, backend deployment, and frontend integration.
I trained a fine‑grained 38‑class cat and dog breed classifier using the Oxford-IIIT Pet Dataset, implemented with PyTorch and deployed as a live web application using FastAPI, Docker, Hugging Face Spaces, and a custom HTML/CSS/JavaScript frontend hosted on GitHub Pages.

# 🚀 Project Highlights
🔧 Model & Training
- Architecture: EfficientNet‑B3 (pretrained on ImageNet)
- Framework: PyTorch
- Hardware: NVIDIA RTX 5060 Laptop GPU (CUDA)
- Optimization: AMP mixed precision, reducing training time by ~90%
- Training duration: 15 epochs
- Final performance:
- Train Loss: 0.3160
- Train Accuracy: 0.9450
- Validation Loss: 0.2683
- Validation Accuracy: 0.9284
EfficientNet‑B3 was chosen for its strong performance on fine‑grained image tasks, especially when dataset size is limited.

# 🧠 Dataset Challenges & Solutions
📉 Limited Data Per Class
Each breed had only 100–200 images, with varying quality.
To overcome this:
- Leveraged EfficientNet’s pretrained feature extractor
- Applied data augmentation
- Cleaned and filtered confusing or mislabeled images
⏱️ Training Time Explosion
Switching from ResNet‑18 (20 seconds/epoch) to EfficientNet‑B3 (30 minutes/epoch) dramatically increased training time.
Solution:
- Enabled AMP mixed precision, cutting epoch time by ~90%
- Allowed faster iteration and higher accuracy
🐱 Fine‑Grained Cat Breeds Are Hard
Some cat breeds look extremely similar, making classification difficult.
I manually inspected and filtered ambiguous images to help the model learn clearer patterns.

# 🌐 Deployment Architecture
Backend
- FastAPI inference server
- Packaged with Docker
- Hosted on Hugging Face Spaces
- Exposes a /predict endpoint for image classification
- API docs available at:
https://thomaslam1202-petvision-backend.hf.space/docs
Frontend
- Hosted on GitHub Pages
- Built with HTML, CSS, and JavaScript
- Sends images to the FastAPI backend for prediction
- Clean, simple UI for uploading pet photos
This setup allowed me to build a fully functional, zero‑cost, production‑style ML application.

# 🎯 What I Learned
This project taught me the full ML pipeline end to end:
- How to structure and clean image datasets
- How to train and optimize deep learning models
- How to use CUDA and mixed precision for performance
- How to containerize and deploy a backend API
- How to build a frontend from scratch
- How to connect everything into a working product
It was challenging, but incredibly rewarding — and it’s only the beginning of my machine learning journey.

