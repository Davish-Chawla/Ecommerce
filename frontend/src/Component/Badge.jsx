import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaTruck, FaLock, FaUndo, FaHeadset } from "react-icons/fa";

const trustBadges = [
  {
    id: 1,
    icon: <FaTruck size={30} />,
    title: "Free Shipping",
    description: "On all orders above $50",
  },
  {
    id: 2,
    icon: <FaLock size={30} />,
    title: "Secure Payment",
    description: "100% secure transactions",
  },
  {
    id: 3,
    icon: <FaUndo size={30} />,
    title: "Easy Returns",
    description: "Hassle-free 30-day returns",
  },
  {
    id: 4,
    icon: <FaHeadset size={30} />,
    title: "24/7 Support",
    description: "We’re here to help, anytime!",
  },
];

export default function TrustBadges() {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
        Why Shop With Us?
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="max-w-5xl mx-auto px-4"
      >
        {trustBadges.map((badge) => (
          <SwiperSlide key={badge.id} className="flex justify-center">
            <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col items-center w-44">
              <div className="text-blue-600 mb-3">{badge.icon}</div>
              <h3 className="text-lg font-semibold">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
