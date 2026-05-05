import { motion } from 'framer-motion';

export default function AntiGravityCard({ children }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      className={`w-full max-w-3xl p-8 md:p-14 rounded-[2rem] mx-auto relative overflow-hidden glass-panel`}
    >
      {/* Decorative top border highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-slate-400 dark:via-white/30 to-transparent" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
