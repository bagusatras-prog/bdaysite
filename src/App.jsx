import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants } from "./animations/variants";
import { Scene1 } from "./pages/Scene1";
import { Scene2 } from "./pages/Scene2";
import { Scene3 } from "./pages/Scene3";
import { Scene4 } from "./pages/Scene4";
import { Scene5 } from "./pages/Scene5";
import { Scene6 } from "./pages/Scene6";
import { Scene7 } from "./pages/Scene7";
import { AudioPlayer } from "./components/AudioPlayer";
import { ProgressIndicator } from "./components/ProgressIndicator";
import { FloatingDecorations } from "./components/FloatingDecorations";
import { birthdayData } from "./data/birthdayData";

export function App() {
  const [currentScene, setCurrentScene] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [snoopyToast, setSnoopyToast] = useState(null);
  const totalScenes = 7;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight")
        setCurrentScene((p) => Math.min(p + 1, totalScenes));
      else if (e.key === "ArrowLeft")
        setCurrentScene((p) => Math.max(p - 1, 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNext = () => setCurrentScene((p) => Math.min(p + 1, totalScenes));

  const handleSnoopyClick = () => {
    const reactions = birthdayData.snoopyReactions;
    const randomMsg = reactions[Math.floor(Math.random() * reactions.length)];
    setSnoopyToast(randomMsg);
    setTimeout(() => setSnoopyToast(null), 3000);
  };

  const renderScene = () => {
    switch (currentScene) {
      case 1:
        return (
          <Scene1
            onNext={handleNext}
            onInteraction={() => setHasInteracted(true)}
          />
        );
      case 2:
        return <Scene2 onNext={handleNext} onSnoopyClick={handleSnoopyClick} />;
      case 3:
        return <Scene3 onNext={handleNext} />;
      case 4:
        return <Scene4 onNext={handleNext} />;
      case 5:
        return <Scene5 onNext={handleNext} />;
      case 6:
        return <Scene6 onNext={handleNext} />;
      case 7:
        return <Scene7 onRestart={() => setCurrentScene(1)} />;
      default:
        return (
          <Scene1
            onNext={handleNext}
            onInteraction={() => setHasInteracted(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#4A3B32] relative flex flex-col justify-between py-12 px-4 select-none paper-pattern">
      <FloatingDecorations />
      <ProgressIndicator
        currentScene={currentScene}
        totalScenes={totalScenes}
        onSelectScene={setCurrentScene}
      />

      {/* Pop-up Pesan Easter Egg Snoopy (Dijamin pas di tengah layar dengan overlay) */}
      <AnimatePresence>
        {snoopyToast && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[2px] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="bg-[#FFFDF9] border-3 border-[#4A3B32] px-8 py-5 rounded-3xl shadow-2xl text-lg sm:text-xl font-bold text-[#E65B65] flex items-center gap-3 text-center"
            >
              <span className="text-2xl">🐾</span>
              <span>{snoopyToast}</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex items-center justify-center my-auto z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {renderScene()}
          </motion.div>
        </AnimatePresence>
      </main>
      <AudioPlayer autoPlayTrigger={hasInteracted} />
    </div>
  );
}
export default App;
