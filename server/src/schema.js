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

    enum CONDITIONS {
        CLEAR
        CLOUDS
        RAIN
        SNOW
    }

    type Forecast {
        location(city: String): Location
        weather: Weather
    }
`;

module.exports = typeDefs;
