# 🎓 Student Performance Prediction

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.0.2-green)](https://flask.palletsprojects.com/)
[![Render](https://img.shields.io/badge/Render-Deployment-success)](https://render.com/)

This project predicts student exam performance using machine learning models. It encompasses data ingestion, preprocessing, model training, evaluation, and deployment through a Flask API, with a simple HTML-based frontend for real-time user interaction.

## 🌟 Live Demo

Check out the live application here: [Student Performance Predictor](https://studentperformancepredictor-enro.onrender.com/)

## 📋 Project Overview

The aim of this project is to predict student exam scores based on various demographic and academic features. The project is structured into several key components:

- **Data Ingestion:** Collection and preparation of raw data for processing.
- **Data Preprocessing:** Feature scaling, categorical variable encoding, and handling of missing values to ensure data readiness.
- **Model Training:** Training and evaluation of multiple regression models to find the best predictor.
- **Deployment:** Deployment of the trained model via a Flask API, coupled with an HTML frontend for interactive predictions.

## 🚀 Features

- **Multiple Regression Models:** Comparison of various models including Linear Regression, Ridge, Lasso, Random Forest, XGBoost, and CatBoost.
- **Model Optimization:** Hyperparameter tuning using GridSearchCV to achieve optimal model performance, with an R² score of 88.06%.
- **Real-Time Prediction:** Deployed on Render for live predictions through a user-friendly web interface.
- **Scalable API:** Flask-based API for model serving, ensuring quick and reliable predictions.

## 🛠️ Tech Stack

- **Backend:** ![Python](https://img.shields.io/badge/Python-3.8%2B-blue) ![Flask](https://img.shields.io/badge/Flask-2.0.2-green) ![scikit-learn](https://img.shields.io/badge/scikit--learn-0.24.2-orange)
- **Frontend:** ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- **Deployment:** ![Render](https://img.shields.io/badge/Render-Deployment-success) 

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/noob-master-cell/student-performance-prediction.git
cd student-performance-prediction
```
### 2. Set Up the Python Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```
### 3. Run the Flask Application
```bash
python app.py
```
## 🚀 Usage
- Navigate to http://localhost:5000/ in your web browser.
- Enter the required student details into the provided form.
- Click "Predict your Math Score" to receive the predicted exam score.

