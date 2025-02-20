const express = require("express");

const Cart_router = express.Router();

const Cart = require("../models/cart_models");
 const Product = require("../models/product_modules")
const jwt = require("jsonwebtoken")

Cart_router.get("/",verifyToken, async (req, res) => {
    try {
        const cart = await Cart.find({user:req.user.user_id}).populate("product");
        res.json({ cart });
    } catch (error) {
        res.status(500).json({ error: "Error fetching Cart" });
    }
});

function verifyToken(req, resp, next){
    const token = req.headers.authorization
    if(!token){
        return resp.json({message: "Access Denied"})
    }

    const data = jwt.verify(token, "MySecretKey123")
    req.user = data
    next()
}

Cart_router.post("/add",verifyToken, async (req, res) => {
const {product} = req.body
const productdata = await Product.findOne({_id : product})
const total = productdata.price * 1
await Cart.create({product,quantity : 1,total,user:req.user.user_id})
res.json({message: "Cart Created" , success: true })
})

module.exports = Cart_router;


