"use client";
import { useEffect } from "react";

export default function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-3xl aspect-video">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl z-10 bg-black bg-opacity-60 px-3 py-1 rounded"
        >
          ✕
        </button>
        
        <iframe
          className="w-full h-full rounded"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
          title="Rickroll"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}