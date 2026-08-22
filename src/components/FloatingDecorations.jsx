import React from "react";
import { motion } from "framer-motion";

export const FloatingDecorations = () => {
  const items = [
    { type: "✨", top: "10%", left: "8%", delay: 0 },
    { type: "🌸", top: "18%", right: "12%", delay: 1 },
    { type: "☁️", top: "75%", left: "6%", delay: 2 },
    { type: "⭐", top: "82%", right: "10%", delay: 0.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + idx,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
          className="text-lg opacity-60"
        >
          {item.type}
        </motion.div>
      ))}
    </div>
  );
};
