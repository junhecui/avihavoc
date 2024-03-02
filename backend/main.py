from flask import Flask
from flightradar24 import FlightRadar24API

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)

