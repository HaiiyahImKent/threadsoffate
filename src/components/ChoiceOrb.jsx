import { motion } from 'framer-motion';

const letters = ['A', 'B', 'C', 'D', 'E'];

export default function ChoiceOrb({ choice, index, onClick, accentColor }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, x: 8 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(choice)}
      className="relative group w-full text-left my-3 p-4 md:p-5 rounded-2xl bg-white/40 dark:bg-white/[0.03] hover:bg-white/60 dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/10 overflow-hidden transition-all duration-300 backdrop-blur-sm shadow-sm dark:shadow-none"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 blur-xl"
        style={{ backgroundColor: accentColor }}
      />
      <div className="relative z-10 flex items-center">
        <div 
          className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center mr-5 shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_currentColor] transition-all duration-300 bg-white/50 dark:bg-transparent"
          style={{ color: accentColor }}
        >
          <span className="text-xs font-serif text-slate-500 dark:text-white/60 group-hover:text-slate-800 dark:group-hover:text-white transition-colors">
            {letters[index] || '-'}
          </span>
        </div>
        <span className="text-sm md:text-base font-medium tracking-wide text-slate-700 dark:text-white/80 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 leading-relaxed">
          {choice.text}
        </span>
      </div>
    </motion.button>
  );
}
