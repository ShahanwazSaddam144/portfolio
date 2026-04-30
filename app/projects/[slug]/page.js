"use client";

import React from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projects } from "../../Data/projectsData";
import { motion } from "framer-motion";

const ProjectGallery = dynamic(() => import("../../components/ProjectGallery"), { ssr: false });

export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-gradient-to-br from-slate-900/90 to-slate-800/85 rounded-2xl p-8 border border-cyan-500/20">
          <div className="flex flex-col lg:flex-row gap-8">

            <div className="lg:w-1/2">
              {project.gallery && project.gallery.length > 0 ? (
                <ProjectGallery gallery={project.gallery} heading={project.Heading} />
              ) : (
                <div className="rounded-lg overflow-hidden">
                  <img src={project.image} alt={project.Heading} className="w-full h-72 object-cover" />
                </div>
              )}
            </div>

            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold text-white mb-2">{project.Heading}</h1>
              <p className="text-gray-300 mb-4">{project.longDescription || project.Text}</p>

              <div className="mb-4">
                <h4 className="text-sm text-gray-400 uppercase">Key features</h4>
                <ul className="mt-3 space-y-2">
                  {(project.features || []).map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                      <span className="text-gray-200">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-sm text-gray-400 uppercase">Project details</h4>
                <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-gray-300">
                  <div><strong>Role:</strong> <span className="text-gray-300">{project.role}</span></div>
                  <div><strong>Status:</strong> <span className="text-gray-300">{project.status}</span></div>
                  <div><strong>Duration:</strong> <span className="text-gray-300">{project.startDate} → {project.endDate}</span></div>
                  <div><strong>Contact:</strong> <a href={`mailto:${project.email}`} className="text-cyan-300 hover:underline">{project.email}</a></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {project.demoLink && <a href={project.demoLink} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-cyan-500 text-white font-medium">View Demo</a>}
                {project.Repo && <a href={project.Repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-cyan-500 text-cyan-300">Repository</a>}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
