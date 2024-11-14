"use client";
import React from "react";
import ServiceSliderCard from "../serviceSliderCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { serviceSlideData } from "@/constants";
import "swiper/css";
import "swiper/css/autoplay";

const ServiceSlider = () => {
  return (
    <div>
      <div className="mt-4 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          pagination={{
            clickable: true,
          }}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            450: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper pb-20"
        >
          {serviceSlideData.map((box) => (
            <SwiperSlide key={box.id} className="cursor-pointer ">
              <ServiceSliderCard data={box} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceSlider;
