const express = require("express");

const product_router = express.Router();

const Product = require("../models/product_modules");

product_router.get("/", async (req, resp) => {
  const products = await Product.find().populate("category");

  resp.status(200).json({ success: true, products: products });
});

product_router.get("/product/:id", async (req, resp)=>{
  const {id} = req.params
  const product = await Product.findOne({_id: id} ).populate("category")
  return resp.json({success:true, product: product})
})
product_router.post("/delete/:id", async (req, resp) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  resp.json({ message: "product delete successfully" });
});

product_router.post("/add", async (req, resp) => {
  const { name, description, image , category , rating , stock , brand , price } = req.body;
  await Product.create({ name, description, image , category , rating , stock , brand , price });

  resp
    .status(201)
    .json({ success: true, data: "Product Uploaded successfully" });
});

module.exports = product_router;
