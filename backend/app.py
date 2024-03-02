from flightradar24 import FlightRadar24API
import pandas as pd
import csv

fr_api = FlightRadar24API()

'''
info needed: 
- latitude, longitude of planes (for putting on site)
- type of plane (for emission calculations)
- airline (for sorting purposes)
'''
flights = fr_api.get_flights()  # Returns a list of Flight objects

# flight = fr_api.get_flight("N421UW")
# print(flight)
# airport = "KJFK"
# distance = flight.get_distance_from(airport, details=True)
# print(distance)

# for flight in flights:
#     flight_details = fr_api.get_flight_details(flight)
#     flight.set_flight_details(flight_details)

#     print("Flying to", flight.destination_airport_name)


# getting lat and long
# for flight in flights:
#     latitude = flight.latitude
#     longitude = flight.longitude
#     print("Latitude: ", latitude, " Longitude: ", longitude)


# # getting airlines
# for flight in flights:
#     airline = flight.destination_airport_iata
#     print(airline)

#carbon calc
def carbon_calc(csv_file_path, substring):
    with open(csv_file_path, 'r') as file:
        reader = csv.reader(file)
        
        # Assuming the first row contains headers, adjust accordingly
        headers = next(reader)

        for row in reader:
            model_name = row[0]
            value = row[3]  # Assuming the 4th column contains the desired value

            if model_name in substring:
                return value
            
    return 0

# all
for flight in flights:
    flight_details = fr_api.get_flight_details(flight)
    flight.set_flight_details(flight_details)
    latitude = flight.latitude
    longitude = flight.longitude
    airline = flight.airline_iata
    airport = flight.destination_airport_iata
    model = flight.aircraft_model
    carbon = carbon_calc('Flights-Full.csv', model)
    if not (airline == "" or airport == "" or carbon == 0):
        print("Flight Model: ", model, " Latitude: ", latitude, " Longitude: ", longitude, " Airline: ", airline, " Airport: ", airport, " Carbon: ", carbon)