"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

// Initialize Swiper navigation

export function Carousel(props: any) {
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

  return (
    <Swiper
      navigation
      spaceBetween={10}
      slidesPerView={windowWidth > 1300 ? 4 : 1}
    >
      {props.reviews.map((eachReview: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-white w-80 flex flex-col h-96 rounded-3xl md:mt-16 items-center justify-start mx-auto text-center">
              <Image
                width={64}
                height={64}
                className="rounded-3xl sm:mt-4 sm:mb-4 "
                src={eachReview.profile_photo_url}
                alt="LOGO"
              />
              <h1 className="text-blue-950 font-extrabold sm:mb-4">
                {eachReview.author_name}
              </h1>

              <p className="text-blue-950 font-poppins text-xs md:p-4">
                {eachReview.text}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
