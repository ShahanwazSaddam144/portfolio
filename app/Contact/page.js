"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",    
    email: "",
    phone: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("📝 Field changed:", e.target.name, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🚀 Sending form data:", formData);

    try {
      const res = await fetch("https://wahb.space/api/contact", {
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
      console.error("❌ Error submitting form:", error.message || error);
      alert(error.message || "Failed to send message.");
    }
  };

  return (
    <>
      <Navbar />
      <motion.section
        className="Contact px-4 mt-30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.h1
            className="text-[35px] font-bold text-center text-gray-900 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Contact Me
          </motion.h1>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={formData.name}
              required
              whileFocus={{ scale: 1.02 }}
              className="Input w-full border-2 rounded-[5px] border-gray-300 focus:border-gray-600 px-2 py-2 outline-none transition duration-200"
            />

            <motion.input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={formData.email}
              required
              whileFocus={{ scale: 1.02 }}
              className="Input w-full border-2 rounded-[5px] border-gray-300 focus:border-gray-600 px-2 py-2 outline-none transition duration-200"
            />

            <motion.input
              name="phone"
              type="text"
              placeholder="Your Phone"
              onChange={handleChange}
              value={formData.phone}
              required
              whileFocus={{ scale: 1.02 }}
              className="Input w-full border-2 rounded-[5px] border-gray-300 focus:border-gray-600 px-2 py-2 outline-none transition duration-200"
            />

            <motion.textarea
              name="message"
              placeholder="Enter Your Message"
              onChange={handleChange}
              value={formData.message}
              required
              rows="4"
              whileFocus={{ scale: 1.02 }}
              className="Input w-full border-2 rounded-[5px] border-gray-300 focus:border-gray-600 px-2 py-2 outline-none transition duration-200 resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full bg-gradient-to-r from-gray-600 to-gray-800 px-5 py-2 rounded-[6px] text-white cursor-pointer font-bold hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Send Message
            </motion.button>
          </motion.form>

          {responseMsg && (
            <motion.p
              className="mt-6 text-center text-[18px] mb-5 text-green-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {responseMsg}
            </motion.p>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
