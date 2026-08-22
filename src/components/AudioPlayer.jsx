import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export const AudioPlayer = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log(e));
    }
  }, [autoPlayTrigger]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <audio ref={audioRef} src={birthdayData.song.src} loop />
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#FFFDF9]/90 backdrop-blur-md border-2 border-[#4A3B32] shadow-scrapbook rounded-full px-3 py-2 flex items-center gap-2">
        <button onClick={() => { isPlaying ? audioRef.current.pause() : audioRef.current.play(); setIsPlaying(!isPlaying); }} className="w-9 h-9 rounded-full bg-[#F2C4CE] text-[#4A3B32] border border-[#4A3B32] flex items-center justify-center">
          {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>
        <div className="flex items-center gap-2 pr-2">
          <motion.div animate={{ rotate: isPlaying ? 360 : 0 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
            <Music size={16} className="text-[#8C7A6B]" />
          </motion.div>
          <div className="text-xs font-bold text-[#4A3B32] max-w-[110px] truncate">{birthdayData.song.title}<span className="block text-[10px] font-normal text-[#8C7A6B] truncate">{birthdayData.song.artist}</span></div>
        </div>
      </motion.div>
    </div>
  );
};