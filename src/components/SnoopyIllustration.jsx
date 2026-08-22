import React from 'react';
import { motion } from 'framer-motion';

export const SnoopyIllustration = ({ type = "house", onClick, className = "" }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`cursor-pointer inline-block select-none ${className}`}
      title="Click Snoopy!"
    >
      {type === "house" && (
        <svg width="180" height="160" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
          <path d="M30 110 L100 40 L170 110 V170 H30 Z" fill="#E65B65" stroke="#4A3B32" strokeWidth="4" strokeLinejoin="round"/>
          <path d="M20 110 L100 30 L180 110" stroke="#4A3B32" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M80 170 V130 C80 120 120 120 120 130 V170" fill="#4A3B32" />
          <ellipse cx="100" cy="32" rx="28" ry="12" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3.5" />
          <circle cx="125" cy="22" r="14" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3.5" />
          <ellipse cx="134" cy="24" rx="7" ry="5" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3" />
          <ellipse cx="140" cy="22" rx="3" ry="2.5" fill="#4A3B32" />
          <path d="M118 16 C115 22 118 28 122 28 C125 28 124 20 120 16 Z" fill="#4A3B32" />
          <path d="M128 19 Q131 22 134 19" stroke="#4A3B32" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <ellipse cx="80" cy="30" rx="8" ry="5" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3" />
          <circle cx="105" cy="18" r="5" fill="#FFD166" stroke="#4A3B32" strokeWidth="2" />
          <path d="M108 18 L112 18" stroke="#4A3B32" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {type === "sitting" && (
        <svg width="120" height="130" viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
          <path d="M35 95 C25 90 20 80 28 75" stroke="#4A3B32" strokeWidth="4" strokeLinecap="round" fill="none" />
          <ellipse cx="55" cy="85" rx="22" ry="28" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="4" />
          <path d="M55 75 Q70 80 65 92" stroke="#4A3B32" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <ellipse cx="48" cy="112" rx="12" ry="6" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3.5" />
          <ellipse cx="68" cy="112" rx="12" ry="6" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3.5" />
          <ellipse cx="62" cy="42" rx="20" ry="18" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="4" />
          <ellipse cx="78" cy="46" rx="12" ry="9" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3.5" />
          <ellipse cx="88" cy="42" rx="4.5" ry="3.5" fill="#4A3B32" />
          <path d="M48 35 C40 45 42 60 52 56 C56 50 54 38 48 35 Z" fill="#4A3B32" />
          <path d="M68 38 Q72 33 76 38" stroke="#4A3B32" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M72 52 Q78 56 82 50" stroke="#4A3B32" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M48 58 Q60 62 70 56" stroke="#E65B65" strokeWidth="5" strokeLinecap="round" />
        </svg>
      )}
      {type === "heart" && (
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
          <path d="M65 45 C65 25 40 15 25 32 C10 50 35 75 65 105 C95 75 120 50 105 32 C90 15 65 25 65 45 Z" fill="#F2C4CE" stroke="#4A3B32" strokeWidth="3.5" />
          <ellipse cx="65" cy="35" rx="16" ry="14" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3.5" />
          <ellipse cx="76" cy="38" rx="9" ry="7" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3" />
          <ellipse cx="83" cy="36" rx="3.5" ry="2.5" fill="#4A3B32" />
          <path d="M54 30 C48 38 50 48 57 45 Z" fill="#4A3B32" />
          <path d="M68 32 Q71 28 75 32" stroke="#4A3B32" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="48" cy="58" r="6" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3" />
          <circle cx="82" cy="58" r="6" fill="#FFFDF9" stroke="#4A3B32" strokeWidth="3" />
        </svg>
      )}
    </motion.div>
  );
};