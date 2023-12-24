const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  order: {
    type: String,
    required: true,
  },
  code: {
    type: Array,
    required: true,
  }
},  { collection: 'StaticsCode' });
mongoose.pluralize(null);
module.exports = mongoose.model("Statics", codeSchema);