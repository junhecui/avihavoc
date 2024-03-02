from flask import Flask, render_template
from flightradar24 import FlightRadar24API

app = Flask(__name__)

def carbon_calc(km):
    pass

@app.route('/')
def display():
    print('hello world')
    pass
    #return render_template('nameof.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000,debug=True)


