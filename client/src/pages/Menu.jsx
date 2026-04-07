import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import MenuCard from '../components/MenuCard';
import { menuData, menuCategories } from '../data/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters');

  const items = menuData.filter((item) => item.category === activeCategory);

  return (
    <div>
      <HeroSection
        title="Our Menu"
        subtitle="The Fuoco Experience"
        description="Crafted with heritage, passion, and the world's finest ingredients."
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85"
        compact
      />

      {/* Category tabs */}
      <div className="sticky top-[60px] z-30 bg-brand-black/95 backdrop-blur-xl border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {menuCategories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-5 py-2.5 text-sm font-medium rounded-sm transition-all duration-250 whitespace-nowrap ${
                  activeCategory === key
                    ? 'bg-fire-orange text-white'
                    : 'text-white/60 hover:text-brand-beige hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu grid */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl text-brand-beige font-semibold">
                {menuCategories.find((c) => c.key === activeCategory)?.label}
              </h2>
              <div className="w-12 h-0.5 bg-fire-orange mt-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Allergens notice */}
      <div className="bg-brand-charcoal border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white/40 text-xs">
            All prices are in GBP and exclude service. Please inform your server of any allergies or dietary requirements. 
            A discretionary 12.5% service charge will be added to your bill.
          </p>
        </div>
      </div>
    </div>
  );
}
