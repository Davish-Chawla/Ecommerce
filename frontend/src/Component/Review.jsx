import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Emily R.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Absolutely love the quality! The fabric is soft, and the fit is perfect. Definitely shopping here again!",
    rating: 5,
  },
  {
    id: 2,
    name: "John D.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "Fast delivery and amazing customer service. The jeans I ordered are exactly as described!",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Sophia M.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    review:
      "Great variety of clothing. Love the trendy styles and affordable prices!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael B.",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    review:
      "Highly recommend! The material feels premium, and the sizing guide was spot on.",
    rating: 4,
  },
];

const CustomerReviews = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        ⭐ Customer Reviews
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="p-4"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-yellow-500">
                    {"⭐".repeat(Math.floor(review.rating))}
                    {review.rating % 1 !== 0 ? "⭐" : ""}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">"{review.review}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
