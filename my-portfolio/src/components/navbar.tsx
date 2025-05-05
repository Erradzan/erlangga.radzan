"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const goToHome = () => {
    router.push("/home");
  };

  const goToAbout = () => {
    router.push("/about");
  };

  const goToProjects = () => {
    router.push("/projects");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-white sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl font-bold">
            Erlangga Sukmaradzan - Web Developer
          </div>
    
          <motion.button
            onClick={toggleDropdown}
            className="bg-transparent text-white px-4 py-2 cursor-pointer border border-white rounded-full sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? "Close" : "Menu"}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center space-y-4 py-4 bg-transparent"
            >
                <motion.button
                onClick={goToHome}
                className="text-white border-b border-white cursor-pointer hover:zoom sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl"
                whileHover={{ scale: 1.05 }}
                >
                    Home
                </motion.button>
                
                <motion.button
                    onClick={goToAbout}
                    className="text-white border-b border-white cursor-pointer hover:zoom sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl"
                    whileHover={{ scale: 1.05 }}
                >
                    About Me
                </motion.button>
                
                <motion.button
                    onClick={goToProjects}
                    className="text-white border-b border-white cursor-pointer hover:zoom sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl"
                    whileHover={{ scale: 1.05 }}
                >
                    Projects
                </motion.button>
            </motion.div>
          )}
        
        </AnimatePresence>
      </div>
    </>
  );
}
