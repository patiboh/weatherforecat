const { RESTDataSource } = require('apollo-datasource-rest');

class WeatherAPI extends RESTDataSource {
  constructor({ url, apiKey }) {
    super();
    this.baseURL = url;
    this.apiKey = apiKey;
    this.units = 'metric';
  }

  async getWeatherByCity({ city }) {
    const response = await this.get('weather', {
      q: city,
      units: this.units,
      APPID: this.apiKey,
    });
    return this.weatherReducer(response);
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["weatherReducer"] }] */
  weatherReducer(data) {
    // console.log(data);
    return {
      location: {
        id: data.id || 0,
        city: data.name,
        country: data.sys.country,
      },
      weather: {
        temperature: {
          units: '',
          degrees: data.main.temp,
          min: data.main.temp_min,
          max: data.main.temp_max,
        },
        conditions: data.weather[0].main,
      },
    };
  }
}

module.exports = WeatherAPI;
