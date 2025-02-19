import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import categories
export default function Carousel() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className=" ">
      <Slider {...settings}>
        <div>
          <img  src="https://cdn.pixabay.com/photo/2019/10/15/13/36/outdoors-4551688_1280.jpg" alt="Slide 1" className="w-full h-[80vh] object-cover " />
        </div>
        <div>
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Slide 2" className="w-full h-96 object-cover  " />
        </div>
        <div>
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Slide 3" className="w-full h-96 object-cover  " />
        </div>
        <div>
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Slide 4" className="w-full h-96 object-cover  " />
        </div>
        <div>
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Slide 5" className="w-full h-96 object-cover  " />
        </div>
      </Slider>
    </div>
  );
}
// <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
//   {categories.map((category) => (
//     <div key={category.id} className="relative group">
//       <img src={category.image} alt={category.name} className="w-full h-60 object-cover  rounded-lg" />
//       <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//         <span className="text-white font-semibold text-lg">{category.name}</span>
//       </div>
//     </div>
//   ))}
// </div>
