module.exports = {
  Query: {
    forecast: (_, { city }, { dataSources }) => dataSources.weatherApi.getWeatherByCity({ city }),
  },
  CONDITIONS: {
    CLEAR: 'Clear',
    CLOUDS: 'Clouds',
    RAIN: 'Rain',
    SNOW: 'Snow',
  },
};
