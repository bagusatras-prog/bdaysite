import React from "react";
import { motion } from "framer-motion";
import { popInItem } from "../animations/variants";
import { birthdayData } from "../data/birthdayData";

export const Scene2 = ({ onNext, onSnoopyClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4 relative max-w-xl mx-auto">
      {/* Tape Decoration */}
      <div className="tape-top"></div>

      {/* Main Card Scrapbook Box */}
      <motion.div
        variants={popInItem}
        className="bg-[#FFFDF9] border-2 border-[#4A3B32] rounded-3xl p-6 sm:p-10 shadow-scrapbook relative w-full"
      >
        <motion.div
          variants={popInItem}
          className="inline-block bg-[#F8D7DA] px-4 py-1 rounded-full border border-[#4A3B32] text-xs font-bold mb-4"
        >
          🎉 HAPPY BIRTHDAY DAY!
        </motion.div>

        <motion.h1
          variants={popInItem}
          className="font-display text-3xl sm:text-5xl font-extrabold text-[#4A3B32] leading-tight mb-3"
        >
          Happy Birthdayyy,
          <br />
          <span className="text-[#E65B65] font-handwriting text-4xl sm:text-6xl">
            {birthdayData.mbg}
          </span>
        </motion.h1>

        {/* PARAGRAF PERTAMA (Rata Kanan-Kiri / Justify) */}
        <motion.p
          variants={popInItem}
          className="text-[#8C7A6B] text-sm sm:text-base mb-4 leading-relaxed text-justify"
        >
          Happy Birthday, my lovely and my favorite person in every universe,
          hehe. So today, 29 August, is your day, and it will always be your
          day, iykwim. I hope this new age brings you more happiness, more love,
          and everything youve been wishing for. Please stay being you my
          favorite human, my comfort person, and someone that im always grateful
          to have.
        </motion.p>

        {/* PARAGRAF KEDUA (New Paragraph, Rata Kanan-Kiri / Justify) */}
        <motion.p
          variants={popInItem}
          className="text-[#8C7A6B] text-sm sm:text-base mb-6 leading-relaxed text-justify"
        >
          Emm btw, I just wanna make it short that I love you 3000. I love you
          in every universe. I love you even if im reincarnated...
        </motion.p>

        {/* GAMBAR SNOOPY HOME */}
        <motion.div
          variants={popInItem}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSnoopyClick}
          className="my-3 flex justify-center cursor-pointer"
        >
          <img
            src="/images/snoopyhome.png"
            alt="Snoopy and Friends on Doghouse"
            className="w-48 sm:w-60 object-contain drop-shadow-md rounded-2xl"
          />
        </motion.div>

        <p className="text-xs text-[#8C7A6B] italic mb-6">
          (Mereka ingin mengatakan sesuatu tuh, coba klik gambarnyaa!! 🐾)
        </p>

        <motion.button
          variants={popInItem}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-7 py-3 bg-[#F2C4CE] text-[#4A3B32] font-display font-bold text-base rounded-full border-2 border-[#4A3B32] shadow-sm hover:bg-[#E65B65] hover:text-white transition-colors"
        >
          Yuk yuk lanjut.
        </motion.button>
      </motion.div>
    </div>
  );
};
