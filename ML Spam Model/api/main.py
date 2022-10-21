# Importing necessary libraries
import uvicorn
import pickle
import nltk
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import accuracy_score,confusion_matrix,precision_score
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from fastapi import FastAPI
from pydantic import BaseModel
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import string

# Initializing the fast API server
app = FastAPI()
mnb = MultinomialNB()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Importing Dataset
df=pd.read_csv('../model/spam.csv', encoding='latin-1')

# drop last 3 cols
df.drop(df.columns[[2,3,4]],axis=1,inplace=True)

# renaming the cols
df.rename(columns={'v1':'Target','v2':'Text'},inplace=True)
df['Target']=df['Target'].replace({'ham':0,'spam':1})

ps=PorterStemmer()
tfidf = TfidfVectorizer(max_features=3000)

nltk.download('punkt')
nltk.download('stopwords')

# Preprocessing the input
def transform_text(text):
    text=text.lower()
    text=nltk.word_tokenize(text)
    
    # Removing special characters
    y=[]
    for i in text:
        if(i.isalnum()):
            y.append(i)
        
    text=y[:]
    y.clear()
    
    #Removing stopwords like (is, am,are,on...) and punctuation like (!,?....)
    for i in text:
        if i not in stopwords.words('english') and i not in string.punctuation:
            y.append(i)
    
    text=y[:]
    y.clear()
    
    #Stemming like removing dancing, danced, dancer.....
    for i in text:
        y.append(ps.stem(i))
        
    return " ".join(y)

# Appending transformed text
df['Transformed_text'] = df['Text'].apply(transform_text)

# Loading up the trained model
vectorize = pickle.load(open('../model/vectorizer.pkl', 'rb'))

# Vectorizing the data
X = tfidf.fit_transform(df['Transformed_text']).toarray()
Y=df['Target'].values

print(X.shape)
# Splitting data into test and train
X_train,X_test,Y_train,Y_test=train_test_split(X,Y,test_size=0.2,random_state=2)

#Training the model
mnb.fit(X_train,Y_train)
y_pred1 = mnb.predict(X_test)
print(accuracy_score(Y_test,y_pred1))
print(confusion_matrix(Y_test,y_pred1))
print(precision_score(Y_test,y_pred1))

# Defining the model input types
class Email(BaseModel):
    msg: str

# Setting up the home route
@app.get("/")
def read_root():
    return {"data": "Welcome to spam classifier model"}

# Setting up the classification route
@app.post("/classification/")
async def get_classify(data: Email):
    preprocessedData=transform_text(data.msg)
    print(preprocessedData)
    vectorizedData = tfidf.fit_transform([preprocessedData]).toarray()
    # print(vectorizedData)
    print(vectorizedData.shape)
    prediction=await mnb.predict(vectorizedData)
    print(prediction)
    return {
        "data": 1
    }

# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')
