import { motion } from 'framer-motion';

export default function DestinyOverlay({ currentStageIndex, totalStages, accentColor, isDark, toggleTheme }) {
  // ensure at least a small portion is visible
  const progress = Math.max(1.5, (currentStageIndex / (totalStages - 1)) * 100);

  return (
    <>
      {/* Top Edge Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-900/10 dark:bg-white/10 z-[60]">
        <motion.div 
          className="h-full shadow-[0_0_15px_currentColor]"
          style={{ backgroundColor: accentColor, color: accentColor }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>

      {/* Header Bar */}
      <div className="fixed top-0 left-0 w-full px-6 py-6 md:px-10 md:py-8 flex items-center justify-between z-50 pointer-events-none">
        <div className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase opacity-80 text-slate-800 dark:text-white pointer-events-auto flex items-center gap-4">
          <span className="w-6 h-[1px] bg-slate-400 dark:bg-white/50 hidden sm:block"></span>
          <span><span className="opacity-60 dark:opacity-50">Journey to the</span> Pyramids</span>
        </div>
        
        <div className="pointer-events-auto flex items-center gap-6">
          <div className="text-xs font-sans tracking-widest uppercase opacity-60 dark:opacity-50 text-slate-800 dark:text-white hidden sm:block">
            {currentStageIndex + 1} <span className="mx-1">/</span> {totalStages}
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:hover:bg-white/15 backdrop-blur-md border border-slate-300 dark:border-white/10 transition-all duration-300 hover:scale-105"
            title="Toggle Lighting"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-300/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
