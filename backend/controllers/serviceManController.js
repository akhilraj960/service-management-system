const ServiceMan = require("../models/ServiceMan");

const createServiceMan = (req, res) => {
  const newServiceMan = new ServiceMan(req.body);
  newServiceMan.save();
  return res.status(200).json({ message: "Service Man Created" });
};

const getServiceMan = async (req, res) => {
  const serviceMan = await ServiceMan.find();
  return res.status(200).json(serviceMan);
};

module.exports = { createServiceMan, getServiceMan };
