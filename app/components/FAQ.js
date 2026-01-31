"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faq = [
  {
    question: "How do I track the progress of my project in real-time?",
    answer:
      "You’ll get access to my custom Client Portal where you can track development sprints, task progress, GitHub commits, and give feedback in real time.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "I specialize in full-stack development using React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and modern authentication systems like OAuth and JWT.",
  },
  {
    question: "Do you build both frontend and backend?",
    answer:
      "Yes. I design responsive frontends and build secure, scalable backends including APIs, databases, authentication, and admin dashboards.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Absolutely. Every project is built mobile-first and tested across devices to ensure smooth performance on phones, tablets, and desktops.",
  },
  {
    question: "Can you integrate third-party services?",
    answer:
      "Yes. I integrate services like Stripe, PayPal, Firebase, Cloudinary, Google OAuth, GitHub OAuth, hCaptcha, and more.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. I offer bug fixes, performance optimization, and feature updates after launch depending on the support plan we agree on.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on complexity. A landing page may take 3–5 days, while a full-stack app can take 2–4 weeks with milestones.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Header */}
      <section className="mt-20">
        <header className="flex justify-center flex-col items-center text-center">
          <h1 className="text-[25px] sm:text-[40px] font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-gray-500 text-[16px] sm:text-[17px] font-medium">
            Everything you need to know about my work and process.
          </p>
        </header>
      </section>

      {/* FAQ List */}
      <section className="mt-12 flex justify-center">
        <div className="w-full max-w-3xl space-y-4 px-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="Faq-Container border border-gray-700 rounded-xl bg-white transition-all"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <h1 className="font-semibold text-gray-900 text-[16px] sm:text-[18px]">
                  {item.question}
                </h1>
                <ChevronDown
                  className={`transition-transform duration-300 text-gray-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 px-5 pb-5" : "max-h-0 px-5"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
