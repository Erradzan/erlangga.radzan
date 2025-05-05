// RunningImage.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import VideoModal from "./modal";

export default function RunningImage() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseEnter = () => {
    const randomX = Math.floor(Math.random() * 400) - 200;
    const randomY = Math.floor(Math.random() * 200) - 100;
    setX(x + randomX);
    setY(y + randomY);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="relative w-50 h-50">
      <motion.img
        src="/support/logo.webp"
        alt="Running"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 500 }}
        className="absolute w-auto h-50 z-20 cursor-pointer"
      />
      
      <VideoModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}