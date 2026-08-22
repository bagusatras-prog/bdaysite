import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { popInItem } from "../animations/variants";
import { birthdayData } from "../data/birthdayData";
import { Heart, X } from "lucide-react";

export const Scene3 = ({ onNext }) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 max-w-3xl mx-auto text-center">
      <motion.h2
        variants={popInItem}
        className="font-display text-4xl font-bold mb-8"
      >
        Top 6 favorit aku tentang kamu ♡
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full mb-8">
        {birthdayData.compliments.map((item) => (
          <motion.div
            key={item.id}
            variants={popInItem}
            style={{ rotate: `${item.rotation}deg` }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(item)}
            className="cursor-pointer bg-[#FFFDF9] border-2 border-[#4A3B32] rounded-2xl p-4 shadow-scrapbook flex flex-col items-center"
          >
            <Heart size={24} className="mb-2 text-[#E65B65]" />
            <h3 className="font-display font-bold text-sm">{item.title}</h3>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 bg-[#4A3B32]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#FFFDF9] border-3 border-[#4A3B32] rounded-3xl p-6 max-w-md text-center"
            >
              <h3 className="font-display text-2xl font-bold mb-2">
                {selected.title}
              </h3>
              <p className="mb-6">{selected.content}</p>
              <button
                onClick={() => setSelected(null)}
                className="px-6 py-2 bg-[#F2C4CE] font-bold rounded-full border border-[#4A3B32]"
              >
                Next
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        variants={popInItem}
        onClick={onNext}
        className="px-7 py-3 bg-[#F2C4CE] font-bold rounded-full border-2 border-[#4A3B32]"
      >
        See Our Photo Album →
      </motion.button>
    </div>
  );
};
