import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { popInItem } from "../animations/variants";
import { birthdayData } from "../data/birthdayData";
import confetti from "canvas-confetti";

export const Scene5 = ({ onNext }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const currentGame = birthdayData.memoryGame[currentIdx];

  const handleSelect = (idx) => {
    setSelectedOption(idx);
    if (idx === currentGame.correctIndex) {
      setIsCorrect(true);
      confetti();
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentIdx < birthdayData.memoryGame.length - 1)
      setCurrentIdx((c) => c + 1);
    else onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 max-w-xl mx-auto text-center">
      <motion.h2
        variants={popInItem}
        className="font-display text-4xl font-bold mb-6"
      >
        Which Memory is This? 🤔
      </motion.h2>
      <motion.div
        variants={popInItem}
        className="bg-[#FFFDF9] border-2 border-[#4A3B32] rounded-3xl p-6 shadow-scrapbook w-full relative"
      >
        <h3 className="font-display text-xl font-bold mb-6">
          {currentGame.question}
        </h3>
        <div className="grid grid-cols-1 gap-3 mb-6">
          {currentGame.options.map((opt, idx) => {
            let btnStyle = "bg-[#FAF6EE] border-[#4A3B32]";
            if (selectedOption !== null) {
              if (idx === currentGame.correctIndex) {
                btnStyle = "bg-[#C7E5C9] font-bold border-[#4A3B32]";
              } else if (selectedOption === idx) {
                btnStyle = "bg-[#F8D7DA] border-[#4A3B32]";
              }
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={selectedOption !== null}
                className={`py-3 px-4 rounded-xl border-2 transition-colors ${btnStyle}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* KOTAK TEKS MEMORI (Akan muncul setelah opsi dipilih) */}
        <AnimatePresence>
          {selectedOption !== null && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="mb-6 p-4 bg-[#F3EBDD] border-2 border-dashed border-[#8C7A6B] rounded-2xl text-left"
            >
              <p className="font-display font-bold text-sm text-[#E65B65] mb-1">
                {isCorrect ? "✨ Yeay, Benar!" : "💫 Kenangan Kita:"}
              </p>
              <p className="font-handwriting text-lg text-[#4A3B32] leading-relaxed">
                {currentGame.memoryText}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {selectedOption !== null && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleNextQuestion}
            className="w-full py-3 bg-[#F2C4CE] font-bold rounded-full border-2 border-[#4A3B32]"
          >
            {currentIdx < birthdayData.memoryGame.length - 1
              ? "Next Memory →"
              : "Read My Letter ♡"}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};
