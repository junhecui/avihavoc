from flightradar24 import FlightRadar24API
import csv

fr_api = FlightRadar24API()

'''
info needed: 
- latitude, longitude of planes (for putting on site)
- type of plane (for emission calculations)
- airline (for sorting purposes)
'''
flights = fr_api.get_flights()  # Returns a list of Flight objects

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
        print("Flight ID: ", id, " Flight Model: ", model, " Latitude: ", latitude, " Longitude: ", longitude, " Airline: ", airline, " Airport: ", airport, " Carbon: ", carbon_emissions, speed)

# final idea: click flight on globe and get popup with info from it?