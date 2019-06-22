// import { createServer } from 'http';
const { ApolloServer } = require('apollo-server');
// const { createStore } = require('./utils');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const WeatherAPI = require('./datasources/weather');


// import app from './app';

// const port = process.env.PORT || 3000;

// createServer((request, response) => response.end(app()))
//   .listen(port, () => process.stdout.write(`Running on :${port}\n`));

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    weatherAPI: new WeatherAPI(),
  }),
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line
  console.log(`\n🚀  Server ready at ${url}`);
});

if (module.hot) {
  module.hot.accept('./app');
}
