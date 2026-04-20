import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';

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

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setStatus(null);
    try {
      await axios.post('/api/contact', data);
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
        title="Get in Touch"
        subtitle="We'd Love to Hear from You"
        description="Reservations, private dining, press enquiries — we're here to help."
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85"
        compact
      />

      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <SectionReveal>
              <h2 className="font-serif text-2xl text-brand-beige font-semibold mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-fire-orange/15 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-fire-orange" />
                  </div>
                  <div>
                    <p className="text-brand-beige font-medium text-sm mb-0.5">Address</p>
                    <p className="text-white/55 text-sm leading-relaxed">42 Via Roma, Mayfair<br />London, W1K 4HN</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-fire-orange/15 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-fire-orange" />
                  </div>
                  <div>
                    <p className="text-brand-beige font-medium text-sm mb-0.5">Phone</p>
                    <a href="tel:+442071234567" className="text-white/55 text-sm hover:text-fire-orange transition-colors">
                      +44 (0) 207 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-fire-orange/15 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-fire-orange" />
                  </div>
                  <div>
                    <p className="text-brand-beige font-medium text-sm mb-0.5">WhatsApp</p>
                    <a
                      href="https://wa.me/442071234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/55 text-sm hover:text-fire-orange transition-colors"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-fire-orange/15 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-fire-orange" />
                  </div>
                  <div>
                    <p className="text-brand-beige font-medium text-sm mb-0.5">Email</p>
                    <a href="mailto:hello@fuoco.restaurant" className="text-white/55 text-sm hover:text-fire-orange transition-colors">
                      hello@fuoco.restaurant
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-fire-orange/15 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-fire-orange" />
                  </div>
                  <div>
                    <p className="text-brand-beige font-medium text-sm mb-2">Opening Hours</p>
                    <table className="text-sm w-full">
                      <tbody>
                        {[
                          { day: 'Mon — Tue', hours: 'Closed' },
                          { day: 'Wed — Thu', hours: '5:30 pm — 10:30 pm' },
                          { day: 'Fri — Sat', hours: '12:00 pm — 11:00 pm' },
                          { day: 'Sunday', hours: '12:00 pm — 9:30 pm' },
                        ].map(({ day, hours }) => (
                          <tr key={day}>
                            <td className="py-1 text-white/40 pr-4">{day}</td>
                            <td className={`py-1 ${hours === 'Closed' ? 'text-red-400' : 'text-white/60'}`}>{hours}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-brand-beige text-sm font-semibold mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Instagram, href: '#', label: 'Instagram' },
                    { Icon: Facebook, href: '#', label: 'Facebook' },
                    { Icon: Twitter, href: '#', label: 'Twitter' },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-fire-orange hover:text-fire-orange transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <SectionReveal>
              <div className="glass-card p-8">
                <h3 className="font-serif text-2xl text-brand-beige font-semibold mb-6">Send a Message</h3>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-sm bg-green-900/30 border border-green-700/40 flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-300 font-semibold text-sm">Message Sent!</p>
                      <p className="text-green-400/70 text-sm mt-0.5">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-sm bg-red-900/30 border border-red-700/40 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-red-300 text-sm">Something went wrong. Please try again.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-beige/70 text-sm mb-2">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className={`input-field ${errors.name ? 'border-red-500/60' : ''}`}
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-brand-beige/70 text-sm mb-2">Email Address *</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className={`input-field ${errors.email ? 'border-red-500/60' : ''}`}
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                        })}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-beige/70 text-sm mb-2">Subject *</label>
                    <input
                      type="text"
                      placeholder="Reservation enquiry, private dining..."
                      className={`input-field ${errors.subject ? 'border-red-500/60' : ''}`}
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-brand-beige/70 text-sm mb-2">Message *</label>
                    <textarea
                      rows={6}
                      placeholder="Tell us how we can help..."
                      className={`input-field resize-none ${errors.message ? 'border-red-500/60' : ''}`}
                      {...register('message', {
                        required: 'Message is required',
                        minLength: { value: 10, message: 'Message must be at least 10 characters' },
                      })}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Map */}
        <SectionReveal className="mt-14">
          <div className="rounded-lg overflow-hidden border border-white/10" style={{ height: '400px' }}>
            <iframe
              title="Fuoco Restaurant Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.1480!3d51.5082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI5LjUiTiAwwrAwOCc1Mi44Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.5) invert(0.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
