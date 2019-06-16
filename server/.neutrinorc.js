const airbnbBase = require("@neutrinojs/airbnb-base");
const jest = require("@neutrinojs/jest");

module.exports = {
  use: [
    airbnbBase(),
    jest()
  ]
};
