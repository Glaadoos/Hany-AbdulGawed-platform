const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  payingSystem: {
    type: String,
    required: true,
  },
  availableCodes: {
    type: Array,
  },
});

module.exports = mongoose.model("testchannelOne", accountSchema);
