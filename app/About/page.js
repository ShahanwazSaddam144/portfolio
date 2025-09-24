"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const getLiveTime = () => new Date().toLocaleTimeString();
const getLearningDays = () => {
  const startDate = new Date("2025-03-23");
  const now = new Date();
  return Math.floor(Math.abs(now - startDate) / (1000 * 60 * 60 * 24));
};

const About = () => {
  const [currentTime, setCurrentTime] = useState(getLiveTime());
  const [learningDays, setLearningDays] = useState(getLearningDays());
  const deployedProjects = 7;

  useEffect(() => {
    const timeInterval = setInterval(() => setCurrentTime(getLiveTime()), 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const daysInterval = setInterval(() => setLearningDays(getLearningDays()), 1000 * 60 * 60);
    return () => clearInterval(daysInterval);
  }, []);

  return (
    <>
      <Navbar />
      <section className="About py-12 px-4 mt-25 sm:px-6 lg:px-8 cursor-pointer">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-4 animate-fadeIn">
            👨‍💻 About Shahnawaz Saddam Butt
          </h1>

          {/* Intro Paragraph */}
          <p className="text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12 animate-fadeIn">
            Shahnawaz Saddam Butt is a 16-year-old full-stack developer from Lahore.
            He creates modern, responsive websites using HTML, CSS, Tailwind, JavaScript,
            React, Node.js, Next.js, and MongoDB. Also Learning Other Techs like Machine Learning and C.
          </p>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="Container bg-gray-50 rounded-2xl shadow-xl p-6 text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 animate-float">
              <h2 className="text-xl font-bold mb-2">⏰ Live Coding Timer</h2>
              <p className="text-3xl font-extrabold">{currentTime}</p>
              <p className="text-sm text-gray-500 mt-2">Current time ticking live</p>
            </div>

            <div className="Container bg-gray-100 rounded-2xl shadow-xl p-6 text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 animate-float">
              <h2 className="text-xl font-bold mb-2">📘 Days of Learning</h2>
              <p className="text-5xl font-extrabold">{learningDays}</p>
              <p className="text-sm text-gray-500 mt-2">Days since starting coding journey</p>
            </div>

            <div className="Container bg-gray-50 rounded-2xl shadow-xl p-6 text-center md:col-span-2 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 animate-float">
              <h2 className="text-xl font-bold mb-2">🚀 Projects Deployed</h2>
              <p className="text-5xl font-extrabold">{deployedProjects}</p>
              <p className="text-sm text-gray-500 mt-2">Live & running projects on the web</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
      `}</style>
    </>
  );
};

export default About;
