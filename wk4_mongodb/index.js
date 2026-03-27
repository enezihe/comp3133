const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Restaurant = require('./models/Restaurant');

const app = express();
app.use(express.json()); // Parse incoming requests as JSON

// MongoDB Atlas connection (read from .env)
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log('MongoDB connection successful');
}).catch((err) => {
  console.log('MongoDB connection failed');
  console.log(err);
});

// 4) Get all restaurant details
// If sortBy is not provided, return all columns
// http://localhost:3000/restaurants
//
// 6) If sortBy=ASC or sortBy=DESC, return selected columns and sort by restaurant_id
// http://localhost:3000/restaurants?sortBy=ASC
// http://localhost:3000/restaurants?sortBy=DESC
app.get('/restaurants', async (req, res) => {
  try {
    const { sortBy } = req.query;

    // Return all columns (no projection)
    if (!sortBy) {
      const restaurants = await Restaurant.find({});
      return res.json(restaurants);
    }

    // Normalize sortBy and default to ASC if invalid
    const sortVal = String(sortBy).toUpperCase();
    const sortDirection = sortVal === 'DESC' ? -1 : 1;

    // Return only the required fields for requirement #6
    const data = await Restaurant.find(
      {},
      {
        _id: 1,
        cuisine: 1,
        name: 1,
        borough: 1,
        restaurant_id: 1
      }
    ).sort({ restaurant_id: sortDirection });

    // Map database field names to lab-required field names
    const result = data.map(r => ({
      id: r._id,
      cuisines: r.cuisine,
      name: r.name,
      city: r.borough,
      restaurant_id: r.restaurant_id
    }));

    return res.json(result);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// 5) Get all restaurants by cuisine (all columns)
// http://localhost:3000/restaurants/cuisine/Japanese
// http://localhost:3000/restaurants/cuisine/Bakery
// http://localhost:3000/restaurants/cuisine/Italian
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  try {
    const cuisine = req.params.cuisine;
    const restaurants = await Restaurant.find({ cuisine: cuisine });
    return res.json(restaurants);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// 7) Get restaurants where cuisine is Delicatessen and city is not Brooklyn
// The selected columns must include cuisines, name and city, but exclude id
// The sorting order must be Ascending Order on the name
// http://localhost:3000/restaurants/Delicatessen
//
// Note: This route is kept after /restaurants/cuisine/:cuisine to avoid conflicts.
app.get('/restaurants/:cuisine', async (req, res) => {
  try {
    const cuisine = req.params.cuisine;

    const data = await Restaurant.find(
      {
        cuisine: cuisine,
        borough: { $ne: 'Brooklyn' }
      },
      {
        _id: 0,
        cuisine: 1,
        name: 1,
        borough: 1
      }
    ).sort({ name: 1 });

    const result = data.map(r => ({
      cuisines: r.cuisine,
      name: r.name,
      city: r.borough
    }));

    return res.json(result);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Start the server (port from .env or default 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
