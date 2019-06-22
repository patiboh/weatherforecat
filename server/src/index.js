const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const WeatherAPI = require('./datasources/weather');
const { WEATHER_API_URL } = require('./constants');

const weatherApi = new WeatherAPI({
  url: WEATHER_API_URL,
  apiKey: process.env.WEATHER_API_KEY,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    weatherApi,
  }),
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line
  console.log(`\n🚀  Server ready at ${url}`);
});

if (module.hot) {
  module.hot.accept('./');
}
