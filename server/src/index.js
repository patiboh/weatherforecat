// import { createServer } from 'http';
import { ApolloServer } from 'apollo-server';
import typeDefs from './schema'
import app from './app';

// const port = process.env.PORT || 3000;

// createServer((request, response) => response.end(app()))
//   .listen(port, () => process.stdout.write(`Running on :${port}\n`));

const server = new ApolloServer({ typeDefs })

if (module.hot) {
  module.hot.accept('./app');
}