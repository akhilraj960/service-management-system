const ServiceMan = require("../models/ServiceMan");

// Create a new ServiceMan
const createServiceMan = async (req, res) => {
  try {
    const newServiceMan = new ServiceMan(req.body);
    await newServiceMan.save();
    return res.status(201).json({ message: "ServiceMan created successfully" });
  } catch (error) {
    console.error("Error creating ServiceMan:", error);
    return res.status(500).json({ message: "Failed to create ServiceMan" });
  }
};

// Get all ServiceMen
const getServiceMan = async (req, res) => {
  try {
    const serviceMen = await ServiceMan.find();
    return res.status(200).json(serviceMen);
  } catch (error) {
    console.error("Error fetching ServiceMen:", error);
    return res.status(500).json({ message: "Failed to fetch ServiceMen" });
  }
};

// Delete a ServiceMan by ID
const deleteServiceMan = async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the serviceman by ID
    const deletedServiceMan = await ServiceMan.findByIdAndDelete(id);

    // If no serviceman is found, return a 404 response
    if (!deletedServiceMan) {
      return res.status(404).json({ message: "ServiceMan not found" });
    }

    // Return a success message if deletion is successful
    return res.status(200).json({ message: "ServiceMan deleted successfully" });
  } catch (error) {
    console.error("Error deleting ServiceMan:", error);
    return res.status(500).json({ message: "Failed to delete ServiceMan" });
  }
};

module.exports = { createServiceMan, getServiceMan, deleteServiceMan };
