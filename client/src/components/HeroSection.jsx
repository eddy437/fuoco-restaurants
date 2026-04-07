import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  showCTA = false,
  compact = false,
}) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        compact ? 'h-[55vh] min-h-[380px]' : 'h-screen min-h-[680px]'
      }`}
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-brand-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-subtitle mb-5"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className={`font-serif font-bold text-brand-beige leading-tight ${
            compact ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-7xl lg:text-8xl'
          }`}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 text-brand-beige/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link to="/reservation" className="btn-primary">
              Book a Table <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/menu" className="btn-outline">
              Explore Menu
            </Link>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {!compact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
