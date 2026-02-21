"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Award, Code, Zap } from "lucide-react";

const getLiveTime = () => new Date().toLocaleTimeString();
const getLearningDays = () => {
  const startDate = new Date("2025-03-23");
  const now = new Date();
  return Math.floor(Math.abs(now - startDate) / (1000 * 60 * 60 * 24));
};

const About = () => {
  const [currentTime, setCurrentTime] = useState(getLiveTime());
  const [learningDays, setLearningDays] = useState(getLearningDays());
  const deployedProjects = 10;

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
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.6); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .card-3d {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          transform-style: preserve-3d;
        }
        .card-3d:hover {
          transform: rotateX(5deg) rotateY(8deg) translateZ(15px);
          box-shadow: 0 20px 50px rgba(34, 211, 238, 0.4);
        }
      `}</style>

      <section className="About py-16 px-4 mt-20 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Heading with Gradient */}
          <h1 className="text-5xl sm:text-6xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-fadeIn">
            About Me
          </h1>
          
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16 animate-fadeIn leading-relaxed">
            I'm <span className="text-cyan-400 font-bold">Shahnawaz Saddam Butt</span>, a 16-year-old full-stack developer creating modern, responsive websites with cutting-edge technologies.
          </p>

          {/* Info Cards Grid - 3D */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1 - Timer */}
            <div className="card-3d relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-3xl p-8 text-center animate-float group-hover:animate-glow" style={{animationDelay: '0s'}}>
                <div className="mb-4 inline-block p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-cyan-300 mb-3">⏰ Live Time</h2>
                <h4 className="text-4xl text-cyan-400 font-extrabold font-mono">{currentTime}</h4>
                <p className="text-sm text-gray-400 mt-4">Real-time coding timer</p>
              </div>
            </div>

            {/* Card 2 - Learning Days */}
            <div className="card-3d relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-3xl p-8 text-center animate-float group-hover:animate-glow" style={{animationDelay: '0.1s'}}>
                <div className="mb-4 inline-block p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">📚 Days Coding</h2>
                <h4 className="text-5xl text-blue-400 font-extrabold">{learningDays}+</h4>
                <p className="text-sm text-gray-400 mt-4">Days of learning journey</p>
              </div>
            </div>

            {/* Card 3 - Projects */}
            <div className="card-3d relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-3xl p-8 text-center animate-float group-hover:animate-glow" style={{animationDelay: '0.2s'}}>
                <div className="mb-4 inline-block p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-purple-300 mb-3">🚀 Projects</h2>
                <h4 className="text-5xl text-purple-400 font-extrabold">{deployedProjects}+</h4>
                <p className="text-sm text-gray-400 mt-4">Live & deployed projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts and Journey */}
      <section className="mt-20 max-w-6xl mx-auto px-4 sm:px-8 pb-20">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Facts & Figures
          </h2>
          <p className="text-gray-400 text-lg">
            A quick look at my journey, experience, and achievements.
          </p>
        </header>

        {/* Facts Grid - 3D */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { number: "20+", label: "Projects", icon: "🎯" },
            { number: "8+", label: "Months", icon: "⏳" },
            { number: "100%", label: "Dedication", icon: "💯" },
            { number: "10+", label: "Technologies", icon: "⚡" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="card-3d relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/50 rounded-2xl p-8 text-center group-hover:animate-glow">
                <p className="text-4xl mb-3">{stat.icon}</p>
                <h4 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Journey
          </h2>

          <div className="space-y-8">
            {[
              {
                year: "2024",
                title: "Started Web Development",
                desc: "Began learning HTML and CSS with a strong passion for building interactive websites.",
              },
              {
                year: "2025",
                title: "Full-Stack Developer",
                desc: "Mastered JavaScript, React, Node.js, Express, and MongoDB for complete full-stack solutions.",
              },
              {
                year: "2025 (Now)",
                title: "Advanced Projects & Clients",
                desc: "Building modern apps with Next.js, Tailwind CSS, authentication systems, and advanced features.",
              },
            ].map((journey, index) => (
              <div key={index} className="card-3d relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex gap-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/40 rounded-2xl p-8 group-hover:animate-glow">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-cyan-400">{journey.year}</span>
                    <h3 className="text-xl font-bold text-gray-100 mt-2">{journey.title}</h3>
                    <p className="text-gray-400 mt-3 leading-relaxed">{journey.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
