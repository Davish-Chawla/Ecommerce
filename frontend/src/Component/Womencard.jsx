import React from "react";

const Womens = [
  {
    name: "Womens Clothes",
    image: "/src/assets/OIP (5).jpg",
    link: "#",
  },
  {
    name: "Handbags",
    image: "/src/assets/OIP (7).jpg",
    link: "#",
  },
  {
    name: "Footwear",
    image: "/src/assets/OIP (6).jpg",
    link: "#",
  },
  {
    name: "Womens Tops",
    image: "/src/assets/OIP (8).jpg",
    link: "#",
  },
];

export default function Women() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Women's Shopping | Up to 40% off
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {Womens.map((item, index) => (
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
