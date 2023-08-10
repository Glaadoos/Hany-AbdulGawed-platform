const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  id:{
    type:String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  payingSystem: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("account", accountSchema);
