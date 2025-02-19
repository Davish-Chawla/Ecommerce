const express = require("express");

const category_router = express.Router();

const Category = require("../models/category_models");


// Get all categories
category_router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.json({ categories });
    } catch (error) {
        res.status(500).json({ error: "Error fetching categories" });
    }
});

category_router.post("/add", async (req, res) => {
const {name} = req.body
await Category.create({name})
res.json({message: "Category Created"})
})
module.exports = category_router;

// export default router;
