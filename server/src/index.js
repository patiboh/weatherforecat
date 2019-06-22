// import { createServer } from 'http';
const { ApolloServer } = require('apollo-server');
// const { createStore } = require('./utils');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const WeatherAPI = require('./datasources/weather');
const { WEATHER_API_URL } = require('./constants');

// import app from './app';

// const port = process.env.PORT || 3000;

// createServer((request, response) => response.end(app()))
//   .listen(port, () => process.stdout.write(`Running on :${port}\n`));
const testWeatherApi =  new WeatherAPI({
  url: WEATHER_API_URL,
  apiKey: process.env.WEATHER_API_KEY // @TODO - fix env
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    weatherAPI: testWeatherApi,
  }),
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line
  // console.log(`testWeatherApi`);
  // console.log(testWeatherApi);
  console.log(`\n🚀  Server ready at ${url}`);
});

if (module.hot) {
  module.hot.accept('./app');
}
