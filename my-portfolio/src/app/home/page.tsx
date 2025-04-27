"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const goToAbout = () => {
    setMessage("Please wait...");
    router.push("/about");
  };

  const goToProjects = () => {
    setMessage("Please wait...");
    router.push("/projects");
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-gradient-to-r from-gray-600 via-blue-900 to-black"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      style={{ backgroundSize: "200% 200%" }}
    >
      <motion.button
        onClick={goToAbout}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        About Me
      </motion.button>

      <motion.button
        onClick={goToProjects}
        className="px-6 py-3 bg-green-500 text-white rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Projects
      </motion.button>

      {message && (
        <motion.p 
          animate={{ opacity: 1 }} 
          initial={{ opacity: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-white text-lg font-semibold"
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
}
