import React from "react";

const Mens = [
  {
    name: "Men's Shirts",
    image: "/src/assets/OIP (11).jpg",
    link: "#",
  },
  {
    name: "Men's Hoodie",
    image: "/src/assets/download (5).jpg",
    link: "#",
  },
  {
    name: "Men's Jeans",
    image: "/src/assets/OIP (12).jpg",
    link: "#",
  },
  {
    name: "Men's Footwear",
    image: "/src/assets/OIP (13).jpg",
    link: "#",
  },
];

export default function Men() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Men's Shopping | Up to 40% off
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {Mens.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex flex-col items-center text-center border p-2 rounded-lg hover:shadow-md"
          >
            <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-md" />
            <span className="mt-2 text-sm font-medium text-gray-700">
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <div className="mt-4 text-center">
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          Shop Now
        </a>
      </div>
    </div>
  );
}
