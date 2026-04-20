import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Calendar, Clock, Users, User, Mail, Phone } from 'lucide-react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
];

function SectionReveal({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Reservation() {
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const today = new Date().toISOString().split('T')[0];

  const onSubmit = async (data) => {
    setSubmitting(true);
    setStatus(null);
    try {
      await axios.post('/api/reservations', data);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <HeroSection
        title="Reserve Your Table"
        subtitle="Dining at Fuoco"
        description="Secure your place at London's finest Italian table. We look forward to welcoming you."
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85"
        compact
      />

      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <SectionReveal>
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-brand-beige font-semibold mb-2">Make a Reservation</h2>
              <p className="text-white/50 text-sm">
                For parties of 8 or more, please call us directly on{' '}
                <a href="tel:+442071234567" className="text-fire-orange hover:underline">+44 (0) 207 123 4567</a>
              </p>
            </div>

            {/* Success/Error feedback */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-5 rounded-sm bg-green-900/30 border border-green-700/40 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-300 font-semibold text-sm">Reservation Received!</p>
                  <p className="text-green-400/70 text-sm mt-1">
                    Thank you! We have received your reservation and will confirm it within 2 hours via email.
                  </p>
                </div>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-5 rounded-sm bg-red-900/30 border border-red-700/40 flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-300 font-semibold text-sm">Something went wrong</p>
                  <p className="text-red-400/70 text-sm mt-1">
                    Please try again or call us on +44 (0) 207 123 4567.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-brand-beige/70 text-sm mb-2">
                    <User className="w-3.5 h-3.5 inline mr-1.5 text-fire-orange" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Alessandro Moretti"
                    className={`input-field ${errors.fullName ? 'border-red-500/60' : ''}`}
                    {...register('fullName', { required: 'Full name is required' })}
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-brand-beige/70 text-sm mb-2">
                    <Mail className="w-3.5 h-3.5 inline mr-1.5 text-fire-orange" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={`input-field ${errors.email ? 'border-red-500/60' : ''}`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
                    })}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-brand-beige/70 text-sm mb-2">
                    <Phone className="w-3.5 h-3.5 inline mr-1.5 text-fire-orange" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7700 900123"
                    className={`input-field ${errors.phone ? 'border-red-500/60' : ''}`}
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-brand-beige/70 text-sm mb-2">
                    <Users className="w-3.5 h-3.5 inline mr-1.5 text-fire-orange" />
                    Number of Guests *
                  </label>
                  <select
                    className={`input-field ${errors.guests ? 'border-red-500/60' : ''}`}
                    {...register('guests', { required: 'Number of guests is required' })}
                    defaultValue=""
                  >
                    <option value="" disabled>Select guests</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n} className="bg-brand-charcoal">
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                  {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests.message}</p>}
                </div>

                {/* Date */}
                <div>
                  <label className="block text-brand-beige/70 text-sm mb-2">
                    <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-fire-orange" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    min={today}
                    className={`input-field ${errors.date ? 'border-red-500/60' : ''}`}
                    style={{ colorScheme: 'dark' }}
                    {...register('date', { required: 'Date is required' })}
                  />
                  {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-brand-beige/70 text-sm mb-2">
                    <Clock className="w-3.5 h-3.5 inline mr-1.5 text-fire-orange" />
                    Preferred Time *
                  </label>
                  <select
                    className={`input-field ${errors.time ? 'border-red-500/60' : ''}`}
                    {...register('time', { required: 'Time is required' })}
                    defaultValue=""
                  >
                    <option value="" disabled>Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t} className="bg-brand-charcoal">{t}</option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time.message}</p>}
                </div>
              </div>

              {/* Special requests */}
              <div>
                <label className="block text-brand-beige/70 text-sm mb-2">
                  Special Requests
                  <span className="text-white/30 ml-1">(dietary requirements, occasions, seating preferences)</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Any dietary requirements, allergies, special occasions..."
                  className="input-field resize-none"
                  {...register('specialRequests')}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {submitting ? 'Sending Reservation...' : 'Request Reservation'}
              </button>
            </form>
          </div>
        </SectionReveal>

        {/* Reservation info */}
        <SectionReveal className="mt-10 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { title: 'Confirmation', desc: 'We confirm all reservations within 2 hours via email' },
            { title: 'Cancellation', desc: 'Free cancellation up to 24 hours before your visit' },
            { title: 'Large Groups', desc: 'For 8+ guests, please call us for bespoke arrangements' },
          ].map(({ title, desc }) => (
            <div key={title} className="glass-card p-5">
              <h4 className="font-serif text-brand-beige font-semibold mb-2">{title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </SectionReveal>
      </section>
    </div>
  );
}
