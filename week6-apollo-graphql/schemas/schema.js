const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  input MovieInput {
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  input UpdateMovieInput {
    name: String
    director_name: String
    production_house: String
    release_date: String
    rating: Float
  }

  type Query {
    getAllMovies: [Movie!]!
    getMovieById(id: ID!): Movie
    getMoviesByDirector(director_name: String!): [Movie!]!
  }

  type Mutation {
    insertMovie(input: MovieInput!): Movie!
    updateMovie(id: ID!, input: UpdateMovieInput!): Movie!
    deleteMovieById(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
