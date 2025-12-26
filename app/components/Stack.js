"use client";
import React from "react";

// ICONS
import { FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiDocker,
  SiNginx,
  SiGithub,
  SiMysql,
  SiScikitlearn,
  SiC,
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiCss3,
} from "react-icons/si";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { icons } from "lucide-react";

// ================= DATA =================
const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "ReactNative", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython /> },
      { name: "SciketLearn", icon: <SiScikitlearn /> },
      { name: "Language", icon: <SiC /> },
      { name: "Language", icon: <SiCplusplus /> },
      { name: "NumPy", icon: <SiNumpy /> },
      {name: "Pandas", icon: <SiPandas />},
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
];

const skillColors = {
  HTML: "text-orange-500",
  CSS: "text-blue-500",
  Tailwind: "text-cyan-400",
  JavaScript: "text-yellow-400",
  TypeScript: "text-blue-600",
  React: "text-cyan-500",
  "Next.js": "text-black",
  ReactNative: "text-blue-900",
  "Node.js": "text-green-600",
  Express: "text-gray-700",
  Python: "text-blue-600",
  MongoDB: "text-green-500",
  Docker: "text-sky-500",
  Nginx: "text-green-600",
  GitHub: "text-black",
  MySQL: "text-blue-600",
  SciketLearn: "text-orange-500",
  Language: "text-blue-700", 
  NumPy: "text-blue-800",
  Pandas: "text-sky-500"
};

// ================= COMPONENT =================
const Skills = () => {
  return (
    <section id="skills" className="py-16 px-5 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-14">
        💼 Tech Stack
      </h1>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid md:grid-cols-2 gap-10">
        {skillsData.map((category, idx) => (
          <SkillCard key={idx} category={category} />
        ))}
      </div>

      {/* MOBILE SWIPER */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {skillsData.map((category, idx) => (
            <SwiperSlide key={idx}>
              <SkillCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SkillCard = ({ category }) => (
  <div className="Stack-Container bg-gray-100 rounded-2xl p-6">
    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">{category.title}</h2>
      <span className="text-sm text-gray-600">
        {category.skills.length} SKILLS
      </span>
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {category.skills.map((skill, i) => (
        <div
          key={i}
          className="Stack-Elements border border-white bg-white rounded-xl shadow-sm p-4 flex flex-col items-center gap-2 hover:scale-105 transition"
        >
          <div className={`text-4xl ${skillColors[skill.name]}`}>
            {skill.icon}
          </div>
          <p className="font-medium text-sm">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
