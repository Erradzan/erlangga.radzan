"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiJavascript, SiPostman } from "react-icons/si";
import RunningImage from "@/components/runningimage";
import Image from "next/image";

export default function HomePage() {
  return (
    <motion.div 
      className="flex flex-col flex-grow pt-40 pb-20 items-center justify-center min-h-screen bg-gradient-to-r from-black via-[#1a0000] to-[#4b0000]"
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
        className="flex flex-col items-center w-auto"
      >
        <RunningImage />
        
        <h1 className="text-2xl  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold text-white text-center">Hi, my name is Erlangga Sukmaradzan</h1>
        
        <p className="text-md md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400 mt-4 max-w-5xl text-center">
         <span className="text-[#4b0000] text-outline">Frontend Developer | React.js | Next.js | Finance |</span><span className="text-black text-outline"> Payroll | Accounting | Gamer | Music Enthusiast </span>
        </p>
        
        <div className="flex flex-col items-center gap-4 mt-10 mb-10">
          <h2 className="text-white text-2xl font-semibold">Download My CV</h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/support/ATS CV Erlangga.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4b0000] hover:bg-black border border-white text-white px-6 py-2 rounded shadow transition duration-300"
            >
              Download ATS CV
            </motion.a>
            
            <motion.a
              href="/support/CV Erlangga.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-[#4b0000] border border-white text-white px-6 py-2 rounded shadow transition duration-300"
            >
              Download CV
            </motion.a>
          </div>
        </div>

        <section className="text-white text-center mt-20 max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <FaReact />, title: "React.js" },
              { icon: <SiNextdotjs />, title: "Next.js" },
              { icon: <SiTailwindcss />, title: "Tailwind CSS" },
              { icon: <FaHtml5 />, title: "HTML5" },
              { icon: <FaCss3Alt />, title: "CSS3" },
              { icon: <SiJavascript />, title: "JavaScript" },
              { icon: <SiPostman />, title: "Postman" },
              { icon: <FaGitAlt />, title: "Git" },
              { icon: <SiFramer />, title: "Framer Motion" },
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
        <section className="mt-20 text-center px-4 max-w-4xl">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's Achieve Greatness Together
          </motion.h2>

          <motion.p 
            className="text-gray-300 mb-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Collaboration is one of the best tools for innovation. If we work together, we can build something truly amazing. Can't wait to hear from you.
          </motion.p>

          <motion.div 
            className="rounded-lg overflow-hidden shadow-lg mx-auto flex justify-center items-center max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Image
              src="/support/giphy.gif"
              alt="Teamwork GIF"
              width={320}
              height={240}
              className="w-80 h-auto justify-center items-center"
            />
          </motion.div>

          <motion.p 
            className="text-white font-semibold mt-16 mb-10 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Thank you for visiting my portfolio.<br></br> If you have any questions or want to work together, please don't hesitate to contact me.
          </motion.p>

          <motion.p 
            className="text-white font-semibold mt-16 mb-10 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
          >
            Have a nice day!
          </motion.p>
        </section>
      </motion.div>
      <Footer />
    </motion.div>
  );
}