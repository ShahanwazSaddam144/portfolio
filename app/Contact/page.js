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

  const [showCopyPopup, setShowCopyPopup] = useState(false);

  // 🔔 Toast state
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success", // success | error
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong 😬");

      // ✅ Success toast
      setToast({
        show: true,
        message: "Message sent successfully ✅",
        type: "success",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      // ❌ Error toast
      setToast({
        show: true,
        message: error.message || "Failed to send message ❌",
        type: "error",
      });
    }

    // Auto hide toast
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 3000);
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
        className="px-4 mt-20"
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
            <div className="flex flex-col justify-between bg-gray-100 rounded-xl px-6 py-5 shadow-md w-full md:w-1/2">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <p className="break-all font-medium">
                  shahnawazsaddamb@gmail.com
                </p>
              </div>

              <button
                onClick={() => handleCopy("shahnawazsaddamb@gmail.com")}
                className="mt-4 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-white"
              >
                <Copy size={16} />
                Copy Email
              </button>
            </div>

            {/* GitHub */}
            <div className="flex flex-col justify-between items-center bg-gray-100 rounded-xl px-6 py-5 shadow-md w-full md:w-1/2">
              <a
                href="https://github.com/ShahanwazSaddam144"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
              >
                <Github size={18} />
                Visit GitHub
              </a>

              <p className="text-center italic text-gray-600 text-sm mt-4">
                "Code is like humor. When you have to explain it, it’s bad."
              </p>
            </div>
          </div>

          {/* ================= COPY POPUP ================= */}
          <AnimatePresence>
            {showCopyPopup && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-md z-50"
              >
                ✅ Copied!
              </motion.div>
            )}
          </AnimatePresence>

          {/* ================= CONTACT FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-2 rounded-md border-gray-300 focus:border-blue-600 px-3 py-2 outline-none transition duration-200"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-2 rounded-md border-gray-300 focus:border-blue-600 px-3 py-2 outline-none transition duration-200"
            />

            <input
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border-2 rounded-md border-gray-300 focus:border-blue-600 px-3 py-2 outline-none transition duration-200"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border-2 rounded-md border-gray-300 focus:border-blue-600 px-3 py-2 outline-none transition duration-200"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 rounded-md text-white font-bold"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.section>

      {/* ================= TOAST (BOTTOM RIGHT) ================= */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-lg shadow-lg text-white font-medium
              ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
            `}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
