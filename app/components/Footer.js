import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="Footer bg-gray-100 text-gray-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Left: Name or Logo */}
        <div className="text-lg font-semibold mb-4 sm:mb-0">
          © {new Date().getFullYear()} Shahnawaz Saddam Butt
        </div>

        {/* Middle: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:shahnawazsaddamb@gmail.com"
            className="hover:text-gray-900 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      {/* Optional Bottom Line */}
      <p className="text-center text-sm text-gray-900 mt-4">
        Built with 💻 using Next.js & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
