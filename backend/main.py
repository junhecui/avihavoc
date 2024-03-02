from flask import Flask
from flightradar24 import FlightRadar24API
from retry import retry

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)

# fr_api=FlightRadar24API()

# zones = fr_api.get_zones()

# flights = fr_api.get_flights()  # Returns a list of Flight objects

# # flight = fr_api.get_flight("N421UW")
# # print(flight)
# # airport = "KJFK"
# # distance = flight.get_distance_from(airport, details=True)
# # print(distance)

# for flight in flights:
#     flight_details = fr_api.get_flight_details(flight)
#     flight.set_flight_details(flight_details)

#     print("Flying to", flight.destination_airport_name)