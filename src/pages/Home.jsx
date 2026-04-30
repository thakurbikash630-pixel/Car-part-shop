import React from "react";
import car from ".././assets/car.jpg";
import car2 from ".././assets/car2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaArrowRight, FaArrowRotateRight } from "react-icons/fa6";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { MdOutlineLock } from "react-icons/md";
import first from ".././assets/first.png";
import second from ".././assets/second.png";
import third from ".././assets/third.png";
import fourth from ".././assets/fourth.png";
import fifth from ".././assets/fifth.png";
import sixth from ".././assets/sixth.png";
import cari from ".././assets/cari.jpg";
import carii from ".././assets/carii.jpg";

const Home = () => {
  const Banner = [
    {
      image: cari,
      offer: " get 20% off your order",
      title1: "car and truck",
      title2: "mercedes benz",
      detail:
        "  Explore and immerse in exciting 360 content with Fulldive's all-in-one virtual reality platform",
      button: "Shop now",
    },
    {
      image: carii,
      offer: "Save $120 when you buy",
      title1: "Rotiform SFO ",
      title2: "Custom Forged",
      detail:
        " Explore and immerse in exciting 360 content with Fulldive's all-in-one virtual reality platform",

      button: "Shop now",
    },
  ];
  const Products = [
    {
      image: first,
      title: "Brakes & Rotors",
      numbers: "(8 products)",
      button: "Read More",
      categoriesList: [
        {
          category: "Accessories",
        },
        {
          category: "Auto GPS Units",
        },
        {
          category: "Fitness GPS Units",
        },
        {
          category: "Handheld GPS Units",
        },
      ],
    },
    {
      image: second,
      title: "Interior",
      numbers: "(0 products)",
      button: "Read More",
      categoriesList: [
        {
          category: "Dash Kits",
        },
        {
          category: "Floor Mats",
        },
        {
          category: "Seat Covers",
        },
        {
          category: "Steering Wheels",
        },
      ],
    },
    {
      image: third,
      title: "Wheels & Tires",
      numbers: "(8 products)",
      button: "Read More",
      categoriesList: [
        {
          category: "Custom Alloy Wheels",
        },
        {
          category: "All-Season Tires",
        },
        {
          category: "Performance Tires",
        },
        {
          category: "Off-Road & Mud Tires",
        },
      ],
    },
    {
      image: fourth,
      title: "Performance",
      numbers: "(13 products)",
      button: "Read More",
      categoriesList: [
        {
          category: "Cold Air Intakes",
        },
        {
          category: "Performance Tuners",
        },
        {
          category: "High-Flow Exhausts",
        },
        {
          category: "Turbochargers",
        },
      ],
    },
    {
      image: fifth,
      title: "Suspension Sytems",
      numbers: "(15 products)",
      button: "Read More",
      categoriesList: [
        {
          category: "Shock Absorbers",
        },
        {
          category: "Struts",
        },
        {
          category: "Double Wishbone",
        },
        {
          category: "Bushings & Ball Joints",
        },
      ],
    },
    {
      image: sixth,
      title: "Lightining",
      numbers: "(15 products)",
      button: "Read More",
      categoriesList: [
        {
          category: "Engine Mounts",
        },
        {
          category: "Oil Pans & Gaskets",
        },
        {
          category: "Cylinder Heads",
        },
        {
          category: "Camshafts & Valvetrain",
        },
      ],
    },
  ];
  const details = [
    {
      title: "Free Shipping",
      text: "Free shipping on all US order",
      logo: <IoPaperPlaneOutline className="text-[#ffc400] w-7 h-9 mt-4 " />,
    },
    {
      title: "Support 24x7",
      text: "Free shipping on all US order",
      logo: (
        <AiOutlineQuestionCircle className="text-[#ffc400] w-9 h-11 mt-1.5 " />
      ),
    },
    {
      title: "100% Money Back",
      text: "You have 30 days to Return",
      logo: (
        <FaArrowRotateRight className="text-[#ffc400] w-7.5 h-10.5 mt-2 " />
      ),
    },
    {
      title: "90 days Return",
      text: "If goods have problems",
      logo: <PiArrowBendUpLeftBold className="text-[#ffc400] w-9 h-12 mt-1 " />,
    },
    {
      title: "Payment Secure",
      text: "We ensure secure payment",
      logo: <MdOutlineLock className="text-[#ffc400] w-8 h-10 mt-2.5 " />,
    },
  ];
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
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          modules={[Navigation, Pagination]}
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
      {/* hero section 2nd  */}
      <div className=" flex flex-row gap-10 border border-[#ffc400]  w-422.25 h-29.25 mt-20 pt-7.5 pb-6.25">
        {details.map((detail, i) => (
          <div className="flex flex-row  pl-8 justify-between" key={i}>
            {detail.logo}
            <div
              className={`flex flex-col pl-7 ${details?.length - 1 == i ? "" : "border-r"} border-[#d9d9d9] pr-6`}
            >
              <h3 className="font-bold pb-2.5 text-[#333333]">
                {detail.title}
              </h3>
              <h6 className="text-[#999999] text-[14px]">{detail.text}</h6>
            </div>
          </div>
        ))}
      </div>
      <div className="w-459.75 h-143.5">
        <div className="flex flex-col items-center pt-18.75">
          <p className="text-base text-[#999999]">Top Featured Collections</p>
          <h3 className="text-3xl font-bold pb-12.5">Featured Categories</h3>
        </div>
        {/* featured categories .map loop */}
        <div className="flex flex-row gap-8 px-19">
          <Swiper
            style={{
              "--swiper-navigation-color": "#999999",
              "--swiper-navigation-size": "36px",
              "--swiper-pagination-bullet-inactive-color": "grey",
              "--swiper-pagination-color": "white",
              "--swiper-pagination-bullet-size": "12px",
            }}
            modules={[Navigation, Pagination]}
            navigation
            className="w-full h-full pb-10 px-12 [&_.swiper-button-next]:transition-all [&_.swiper-button-prev]:transition-all
    [&_.swiper-button-next]:duration-300 [&_.swiper-button-prev]:duration-300
    /* Change hover text color to a darker grey (#333333) */
    [&_.swiper-button-next:hover]:text-[#333333] [&_.swiper-button-prev:hover]:text-[#333333]
    [&_.swiper-button-next:hover]:scale-110 [&_.swiper-button-prev:hover]:scale-110"
            pagination={{ clickable: true }}
            // --- SETTINGS FOR 4 CARDS ---
            spaceBetween={20} // Gap between cards in pixels
            slidesPerView={1} // 1 card on mobile
            breakpoints={{
              640: { slidesPerView: 2 }, // 2 cards on small screens
              1024: { slidesPerView: 3 }, // 3 cards on medium screens
              1440: { slidesPerView: 4 }, // 4 cards on large desktops
            }}
          >
            {Products.map((product, i) => (
              <SwiperSlide key={i}>
                <div
                  className="h-87 w-100 bg-[#fcfcfc] py-15 border border-[#ededed]"
                  key={i}
                >
                  <div className="flex flex-row gap-4">
                    <img
                      className="h-[159.19px] w-[159.19px] mb-[66.81px] object-contain"
                      src={product?.image}
                    />
                    <div className="flex flex-col ">
                      <h3 className="text-base text-[#999999] font-bold pb-2.5">
                        {product.title}
                      </h3>
                      <span className="text-[#0886cf] pb-3.75">
                        (8 products)
                      </span>
                      <ul className="text-[14px] text-[#999999] flex flex-col gap-1">
                        {/* looping in ul to get the category list items */}
                        {product.categoriesList.map((category, idx) => (
                          <li
                            className="flex flex-row items-center gap-1"
                            key={idx}
                          >
                            <FaArrowRight />
                            {category.category}
                          </li>
                        ))}
                      </ul>
                      <button className="w-35 h-11.25 text-[#333333] text-base bg-[#ffc400] hover:bg-[#e52e06] hover:text-white ease-in-out duration-400 transition-all rounded-sm uppercase font-semibold mt-5">
                        {product.button}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" flex flex-row  gap-4 pt-20 pl-19  ">
          {Banner.map((banner, idx) => (
            <div key={idx} className="relative">
              <img
                src={banner.image}
                className="h-108.75 w-207.25 transition-all duration-300 hover:grayscale hover:brightness-140 object-cover"
              />
              <div className="absolute z-10 top-37 left-36 flex flex-col items-start">
                <h3 className="text-[#ffc400] text-base pb-2 uppercase"></h3>

                <h2 className="text-[34px] text-white uppercase ">
                  {banner.offer}
                </h2>
                <h2 className="text-[34px] text-white font-bold uppercase pb-8 -mt-1">
                  {banner.title1}
                </h2>
                {/* for underline */}
                <div class="h-0.5 w-17.5 bg-[#ffc400]"></div>
                <p className="text-[#ffffff] text-[14px] pt-7.5 pb-6.25 w-88">
                  {banner.detail}
                </p>
                <button className="w-32.5 h-11.25 uppercase bg-[#ffc400] text-[#333333] font-semibold rounded-[5px] hover:bg-[#e52e06]  hover:text-white ease-in-out duration-400 transition-all">
                  {banner.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
