"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { commerceIndustryImages } from "../constants/carousselPics";
import { houseCondoImages } from "../constants/carousselPics";

export default function InstallationCarousel(props: any) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (props.type === "Commerce") {
    return (
      <Swiper spaceBetween={10} slidesPerView={4} loop={true}>
        {commerceIndustryImages.map((eachPhoto: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${eachPhoto.src})`,
                }}
                className="bg-cover bg-no-repeat w-96 flex flex-col h-96 rounded-3xl md:mt-8 items-center justify-start mx-auto text-center"
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  if (props.type === "House") {
    return (
      <Swiper spaceBetween={10} slidesPerView={4} loop={true}>
        {houseCondoImages.map((eachPhoto: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${eachPhoto.url.src})`,
                }}
                className="bg-cover bg-no-repeat w-96 flex flex-col h-96 rounded-3xl md:mt-8 items-center justify-start mx-auto text-center"
              ></div>
              <p className="md:mt-2 font-extrabold">{eachPhoto.name}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}
