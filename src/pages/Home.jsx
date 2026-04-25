import React from "react";
import car from ".././assets/car.jpg";
import car2 from ".././assets/car2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const data = [
    {
      title: "new thinking new posibilities",
      subtitle: "car interior",
      price: "Starting at",
      price1: "$99.00",
      button: "Read More",
      image: car,
      color: "#fff",
    },
    {
      title: "Car, Truck, Cuv, Suv Tires",
      subtitle: "Wheels & Tires",
      price: "Sales upto 20% off",
      button: "Read More",
      image: car2,
      color: "#ffc400",
    },
  ];
  return (
    <div className="bg-white h-screen w-auto flex flex-col items-center">
      <div className="flex flex-row items-center gap-1 pt-6.25 pb-5">
        <span className="text-[#e52e06] uppercase font-bold">
          popular search:
        </span>
        <span className="text-[#999999] text-[14px]">
          Brakes & Rotors, Lighting, Perfomance, Wheels & Tires
        </span>
      </div>
      <div className="w-422.25 h-152.5 relative">
        <Swiper
          style={{
            "--swiper-navigation-color": "#999999",
            "--swiper-navigation-size": "36px",
            "--swiper-pagination-bullet-inactive-color": "white",
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-size": "12px",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full bold-arrows"
        >
          {data?.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item?.image}
                alt="car"
                className="w-full h-full object-cover"
              />

              <div className="absolute top-[27%] left-[15.7%] z-10 text-white flex flex-col items-start .swing-top-fwd ">
                <h2
                  className={`text-2xl uppercase font-bold text-[${item.color}]`}
                >
                  {item?.title}
                </h2>
                <h1 className="text-[68px] uppercase font-bold">
                  {item?.subtitle}
                </h1>
                <h2 className="text-7 pb-6 text-[28px]">
                  {item?.price}
                  <span className="text-[#ffc400] text-[28px] pl-4">
                    {item?.price1}
                  </span>
                  <span className="underline decoration-[#ffc400] decoration-2 underline-offset-4"></span>
                </h2>
                <button className="bg-[#ffc400] text-[#333333] w-43.75 h-11.25 uppercase font-bold rounded-sm">
                  {item?.button}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
