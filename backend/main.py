from flask import Flask, render_template
<<<<<<< HEAD
from flightradar24 import FlightRadar24API
=======
from FlightRadar24 import FlightRadar24API
import csv
import requests
from firebase import firebase
>>>>>>> e06be281f532cc8499fa4552abbafe09bb85f12c

firebase = firebase.FirebaseApplication('https://flightdb-55075-default-rtdb.firebaseio.com/', None)
app = Flask(__name__)

def carbon_calc(km):
    pass

@app.route('/')
def display():
    result = firebase.get('/Flight',None)
    print(result)
    print('hello world')
    pass
    #return render_template('nameof.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000,debug=True)


<<<<<<< HEAD
=======

# Activate the virtualenv (OS X & Linux)
#$ source myproject/bin/activate

# Activate the virtualenv (Windows)
#$ myproject\Scripts\activate
>>>>>>> e06be281f532cc8499fa4552abbafe09bb85f12c
