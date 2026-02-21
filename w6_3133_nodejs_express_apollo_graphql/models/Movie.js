import mongoose from 'mongoose';

// Define the Movie schema with validation rules
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  director_name: {
    type: String,
    required: [true, "Director name is required"]
  },
  production_house: {
    type: String,
    required: [true, "Production house is required"]
  },
  release_date: {
    type: String,
    required: [true, "Release date is required"],
    validate: {
      validator: function (v) {
        // Ensure date format is YYYY-MM-DD
        return /^\d{4}-\d{2}-\d{2}$/.test(v);
      },
      message: props => `${props.value} is not a valid date format! Use YYYY-MM-DD.`
    }
  },
  rating: {
    type: Number,
    min: [0.0, "Rating must be at least 0.0"],
    max: [10.0, "Rating must be at most 10.0"],
    required: [true, "Rating is required"]
  }
});

// Virtual property to calculate movie age dynamically
movieSchema.virtual('movie_age').get(function () {
  const releaseYear = parseInt(this.release_date.split('-')[0]);
  const currentYear = new Date().getFullYear();
  return currentYear - releaseYear;
});

// Instance method to return a formatted movie summary
movieSchema.methods.getMovieSummary = function () {
  return `${this.name} directed by ${this.director_name} was released in ${this.release_date} and has a rating of ${this.rating}.`;
};

// Static method to find movies by director name (case-insensitive)
movieSchema.statics.findByDirectorName = function (directorName) {
  return this.find({
    director_name: { $regex: directorName, $options: 'i' }
  });
};

// Pre-save hook to log when a movie document is saved
movieSchema.pre('save', function () {
  console.log(`Saving movie: ${this.name}`);
});

// Create and export the Movie model
const Movie = mongoose.model('Movie', movieSchema);
export default Movie;