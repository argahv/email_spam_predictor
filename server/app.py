from flask import Flask, request
from flask_cors import CORS
import pickle

filename = 'email-spam-predictor.pkl'

classifier = pickle.load(open(filename, 'rb'))
cv = pickle.load(open('cv-transform.pkl', 'rb'))

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/predict', methods=["POST", "GET"])
def predict():
    if request.method == "POST":
        req_data = request.get_json()
        email_data = req_data['email']
        vect = cv.transform(email_data).toarray()
        final_prediction = classifier.predict(vect)
        return final_prediction


if __name__ == '__main__':
    app.run(debug=True)
