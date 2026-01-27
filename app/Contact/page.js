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

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // ✅ FIXED: handleChange added
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      let data = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {}

      if (!res.ok) {
        throw new Error(data.error || "Server error. Please try again ❌");
      }

      setToast({
        show: true,
        message: "Message sent successfully ✅",
        type: "success",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setToast({
        show: true,
        message: error.message || "Failed to send message ❌",
        type: "error",
      });
    }

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
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>

          <motion.form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full bg-blue-600 text-white py-2 rounded-md font-bold"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.section>

      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className={`fixed bottom-6 right-6 px-5 py-3 rounded-lg text-white
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
