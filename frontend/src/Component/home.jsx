import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Carousel from "./carousels";
import Categories from "./category";
import Men from "./Menscard";
import Women from "./Womencard";
import Teanager from "./teanager";
import Kids from "./kids";
import BestSellers from "./best sellers";
import NewArrivals from "./newarrivals";
import Produc from "./Products";
import CustomerReviews from "./Review";
import Footer from "./Footer";
import TrustBadges from "./Badge";
import Navbar from "./Navbar";
import Likedproducts from "./likedproduct";
export default function Home() {
  const [description, setdescription] = useState("")

  return (
    <div>
      {/* <Router> */}
        {/* <Navbar /> */}
        <Carousel />
        <div className="container px-4 mx-auto">

          <Categories />
        </div>
        <div className="flex flex-row justify-center m-4 gap-2">
          <Men />
          <Women />
          <Kids />
          <Teanager />
        </div>
        <BestSellers />
        <NewArrivals />
        {/* <Produc /> */}
        <Likedproducts/>
        <CustomerReviews />
        <TrustBadges />
      {/* </Router> */}
      <Footer />
    </div>
  );
}
