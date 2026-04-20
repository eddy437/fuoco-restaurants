import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-brand-black flex flex-col items-center justify-center z-[100]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8"
      >
        {/* Flame animation */}
        <div className="relative flex items-end justify-center" style={{ height: '100px', width: '80px' }}>
          {/* Outer flame */}
          <motion.div
            animate={{
              scaleY: [1, 1.1, 0.97, 1.08, 1],
              scaleX: [1, 0.95, 1.02, 0.97, 1],
              rotate: [-1, 1, -0.5, 1.5, -1],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0"
            style={{
              width: '50px',
              height: '75px',
              background: 'linear-gradient(to top, #F97316, #F59E0B, #FCD34D)',
              borderRadius: '50% 50% 20% 20%',
              transformOrigin: 'bottom center',
              opacity: 0.9,
            }}
          />
          {/* Mid flame */}
          <motion.div
            animate={{
              scaleY: [1, 1.12, 0.95, 1.1, 1],
              scaleX: [1, 0.93, 1.04, 0.95, 1],
              rotate: [1, -1, 0.5, -1.5, 1],
            }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            className="absolute bottom-0"
            style={{
              width: '32px',
              height: '52px',
              background: 'linear-gradient(to top, #DC2626, #F97316, #FCD34D)',
              borderRadius: '50% 50% 20% 20%',
              transformOrigin: 'bottom center',
              bottom: '5px',
              opacity: 0.95,
            }}
          />
          {/* Core flame */}
          <motion.div
            animate={{
              scaleY: [1, 1.08, 0.98, 1.06, 1],
              scaleX: [1, 0.97, 1.02, 0.96, 1],
            }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="absolute"
            style={{
              width: '16px',
              height: '26px',
              background: 'linear-gradient(to top, #FFF7ED, #FCD34D)',
              borderRadius: '50% 50% 20% 20%',
              transformOrigin: 'bottom center',
              bottom: '12px',
              opacity: 1,
            }}
          />
          {/* Glow */}
          <div
            style={{
              position: 'absolute',
              bottom: '-8px',
              width: '60px',
              height: '20px',
              background: 'radial-gradient(ellipse, rgba(249,115,22,0.5), transparent)',
              filter: 'blur(8px)',
            }}
          />
        </div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-4xl font-bold text-brand-beige tracking-widest mb-1">
            FUOCO
          </h1>
          <p className="text-fire-orange text-xs tracking-[0.4em] uppercase">
            Restaurants
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div className="w-40 h-px bg-white/10 overflow-hidden rounded-full">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-fire-orange to-transparent"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
