export const springTransition = { type: "spring", stiffness: 260, damping: 20, mass: 0.8 };

export const pageVariants = {
  initial: { opacity: 0, scale: 0.8, y: 15, rotate: -1 },
  animate: { opacity: 1, scale: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 240, damping: 18, mass: 0.9, when: "beforeChildren", staggerChildren: 0.12 } },
  exit: { opacity: 0, scale: 0.85, y: -15, rotate: 1, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }
};

export const popInItem = {
  hidden: { opacity: 0, scale: 0.75, y: 25, rotate: -3 },
  visible: { opacity: 1, scale: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 300, damping: 18, mass: 0.8 } }
};