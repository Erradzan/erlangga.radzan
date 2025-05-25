"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState } from "react";
import { projects, Project } from "@/components/projectdata";
import ProjectCard from "@/components/projectcard";
import ProjectModal from "@/components/projectmodal";

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <motion.div 
      className="flex flex-col flex-grow pt-40 pb-20 items-center justify-center min-h-screen bg-gradient-to-r from-black via-[#1a0000] to-[#4b0000]"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      style={{ backgroundSize: "200% 200%" }}
    >
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-white justify-center items-center flex">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>

      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;