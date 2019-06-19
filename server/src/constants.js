module.exports.WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

module.exports.REST_REST_DATA_SAMPLE = {
  coord: { lon: 2.35, lat: 48.86 },
  weather: [{
    id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d',
  }],
  base: 'stations',
  main: {
    temp: 292.07, pressure: 1021, humidity: 59, temp_min: 290.93, temp_max: 293.15,
  },
  visibility: 10000,
  wind: { speed: 3.1, deg: 210 },
  clouds: { all: 90 },
  dt: 1560681156,
  sys: {
    type: 1, id: 6540, message: 0.0066, country: 'FR', sunrise: 1560656790, sunset: 1560714961,
  },
  timezone: 7200,
  id: 2988507,
  name: 'Paris',
  cod: 200,
};


// module.exports.CONDITIONS = {
//   "Clear": typeDefs.CONDITIONS.CLEAR,
//   "Clouds": typeDefs.CONDITIONS.CLOUDS,
//   "Rain": typeDefs.CONDITIONS.RAIN,
//   "Snow": typeDefs.CONDITIONS.SNOW
// }
