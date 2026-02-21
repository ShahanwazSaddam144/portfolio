"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";

const messages = [
  "Full Stack Developer",
  "Web Developer",
  "React-Native Developer",
  "Software Engineer",
];

const techStacks = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "React-Native",
  "Express",
  "SQL",
  "C Language",
  "Python",
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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-24 pb-16">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.4); }
            50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.8); }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
          .gradient-shift {
            animation: gradientShift 3s ease infinite;
            background-size: 200% 200%;
          }
          .hero-3d {
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          .card-3d {
            transition: transform 0.6s cubic-bezier(0.23, 1, 0.320, 1);
            transform-style: preserve-3d;
          }
          .card-3d:hover {
            transform: rotateX(5deg) rotateY(10deg) translateZ(20px);
          }
        `}</style>

        <div className="w-full max-w-5xl hero-3d">
          <div className="flex flex-col justify-center items-center gap-8 md:gap-12 text-center">
            
            {/* 3D Animated Header */}
            <div className="animate-float">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-glow"></div>
                <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-12 rounded-3xl border border-cyan-500/30 backdrop-blur-xl card-3d">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
                    <span className="text-cyan-400 font-semibold text-sm md:text-base">Welcome To My Portfolio</span>
                    <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 gradient-shift">
                    Shahnawaz Saddam Butt
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-300 mb-6">
                    Building Beautiful & Scalable Digital Solutions
                  </p>
                  
                  {/* Typewriter Effect */}
                  <div className="flex justify-center items-center mb-8">
                    <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-md">
                      <span className="text-lg md:text-2xl font-bold text-cyan-300">
                        {text}
                        <span className="animate-pulse text-cyan-400 ml-1">|</span>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                    I create modern, fast, and fully responsive web applications. Specializing in React, Next.js, and full-stack development with a focus on user experience and performance.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Link href="/About">
                      <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                        <span className="relative flex items-center gap-2">
                          View My Work
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </Link>
                    
                    <Link href="/Contact">
                      <button className="group relative px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
                        <span className="relative flex items-center gap-2">
                          Get In Touch
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </Link>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-8 border-t border-cyan-500/20">
                    <p className="text-gray-400 text-sm mb-4 flex items-center justify-center gap-2">
                      <Code2 className="w-4 h-4" />
                      Currently working with
                    </p>
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600/30">
                      <span className="text-cyan-300 font-semibold text-sm md:text-base">
                        {techText}
                        <span className="animate-pulse text-blue-400 ml-1">▌</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Decorative */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_;
