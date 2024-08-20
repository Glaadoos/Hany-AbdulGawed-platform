const mongoose = require("mongoose");

const oldAccountSchema = new mongoose.Schema({
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
    type: String
  },
  availableCodes: {
    type: Array,
  },
});

module.exports = mongoose.model("oldAccounts(2023-2024)", oldAccountSchema);
