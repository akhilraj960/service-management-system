const adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "missing input data" });
  }

  if (email === "admin@gmail.com" || password === "admin@admin") {
    return res
      .status(200)
      .json({ message: "Login Success", success: true, data: req.body.email });
  } else {
    return res.status(400).json({ message: "Login Failed", success: false });
  }
};

const registerUser = (req, res) => {
  const { email, password, phone1, phone2, location, age, gender } = req.body;
};

module.exports = { adminLogin };
