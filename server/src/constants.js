module.exports.WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/';

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

module.exports.REST_REST_DATA_SAMPLE2 = {
  message: 'accurate',
  cod: '200',
  count: 1,
  list: [{
    id: 2643743,
    name: 'London',
    coord: { lat: 51.5085, lon: -0.1258 },
    main: {
      temp: 280.15, pressure: 1012, humidity: 81, temp_min: 278.15, temp_max: 281.15,
    },
    dt: 1485791400,
    wind: { speed: 4.6, deg: 90 },
    sys: { country: 'GB' },
    rain: null,
    snow: null,
    clouds: { all: 90 },
    weather: [{ // The first weather condition in API respond is primary. (OWM doc)
      id: 701, main: 'Mist', description: 'mist', icon: '50d',
    }, {
      id: 300, main: 'Drizzle', description: 'light intensity drizzle', icon: '09d',
    }],
  }],
};
