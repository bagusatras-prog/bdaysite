import React, { useState } from "react";
import { motion } from "framer-motion";
import { popInItem } from "../animations/variants";
import confetti from "canvas-confetti";

export const Scene1 = ({ onNext, onInteraction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      onInteraction();
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#F2C4CE", "#FAF6EE", "#E65B65", "#FFD166"],
        });
      } catch (e) {}
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4 relative w-full">
      {/* GAMBAR SNOOPY BAWA KUE (Dengan efek mengapung halus seperti Woodstock) */}
      <div className="hidden md:block absolute left-20 lg:left-38 top-[68%] -translate-y-1/2 z-0">
        <motion.div
          variants={popInItem}
          animate={{
            y: [0, -10, 0], // Efek naik-turun lembut (mengapung)
            rotate: [0, 3, -3, 0], // Efek miring pelan
          }}
          transition={{
            duration: 4, // Durasi 4 detik (sama persis seperti Woodstock, jadi santai)
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.08, rotate: 0 }}
        >
          <img
            src="/images/snoopyholdcake.png"
            alt="Snoopy Holding Cake"
            className="w-64 lg:w-96 drop-shadow-xl"
          />
        </motion.div>
      </div>

      {/* GAMBAR WOODSTOCK (Di pojok kanan atas) */}
      <div className="hidden md:block absolute right-8 lg:right-24 top-16 lg:top-24 z-0">
        <motion.div
          variants={popInItem}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          whileHover={{ scale: 1.15 }}
        >
          <img
            src="/images/woodstock.png"
            alt="Woodstock Flying"
            className="w-24 lg:w-32 drop-shadow-md"
          />
        </motion.div>
      </div>

      {/* GAMBAR WOODSTOCK 2 (Di pojok kanan atas, tepat di bawah Woodstock 1) */}
      <div className="hidden md:block absolute right-20 lg:right-40 top-48 lg:top-56 z-0">
        <motion.div
          variants={popInItem}
          animate={{ y: [0, -12, 0], rotate: [0, -5, 5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
            delay: 1,
          }}
          whileHover={{ scale: 1.15 }}
        >
          <img
            src="/images/woodstock.png"
            alt="Woodstock Flying 2"
            className="w-20 lg:w-28 drop-shadow-md scale-x-[-1]"
          />
        </motion.div>
      </div>

      {/* Pembungkus konten utama (z-10 agar selalu di depan) */}
      <div className="z-10 flex flex-col items-center">
        {/* Title Header */}
        <motion.p
          variants={popInItem}
          className="font-handwriting text-2xl sm:text-3xl text-[#8C7A6B] mb-2"
        >
          Someone left a special gift for you...
        </motion.p>

        <motion.h1
          variants={popInItem}
          className="font-display text-3xl sm:text-5xl font-bold text-[#4A3B32] mb-8"
        >
          A Little Birthday Surprise
        </motion.h1>

        {/* Interactive Envelope Container */}
        <motion.div
          variants={popInItem}
          whileHover={{ scale: isOpen ? 1 : 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleEnvelopeClick}
          className="relative cursor-pointer my-4 group"
        >
          <div className="w-64 h-44 sm:w-80 sm:h-52 bg-[#F3EBDD] border-3 border-[#4A3B32] rounded-2xl shadow-scrapbook relative flex items-center justify-center overflow-hidden">
            {/* Tape Accent */}
            <div className="tape-top"></div>

            {!isOpen ? (
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <span className="text-4xl">✉️</span>
                </motion.div>
                <p className="font-handwriting text-2xl text-[#4A3B32]">
                  Tap to open envelope ♡
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 flex flex-col items-center"
              >
                <img
                  src="/images/snoopwood.png"
                  alt="Snoopy and Woodstock"
                  className="w-28 h-28 object-contain mb-1 drop-shadow-sm"
                />
                <p className="font-handwriting text-2xl font-bold text-[#E65B65]">
                  Special Letter Inside!
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Button appears after opening */}
        {isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="mt-6 px-8 py-3 bg-[#F2C4CE] text-[#4A3B32] font-display font-bold text-lg rounded-full border-2 border-[#4A3B32] shadow-scrapbook flex items-center gap-2"
          >
            Read Letter
          </motion.button>
        )}
      </div>

      {/* ANIMASI SNOOPY & FRIENDS BERJALAN DI DASAR WEBSITE */}
      <div className="fixed bottom-1 left-0 w-full overflow-hidden pointer-events-none z-30">
        <motion.div
          animate={{
            x: ["100vw", "-120vw"],
            y: [0, -2, 0, -2, 0], // Efek goyang/langkah kaki kecil
          }}
          transition={{
            x: {
              duration: 24, // Durasi jalan pelan (24 detik)
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 1.5, // Kecepatan goyangan langkah
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex w-max items-end"
        >
          <img
            src="/images/snoopyfriends.png"
            alt="Snoopy and Friends Walking"
            className="h-16 md:h-24 w-auto object-contain drop-shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
};
