import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Component/productapi";
import Form from "./Component/addproduct";
import Home from "./Component/home";
import Navbar from "./Component/Navbar";
import ProductDetails from "./Component/ProductsDetail";
import Produc from "./Component/Products";
import LoginCard from "./Component/login";
import Dashboard from "./Component/Dashboard";
import Category from "./Component/category";
import CategoryProduct from "./Component/Categories";
// import Home from "./Component/home";

// import Kids from "./Component/kids";

// import Limitedtimeoffer from "./Component/Limitedoffer";
// import Products from "./Component/Limitedoffer";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Produc/>}>  </Route>
          <Route path="/products/:id" element={<ProductDetails/>}></Route>
          <Route path="/product_form" element={<Form />}></Route>
          <Route path="/login" element={<LoginCard />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/category" element={<CategoryProduct/>}></Route>

        
        </Routes>
      </Router>
      {/* <Home/> */}
    </div>
  )}
    {/* <Limitedtimeoffer/> */}
    {/* </div> */}
        {/* <Routes>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products_form" element={<Form />}></Route>
         
        </Routes> */}
      
