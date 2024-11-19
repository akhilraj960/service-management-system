const ServiceView = require("../models/ServiceView");

// Create a new service
const createServiceView = async (req, res) => {
  const { name, category } = req.body;

  // Validate input
  if (!name || !category) {
    return res
      .status(400)
      .json({ message: "Missing required fields", success: false });
  }

  try {
    // Create a new service
    const newService = new ServiceView({
      name,
      category,
    });

    // Save the service to the database
    const savedData = await newService.save();

    return res.status(200).json({
      message: "New service added successfully",
      success: true,
      data: savedData,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({
      message: "Failed to add new service",
      success: false,
      error: error.message,
    });
  }
};

// Fetch all services
const serviceView = async (req, res) => {
  try {
    // Fetch all service data
    const serviceViewData = await ServiceView.find();

    return res.status(200).json({
      message: "Service data retrieved successfully",
      success: true,
      data: serviceViewData,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({
      message: "Failed to retrieve service data",
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createServiceView, serviceView };
