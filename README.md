# RecognizeMe 🎓
> Static landing page for RecognizeMe — an AI-Powered Smart Attendance System built with facial recognition and voice biometrics.

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Flask](https://img.shields.io/badge/Flask-3.x-black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)

---

## 🚀 Live
- 🌐 **Landing Page:** [recognizeme.onrender.com](https://recognizeme.onrender.com)
- 🤖 **Main AI App:** [recognizeme.streamlit.app](https://recognizeme.streamlit.app)

> This repo is the **demo/landing page** only. The actual AI attendance system runs on Streamlit.

---

## 📌 What is RecognizeMe?
RecognizeMe is an AI-powered attendance system that uses **facial recognition** and **voice biometrics** to mark student attendance automatically — no manual entry, no roll calls.

This landing page showcases:
- 📸 AI Face Recognition feature
- 🎙️ Voice ID feature
- 👨‍🏫 Teacher's Journey walkthrough
- 👨‍🎓 Student's Journey walkthrough
- 💰 Pricing plans
- 👨‍💻 About the developer

---

## 🛠️ Landing Page Tech Stack
| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Bootstrap 5 |
| Backend | Python, Flask |
| Animations | AOS.js |
| Deployment | Vercel |

---

## 📁 Project Structure
```
recognizeme/
├── app.py
├── requirements.txt
├── static/
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
└── templates/
    ├── layout.html
    ├── index.html
    ├── about.html
    ├── features.html
    ├── pricing.html
    └── components/
        ├── navbar.html
        ├── footer.html
        ├── hero.html
        ├── innovative.html
        ├── advance_tech.html
        ├── teacher_journey.html
        ├── student_journey.html
        └── upgrade.html
```

---

## ⚙️ Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/recognizeme.git
cd recognizeme

# Create virtual environment
python -m venv .venv
.venv\Scripts\activate     # Windows
source .venv/bin/activate  # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Run the app
python app.py
```

Visit `http://localhost:5000`

---

## 👨‍💻 Built By
**Madhav Singh Rana**
- 🤖 AI & ML
- ⚡ Full Stack

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
