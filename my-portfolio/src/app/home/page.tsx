"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiJavascript, SiPostman } from "react-icons/si";

export default function HomePage() {
  return (
    <motion.div 
      className="flex flex-col flex-grow pt-20 pb-20 items-center justify-center min-h-screen bg-gradient-to-r from-gray-600 via-blue-900 to-black"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      style={{ backgroundSize: "200% 200%" }}
    >
      <Navbar />

      <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}     
      className="flex flex-col items-center">
        <img
          src="/support/logo.webp"
          alt="Logo"
          className="h-50 w-auto cursor-pointer"
        />
        <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold text-white">Hi, my name is Erlangga Sukmaradzan</h1>
        <p className="text-md md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400 mt-4 max-w-5xl text-center">
          Frontend Developer | React.js | Next.js | Finance | Payroll | Accounting | Gamer | Music Enthusiast
        </p>
      </motion.div>
      <section className="text-white text-center mt-20 max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: <FaReact />, title: "React.js" },
            { icon: <SiNextdotjs />, title: "Next.js" },
            { icon: <SiTailwindcss />, title: "Tailwind CSS" },
            { icon: <SiFramer />, title: "Framer Motion" },
            { icon: <FaGitAlt />, title: "Git" },
            { icon: <FaHtml5 />, title: "HTML5" },
            { icon: <FaCss3Alt />, title: "CSS3" },
            { icon: <SiJavascript />, title: "JavaScript" },
            { icon: <SiPostman />, title: "Postman" },
          ].map((skill, index) => (
            <div 
              key={index}
              className="relative w-24 h-24 flex flex-col items-center justify-center transition-transform transform hover:scale-110 group"
            >
              <div className="text-5xl flex items-center justify-center transition-all duration-300">
                {skill.icon}
              </div>
              <p className="absolute bottom-0 translate-y-full text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.title}
              </p>
              <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 group-hover:border-4 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-white text-center mt-20 max-w-5xl px-4">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400">A sleek personal portfolio built with Next.js and Tailwind CSS showcasing my work and skills.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">E-commerce App</h3>
            <p className="text-gray-400">A responsive online store built using the MERN stack with features like authentication and cart management.</p>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}