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
  { collection: "AlgebraCode" }
);
mongoose.pluralize(null);
module.exports = mongoose.model("Algebra", codeSchema);
