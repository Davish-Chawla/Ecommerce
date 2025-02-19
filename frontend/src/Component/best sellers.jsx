import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const bestSellers = [
  {
    id: 1,
    name: "Smart Watch",
    image: "https://images.unsplash.com/photo-1606166325687-b4e60197b1ae",
    price: "$99.99",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1518443742390-87d7c59f11fd",
    price: "$79.99",
  },
  {
    id: 3,
    name: "Trendy Sneakers",
    image: "https://images.unsplash.com/photo-1619410295265-e1c3b7b24d8f",
    price: "$119.99",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    image: "https://images.unsplash.com/photo-1606811841516-b0c81d02ed6c",
    price: "$49.99",
  },
  {
    id: 5,
    name: "Stylish Sunglasses",
    image: "https://images.unsplash.com/photo-1516726817505-f5ed825624c1",
    price: "$29.99",
  },
  {
    id: 6,
    name: "Smart Watch",
    image: "https://images.unsplash.com/photo-1606166325687-b4e60197b1ae",
    price: "$99.99",
  },
  {
    id: 7,
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1518443742390-87d7c59f11fd",
    price: "$79.99",
  },
  {
    id: 8,
    name: "Trendy Sneakers",
    image: "https://images.unsplash.com/photo-1619410295265-e1c3b7b24d8f",
    price: "$119.99",
  },
  {
    id: 9,
    name: "Gaming Mouse",
    image: "https://images.unsplash.com/photo-1606811841516-b0c81d02ed6c",
    price: "$49.99",
  },
  {
    id: 10,
    name: "Stylish Sunglasses",
    image: "https://images.unsplash.com/photo-1516726817505-f5ed825624c1",
    price: "$29.99",
  },
];

export default function BestSellers() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-8xl mx-auto">
        <div className="flex justify-between">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
         Best Sellers
      </h2>

      <a href="#" className="text-blue-600 font-semibold hover:underline">
          See All
        </a>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="pb-6"
      >
        {bestSellers.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center border p-4 rounded-lg shadow hover:shadow-lg transition bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-36 object-cover rounded-md"
              />
              <span className="mt-3 text-md font-medium text-gray-700">{item.name}</span>
              <span className="text-lg font-semibold text-gray-900">{item.price}</span>
              <button className="mt-3 bg-blue-600 text-white cursor-pointer px-4 py-1.5 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
