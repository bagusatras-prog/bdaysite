import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { popInItem } from "../animations/variants";
import { birthdayData } from "../data/birthdayData";
import { Shuffle } from "lucide-react";

export const Scene4 = ({ onNext }) => {
  const [photos, setPhotos] = useState(birthdayData.photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const shufflePhotos = () => {
    setPhotos(
      [...photos].map((p) => ({ ...p, rotation: (Math.random() - 0.5) * 12 })),
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 max-w-4xl mx-auto text-center">
      <div className="flex items-center gap-3 mb-6">
        <motion.h2
          variants={popInItem}
          className="font-display text-4xl font-bold text-[#4A3B32]"
        >
          Little Pieces of You 📸
        </motion.h2>
        <button
          onClick={shufflePhotos}
          className="p-2 border border-[#4A3B32] rounded-full"
        >
          <Shuffle size={16} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mb-8">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            variants={popInItem}
            style={{ rotate: `${photo.rotation}deg` }}
            whileHover={{ scale: 1.08, zIndex: 30 }}
            onClick={() => setSelectedPhoto(photo)}
            className="cursor-pointer bg-[#FFFDF9] p-3 border-2 border-[#4A3B32] rounded-xl shadow-polaroid relative"
          >
            <div className="w-16 h-5 bg-tape-yellow absolute -top-3 left-1/2 -translate-x-1/2 border-dashed border-x border-[#8C7A6B]/40 shadow-sm z-10" />
            <div className="w-full aspect-square rounded-lg overflow-hidden border border-[#4A3B32]/20 mb-3">
              <img src={photo.src} className="w-full h-full object-cover" />
            </div>
            <p className="font-handwriting text-lg">{photo.date}</p>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 bg-[#4A3B32]/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#FFFDF9] border-3 border-[#4A3B32] rounded-3xl p-5 max-w-md text-center"
            >
              <img
                src={selectedPhoto.src}
                className="w-full aspect-square rounded-2xl object-cover border-2 border-[#4A3B32] mb-4"
              />
              <p className="font-handwriting text-2xl font-bold text-[#E65B65]">
                {selectedPhoto.date}
              </p>
              <p className="mb-4">{selectedPhoto.caption}</p>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-6 py-2 bg-[#F2C4CE] font-bold rounded-full border border-[#4A3B32]"
              >
                Close ♡
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
        Play a Mini Game 🎮
      </motion.button>
    </div>
  );
};
