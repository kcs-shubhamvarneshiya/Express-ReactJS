const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  sku: {
    type: "number",
    required: true,
  },
  mrp: {
    type: "number",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
