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
    <section className="Projects justify-center items-center mt-20 px-4 mb-10" id="Projects">
      <h1 className="text-center font-extrabold text-[35px] text-gray-800 mb-10">
        Projects
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
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
            <div className="Projects-Container bg-gradient-to-tl from-[#07151b] via-[#08262f] to-[#0b2f3b] rounded-2xl p-6 flex flex-col h-163 shadow-2xl hover:-translate-y-2 transform-gpu transition-transform w-full border border-cyan-600/10 overflow-hidden">

              {/* ✅ IMAGE SWIPER (IMPROVED ONLY HERE) */}
              <div className="relative w-full mb-4 flex justify-center">
                <Swiper
                  modules={[Pagination, Autoplay, Navigation]}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop={true}
                  className="w-full"
                >
                  {(project.gallery && project.gallery.length ? project.gallery : [project.image]).map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="flex justify-center">
                        <Image
                          src={img}
                          alt={project.Heading}
                          width={300}
                          height={300}
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <h2 className="font-extrabold text-2xl mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-400 cursor-pointer">
                {project.Heading}
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.Text}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white/5 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold border border-white/6"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="bg-white/3 rounded-lg p-3 text-sm text-gray-300 space-y-2 mb-5 border border-white/6">
                <div className="flex justify-between">
                  <span className="font-semibold">Author:</span>
                  <span>{project.author}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Role:</span>
                  <span>{project.role}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Duration:</span>
                  <span>{project.startDate} – {project.endDate}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-semibold">Status:</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : project.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="mt-auto flex gap-3 flex-wrap">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2 rounded-lg text-white font-bold hover:scale-105 transform transition"
                  >
                    {project.demoLink.endsWith(".apk") ? "Download App" : "Live Demo"}
                  </a>
                )}

                {project.Repo && (
                  <a
                    href={project.Repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-500 text-cyan-200 px-5 py-2 rounded-lg font-bold hover:bg-cyan-600 hover:text-white transition"
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