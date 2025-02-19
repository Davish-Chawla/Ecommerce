import React from "react";

const newArrivals = [
  {
    id: 1,
    name: "Smartphone X",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    link: "#",
    price: "$599.99",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    link: "#",
    price: "$129.99",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e",
    link: "#",
    price: "$1299.99",
  },
  {
    id: 4,
    name: "Fitness Smartwatch",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    link: "#",
    price: "$199.99",
  },
  {
    id: 5,
    name: "4K Smart TV",
    image: "https://images.unsplash.com/photo-1592839719612-a3e7b78a0e2b",
    link: "#",
    price: "$799.99",
  },
  {
    id: 6,
    name: "Gaming Laptop",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e",
    link: "#",
    price: "$1299.99",
  },
  {
    id: 7,
    name: "Fitness Smartwatch",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    link: "#",
    price: "$199.99",
  },
  {
    id: 8,
    name: "4K Smart TV",
    image: "https://images.unsplash.com/photo-1592839719612-a3e7b78a0e2b",
    link: "#",
    price: "$799.99",
  },
];

export default function NewArrivals() {
  return (
    <div className="max-w-8xl mx-auto p-6">
        <div className="flex justify-between ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🚀 New Arrivals</h2>
      <span className="text-blue-600 m-2 p-2 cursor-pointer font-semibold hover:underline">View All</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newArrivals.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-2 text-center">
              <span className="block text-lg font-semibold text-gray-800">
                {item.name}
              </span>
              <span className="block text-md font-medium text-gray-600">
                {item.price}
              </span>
              <button className="mt-2 bg-blue-600 text-white cursor-pointer px-3 py-1 rounded-md hover:bg-blue-700">
                View Details
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
