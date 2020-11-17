
from sklearn.metrics import accuracy_score
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import nltk
import re
from nltk.corpus import stopwords
from sklearn.metrics import confusion_matrix
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from nltk.stem.porter import PorterStemmer
import pickle

dataset = pd.read_csv('SMS_train.csv', encoding='latin1')
dataset_test = pd.read_csv('SMS_test.csv', encoding='latin1')

dataset["is_spam"] = dataset["Label"].map({"Non-Spam": 0, "Spam": 1})

nltk.download("stopwords")

corpus = []
for i in range(0, 957):
    message = re.sub('[^a-zA-Z]', ' ', dataset['Message_body'][i])
    message = message.lower()
    message = message.split()
    ps = PorterStemmer()
    message = [ps.stem(word) for word in message if not word in set(
        stopwords.words('english'))]
    message = ' '.join(message)
    corpus.append(message)

# ## Creating the bag of words

cv = CountVectorizer(max_features=1500)

X = cv.fit_transform(corpus).toarray()
# y = dataset.iloc[:, 3].values
y = dataset['is_spam'].values

# pickle file for Count Vectorizer
pickle.dump(cv, open('cv-transform.pkl', 'wb'))


# Splitting the dataset into the Training set and Test set
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=0)

# ## Training the Naive Bayes model

classifier = GaussianNB()
classifier.fit(X_train, y_train)

# Creating pickle file for the Naive Bayes Model
filename = 'email-spam-predictor.pkl'
pickle.dump(classifier, open(filename, 'wb'))

y_pred = classifier.predict(X_test)

# ## Confusion Matrix

cm = confusion_matrix(y_test, y_pred)

#  Accuracy

accuracy = accuracy_score(y_test, y_pred)
accuracy*100
