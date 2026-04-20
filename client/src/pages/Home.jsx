import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Flame, Award, Clock, Users } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import MenuCard from '../components/MenuCard';
import TestimonialCard from '../components/TestimonialCard';
import { menuData } from '../data/menuData';
import { testimonialData } from '../data/testimonialData';

const featuredItems = menuData.filter((item) =>
  [5, 9, 13, 17].includes(item.id)
);

const stats = [
  { icon: Award, value: '12+', label: 'Years of Excellence' },
  { icon: Flame, value: '485°C', label: 'Wood Oven Temperature' },
  { icon: Users, value: '200+', label: 'Covers per Night' },
  { icon: Clock, value: '8hrs', label: 'Slowest Braise' },
];

function SectionReveal({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const chefRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: chefRef, offset: ['start end', 'end start'] });
  const chefY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title={<>Where Fire Meets<br />Fine Dining</>}
        subtitle="Fuoco Restaurants · London"
        description="Authentic Italian cuisine elevated by the art of wood-fire. An intimate, cinematic dining experience in the heart of Mayfair."
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85"
        showCTA
      />

      {/* Stats bar */}
      <div className="bg-brand-charcoal border-y border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <SectionReveal key={label} className="text-center">
              <div className="flex justify-center mb-2">
                <Icon className="w-6 h-6 text-fire-orange" />
              </div>
              <p className="font-serif text-3xl font-bold text-brand-beige mb-1">{value}</p>
              <p className="text-white/50 text-sm">{label}</p>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Featured dishes */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <SectionReveal className="text-center mb-14">
          <p className="section-subtitle mb-3">From Our Kitchen</p>
          <h2 className="section-title">Signature Creations</h2>
          <div className="divider-fire mt-5" />
        </SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        <SectionReveal className="text-center mt-12">
          <Link to="/menu" className="btn-outline">
            View Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </SectionReveal>
      </section>

      {/* Chef special — parallax section */}
      <section ref={chefRef} className="relative py-0 overflow-hidden min-h-[600px] flex items-center">
        <motion.div style={{ y: chefY }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607631568010-a87245c0daf3?w=1600&q=80"
            alt="Chef"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/70" />
        </motion.div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
          <SectionReveal>
            <p className="section-subtitle mb-4">Behind the Flame</p>
            <h2 className="section-title mb-6">The Chef's Philosophy</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              "Fire is not merely a cooking technique — it is an ancient conversation between ingredients and heat. 
              Every dish we create honours the mastery of Italian tradition whilst pushing the boundaries of what 
              fire can achieve."
            </p>
            <p className="text-fire-orange font-semibold tracking-widest text-sm uppercase">— Chef Alessandro Moretti</p>
          </SectionReveal>
        </div>
      </section>

      {/* Pizza showcase */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <p className="section-subtitle mb-4">Fired at 485°C</p>
              <h2 className="section-title mb-6">The Art of the<br />Perfect Pizza</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Our imported Neapolitan wood-burning oven reaches temperatures that transform simple dough into something extraordinary. 
                Blistered, charred, and impossibly light — each pizza is a 90-second masterpiece.
              </p>
              <ul className="space-y-3 mb-8">
                {['72-hour cold fermentation dough', 'San Marzano DOP tomatoes', 'Fior di latte mozzarella from Campania', 'Certified Neapolitan technique'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <Flame className="w-4 h-4 text-fire-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/menu" className="btn-primary">
                See Pizza Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </SectionReveal>
            <SectionReveal>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                  alt="Wood fired pizza"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <div className="absolute -bottom-5 -left-5 glass-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-fire-orange/20 rounded-full flex items-center justify-center">
                    <Flame className="w-5 h-5 text-fire-orange" />
                  </div>
                  <div>
                    <p className="text-brand-beige font-semibold text-sm">Wood Fired</p>
                    <p className="text-white/50 text-xs">485°C Neapolitan Oven</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="section-subtitle mb-3">What Guests Say</p>
            <h2 className="section-title">Voices of Fuoco</h2>
            <div className="divider-fire mt-5" />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialData.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Location & Timings */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-14">
            <p className="section-subtitle mb-3">Find Us</p>
            <h2 className="section-title">Location & Hours</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-brand-beige text-xl mb-2">Fuoco Restaurants</h3>
                  <p className="text-white/60">42 Via Roma, Mayfair<br />London, W1K 4HN<br />United Kingdom</p>
                </div>
                <div>
                  <h4 className="text-fire-orange text-sm font-semibold tracking-widest uppercase mb-3">Opening Hours</h4>
                  <table className="w-full text-sm">
                    <tbody className="space-y-2">
                      {[
                        { day: 'Monday — Tuesday', hours: 'Closed' },
                        { day: 'Wednesday — Thursday', hours: '5:30 pm — 10:30 pm' },
                        { day: 'Friday — Saturday', hours: '12:00 pm — 11:00 pm' },
                        { day: 'Sunday', hours: '12:00 pm — 9:30 pm' },
                      ].map(({ day, hours }) => (
                        <tr key={day} className="border-b border-white/10">
                          <td className="py-2.5 text-white/50">{day}</td>
                          <td className={`py-2.5 text-right ${hours === 'Closed' ? 'text-red-400' : 'text-brand-beige'}`}>{hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Link to="/reservation" className="btn-primary inline-flex">
                  Reserve Your Table <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <iframe
                  title="Fuoco Restaurant Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.1480!3d51.5082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI5LjUiTiAwwrAwOCc1Mi44Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.6) invert(0.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C1C1C 0%, #0A0A0A 100%)' }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #F97316 0%, transparent 50%), radial-gradient(circle at 70% 50%, #B45309 0%, transparent 50%)' }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <SectionReveal>
            <Flame className="w-12 h-12 text-fire-orange mx-auto mb-6" />
            <h2 className="section-title mb-4">Ready to Experience Fuoco?</h2>
            <p className="text-white/60 mb-8 text-lg">
              Reserve your table and let us take you on a journey through the finest Italian cuisine, 
              crafted by fire and passion.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/reservation" className="btn-primary">
                Book a Table <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
