"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const messages = [
  "Website Developer",
  "React-Native Developer",
  "C Development",
  "Python Development",
];

const techStacks = [
  "Next.js",
  "React",
  "React-Native",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "SQL",
  "C Language",
  "C++ Language",
];

const Home_ = () => {
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* TECH STACK TYPEWRITER */
  const [techText, setTechText] = useState("");
  const [techIndex, setTechIndex] = useState(0);
  const [techChar, setTechChar] = useState(0);
  const [techDeleting, setTechDeleting] = useState(false);

  // ROLE TYPEWRITER
  useEffect(() => {
    const current = messages[msgIndex];
    let speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setMsgIndex((prev) => (prev + 1) % messages.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, msgIndex]);

  // TECH STACK TYPEWRITER
  useEffect(() => {
    const current = techStacks[techIndex];
    let speed = techDeleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!techDeleting) {
        setTechText(current.slice(0, techChar + 1));
        setTechChar((prev) => prev + 1);

        if (techChar + 1 === current.length) {
          setTimeout(() => setTechDeleting(true), 1000);
        }
      } else {
        setTechText(current.slice(0, techChar - 1));
        setTechChar((prev) => prev - 1);

        if (techChar - 1 === 0) {
          setTechDeleting(false);
          setTechIndex((prev) => (prev + 1) % techStacks.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [techChar, techDeleting, techIndex]);

  return (
    <>
      <section className="mt-15 px-4 sm:px-8 mb-15 lg:px-16">
        <div className="flex flex-col justify-center items-center gap-10">
          {/* IMAGE */}
          <Image
            src="/developer.jpg"
            alt="Developer Image"
            width={180}
            height={180}
            className="mt-10 rounded-full border-4 border-blue-900 shadow-xl w-[180px] h-[180px]
            opacity-0 animate-fadeZoom"
          />

          {/* TEXT SECTION */}
          <div className="text-center md:text-left animate-slideUp">
            <h1 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px]">
              <span className="font-extrabold text-blue-600">Hello,</span>{" "}
              Shahnawaz Saddam Butt
            </h1>

            {/* Line */}
            <div className="sm:block m-auto w-full h-1 bg-blue-700 mb-2"></div>

            {/* DESCRIPTION */}
            <p className="text-center text-gray-600 text-[15px] sm:text-[18px] mt-5 font-bold mb-4">
              I build fast, reliable web apps that scale with your product.
            </p>

            {/* ROLE TYPEWRITER */}
            <h1 className="text-center mt-3 mb-3">
              <span
                className="
                TypewriterContainer
    inline-block
    px-4 py-1.5
    rounded-full
    bg-blue-50
    border border-blue-200
    text-[18px] sm:text-[20px] md:text-[22px]
    font-bold
    text-blue-700
    shadow-sm
  "
              >
                <span className="Role-Text border-r-2 border-blue-600 pr-1 animate-caret">
                  {text}
                </span>
              </span>
            </h1>

            {/* BUTTONS */}
            <div className="flex flex-col justify-center sm:flex-row gap-3 sm:gap-5 items-center">
              <Link href="/">
                <button
                  className="bg-gradient-to-r from-blue-600 to-blue-800 
                  px-6 py-2 rounded-md text-white cursor-pointer font-bold 
                  hover:scale-105 hover:shadow-lg transform transition-all duration-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 animate-fadeIn "
                >
                  View More
                </button>
              </Link>

              <Link href="/Contact">
                <button
                  className="bg-gradient-to-r from-blue-600 to-blue-800 
                  px-6 py-2 rounded-md text-white cursor-pointer font-bold 
                  hover:scale-105 hover:shadow-lg transform transition-all duration-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 animate-fadeIn delay-200"
                >
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes fadeZoom {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeZoom {
          animation: fadeZoom 1s ease-out forwards;
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }

        @keyframes caretBlink {
          0%, 50% { border-color: transparent; }
          50%, 100% { border-color: blue; }
        }
        .animate-caret {
          animation: caretBlink 0.7s infinite;
        }
      `}</style>
    </>
  );
};

export default Home_;
