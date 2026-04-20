import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { galleryData, galleryCategories } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div>
      <HeroSection
        title="Gallery"
        subtitle="Through the Lens"
        description="A visual journey through our cuisine, ambience, and craftsmanship."
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85"
        compact
      />

      {/* Filters */}
      <div className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          {galleryCategories.map(({ key, label }) => (
            <motion.button
              key={key}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                activeCategory === key
                  ? 'bg-fire-orange text-white'
                  : 'border border-white/20 text-white/60 hover:text-brand-beige hover:border-white/40'
              }`}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightbox(item)}
                className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/50 transition-all duration-400 flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <p className="text-brand-beige font-serif text-base font-semibold">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] flex flex-col"
            >
              <img
                src={lightbox.image.replace('w=800', 'w=1200')}
                alt={lightbox.title}
                className="rounded-lg object-contain max-h-[75vh]"
              />
              <p className="text-center text-brand-beige font-serif text-lg mt-4">{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
