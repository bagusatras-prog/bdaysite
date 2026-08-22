import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { popInItem } from '../animations/variants';
import { birthdayData } from '../data/birthdayData';
import { RotateCcw } from 'lucide-react';

export const Scene6 = ({ onNext }) => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 max-w-xl mx-auto text-center">
      <motion.p variants={popInItem} className="font-handwriting text-2xl text-[#8C7A6B]">
        My favorite poem, just for you.
      </motion.p>

      <motion.h2 variants={popInItem} className="font-display text-3xl sm:text-4xl font-bold text-[#4A3B32] mb-6">
        Hearts
      </motion.h2>

      {/* Handwritten Letter Container */}
      <motion.div 
        key={key}
        variants={popInItem}
        className="bg-[#FFFDF9] border-2 border-[#4A3B32] rounded-3xl p-6 sm:p-8 shadow-scrapbook relative w-full text-left paper-pattern"
      >
        <div className="tape-top"></div>

        <div className="space-y-4 my-4 font-handwriting text-xl sm:text-2xl text-[#4A3B32] leading-relaxed">
          {birthdayData.poem.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.8 + 0.3, duration: 0.6 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="flex items-end justify-between mt-6 pt-4 border-t border-dashed border-[#D9C8B4]">
          <button 
            onClick={handleReplay}
            className="flex items-center gap-1 text-xs font-sans text-[#8C7A6B] hover:text-[#4A3B32]"
          >
            <RotateCcw size={12} /> Read again
          </button>
          
          {/* GAMBAR SNOOPY HOLD HEART DENGAN EFEK HOVER MEMBESAR */}
          <motion.img 
            src="/images/snoopyholdheart.png" 
            alt="Snoopy Holding Heart" 
            className="w-20 h-20 object-contain drop-shadow-sm cursor-pointer" 
            whileHover={{ scale: 1.25, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
      </motion.div>

      <motion.button
        variants={popInItem}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-8 px-8 py-3 bg-[#F2C4CE] text-[#4A3B32] font-display font-bold text-lg rounded-full border-2 border-[#4A3B32] shadow-sm"
      >
        One Last Surprise ✨
      </motion.button>
    </div>
  );
};