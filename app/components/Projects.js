"use client";

import React from "react";
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
            <div className="Projects-Container bg-gray-100 rounded-xl p-6 flex flex-col h-full shadow-md hover:shadow-xl transition">

              {/* Image (Clickable via slug) */}
              <Link href={`/projects/${project.slug}`}>
                <div className="relative w-full mb-4 flex justify-center cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.Heading}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                </div>
              </Link>

              {/* Title (Clickable via slug) */}
              <Link href={`/projects/${project.slug}`}>
                <h2 className="font-bold text-2xl mb-2 text-gray-900 hover:text-blue-700 transition cursor-pointer">
                  {project.Heading}
                </h2>
              </Link>

              {/* Description */}
              <p className="text-gray-700 mb-4">
                {project.Text}
              </p>
{/* Tech Stack */}
<div className="flex flex-wrap gap-2 mb-3">
  {project.technologies.map((tech, idx) => (
    <span
      key={idx}
      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold"
    >
      {tech}
    </span>
  ))}
</div>

{/* Project Meta Info */}
<div className="text-sm text-gray-600 space-y-1 mb-5">
  <p>
    <span className="font-semibold">Author:</span> {project.author}
  </p>

  <p>
    <span className="font-semibold">Role:</span> {project.role}
  </p>

  <p>
    <span className="font-semibold">Duration:</span>{" "}
    {project.startDate} – {project.endDate}
  </p>

  <p className="flex items-center gap-2">
    <span className="font-semibold">Status:</span>
    <span
      className={`px-2 py-0.5 rounded-full text-xs font-bold
        ${
          project.status === "Completed"
            ? "bg-green-100 text-green-700"
            : project.status === "In Progress"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-blue-100 text-blue-700"
        }`}
    >
      {project.status}
    </span>
  </p>
</div>


              {/* Buttons */}
              <div className="mt-auto flex gap-3 flex-wrap">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 rounded-lg text-white font-bold hover:opacity-90 transition"
                  >
                    {project.demoLink.endsWith(".apk")
                      ? "Download App"
                      : "Live Demo"}
                  </a>
                )}

                {project.Repo && (
                  <a
                    href={project.Repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-blue-700 text-blue-700 px-5 py-2 rounded-lg font-bold hover:bg-blue-700 hover:text-white transition"
                  >
                    Repo
                  </a>
                )}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
