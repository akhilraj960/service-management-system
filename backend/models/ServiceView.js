const mongoose = require("mongoose");

const serviceView = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ServiceView", serviceView);
