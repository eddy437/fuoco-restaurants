import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55 }}
      className="glass-card p-7 flex flex-col gap-5"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-fire-amber text-fire-amber" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/70 text-sm leading-relaxed italic flex-1">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-3 border-t border-white/10">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-fire-orange/40"
          loading="lazy"
        />
        <div>
          <p className="text-brand-beige font-semibold text-sm">{testimonial.name}</p>
          <p className="text-white/40 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
