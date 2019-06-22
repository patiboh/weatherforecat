const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    forecast(city: String): Forecast
  }

  type ForecastResponse {
    success: Boolean!
    forecast: Forecast
  }

  type Location{
    city(city: String):  String
    country: String
  }

  type Weather {
    temperature: Temperature!
    conditions: CONDITIONS!
  }

  type Temperature {
    units: String
    degrees: Float
    min: Float
    max: Float
  }

  # union PrimaryWeather = Atmosphere | Conditions

  # type Atmosphere {
  #   code: ATMOSPHERE!
  # }

  # type Conditions {
  #   code: CONDITIONS!
  # }

  # enum ATMOSPHERE {
  #   MIST
  #   SMOKE
  #   HAZE
  #   DUST
  #   FOG
  #   SAND
  #   ASH
  #   SQUALL
  #   TORNADO
  # }

  # enum CONDITIONS {
  #   THUNDERSTORM
  #   DRIZZLE
  #   RAIN
  #   SNOW
  #   CLOUDS
  #   CLEAR
  # }  

  enum CONDITIONS {
    THUNDERSTORM
    DRIZZLE
    RAIN
    SNOW
    CLOUDS
    CLEAR
    MIST
    SMOKE
    HAZE
    DUST
    FOG
    SAND
    ASH
    SQUALL
    TORNADO
  }

  type Forecast {
    location(city: String): Location
    weather: Weather
  }
`;

module.exports = typeDefs;
