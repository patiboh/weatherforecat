const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        location: Location
        weather: Weather
    }

    type Location{
        id: ID!
        city:  String
        country: String
    }

    type Weather {
        temperature: Temperature!
        conditions: CONDITIONS!
    }

    type Temperature {
        unit: String
        degrees: Int
        min: Int
        max: Int
    }

    enum CONDITIONS {
        SUNNY
        CLOUDY
        RAIN
        SNOW
    }

    type WeatherResponse {
        success: Boolean!
        location: Location
        weather: Weather
    }
`;

module.exports = typeDefs;
