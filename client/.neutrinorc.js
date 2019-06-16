const airbnbBase = require("@neutrinojs/airbnb-base");
const web = require("@neutrinojs/web");
const jest = require("@neutrinojs/jest");
const copy = require("@neutrinojs/copy");

module.exports = {
  use: [
    airbnbBase(),
    web({
      html: {
        title: `🔮 ${process.env.APPLICATION_NAME}`
      },
      env: {
        WEATHER_API_KEY: process.env.WEATHER_API_KEY
      } 
    }),
    copy({
      patterns: [
        {
          context: "src/static",
          from: "**/*",
          to: "static"
        }
      ]
    }),
    jest()
  ]
};
