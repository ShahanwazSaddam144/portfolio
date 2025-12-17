"use client";

import React from "react";
import { Laptop, Code, Database, Smartphone, Globe, Palette } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
  {
    Icon: Laptop,
    Name: "Web Development",
    Service: "Building modern and responsive websites.",
  },
  {
    Icon: Code,
    Name: "Software Development",
    Service: "Custom software solutions in C and JavaScript.",
  },
  {
    Icon: Smartphone,
    Name: "React Native",
    Service: "Cross-platform mobile applications for Android & iOS.",
  },
  {
    Icon: Database,
    Name: "Backend Development",
    Service: "Secure and scalable APIs using Node.js and MongoDB.",
  },
  {
    Icon: Globe,
    Name: "SEO & Deployment",
    Service: "Optimized websites with SEO and cloud deployment.",
  },
  {
    Icon: Palette,
    Name: "UI/UX Design",
    Service: "Designing user-friendly and visually appealing interfaces.",
  },
];

const Services = () => {
  return (
    <>
      <section className="Services mt-20 px-6 mb-5" id="services">
        <h1 className="text-center font-extrabold text-gray-900 text-[40px] mb-10">
          Services
        </h1>

        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="Services-Container w-[280px] mb-20 sm:w-[320px] cursor-pointer bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300 mx-auto">
                <service.Icon className="w-12 h-12 text-blue-700" />
                <h3 className="text-xl text-gray-900 font-bold mt-4">
                  {service.Name}
                </h3>
                <p className="text-gray-600 mt-2">{service.Service}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Services;
