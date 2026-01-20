"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "../Data/projectsData";

export default function Projects({ limit = 10, single = false }) {
  const displayedProjects = single
    ? projects.slice(0, 1)
    : projects.slice(0, limit);

  // Track which project card is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className="Projects justify-center items-center mt-20 px-4 mb-10"
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
        {displayedProjects.map((project, index) => (
          <SwiperSlide key={index} className="flex">
            <div className="Projects-Container bg-gray-100 rounded-xl p-6 flex flex-col h-auto">
              <div className="relative w-full mb-4 flex justify-center">
                <Image
                  src={project.image}
                  alt={project.Heading}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>

              <h2 className="font-bold text-2xl mb-2 text-gray-900">
                {project.Heading}
              </h2>

              <p className="text-gray-700 mb-2">{project.Text}</p>

              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 flex-wrap mb-2">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 rounded text-white font-bold"
                  >
                    {project.demoLink.endsWith(".apk")
                      ? "Download App"
                      : project.Heading === "Admin Panel"
                      ? "View Code"
                      : "Live Demo"}
                  </a>
                )}

                {project.Repo && (
                  <a
                    href={project.Repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-blue-700 text-blue-700 px-5 py-2 rounded font-bold hover:bg-blue-700 hover:text-white transition"
                  >
                    Repo
                  </a>
                )}
              </div>

              {/* ✅ Case Study Toggle */}
              <button
                onClick={() => toggleExpand(index)}
                className="mt-2 text-left text-blue-600 hover:underline font-semibold inline-block"
              >
                Case Study {expandedIndex === index ? "▲" : "▼"}
              </button>

              {/* ✅ Expanded details */}
              {expandedIndex === index && (
                <div className="mt-4 text-gray-800 space-y-2 border-t pt-3">
                  <div><span className="font-bold">Author:</span> {project.author}</div>
                  <div><span className="font-bold">Email:</span> {project.email}</div>
                  <div><span className="font-bold">Role:</span> {project.role}</div>
                  <div><span className="font-bold">Category:</span> {project.category}</div>
                  <div><span className="font-bold">Status:</span> {project.status}</div>
                  <div><span className="font-bold">Start Date:</span> {project.startDate}</div>
                  <div><span className="font-bold">End Date:</span> {project.endDate}</div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
