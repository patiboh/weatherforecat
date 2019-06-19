const { RESTDataSource } = require('apollo-datasource-rest');
const { WEATHER_API_URL } = require('../constants');

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = WEATHER_API_URL
  }

  async getWeatherByCity(city) {
    const query = `q=${city}&APPID=${process.env.WEATHER_API_KEY}`;
    // const query = `${WEATHER_API_URL}?q=${searchedForText}&APPID=${process.env.WEATHER_API_KEY}`;
    // fetch(query).then(res => res.json())
    //   .then(displayForecat)
    //   .catch(requestError);
      
    // const response = await this.get(query);
    const response = await this.get(query);
    return this.weatherReducer(response[0]);
  }
  
  weatherReducer(data) {
    return {
      location: {
        id: data.id || 0,
        city: data.name,
        country: data.sys.country
      },
      weather: {
        temperature: {
          unit: "",
          degrees: data.main.temp,
          min: data.main.temp_min,
          max: data.main.temp_max
        },
        conditions: data.weather.main,
      }
    }
  }
}


module.exports = WeatherAPI;