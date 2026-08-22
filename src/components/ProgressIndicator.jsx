import React from 'react';
import { motion } from 'framer-motion';

export const ProgressIndicator = ({ currentScene, totalScenes, onSelectScene }) => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-40 bg-[#FFFDF9]/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#4A3B32]/30 shadow-sm flex items-center gap-2">
      {Array.from({ length: totalScenes }).map((_, idx) => (
        <button key={idx} onClick={() => onSelectScene(idx + 1)} className="p-1 focus:outline-none">
          <motion.span animate={{ scale: currentScene === idx + 1 ? 1.25 : 1, color: currentScene === idx + 1 ? "#E65B65" : "#D9C8B4" }} className="block text-xs font-bold">{currentScene === idx + 1 ? "♥" : "♡"}</motion.span>
        </button>
      ))}
    </div>
  );
};