import streamlit as st
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from sklearn.preprocessing import StandardScaler, LabelEncoder
import pandas as pd

model = load_model('patient_readmission_model.h5')

file_path = 'hospital_readmissions.csv'
data = pd.read_csv(file_path)

column_name_mapping = {
    "age": "Age in Years",
    "time_in_hospital": "Time in Hospital (Days)",
    "n_lab_procedures": "Number of Laboratory Procedures",
    "n_procedures": "Number of Procedures",
    "n_medications": "Number of Medications",
    "n_outpatient": "Number of Outpatient Visits",
    "n_inpatient": "Number of Inpatient Visits",
    "n_emergency": "Number of Emergency Visits",
    "medical_specialty": 'Medical Specialty',
    "diag_1": "Primary Diagnosis",
    "diag_2": "Secondary Diagnosis",
    "diag_3": "Tertiary Diagnosis",
    "numberdiagnoses": "Total Number of Diagnoses",
    "readmitted": "Readmitted"
}

categorical_columns = data.select_dtypes(include=['object']).columns
label_encoders = {}

for col in categorical_columns:
    le = LabelEncoder()
    data[col] = le.fit_transform(data[col])
    label_encoders[col] = le

X = data.drop('readmitted', axis=1)
scaler = StandardScaler()
scaler.fit(X)

def safe_label_encode(le, value):
    if value in le.classes_:
        return le.transform([value])[0]
    else:
        return le.transform([le.classes_[0]])[0]  

def predict_readmission(input_data):
    encoded_data = []
    for i, col in enumerate(X.columns):
        if col in label_encoders:
            encoded_data.append(safe_label_encode(label_encoders[col], input_data[i]))
        else:
            encoded_data.append(float(input_data[i]))  
    
    encoded_data = scaler.transform(np.array(encoded_data).reshape(1, -1))
    encoded_data = encoded_data.reshape(1, 1, encoded_data.shape[1])
    prediction = model.predict(encoded_data)
    return 'Yes' if prediction > 0.5 else 'No'

st.title("Hospital Readmission Prediction")
st.write("Enter patient details to predict readmission")

data_columns = list(X.columns)
user_input = []

for col in data_columns:
    label = column_name_mapping.get(col, col).replace('_', ' ')
    if col in categorical_columns:
        options = list(label_encoders[col].classes_)
        value = st.selectbox(f"{label}", options)
        user_input.append(value)
    else:
        value = st.number_input(f"{label}", min_value=0.0, step=1.0)
        user_input.append(value)

if st.button("Predict Readmission"):
    prediction = predict_readmission(user_input)
    st.write(f"Prediction: **{prediction}**")
