import { motion } from 'framer-motion';

export default function TarotCard({ image, title }) {
  return (
    <motion.div
      initial={{ rotateY: -10, rotateX: 10, opacity: 0, y: 20 }}
      animate={{ rotateY: 0, rotateX: 0, opacity: 1, y: 0 }}
      whileHover={{ y: -10, rotateY: 5, rotateX: 5, boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.4)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-64 h-[24rem] sm:w-72 sm:h-[26rem] md:w-80 md:h-[30rem] rounded-xl overflow-hidden mx-auto border-[3px] border-slate-300/30 dark:border-white/20 shadow-2xl glass-panel group cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/30 z-10 pointer-events-none" />
      <img 
        src={image} 
        alt={`Tarot card for ${title}`} 
        className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-20">
        <h3 className="text-xl md:text-2xl font-serif text-white tracking-[0.2em] uppercase text-center drop-shadow-md">
          {title}
        </h3>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-white/60 z-20 pointer-events-none" />
      <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white/60 z-20 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white/60 z-20 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-white/60 z-20 pointer-events-none" />
      
      {/* Inner border */}
      <div className="absolute inset-3 border border-white/20 z-20 pointer-events-none rounded-sm" />
    </motion.div>
  );
}
