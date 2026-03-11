import MovieModel from '../models/movie.js';

// Resolvers define the technique for fetching the types defined in the schema.
const Movie = require("./Movie");

const resolvers = {
  Query: {
    // 2a. Get all movies
    getAllMovies: async () => {
      return Movie.find();
    },

    // 2b. Get movie by ID
    getMovieById: async (_, { id }) => {
      return Movie.findById(id);
    },

    // 2c. Get movies by Director name (static method)
    getMoviesByDirector: async (_, { director_name }) => {
      return Movie.findByDirectorName(director_name);
    },
  },

  Mutation: {
    // 3a. Insert new movie
    insertMovie: async (_, { input }) => {
      const created = await Movie.create(input);
      return created;
    },

    // 3b. Update movie
    updateMovie: async (_, { id, input }) => {
      const updated = await Movie.findByIdAndUpdate(id, input, {
        new: true,
        runValidators: true,
      });

      if (!updated) {
        throw new Error("Movie not found");
      }

      return updated;
    },

    // 3c. Delete movie By ID
    deleteMovieById: async (_, { id }) => {
      const deleted = await Movie.findByIdAndDelete(id);
      return !!deleted;
    },
  },
};

module.exports = resolvers;
