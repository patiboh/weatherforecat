require('dotenv').config();
const airbnbBase = require('@neutrinojs/airbnb-base');
const jest = require('@neutrinojs/jest');
const node = require('@neutrinojs/node');

module.exports = {
  use: [
    airbnbBase(),
    node(),
    jest()
  ]
};
