"use client";

import React from "react";
import { Laptop, Wrench, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    Icon: Laptop,
    Name: "Web Development",
    Services:
      "I will develop modern, responsive, and user-friendly websites to your needs using the latest technologies.",
  },
  {
    Icon: Wrench,
    Name: "Web Maintenance",
    Services:
      "I will maintain, update, and optimize your website to ensure fast performance, security, and smooth user experience.",
  },
  {
    Icon: Code2,
    Name: "Python Development",
    Services:
      "I will build efficient Python scripts, automation tools, and backend systems for your projects and applications.",
  },
];

const Services = () => {
  return (
    <>
      <motion.section
        className="Services mt-20 px-6 mb-5"
        id="services"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-center font-extrabold text-gray-900 text-[40px] mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Services
        </motion.h1>

        <div className="flex items-center justify-center flex-wrap gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="Services-Container w-[280px] cursor-pointer bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.Icon className="w-12 h-12 text-gray-700" />
              <h3 className="text-xl text-gray-900 font-bold mt-4">
                {service.Name}
              </h3>
              <p className="text-gray-600 mt-2">{service.Services}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Services;
