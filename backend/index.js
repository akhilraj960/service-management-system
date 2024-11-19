const connectToDatabase = require("./db/db");
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRouter = require("./routes/authRoute");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectToDatabase();

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, MongoDB with Express!");
});

// Example route
app.get("/api/data", async (req, res) => {
  try {
    // Example model usage
    res.status(200).json({ message: "Data fetched successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data." });
  }
});

app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/serviceman", require("./routes/serviceManRoute"));
app.use("/api/serviceview", require("./routes/serviceview"));
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
