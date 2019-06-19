const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        city: String!
        country: String
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
        CLEAR
        CLOUDS
        RAIN
        SNOW
    }

    type Forecast {
        success: Boolean!
        location: Location
        weather: Weather
    }
`;

module.exports = typeDefs;
