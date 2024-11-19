// Mock database or store (for demo purposes only)
const users = [];

// Admin Login
const adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Missing input data", success: false });
  }

  // Admin credentials (ideally from environment variables)
  const adminEmail = process.env.ADMIN_EMAIL || "admin@gmail.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin@admin";

  // Check email and password
  if (email === adminEmail && password === adminPassword) {
    return res.status(200).json({
      message: "Login Successful",
      success: true,
      data: { email },
    });
  } else {
    return res.status(401).json({
      message: "Login Failed. Invalid email or password.",
      success: false,
    });
  }
};

// Register User
const registerUser = async (req, res) => {
  const { email, password, phone1, phone2, location, age, gender } = req.body;

  // Basic input validation
  if (!email || !password || !phone1 || !location || !age || !gender) {
    return res
      .status(400)
      .json({ message: "Missing required fields", success: false });
  }

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already registered", success: false });
  }

  try {
    // Hash the password

    // Create and store the user
    const newUser = {
      email,
      password,
      phone1,
      phone2,
      location,
      age,
      gender,
      createdAt: new Date(),
    };
    users.push(newUser);

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
      data: { email },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

module.exports = { adminLogin, registerUser };
