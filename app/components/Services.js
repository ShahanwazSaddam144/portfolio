"use client";

import React from "react";
import {
  Laptop,
  Code,
  Database,
  Smartphone,
  Globe,
  Palette,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
  {
    Icon: Laptop,
    Name: "Web Development",
    Service:
      "Building modern, fast, and fully responsive websites tailored to your business needs.",
    Details: [
      "HTML, CSS, JavaScript",
      "Next.js & React",
      "Responsive Design",
    ],
  },
  {
    Icon: Code,
    Name: "Software Development",
    Service:
      "Custom software solutions with clean architecture and optimized performance.",
    Details: ["C Programming", "JavaScript Apps", "Problem Solving"],
  },
  {
    Icon: Smartphone,
    Name: "React Native",
    Service:
      "Cross-platform mobile applications with smooth UI and native performance.",
    Details: ["Android & iOS", "Reusable Components", "API Integration"],
  },
  {
    Icon: Database,
    Name: "Backend Development",
    Service:
      "Secure, scalable, and efficient backend systems for modern applications.",
    Details: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    Icon: Globe,
    Name: "SEO & Deployment",
    Service:
      "Optimized websites with proper SEO practices and cloud deployment.",
    Details: ["SEO Optimization", "Vercel / Netlify", "Performance Boost"],
  },
  {
    Icon: Palette,
    Name: "UI/UX Design",
    Service:
      "Clean, modern, and user-focused designs that enhance user experience.",
    Details: ["Figma Design", "Tailwind CSS", "User-Friendly Layouts"],
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
          pagination={{ clickable: true }}
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
            <SwiperSlide key={index} className="flex">
              <div className="Services-Container h-[350px] w-[280px] mb-20 sm:w-[320px] cursor-pointer bg-gray-100 p-6 rounded-2xl  flex flex-col items-center text-center sm:hover:shadow-2xl active:shadow-2xl mx-auto">
                
                <service.Icon className="w-12 h-12 text-blue-700" />

                <h3 className="text-xl text-gray-900 font-bold mt-4">
                  {service.Name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {service.Service}
                </p>

                <ul className="Services-Details mt-4 text-sm text-gray-700 space-y-1">
                  {service.Details.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>

                {/* Bottom aligned */}
                <p className="mt-auto pt-4 text-xs text-gray-500">
                  Developed by{" "}
                  <span className="font-semibold">
                    Shahnawaz Saddam Butt
                  </span>
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Services;
