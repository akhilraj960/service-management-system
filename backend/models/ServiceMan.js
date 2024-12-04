const mongoose = require("mongoose");

const serviceManSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model("serviceMan", serviceManSchema);
