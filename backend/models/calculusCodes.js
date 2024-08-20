const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema(
  {
    order: {
      type: String,
      required: true,
    },
    code: {
      type: Array,
      required: true,
    }
  },
  { collection: "CalculusCode" }
);
mongoose.pluralize(null);
module.exports = mongoose.model("Calculus", codeSchema);
