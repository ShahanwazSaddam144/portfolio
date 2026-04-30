"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../Data/projectsData";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Selected Projects
        </h1>
        <p className="text-gray-400 mb-8 max-w-3xl">A curated selection of projects showcasing full-stack work, real-time systems, and design-led frontends — styled to match the site theme.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(34,211,238,0.08)" }}
              className="relative rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-cyan-500/20 p-4"
            >
              <div className="h-40 w-full overflow-hidden rounded-lg mb-4">
                <img src={p.image} alt={p.Heading} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-xl font-semibold text-gray-100 mb-2">{p.Heading}</h3>
              <p className="text-sm text-gray-300 mb-4">{p.Text}</p>

              <div className="flex items-center justify-between gap-3">
                <Link href={`/projects/${p.slug}`}>
                  <a className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm">Read more</a>
                </Link>

                <div className="flex items-center gap-2">
                  {p.demoLink && (
                    <a href={p.demoLink} target="_blank" rel="noreferrer" className="text-sm text-cyan-300 hover:underline">Live</a>
                  )}
                  {p.Repo && (
                    <a href={p.Repo} target="_blank" rel="noreferrer" className="text-sm text-blue-300 hover:underline">Repo</a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
