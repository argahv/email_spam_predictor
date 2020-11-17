from flask import Flask, request, render_template
import json
from flask import json
from flask_cors import CORS
import pickle

filename = 'email-spam-predictor.pkl'

classifier = pickle.load(open(filename, 'rb'))
cv = pickle.load(open('cv-transform.pkl', 'rb'))

app = Flask(__name__, template_folder='template')
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/predict', methods=["POST", "GET"])
def predict():
    if request.method == "POST":
        req_data = request.get_json()
        email_data = req_data['email']
        vect = cv.transform([email_data]).toarray()
        print(vect)
        final_prediction = classifier.predict(vect)
        if final_prediction == 1:
            return {"prediction": "spam"}
        else:
            return {"prediction": "not spam"}


if __name__ == '__main__':
    app.run(debug=True)
