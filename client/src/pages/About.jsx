import { motion } from 'framer-motion';
import { Flame, Leaf, Award, Heart } from 'lucide-react';
import HeroSection from '../components/HeroSection';

function SectionReveal({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const values = [
  {
    icon: Flame,
    title: 'The Power of Fire',
    description: 'Fire is not merely heat — it is transformation. Our 485°C wood-burning oven is the soul of Fuoco, lending incomparable depth, char, and character to every dish.',
  },
  {
    icon: Leaf,
    title: 'Premium Ingredients',
    description: 'We source only the finest: Wagyu from Scotland, truffles from Périgord, San Marzano tomatoes from Campania, and olive oil cold-pressed by the Carli family since 1911.',
  },
  {
    icon: Award,
    title: 'Italian Heritage',
    description: 'Our recipes are rooted in generational tradition — grandmothers\' handwritten notes, regional secrets, and techniques passed down through centuries of Italian cuisine.',
  },
  {
    icon: Heart,
    title: 'Crafted with Passion',
    description: 'Every dish that leaves our kitchen is a labour of love. We believe in unhurried cooking: 72-hour dough, 8-hour ragù, and 4-hour braises that no shortcut can replicate.',
  },
];

const team = [
  {
    name: 'Alessandro Moretti',
    role: 'Head Chef & Founder',
    bio: 'Trained under Marco Pierre White and spent a decade in Naples mastering the wood-fire craft before returning to London to create Fuoco.',
    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf3?w=400&q=80',
  },
  {
    name: 'Sofia Conti',
    role: 'Pastry Chef',
    bio: 'Studied at Le Cordon Bleu Paris. Her desserts blend classical Italian confectionery with modern techniques that surprise and delight.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
  },
  {
    name: 'Luca Ferrara',
    role: 'Head Sommelier',
    bio: 'WSET Diploma holder with a decade of experience curating Italian wine lists for Michelin-starred restaurants across Europe.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
];

export default function About() {
  return (
    <div>
      <HeroSection
        title="Our Story"
        subtitle="Born from Fire"
        description="A love letter to Italian culinary tradition, cooked by flame."
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85"
        compact
      />

      {/* Origin story */}
      <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <p className="section-subtitle mb-4">The Beginning</p>
            <h2 className="section-title mb-6">
              A Dream Born in<br />the Heart of Naples
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Fuoco was born from a single transformative meal in Naples — a wood-fired pizza that changed 
              everything. Founder and Head Chef Alessandro Moretti, then a young chef working the stations 
              of London's finest kitchens, spent three months in Campania learning from the masters.
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              He returned with a vision: not just to replicate Neapolitan cuisine, but to elevate it. 
              To bring the intensity of fire cooking to the entire menu — from delicate starters to 
              slow-braised Sunday roasts.
            </p>
            <p className="text-white/60 leading-relaxed">
              In 2012, Fuoco opened its doors in Mayfair with a 60-seat dining room, a hand-built 
              Acunto oven from Naples, and an obsessive commitment to quality. Twelve years later, 
              the vision has never been clearer.
            </p>
          </SectionReveal>
          <SectionReveal>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                alt="Wood fired oven"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
              <div className="absolute bottom-6 left-6 glass-card px-5 py-3">
                <p className="text-fire-orange font-semibold text-sm">Est. 2012</p>
                <p className="text-white/60 text-xs">Mayfair, London</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-14">
            <p className="section-subtitle mb-3">What Drives Us</p>
            <h2 className="section-title">Our Philosophy</h2>
            <div className="divider-fire mt-5" />
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <SectionReveal key={title}>
                <div className="text-center p-6 glass-card h-full">
                  <div className="w-14 h-14 bg-fire-orange/15 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-fire-orange" />
                  </div>
                  <h3 className="font-serif text-brand-beige text-lg font-semibold mb-3">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax quote */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
            alt="Restaurant ambience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <SectionReveal>
            <span className="text-fire-orange text-6xl font-serif leading-none">"</span>
            <p className="font-serif text-2xl md:text-3xl text-brand-beige leading-relaxed -mt-4">
              We do not simply cook food. We coax flavour from the finest ingredients using the oldest tool known to man. 
              Fire does not lie — and neither do we.
            </p>
            <p className="text-fire-orange mt-6 text-sm tracking-widest uppercase font-semibold">
              — Alessandro Moretti, Founder
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <SectionReveal className="text-center mb-14">
          <p className="section-subtitle mb-3">The People</p>
          <h2 className="section-title">Meet Our Team</h2>
          <div className="divider-fire mt-5" />
        </SectionReveal>
        <div className="grid sm:grid-cols-3 gap-8">
          {team.map(({ name, role, bio, image }) => (
            <SectionReveal key={name}>
              <div className="text-center group">
                <div className="relative mb-5 mx-auto w-44 h-44 rounded-full overflow-hidden border-2 border-fire-orange/30">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-brand-beige text-xl font-semibold mb-1">{name}</h3>
                <p className="text-fire-orange text-xs font-semibold tracking-widest uppercase mb-3">{role}</p>
                <p className="text-white/55 text-sm leading-relaxed">{bio}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Restaurant imagery */}
      <section className="pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
            'https://images.unsplash.com/photo-1607631568010-a87245c0daf3?w=600&q=80',
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
            'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80',
            'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
            'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',
          ].map((src, i) => (
            <SectionReveal key={i}>
              <div className="overflow-hidden rounded-lg aspect-square group cursor-pointer">
                <img
                  src={src}
                  alt={`Fuoco restaurant ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
