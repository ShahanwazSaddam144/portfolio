"use client";

import React, { useEffect, useState } from "react";
import { User, Sparkles, Code2, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "Express",
  "C & Python",
  "UI/UX",
];

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Experience", value: "8+ months" },
  { label: "User Experience", value: "100%" },
];

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Close popup on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowPopup(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* MAIN SECTION */}
      <section className="mt-24 max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* LEFT SIDE – LOGO / AVATAR */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative flex justify-center lg:justify-start lg:w-1/2 order-1"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 w-[220px] h-[220px] rounded-full flex items-center justify-center shadow-2xl">
              <User size={110} className="text-white" />
            </div>

            <span className="Stack-Container absolute bottom-3 right-3 bg-white p-2 rounded-full shadow">
              <Sparkles className="text-blue-600" />
            </span>
          </motion.div>

          {/* RIGHT SIDE – CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:w-1/2 order-2">
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-bold"
            >
              Do you want to know myself?
            </motion.h2>

            <p className="text-gray-600 max-w-md">
              I build modern, fast, and beautiful web experiences. Curious about
              my skills, projects, and journey?
            </p>

            {/* STATS */}
            <div className="flex gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="Stack-Container bg-white shadow rounded-xl px-4 py-3 text-center"
                >
                  <div className="text-xl font-bold text-blue-700">
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="Stack-Container px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-2">
              <Link href="/About">
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3 rounded-xl text-white font-bold flex items-center gap-2 hover:scale-105 hover:shadow-lg transition">
                  Interested <ArrowRight size={18} />
                </button>
              </Link>

              <button
                onClick={() => setShowPopup(true)}
                className="border border-blue-600 px-6 py-3 rounded-xl text-blue-700 font-bold transition"
              >
                Not Interested
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="Stack-Container bg-white p-6 rounded-2xl w-[320px] text-center shadow-xl"
            >
              <div className="mx-auto mb-3 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Code2 className="text-blue-700" />
              </div>

              <h3 className="text-lg font-semibold mb-2">No Problem 🙂</h3>

              <p className="text-gray-600 mb-4">
                Thanks for visiting! You can explore other sections or contact me
                anytime.
              </p>

              <div className="flex justify-center gap-3">
                <Link href="/Contact">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700">
                    <Mail size={16} /> Contact
                  </button>
                </Link>

                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
