import React from "react";
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
  { name: "ML (TensorFlow)", icon: <SiTensorflow className="text-orange-400" />, progress: 45 },
  { name: "Linux", icon: <FaLinux className="text-gray-800 " />, progress: 70 },
  { name: "C Language", icon: <SiC className="text-blue-800" />, progress: 60 },
];

const Stack = () => {
  return (
    <section className="Stack py-10 px-5 mt-20 bg-transparent" id="stack">
      <h1 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3 text-gray-800 ">
        <span role="img" aria-label="briefcase">
          💼
        </span>{" "}
        Tech Stack
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
        {stack.map((item, index) => (
          <div
            key={index}
            className="Stack-Container bg-gray-100 shadow-lg rounded-xl p-5 flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 cursor-pointer w-44"
          >
            <div className="text-5xl">{item.icon}</div>
            <p className="Stack-P text-lg font-semibold text-gray-800 ">{item.name}</p>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
