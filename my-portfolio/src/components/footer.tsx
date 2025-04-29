"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex flex-col justify-center items-center bg-transparent backdrop-blur-md py-2">
        <div className="flex space-x-12 text-white sm:text-md md:text-lg lg:text-xl xl:text-3xl 2xl:text-5xl">
            <motion.a
            href="https://github.com/Erradzan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-gray-400 cursor-pointer"
            >
                <FaGithub />
            </motion.a>

            <motion.a
            href="https://www.linkedin.com/in/erlangga-sukmaradzan/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-gray-400 cursor-pointer"
            >
                <FaLinkedin />
            </motion.a>

            <motion.a
            href="http://wa.me/+6285947491314"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-gray-400 cursor-pointer"
            >
                <FaWhatsapp />
            </motion.a>
        </div>
        <p className="text-white mt-4 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-center px-4">
            Currently looking for new opportunities. Feel free to reach out!
        </p>
    </footer>
  );
}
