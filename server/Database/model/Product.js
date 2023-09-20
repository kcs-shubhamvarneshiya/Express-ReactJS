const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: "string",
    required: true,
  },
  productImage: {
    type: Object,
  },
  productDes: {
    type: Object,
    required: true,
  },
  productPrice: {
    type: "number",
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  } 
});

module.exports = mongoose.model("Product", productSchema);
