require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();
app.use(express.json());

// Validation + unique email -postman
function formatMongooseError(err) {
  // Unique index (duplicate key) -> code 11000
  if (err && err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || "email";
    return {
      message: "Validation failed",
      errors: {
        [field]: `${field} must be unique`,
      },
    };
  }

  // Mongoose ValidationError (regex/min/max/required)
  if (err && err.name === "ValidationError") {
    const errors = {};
    for (const key of Object.keys(err.errors)) {
      errors[key] = err.errors[key].message;
    }
    return { message: "Validation failed", errors };
  }

  return {
    message: "Server error",
    errors: { general: err.message || "Unknown error" },
  };
}

// GET http://localhost:8081/users?limit=10&sortBy=username
app.get("/users", async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit || "50", 10), 200);
    const sortBy = req.query.sortBy || "username";

    const users = await User.find()
      .sort({ [sortBy]: 1 })
      .limit(limit);

    return res.status(200).json({
      message: "Users fetched from DB",
      count: users.length,
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
      errors: { general: err.message || "Unknown error" },
    });
  }
});

// POST http://localhost:8081/users
app.post("/users", async (req, res) => {
  try {
    const created = await User.create(req.body);
    return res.status(201).json({
      message: "User created",
      data: created,
    });
  } catch (err) {
    const payload = formatMongooseError(err);
    const status = payload.message === "Validation failed" ? 400 : 500;
    return res.status(status).json(payload);
  }
});

const PORT = process.env.PORT || 8081;

(async () => {
  await connectDB(process.env.MONGO_URI);

  // Unique email index
  await User.syncIndexes();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})();
