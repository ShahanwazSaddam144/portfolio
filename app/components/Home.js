"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Link from 'next/link';

const Home_ = () => {
  return (
    <>
      <section className="Home bg-transparent flex flex-col items-center mt-25 justify-center px-4">
        <div className="text-center animate-fadeIn">
          {/* Floating Profile Image */}
          <div className="relative w-[250px] sm:w-[300px] mx-auto animate-float">
            <div className="absolute inset-0 rounded-full bg-gray-700 opacity-20 blur-xl animate-pulse"></div>
            <Image
              src="/developer.jpg"
              width={300}
              height={300}
              alt="Developer"
              className="rounded-full w-[200px] sm:w-[250px] block m-auto border-8 border-gray-900 shadow-lg relative z-10"
            />
          </div>

          <h1 className="mt-3 font-extrabold text-[30px] text-gray-900"><span>Hello I am,</span>  Shahnawaz Saddam Butt</h1>

          {/* Typewriter Text */}
          <p className="font-semibold text-[20px] sm:text-[22px] mt-6 tracking-wide ">
            <Typewriter
              words={[
                "Full Stack Developer 💻",
                "MERN Developer 🚀",
                "Frontend Enthusiast 🎨",
                "Backend Builder ⚙️",
                "Learning ML & C 🧠",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          {/* Small tagline */}
          <p className="mt-4 text-sm sm:text-base italic text-gray-600">
            “Building modern web experiences with passion & creativity”
          </p>

          {/* Button */}
          <Link href='#stack'>
          <button
            className="mt-4 bg-gradient-to-r from-gray-600 to-gray-800 px-5 py-2 rounded-[6px] text-white cursor-pointer font-bold hover:bg-gradient-to-l from-gray-600 to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:scale-110 focus:ring-offset-2 transition duration-200"
          >
            View More
          </button>
          </Link>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Home_;
