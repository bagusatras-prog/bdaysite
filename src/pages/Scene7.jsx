import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { popInItem } from '../animations/variants';
import { birthdayData } from '../data/birthdayData';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, RotateCcw, X, Trash2 } from 'lucide-react';

export const Scene7 = ({ onRestart }) => {
  const [showWish, setShowWish] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  
  // Menyimpan dan memuat foto selfie dari localStorage agar tetap terpampang
  const [selfies, setSelfies] = useState(() => {
    try {
      const saved = localStorage.getItem('birthday_selfies');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem('birthday_selfies', JSON.stringify(selfies));
    } catch (e) {}
  }, [selfies]);

  const handleCameraClick = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert("Tidak dapat mengakses kamera. Pastikan izin kamera diaktifkan pada browser!");
      setIsCameraOpen(false);
    }
  };

  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    setIsCameraOpen(false);
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");

    setSelfies((prev) => [...prev, dataUrl]);
    closeCamera();

    try {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    } catch (e) {}
  };

  const deleteSelfie = (indexToDelete) => {
    setSelfies((prev) => prev.filter((_, idx) => idx !== indexToDelete));
  };

  const handleReveal = () => {
    setShowWish(true);
    try {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#F2C4CE', '#FAF6EE', '#E65B65', '#FFD166']
      });
    } catch (e) {}
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 max-w-xl mx-auto text-center relative pb-20">
      
      {/* Main Dark Card Container */}
      <motion.div 
        variants={popInItem}
        className="bg-[#2C2421] text-[#FAF6EE] border-2 border-[#4A3B32] rounded-3xl p-8 sm:p-10 shadow-scrapbook relative w-full overflow-hidden mb-8"
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
                className="w-36 sm:w-44 object-contain drop-shadow-lg"
              />
            </motion.div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              One Last Thing...
            </h3>
            
            <p className="font-handwriting text-lg text-[#D9C8B4] mb-8 max-w-md">
              Ada satu harapan terakhir yang ingin kuucap khusus untukmu di hari spesial ini...
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
              My Final Wish For You 🎂
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
              <RotateCcw size={14} /> Play Again ♡
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* DAFTAR FOTO SELPIE YANG TERPAPANG DAN BERPUTAR */}
      {selfies.length > 0 && (
        <div className="w-full mb-8">
          <h4 className="font-display text-xl font-bold text-[#4A3B32] mb-4">Memory Selfies Gallery 📸✨</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {selfies.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: [0, 360, 0] }}
                transition={{
                  scale: { duration: 0.5 },
                  rotate: { repeat: Infinity, duration: 12, ease: "linear" }
                }}
                className="bg-white border-2 border-[#4A3B32] p-2 pb-6 rounded-xl shadow-scrapbook w-32 flex flex-col items-center relative group"
              >
                {/* Tombol Hapus Foto */}
                <button
                  onClick={() => deleteSelfie(idx)}
                  className="absolute -top-2 -right-2 bg-[#E65B65] text-white rounded-full p-1 shadow hover:bg-red-700 transition-colors z-20"
                  title="Hapus foto"
                >
                  <Trash2 size={14} />
                </button>
                <img
                  src={photo}
                  alt={`Selfie ${idx}`}
                  className="w-28 h-28 object-cover rounded-lg mb-2"
                />
                <span className="font-handwriting text-xs text-[#4A3B32]">
                  Cute Selfie ♡
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL KAMERA OTOMATIS */}
      <AnimatePresence>
        {isCameraOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#FFFDF9] border-3 border-[#4A3B32] rounded-3xl p-6 max-w-lg w-full text-center relative shadow-2xl"
            >
              <button
                onClick={closeCamera}
                className="absolute top-4 right-4 text-[#4A3B32] hover:text-[#E65B65]"
              >
                <X size={24} />
              </button>
              <h3 className="font-display text-2xl font-bold mb-4 text-[#4A3B32]">
                Smile! Take a Selfie 📸✨
              </h3>
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#4A3B32] mb-4 bg-black aspect-video flex items-center justify-center">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover -scale-x-100"
                />
              </div>
              <button
                onClick={capturePhoto}
                className="px-8 py-3 bg-[#E65B65] text-white font-display font-bold text-base rounded-full border-2 border-[#4A3B32] shadow-md hover:bg-[#d44853] transition-colors"
              >
                Capture Selfie 📷
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TOMBOL / IKON KAMERA DI POJOK KANAN BAWAH + KOMENTAR */}
      <div className="fixed right-6 bottom-6 z-30 flex items-center gap-3">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#FFFDF9] border-2 border-[#4A3B32] px-4 py-2 rounded-2xl shadow-md font-handwriting text-base text-[#4A3B32] hidden sm:block"
        >
          Berikan foto selfie cute kamu saat ini hehe.
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCameraClick}
          className="cursor-pointer"
          title="Berikan foto selfie cute kamu saat ini hehe."
        >
          <img
            src="/images/camera.png"
            alt="Camera Decoration"
            className="w-24 sm:w-32 drop-shadow-xl"
          />
        </motion.div>
      </div>

    </div>
  );
};