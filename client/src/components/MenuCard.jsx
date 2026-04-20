import { motion } from 'framer-motion';

const tagColors = {
  'Chef Special': 'bg-fire-copper/20 text-fire-amber border-fire-copper/30',
  'Bestseller': 'bg-fire-orange/20 text-fire-orange border-fire-orange/30',
  'Spicy': 'bg-red-900/30 text-red-400 border-red-800/30',
};

export default function MenuCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="glass-card overflow-hidden group cursor-default"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
        {item.tags && item.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className={`tag-chip border text-[10px] ${tagColors[tag] || 'bg-white/10 text-white/70 border-white/20'}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="font-serif text-brand-beige font-semibold text-lg leading-tight">
            {item.name}
          </h3>
          <span className="text-fire-orange font-bold text-lg shrink-0">
            £{item.price}
          </span>
        </div>
        <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
