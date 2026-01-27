"use client";

import React, { useState } from "react";
import { Github, Copy, Mail } from "lucide-react";
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

      setResponseMsg("✅ Message sent!");
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
    <section className="mt-20">
      <Navbar />

      <motion.section
        className="Contact px-4 mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-3xl mx-auto relative">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Contact Me
          </motion.h1>

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

          {/* ================= CONTACT FORM (UNCHANGED) ================= */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={formData.name}
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full border-2 rounded-md border-gray-300 focus:border-blue-600 px-3 py-2 outline-none transition duration-200"
            />

            <motion.input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={formData.email}
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full border-2 rounded-md border-gray-300 focus:border-blue-600 px-3 py-2 outline-none transition duration-200"
            />

            <motion.input
              name="phone"
              type="text"
              placeholder="Your Phone"
              onChange={handleChange}
              value={formData.phone}
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full border-2 rounded-md border-gray-300 focus:border-blue-600 px-3 py-2 outline-none transition duration-200"
            />

            <motion.textarea
              name="message"
              placeholder="Enter Your Message"
              onChange={handleChange}
              value={formData.message}
              required
              rows="4"
              whileFocus={{ scale: 1.02 }}
              className="w-full border-2 rounded-md border-gray-300 focus:border-blue-600 px-3 py-2 outline-none transition duration-200 resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 rounded-md text-white font-bold cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
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
