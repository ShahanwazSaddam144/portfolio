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
  const deployedProjects = 8;

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
            👨‍💻 About <span className="text-blue-600">Shahnawaz Saddam Butt</span>
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
              <h2 className="text-3xl text-blue-600 font-extrabold">{currentTime}</h2>
              <p className="text-sm text-gray-500 mt-2">Current time ticking live</p>
            </div>

            <div className="Container bg-gray-100 rounded-2xl shadow-xl p-6 text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 animate-float">
              <h2 className="text-xl font-bold mb-2">📘 Days of Learning</h2>
              <h2 className="text-5xl text-blue-600 font-extrabold">{learningDays}</h2>
              <p className="text-sm text-gray-500 mt-2">Days since starting coding journey</p>
            </div>

            <div className="Container bg-gray-50 rounded-2xl shadow-xl p-6 text-center md:col-span-2 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 animate-float">
              <h2 className="text-xl font-bold mb-2">🚀 Projects Deployed</h2>
              <h2 className="text-5xl text-blue-600 font-extrabold">{deployedProjects}</h2>
              <p className="text-sm text-gray-500 mt-2">Live & running projects on the web</p>
            </div>
          </div>
        </div>
      </section>

      
{/* Facts and Journey */}
<section className="mt-20 max-w-6xl mx-auto px-4">
  {/* Header */}
  <header className="text-center mb-12">
    <h1 className="text-3xl font-bold mb-2">Facts & Figures</h1>
    <p className="text-gray-600">
      A quick look at my journey, experience, and achievements so far.
    </p>
  </header>

  {/* Facts */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
    <div className="Stack-Container bg-white shadow rounded-2xl p-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700">20+</h2>
      <p className="text-gray-500 mt-1">Projects Completed</p>
    </div>

    <div className="Stack-Container bg-white shadow rounded-2xl p-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700">8+</h2>
      <p className="text-gray-500 mt-1">Months Experience</p>
    </div>

    <div className="Stack-Container bg-white shadow rounded-2xl p-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700">100%</h2>
      <p className="text-gray-500 mt-1">User Experience</p>
    </div>

    <div className="Stack-Container bg-white shadow rounded-2xl p-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700">10+</h2>
      <p className="text-gray-500 mt-1">Technologies Used</p>
    </div>
  </div>

  {/* Journey */}
  <div className="max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-center">
      My Journey
    </h2>

    <div className="space-y-6 border-l-2 border-blue-600 pl-6">
      <div>
        <span className="text-sm text-blue-600 font-semibold">2024</span>
        <h3 className="font-semibold">Started Web Development</h3>
        <p className="text-gray-500">
          Began learning HTML and CSS, with a strong interest in
          building interactive websites.
        </p>
      </div>

      <div>
        <span className="text-sm text-blue-600 font-semibold">2025</span>
        <h3 className="font-semibold">Moved to Full-Stack Development</h3>
        <p className="text-gray-500">
          Worked with JavaScript, React, Node.js, Express, and MongoDB to build complete
          full-stack applications.
        </p>
      </div>

      <div>
        <span className="text-sm text-blue-600 font-semibold">2025 (Ending)</span>
        <h3 className="font-semibold">Finding Clients & Making Advanced Projects</h3>
        <p className="text-gray-500">
          Started finding clients, creating modern apps using Next.js, Tailwind CSS, Node.JS,
          Express.JS, MongoDB, authentication systems and etc, etc.
        </p>
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
