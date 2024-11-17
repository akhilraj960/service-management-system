const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const MONGODB_URI = "mongodb://localhost:27017/mydatabase";

  try {
    await mongoose.connect(MONGODB_URI); // No deprecated options
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectToDatabase;
