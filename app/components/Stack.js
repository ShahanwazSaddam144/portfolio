"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaLinux,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiC,
  SiTensorflow,
} from "react-icons/si";

const stack = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, progress: 70 },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" />, progress: 75 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, progress: 80 },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" />, progress: 75 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, progress: 70 },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, progress: 78 },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" />, progress: 78 },
  { name: "Python", icon: <FaPython className="text-blue-700" />, progress: 80 },
  { name: "ML (Sk.Learn)", icon: <SiTensorflow className="text-orange-400" />, progress: 45 },
  { name: "Linux", icon: <FaLinux className="text-gray-800" />, progress: 70 },
  { name: "React Native", icon: <FaReact className="text-blue-800" />, progress: 60 },
  { name: "C Language", icon: <SiC className="text-blue-800" />, progress: 60 },
];

const Stack = () => {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(120);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const size = containerRef.current.offsetWidth;
        setRadius(size / 2.4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Continuous rotation effect
  useEffect(() => {
    let frame;
    const rotate = () => {
      setRotation((prev) => (prev + 0.2) % 360); // smooth slow rotation
      frame = requestAnimationFrame(rotate);
    };
    frame = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="Stack py-10 px-5 mt-20 bg-transparent" id="stack">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-14 flex items-center justify-center gap-3 text-gray-800">
        <span role="img" aria-label="briefcase">💼</span> Tech Stack
      </h1>

      {/* Circle with rotation */}
      <div
        ref={containerRef}
        className="
          relative 
          w-[clamp(250px,70vw,500px)] 
          h-[clamp(250px,70vw,500px)] 
          mx-auto flex items-center justify-center
        "
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        {stack.map((item, index) => {
          const angle = (index / stack.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="
                absolute flex flex-col items-center justify-center Stack-Container
                w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 
                rounded-full bg-white shadow-lg 
                hover:scale-110 transition-transform duration-300 cursor-pointer
              "
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`, 
                // counter-rotate so icons stay upright
              }}
            >
              <div className="text-lg sm:text-2xl md:text-3xl">{item.icon}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stack;
