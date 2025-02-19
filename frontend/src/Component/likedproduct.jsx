import React, { useEffect, useState } from "react";
// import axios from "axios"
import {Link } from "react-router-dom"
const Products = [
    {
        id: 1,
        name: "Mens Sweatshirts",
        image: "/src/assets/OIP (14).jpg",
        link: "#",
        price: "$599.99",
      },
      {
        id: 2,
        name: "Mens Tracksuit",
        image:"/src/assets/OIP (15).jpg",
        link: "#",
        price: "$129.99",
      },
      {
        id: 3,
        name: "Mens Shoes",
        image: "/src/assets/OIP (16).jpg",
        link: "#",
        price: "$1299.99",
      },
      {
        id: 4,
        name: "Fitness Smartwatch",
        image : "/src/assets/OIP (17).jpg",
        link: "#",   
        price: "$199.99",
      },
]

export default function Likedproducts() {
//     const [products,setproducts] = useState([])
//     useEffect(()=>{
// axios.get(`http://localhost:7000/api/products`)
// .then(response=>{
//     setproducts(response.data.products)
// })

//     },[])
    return (
        <div className="max-w-8xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">You may like </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Products.map((item, index) => (
                    <Link
                        key={index}
                        to={`/products/${item._id}`}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                        
                            <img src={item.image} alt={item.name} className="w-full h-88 object-cover rounded-md" />
                            <div className="text-center mt-2">
                            <span className="block text-lg font-semibold text-gray-900">{item.name}</span>
                            <span className="block text-md font-medium text-gray-700">{item.price}</span></div>
                            <div className="flex justify-center mt-2">
                        <button className="text-white bg-blue-600 mt-2 cursor-pointer hover:bg-blue-700 px-3 py-1 rounded-md">Add to Cart</button></div>
                    </Link>
                ))}

            </div>
        </div>
    )
}