import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { popInItem } from "../animations/variants";
import { birthdayData } from "../data/birthdayData";
import { Heart, X } from "lucide-react";
import confetti from "canvas-confetti";

export const Scene3 = ({ onNext }) => {
  const [selected, setSelected] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [selfies, setSelfies] = useState([]);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Fungsi untuk membuka webcam otomatis
  const handleCameraClick = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert(
        "Tidak dapat mengakses kamera. Pastikan kamu memberikan izin akses kamera pada browser ya!",
      );
      setIsCameraOpen(false);
    }
  };

  // Fungsi untuk menutup kamera & mematikan stream
  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    setIsCameraOpen(false);
  };

  // Fungsi untuk mengambil foto (Take Selfie)
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

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 max-w-3xl mx-auto text-center relative w-full">
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

      {/* Modal Detail Compliment */}
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

      {/* Modal Kamera Web untuk Take Selfie */}
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

      {/* DAFTAR FOTO HASIL SELPIE YANG BERPUTAR-PUTAR DI WEB */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 w-full">
        {selfies.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: [0, 360, 0] }}
            transition={{
              scale: { duration: 0.5 },
              rotate: { repeat: Infinity, duration: 12, ease: "linear" },
            }}
            className="bg-white border-2 border-[#4A3B32] p-2 pb-6 rounded-xl shadow-scrapbook w-32 flex flex-col items-center"
          >
            <img
              src={photo}
              alt={`Selfie ${idx}`}
              className="w-28 h-28 object-cover rounded-lg mb-2"
            />
            <span className="font-handwriting text-xs text-[#4A3B32]">
              My Selfie ♡
            </span>
          </motion.div>
        ))}
      </div>

      <motion.button
        variants={popInItem}
        onClick={onNext}
        className="px-7 py-3 bg-[#F2C4CE] font-bold rounded-full border-2 border-[#4A3B32] shadow-sm mb-6"
      >
        See Our Photo Album →
      </motion.button>

      {/* GAMBAR KAMERA DI POJOK KANAN BAWAH DENGAN EFEK HOVER & KLIK */}
      <div className="fixed right-6 bottom-6 z-30 cursor-pointer">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCameraClick}
          title="Klik untuk ambil selfie!"
        >
          <img
            src="/images/camera.png"
            alt="Camera Decoration"
            className="w-28 sm:w-36 drop-shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};
