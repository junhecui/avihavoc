from flask import Flask, render_template
from FlightRadar24 import FlightRadar24API
import csv
import requests
# import firebase_admin
from firebase import firebase
# from google.cloud.firestore_v1.base_query import FieldFilter
# from firebase_admin import firestore
import re
from collections import Counter



firebase = firebase.FirebaseApplication('https://flightdb-55075-default-rtdb.firebaseio.com/', None)
# firebase_app = firebase_admin.initialize_app()

# db = firestore.client()
fr_api = FlightRadar24API()
flights = fr_api.get_flights()  # Returns a list of Flight objects

app = Flask(__name__)


#carbon calc
def carbon_calc(csv_file_path, substring, speed):
    with open(csv_file_path, 'r') as file:
        reader = csv.reader(file)
        
        # Assuming the first row contains headers, adjust accordingly
        headers = next(reader)

        for row in reader:
            model_name = row[0]
            value = row[3]  # Assuming the 4th column contains the desired value

            if model_name in substring:
                return float(value) * (speed / 3600)
            
    return 0

# all

def populate_data():
    
    result = str(firebase.get('/Flight',None))
    regex_result = re.findall(r"Flight ID': '[a-zA-Z0-9]+'", result)
    unique_IDs = set()
    for res in regex_result:
        unique_IDs.add(res.split("'")[2])

    print(unique_IDs)
    for flight in flights:
        flight_details = fr_api.get_flight_details(flight)
        flight.set_flight_details(flight_details)
        id = flight.aircraft_code
        latitude = flight.latitude
        longitude = flight.longitude
        airline = flight.airline_name
        airport = flight.destination_airport_iata
        model = flight.aircraft_model
        speed = flight.ground_speed
        carbon_emissions = carbon_calc('Flights-Full.csv', model, speed)
        # carbon_emissions is kg of carbon per second - should be incremented by variable every second and variable should be updated as much as rate allows - based on speed
        if not (airline == "" or airport == "" or carbon_emissions == 0):
            # query = db.where(filter=FieldFilter("Flight ID", "==", id))
            # query = db.where("Flight ID", "==", id)
            # print(query)
            if id not in unique_IDs:
                unique_IDs.add(id)
                # add
                new_data = {"Airline": airline,"Airport": airport,"Carbon": carbon_emissions, "Flight ID": id, " Flight Model": model, " Latitude":latitude, " Longitude": longitude}
                firebase.post('/Flight',new_data)
                print("Flight ID: ", id, " Flight Model: ", model, " Latitude: ", latitude, " Longitude: ", longitude, " Airline: ", airline, " Airport: ", airport, " Carbon: ", carbon_emissions, speed)
            else:
                print("did not flight with ID " + id)


@app.route('/')
def display():

    #key per dict in list --> key airline
    result = str(firebase.get('/Flight',None))
    print(result)
    regex_result = [re.findall(r"Airline': '[a-zA-Z0-9]+'", result), re.findall(r"Carbon': '([0-9.]+)'", result)]
    print(regex_result)
    airline_count = Counter(regex_result)
    print(airline_count)

    
    pass
    #return render_template('nameof.html')
    

if __name__ == "__main__":

    app.run(host='0.0.0.0', port=5000,debug=True)



# Activate the virtualenv (OS X & Linux)
#$ source myproject/bin/activate

# Activate the virtualenv (Windows)
#$ myproject\Scripts\activate
