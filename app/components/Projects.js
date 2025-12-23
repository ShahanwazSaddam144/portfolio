"use client";

import React from "react";
import Image from "next/image";

// Swiper core & required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    Heading: "Digital Website",
    Text: "A modern digital platform built with Next.js and Tailwind CSS. Features dynamic routing, SEO optimization, and a fully responsive UI.",
    demoLink: "https://digital-x.buttnetworks.com/",
    image: "/Home.png",
    technologies: ["Next.js", "Tailwind CSS", "Node JS", "Express", "Mongo DB"],
  },
  {
    Heading: "Business Website",
    Text: "A professional business website with features like Dark-Mode and Contact Form built using React, Node.js, Express, and MongoDB for full-stack functionality.",
    demoLink: "https://buttnetworks.com/",
    image: "/ButtHome.png",
    technologies: ["Next JS", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    Heading: "Mobile E-Commerce App",
    Text: "An interactive e-commerce application with multiple categories, real-time products, and auth system.",
    demoLink: "/BoltForm.apk",
    image: "/light-shop.png",
    technologies: ["React-Native", "Async-Storage", "Node.Js", "Express.js","MongoDB"],
  },
  {
    Heading: "Portfolio Website",
    Text: "A professional portfolio website with features like Dark-Mode and Contact Form built using for full-stack functionality.",
    demoLink: "https://syedzeeshanhaider.netlify.app/",
    image: "/portfoliohome.png",
    technologies: ["Next.JS", "Tailwind CSS"],
  },
  {
    Heading: "Admin Panel",
    Text: "A comprehensive admin panel designed to manage website content, user interactions, and settings efficiently, featuring full-stack functionality and a responsive interface.",
    demoLink: "https://github.com/ShahanwazSaddam144/admin-panel",
    image: "/adminhome.png",
    technologies: ["Next.JS", "Tailwind CSS", "Node.JS", "Express.JS", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section
      className="Projects justify-center items-center mt-20 px-4 md:px-16 mb-10"
      id="Projects"
    >
      <h1 className="text-center font-extrabold text-[35px] text-gray-800 mb-10">
        Projects
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="Projects-Container bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 p-6 flex flex-col justify-between h-full">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.image}
                  alt={project.Heading}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <h2 className="font-bold text-2xl mb-4 text-gray-900 transition-colors duration-300 hover:text-gray-700">
                {project.Heading}
              </h2>
              <p className="text-gray-700 mb-4 transition-opacity duration-300 hover:opacity-80">
                {project.Text}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                {project.Heading === "Admin Panel" ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-gradient-to-r from-gray-600 to-gray-900 px-5 py-2 rounded-[6px] text-white cursor-pointer font-bold hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    View Code
                  </a>
                ) : project.demoLink.endsWith(".apk") ? (
                  <a
                    href={project.demoLink}
                    download
                    className="mt-4 bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 rounded-[6px] text-white cursor-pointer font-bold hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Download App
                  </a>
                ) : (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 rounded-[6px] text-white cursor-pointer font-bold hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
