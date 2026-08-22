import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { popInItem } from "../animations/variants";
import { birthdayData } from "../data/birthdayData";
import confetti from "canvas-confetti";
import { Heart, Sparkles, RotateCcw } from "lucide-react";

export const Scene7 = ({ onRestart }) => {
  const [showWish, setShowWish] = useState(false);

  const handleReveal = () => {
    setShowWish(true);
    try {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.5 },
        colors: ["#F2C4CE", "#FAF6EE", "#E65B65", "#FFD166"],
      });
    } catch (e) {}
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 max-w-xl mx-auto text-center relative">
      {/* Main Dark Card Container */}
      <motion.div
        variants={popInItem}
        className="bg-[#2C2421] text-[#FAF6EE] border-2 border-[#4A3B32] rounded-3xl p-8 sm:p-10 shadow-scrapbook relative w-full overflow-hidden"
      >
        <div className="tape-top bg-[#FAF6EE]/20"></div>

        {!showWish ? (
          <div className="flex flex-col items-center py-6 relative z-10">
            {/* GAMBAR SNOOPY SINGING */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="mb-6"
            >
              <img
                src="/images/snoopysinging.png"
                alt="Snoopy Singing"
                className="w-50 sm:w-56 object-contain drop-shadow-lg"
              />
            </motion.div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              One Last Thing...
            </h3>

            <p className="font-handwriting text-lg text-[#D9C8B4] mb-8 max-w-md">
              Ada satu harapan terakhir yang ingin kuucap khusus untukmu di hari
              spesial ini...
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReveal}
              className="px-8 py-3.5 bg-[#E65B65] text-white font-display font-bold text-base rounded-full border-2 border-[#FAF6EE] shadow-lg flex items-center gap-2"
            >
              <Sparkles size={18} /> Reveal Final Wish ✨
            </motion.button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-4 flex flex-col items-center relative z-10"
          >
            <div className="w-16 h-16 bg-[#E65B65]/20 rounded-full flex items-center justify-center mb-4 border border-[#E65B65]">
              <Heart className="text-[#E65B65] w-8 h-8 fill-current animate-pulse" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2C4CE] mb-4">
              My final wish..
            </h3>

            <p className="font-handwriting text-xl sm:text-2xl text-[#FAF6EE] leading-relaxed mb-8 text-center">
              "{birthdayData.finalWish}"
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRestart}
              className="px-6 py-2.5 bg-[#FAF6EE] text-[#2C2421] font-display font-bold text-sm rounded-full border border-[#4A3B32] shadow-sm flex items-center gap-2"
            >
              <RotateCcw size={14} /> Restart
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
