'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Sun,
  Moon,
  Menu,
  X,
  User2,
  FolderGit,
  Phone,
  Code,
  GithubIcon,
  GitBranchIcon,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    const darkModeOn = !isDarkMode;
    setIsDarkMode(darkModeOn);
    document.body.classList.toggle('dark-mode', darkModeOn);
    localStorage.setItem('theme', darkModeOn ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    if (isDark) document.body.classList.add('dark-mode');
  }, []);

  return (
    <nav className="fixed top-0 bg-gray-100 Navbar left-0 w-full p-4 z-10">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-[23px] sm:text-[30px] font-bold">
            Shahnawaz Saddam Butt
          </h1>
        </Link>

        {/* Desktop links */}
        <ul className="hidden min-[1021px]:flex space-x-8 items-center">
          <li>
            <Link
              href="/About"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-600 px-4 py-2 rounded font-semibold"
            >
              <User2 size={18} /> About
            </Link>
          </li>
          <li>
            <Link
              href="/Projects"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <FolderGit size={18} /> Projects
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <Code size={18} /> Services
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/ShahanwazSaddam144?tab=repositories"
              target="_blank"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <GithubIcon size={22} /> GitHub
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <Phone size={18} /> Contact
            </Link>
          </li>
          <li>
            <button onClick={handleDarkMode} className="text-2xl mt-[8px]">
              {isDarkMode ? <Moon size={22} /> : <Sun size={22} />}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="min-[1021px]:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="min-[1021px]:hidden mt-4 space-y-4 w-[160px] mx-auto text-center rounded-lg py-4 shadow-lg">
          <li>
            <Link
              href="/About"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <User2 size={18} /> About
            </Link>
          </li>
          <li>
            <Link
              href="/Projects"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <FolderGit size={18} /> Projects
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <Code size={18} /> Services
            </Link>
          </li>
            <li>
            <Link
              href="https://github.com/ShahanwazSaddam144?tab=repositories"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <GithubIcon size={18} /> GitHub
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <Phone size={18} /> Contact
            </Link>
          </li>
          <li>
            <button
              onClick={handleDarkMode}
              className="flex items-center ml-5 justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              {isDarkMode ? <Moon size={18} /> : <Sun size={18} />} Theme
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
