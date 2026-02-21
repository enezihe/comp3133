import MovieModel from '../models/movie.js';

// Resolvers map GraphQL operations to database actions
const movieResolvers = {
    Query: {
        // Fetch all movies
        movies: async () => {
            try {
                return await MovieModel.find();
            } catch (error) {
                throw new Error('Failed to fetch movies');
            }
        },

        // Fetch a movie by ID
        movie: async (_, { id }) => {
            try {
                return await MovieModel.findById(id);
            } catch (error) {
                throw new Error('Movie not found');
            }
        }
    },

    Mutation: {
        // Create a new movie
        addMovie: async (_, { name, director_name, production_house, release_date, rating }) => {
            try {
                const newMovie = new MovieModel({
                    name,
                    director_name,
                    production_house,
                    release_date,
                    rating
                });
                return await newMovie.save();
            } catch (error) {
                throw new Error('Failed to add movie');
            }
        },

        // Update an existing movie
        updateMovie: async (_, { id, name, director_name, production_house, release_date, rating }) => {
            try {
                return await MovieModel.findByIdAndUpdate(
                    id,
                    { name, director_name, production_house, release_date, rating },
                    { new: true }
                );
            } catch (error) {
                throw new Error('Failed to update movie');
            }
        },

        // Delete a movie by ID
        deleteMovie: async (_, { id }) => {
            try {
                await MovieModel.findByIdAndDelete(id);
                return 'Movie deleted successfully';
            } catch (error) {
                throw new Error('Failed to delete movie');
            }
        }
    }
};

export default movieResolvers;