"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectGallery({ gallery = [], heading = "" }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <Swiper modules={[Navigation]} navigation spaceBetween={16} slidesPerView={1} className="rounded-lg overflow-hidden">
      {gallery.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} alt={`${heading} ${i + 1}`} className="w-full h-72 object-cover rounded-md" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
