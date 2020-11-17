#!/usr/bin/env python
# coding: utf-8

# In[1]:


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


# In[2]:


dataset = pd.read_csv('SMS_train.csv', encoding='latin1')
dataset_test = pd.read_csv('SMS_test.csv', encoding='latin1')


# In[3]


# In[4]:


dataset["is_spam"] = dataset["Label"].map({"Non-Spam": 0, "Spam": 1})


# In[
# In[6]:


nltk.download("stopwords")

# In[7]:


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

# In[21]:


cv = CountVectorizer(max_features=1500)

X = cv.fit_transform(corpus).toarray()
# y = dataset.iloc[:, 3].values
y = dataset['is_spam'].values

# pickle file for Count Vectorizer
pickle.dump(cv, open('cv-transform.pkl', 'wb'))

# In[15]:


# Splitting the dataset into the Training set and Test set
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=0)


# ## Training the Naive Bayes model

# In[16]:


classifier = GaussianNB()
classifier.fit(X_train, y_train)

# Creating pickle file for the Naive Bayes Model
filename = 'email-spam-predictor.pkl'
pickle.dump(classifier, open(filename, 'wb'))


# In[17]:


y_pred = classifier.predict(X_test)


# ## Confusion Matrix

# In[18]:


cm = confusion_matrix(y_test, y_pred)


# In[19]:


accuracy = accuracy_score(y_test, y_pred)
accuracy*100


# In[ ]:
