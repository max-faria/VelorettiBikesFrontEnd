import LogoWhite from "../assets/logo-white.svg";
import Image1 from "../assets/aboutus-1.png";
import Image2 from "../assets/aboutus-2.png";
import ProductCard from "../components/Product Card";
import ElectricIvy from "../assets/electricivy.png";
import CityBikes from "../assets/citybikes.png";
import KidBikes from "../assets/kidbikes.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  A11y,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutUs = () => {
  return (
    <div className="antialiased bg-neutral-300">
      <div className="bg-about-us-bg bg-cover bg-no-repeat text-white flex flex-col lg:bg-cover lg:h-screen">
        <div className="relative top-24 py-40 px-10 items-start lg:top-80 lg:px-10">
          <div className="w-14 lg:w-28">
            <img src={LogoWhite} alt="" className="w-full" />
          </div>
          <h1 className="text-4xl lg:text-7xl">About us</h1>
          <h2 className="text-sm lg:text-2xl">Forever Forward</h2>
        </div>
      </div>

      <div className="bg-neutral-300 py-10 px-10 md:flex md:items-center">
        <div className="md:basis-1/2 hidden md:block">
          <img src={Image1} alt="" className="w-full relative" />
        </div>
        <div className="md:flex md:flex-col md:basis-1/2 lg:px-36 md:px-16 text-justify ">
          <h2 className="text-3xl text-black-gray w-50">Forever forward</h2>
          <p className="mt-5 text-sm">
            Our bikes are made to stand the test of time, both aesthetically and
            practically. Whether you're after a state-of-the-art electric bike,
            a classic city bike, or a kids bike for the school run, we want to
            help make your commute the best part of your day.
          </p>
        </div>
        <div className="md:hidden">
          <img src={Image1} alt="" className="w-full relative top-8" />
        </div>
      </div>

      <div className="py-10 px-10 md:flex md:items-center">
        <div className="md:flex md:flex-col md:basis-1/2 lg:px-36 md:px-16  ">
          <h2 className="text-3xl text-black-gray w-50">Part of Pon.Bike</h2>
          <p className="mt-5 text-sm text-justify">
            Veloretti was founded in Amsterdam in 2012 with a mission to make
            clean, timeless bikes that are great quality and delivered to your
            door at a fair price. We are proud to now be part of Pon.Bike, the
            world-leading family of bike brands. With this support, we can
            continue to evolve our designs, take care of our riders, and help
            keep their bikes on the road.
          </p>
        </div>
        <div className="md:basis-1/2">
          <img src={Image2} alt="" className="w-full relative top-8" />
        </div>
      </div>

      <div className="py-10 px-10 lg:py-auto lg:flex lg:justify-center">
        <h2 className="text-6xl text-center lg:w-3/4">
          Designed in{" "}
          <span className="bg-black h-0 text-neutral-300">Amsterdam</span>,{" "}
          <span className="bg-red-flag">handmade</span> in Europe,{" "}
          <span className="bg-blue-flag text-neutral-300">personal</span> in all
          cities.
        </h2>
      </div>
      <div className="bg-bike-people bg-cover items-end flex justify-center py-10 h-96 sm:justify-end sm:py-5 md:h-screen md:bg-cover">
        <div className="relative text-neutral-300 text-center flex justify-center sm:flex sm:flex-col sm:w-96 sm:justify-end sm:items-end sm:px-10">
          <h2 className="text-4xl font-semibold lg:text-4xl">Made for you.</h2>
          <p className="hidden md:block sm:text-sm sm:text-justify sm:w-60">
            Elevate your ride with a bicycle that mirrors your unique style and
            personality. From an Ace Two electric bike with the latest
            technology packed into a minimalist design, or a bright yellow
            Berlin for those who like to ride light and have a craving for
            nostalgia. Our diverse range of models and colours cater to riders
            of all kinds.
          </p>
        </div>
      </div>
      <p className="text-sm text-justify py-5 px-10 md:hidden">
        Elevate your ride with a bicycle that mirrors your unique style and
        personality. From an Ace Two electric bike with the latest technology
        packed into a minimalist design, or a bright yellow Berlin for those who
        like to ride light and have a craving for nostalgia. Our diverse range
        of models and colours cater to riders of all kinds.
      </p>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Parallax]}
          spaceBetween={5}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
              navigation: false,
            },
            1024: {
              slidesPerView: 2.3,
              spaceBetween: 30,
              navigation: true,
            },
          }}
        >
          <SwiperSlide>
            <ProductCard
              img={ElectricIvy}
              category="Electric Bikes"
              submenu1="Electric"
              submenu2="Ivy Electric Ace 2"
              price="3.299"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              img={CityBikes}
              category="City Bikes"
              submenu1="Men"
              submenu2="Woman"
              price="399"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              img={KidBikes}
              category="Kid's Bikes"
              submenu1="Ages 1.5 to 8"
              price="299"
            />
          </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default AboutUs;
