"use client";

import React, { useState } from "react";
import { Github, Copy, Mail, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [showCopyPopup, setShowCopyPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/Contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong 😬");

      setResponseMsg("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setResponseMsg(""), 3000);
    } catch (error) {
      alert(error.message || "Failed to send message.");
    }
  };

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setShowCopyPopup(true);
    setTimeout(() => setShowCopyPopup(false), 2000);
  };

  return (
    <section className="min-h-screen">
      <Navbar />
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.2); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.5); }
        }
        .contact-card {
          animation: slideInUp 0.6s ease-out forwards;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          transform-style: preserve-3d;
        }
        .contact-card:hover {
          transform: translateY(-5px) rotateX(2deg);
          box-shadow: 0 20px 50px rgba(34, 211, 238, 0.3);
        }
        .form-input {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.6));
          border: 1px solid rgba(34, 211, 238, 0.2);
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: rgba(34, 211, 238, 0.6);
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1));
        }
      `}</style>

      <motion.section
        className="Contact px-4 mt-20 pb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together!
            </p>
          </motion.div>

          {/* ================= EMAIL & GITHUB ================= */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">

            {/* Email */}
            <div className="Container flex flex-col justify-between bg-gray-100 rounded-xl px-6 py-5 shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/2">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <p className="text-[16px] font-medium break-all sm:text-lg">
                  shahnawazsaddamb@gmail.com
                </p>
              </div>

              <button
                onClick={() => handleCopy("shahnawazsaddamb@gmail.com")}
                className="mt-4 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-white font-medium transition duration-200"
              >
                <Copy size={16} />
                Copy Email
              </button>
            </div>

            {/* GitHub */}
            <div className="Container flex flex-col justify-between items-center bg-gray-100 rounded-xl px-6 py-5 shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/2">
              <a
                href="https://github.com/ShahanwazSaddam144"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-md font-medium transition duration-200"
              >
                <Github size={18} />
                Visit GitHub
              </a>

              <p className="text-center italic text-gray-600 text-sm mt-4">
                "Code is like humor. When you have to explain it, it’s bad."
              </p>
            </div>
          </div>

          {/* Copy Popup */}
          <AnimatePresence>
            {showCopyPopup && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50 pointer-events-none"
              >
                ✅ Copied!
              </motion.div>
            )}
          </AnimatePresence>

          {/* ================= CONTACT FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={formData.name}
              required
              whileFocus={{ scale: 1.02 }}
              className="form-input w-full px-5 py-3 rounded-lg text-gray-300 placeholder-gray-500 focus:placeholder-gray-400 outline-none"
            />

            <motion.input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={formData.email}
              required
              whileFocus={{ scale: 1.02 }}
              className="form-input w-full px-5 py-3 rounded-lg text-gray-300 placeholder-gray-500 focus:placeholder-gray-400 outline-none"
            />

            <motion.input
              name="phone"
              type="text"
              placeholder="Your Phone"
              onChange={handleChange}
              value={formData.phone}
              required
              whileFocus={{ scale: 1.02 }}
              className="form-input w-full px-5 py-3 rounded-lg text-gray-300 placeholder-gray-500 focus:placeholder-gray-400 outline-none"
            />

            <motion.textarea
              name="message"
              placeholder="Enter Your Message"
              onChange={handleChange}
              value={formData.message}
              required
              rows="5"
              whileFocus={{ scale: 1.02 }}
              className="form-input w-full px-5 py-3 rounded-lg text-gray-300 placeholder-gray-500 focus:placeholder-gray-400 outline-none resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 px-6 py-3 rounded-lg text-white font-bold cursor-pointer transition-all duration-300 focus:outline-none flex items-center justify-center gap-2 group"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              Send Message
            </motion.button>
          </motion.form>

          {responseMsg && (
            <motion.p
              className="mt-6 text-center text-green-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {responseMsg}
            </motion.p>
          )}
        </div>
      </motion.section>
    </section>
  );
};

export default Contact;
