// import { createServer } from 'http';
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
// import app from './app';

// const port = process.env.PORT || 3000;

// createServer((request, response) => response.end(app()))
//   .listen(port, () => process.stdout.write(`Running on :${port}\n`));

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  // eslint-disable-next-line
  console.log(` 🚀 Server ready at ${url}`);
});

if (module.hot) {
  module.hot.accept('./app');
}
