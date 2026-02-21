import { gql } from 'graphql-tag';

// GraphQL schema defines the API contract (types + Query/Mutation operations)
const movieSchema = gql`
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

  type Query {
    movies: [Movie!]!
    movie(id: ID!): Movie
    moviesByDirector(director_name: String!): [Movie!]!
  }

  type Mutation {
    addMovie(
      name: String!
      director_name: String!
      production_house: String!
      release_date: String!
      rating: Float!
    ): Movie!

    addMovies(movies: [MovieInput!]!): [Movie!]!

    updateMovie(
      id: ID!
      name: String
      director_name: String
      production_house: String
      release_date: String
      rating: Float
    ): Movie

    deleteMovie(id: ID!): String!
  }
`;

export default movieSchema;