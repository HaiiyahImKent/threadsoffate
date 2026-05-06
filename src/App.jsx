import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { storyStages, getLegendData } from './data/storyData';
import AntiGravityCard from './components/AntiGravityCard';
import ChoiceOrb from './components/ChoiceOrb';
import DestinyOverlay from './components/DestinyOverlay';
import TarotCard from './components/TarotCard';

export default function App() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [divergence, setDivergence] = useState(0);
  const [history, setHistory] = useState([]);
  const [isDark, setIsDark] = useState(true);
  const [legendRevealed, setLegendRevealed] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showRecap, setShowRecap] = useState(false);

  const currentStage = storyStages[currentStageIndex];
  
  // Theme shifting:
  // Base background is deep space to desert.
  // If divergence > 2, it shifts towards ethereal purple instead of gold.
  const accentColor = divergence >= 2 ? '#a855f7' : '#D4AF37'; // tailwind purple-500 vs gold

  const handleChoice = (choice) => {
    if (choice.type === "Reveal") {
      setLegendRevealed(true);
      return;
    }

    setDivergence(prev => prev + choice.points);
    setHistory(prev => [...prev, choice]);
    
    if (choice.isFatal) {
      setLegendRevealed(true);
      return;
    }
    
    if (currentStageIndex < storyStages.length - 1) {
      setCurrentStageIndex(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentStageIndex(0);
    setDivergence(0);
    setHistory([]);
    setLegendRevealed(false);
    setHasStarted(false);
    setShowRecap(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Background classes based on theme and divergence
  const bgClasses = isDark 
    ? 'bg-gradient-to-b from-slate-950 via-blue-950 to-amber-950'
    : 'bg-gradient-to-b from-slate-100 via-sky-100 to-amber-50';

  return (
    <div className={isDark ? "dark" : ""}>
      <div className={`min-h-screen w-full transition-colors duration-1000 ${bgClasses} text-slate-800 dark:text-white font-sans overflow-x-hidden flex flex-col items-center pt-28 pb-16 relative`}>
        {/* Dynamic ambient glow based on accent color */}
        <div 
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-1000"
          style={{ backgroundColor: accentColor }}
        />

        <DestinyOverlay 
          currentStageIndex={currentStageIndex} 
          totalStages={storyStages.length} 
          accentColor={accentColor}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <div className="w-full px-4 relative z-10">
          <AnimatePresence mode="wait">
            {!hasStarted ? (
              <motion.div
                key="intro"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <AntiGravityCard isDark={isDark}>
                  <div className="text-center py-12 px-4">
                    <h2 className="text-sm md:text-base uppercase tracking-[0.4em] text-slate-500 dark:text-white/50 mb-6">
                      An Interactive Experience
                    </h2>
                    <h1 
                      className="text-5xl md:text-7xl font-serif mb-6 text-slate-900 dark:text-white drop-shadow-lg"
                    >
                      The Alchemist
                    </h1>
                    <h3 
                      className="text-2xl md:text-3xl font-serif mb-8 italic"
                      style={{ color: accentColor }}
                    >
                      Threads of Fate
                    </h3>
                    <p className="text-slate-600 dark:text-white/70 max-w-lg mx-auto mb-16 font-light leading-relaxed text-sm md:text-base">
                      Embark on a journey to the Egyptian Pyramids. Every choice you make will shape your destiny, altering the course of your Personal Legend. Will you follow the Omens, or will you weave a new fate?
                    </p>
                    
                    <button
                      onClick={() => setHasStarted(true)}
                      className="px-10 py-4 rounded-full border border-slate-300 dark:border-white/20 hover:bg-slate-900/5 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm font-medium"
                    >
                      Begin Journey
                    </button>
                  </div>
                </AntiGravityCard>
              </motion.div>
            ) : !legendRevealed ? (
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <AntiGravityCard isDark={isDark}>
                  <div className="text-center mb-8">
                    <h2 
                      className="text-xs uppercase tracking-[0.3em] mb-2 font-sans"
                      style={{ color: accentColor }}
                    >
                      Stage {currentStageIndex + 1}: {currentStage.stage}
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-serif mb-6 text-slate-900 dark:text-white leading-tight">
                      {currentStage.title}
                    </h1>
                    <p className="text-slate-700 dark:text-white/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
                      {currentStage.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mt-12">
                    {currentStage.choices.map((choice, idx) => (
                      <ChoiceOrb 
                        key={choice.id} 
                        choice={choice} 
                        index={idx}
                        onClick={handleChoice} 
                        accentColor={accentColor}
                      />
                    ))}
                  </div>
                </AntiGravityCard>
              </motion.div>
            ) : !showRecap ? (
              <motion.div
                key="legend"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <AntiGravityCard isDark={isDark}>
                  <div className="text-center py-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="flex flex-col items-center"
                    >
                      <h2 className="text-sm uppercase tracking-widest text-slate-500 dark:text-white/50 mb-6">
                        Your Personal Legend
                      </h2>
                      
                      <div className="mb-10 w-full flex justify-center">
                        <TarotCard 
                          image={getLegendData(divergence, history).image} 
                          title={getLegendData(divergence, history).title} 
                        />
                      </div>

                      <h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 drop-shadow-lg text-center"
                        style={{ color: accentColor, textShadow: `0 0 20px ${accentColor}80` }}
                      >
                        {getLegendData(divergence, history).title}
                      </h1>
                    </motion.div>
                    
                    <motion.p 
                      className="text-slate-700 dark:text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed text-sm md:text-base px-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 1 }}
                    >
                      {getLegendData(divergence, history).summary}
                    </motion.p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        onClick={() => setShowRecap(true)}
                        className="px-8 py-3 rounded-full bg-slate-900/5 dark:bg-white/10 hover:bg-slate-900/10 dark:hover:bg-white/20 transition-colors uppercase tracking-widest text-sm"
                      >
                        Review Tapestry
                      </motion.button>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.6, duration: 1 }}
                        onClick={handleRestart}
                        className="px-8 py-3 rounded-full border border-slate-300 dark:border-white/20 hover:bg-slate-900/5 dark:hover:bg-white/10 transition-colors uppercase tracking-widest text-sm"
                      >
                        Begin Anew
                      </motion.button>
                    </div>
                  </div>
                </AntiGravityCard>
              </motion.div>
            ) : (
              <motion.div
                key="recap"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <AntiGravityCard isDark={isDark}>
                  <div className="py-6 px-2 md:px-8">
                    <h2 
                      className="text-2xl md:text-4xl font-serif mb-12 text-center"
                      style={{ color: accentColor }}
                    >
                      Your Tapestry of Choices
                    </h2>
                    
                    <div className="space-y-8 mb-14">
                      {history.map((choice, idx) => (
                        <div key={idx} className="relative pl-8 border-l border-slate-300 dark:border-white/20 ml-2">
                          <div 
                            className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] border-slate-100 dark:border-black/50"
                            style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
                          />
                          <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/50 mb-2">
                            Stage {idx + 1}: {storyStages[idx]?.title || "The End"}
                          </h4>
                          <p className="text-slate-800 dark:text-white/90 text-sm md:text-base italic leading-relaxed">
                            "{choice.text}"
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={() => setShowRecap(false)}
                        className="px-8 py-3 rounded-full bg-slate-900/5 dark:bg-white/10 hover:bg-slate-900/10 dark:hover:bg-white/20 transition-colors uppercase tracking-widest text-sm"
                      >
                        Back to Legend
                      </button>
                      <button
                        onClick={handleRestart}
                        className="px-8 py-3 rounded-full border border-slate-300 dark:border-white/20 hover:bg-slate-900/5 dark:hover:bg-white/10 transition-colors uppercase tracking-widest text-sm"
                      >
                        Begin Anew
                      </button>
                    </div>
                  </div>
                </AntiGravityCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
