from flightradar24 import FlightRadar24API
from retry import retry

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


# getting airlines
for flight in flights:
    airline = flight.destination_airport_iata
    print(airline)