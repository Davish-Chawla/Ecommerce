const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String },

  description: { type: String },

  image: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref:"Category" },
  price: { type: Number },
  brand: { type: String },
  stock: { type: Number },
  rating: { type: Number },
});

module.exports = mongoose.model("Product", ProductSchema);
