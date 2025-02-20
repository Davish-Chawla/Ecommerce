const mongoose = require("mongoose");

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const product_router = require("./routes/product_routes");

const user_router = require("./routes/user_routes");
 const category_router = require("./routes/category_routes");
 const Cart_router = require("./routes/cart_routes");

const app = express();

mongoose
    .connect("mongodb://127.0.0.1:27017/blogs")

    .then(() => {
        console.log("Database Connected");
    })

    .catch((err) => {
        console.log("Database connection Error: ", err);
    });

app.use(bodyParser.json());

app.use(cors());

app.use("/api/products", product_router);
app.use("/api/users", user_router);
app.use("/api/category", category_router);
app.use("/api/cart/", Cart_router);


app.listen(7000, () => {
    console.log("Your site is running at http://localhost:7000");
});
