import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, ExternalLink, Facebook } from 'lucide-react';
import Layout from '@/components/Layout';
import { contactInfo } from '@/data/products';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Inquiry — ${form.interest || 'General'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nInterest: ${form.interest}\n\n${form.message}`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Layout>
      <Head>
        <title>Contact — Talavera Casa Juárez</title>
      </Head>

      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center">
        <Image
          src="/photos/necklace-heart-blue.jpg"
          alt="Talavera heart necklace and earring set"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Get in Touch</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">Visit or Contact Us</h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-talavera mb-8">
                {contactInfo.name}
              </h2>
              <p className="font-body text-sm text-dark-light mb-6">{contactInfo.title}</p>

              <div className="space-y-4 mb-8">
                <a href="tel:+529841525413" className="flex items-center gap-3 font-body text-base text-dark hover:text-talavera transition-colors cursor-pointer">
                  <Phone size={20} className="text-talavera" />
                  +52 984-152-5413
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 font-body text-base text-dark hover:text-talavera transition-colors cursor-pointer">
                  <Mail size={20} className="text-talavera" />
                  {contactInfo.email}
                </a>
                <a href="https://instagram.com/talaveracasajuarez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-base text-dark hover:text-talavera transition-colors cursor-pointer">
                  <Instagram size={20} className="text-talavera" />
                  {contactInfo.instagram}
                </a>
                <a href="https://www.facebook.com/people/Talavera-Casa-Ju%C3%A1rez/61575195498498/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-base text-dark hover:text-talavera transition-colors cursor-pointer">
                  <Facebook size={20} className="text-talavera" />
                  Talavera Casa Juárez
                </a>
                <a href="https://tiktok.com/@talavera.casa.jur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-base text-dark hover:text-talavera transition-colors cursor-pointer">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-talavera">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.11a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.54z"/>
                  </svg>
                  @talavera.casa.jur
                </a>
                <div className="flex items-center gap-3 font-body text-base text-dark">
                  <MapPin size={20} className="text-talavera flex-shrink-0" />
                  {contactInfo.location}
                </div>
              </div>

              {/* Quick Buttons */}
              <div className="space-y-3">
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 text-white rounded-full font-body text-sm font-semibold hover:bg-green-600 transition-colors cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/talaveracasajuarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-body text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors cursor-pointer"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
                <a
                  href={contactInfo.etsy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-talavera text-talavera rounded-full font-body text-sm font-semibold hover:bg-talavera hover:text-white transition-colors cursor-pointer"
                >
                  Shop on Etsy
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="font-heading text-2xl font-semibold text-dark mb-6">Send us a message</h3>
              {submitted ? (
                <div className="bg-sage/10 rounded-2xl p-8 text-center">
                  <h4 className="font-heading text-xl font-semibold text-sage mb-2">Message prepared!</h4>
                  <p className="font-body text-sm text-dark-light">Your email app should have opened with the message. If not, email us directly at {contactInfo.email}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-dark mb-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-talavera/20 bg-ivory font-body text-sm focus:outline-none focus:ring-2 focus:ring-talavera/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-dark mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-talavera/20 bg-ivory font-body text-sm focus:outline-none focus:ring-2 focus:ring-talavera/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block font-body text-sm font-medium text-dark mb-1">Interested in</label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-talavera/20 bg-ivory font-body text-sm focus:outline-none focus:ring-2 focus:ring-talavera/40 cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="Etsy order">Etsy order question</option>
                      <option value="Custom piece">Custom piece</option>
                      <option value="Wholesale">Wholesale / design inquiry</option>
                      <option value="Visit">Visit information</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-dark mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-talavera/20 bg-ivory font-body text-sm focus:outline-none focus:ring-2 focus:ring-talavera/40 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">In Person</p>
          <h2 className="font-heading text-3xl font-bold text-talavera mb-6">
            Visit us in Puerto Morelos
          </h2>
          <p className="font-body text-base text-dark-light leading-relaxed mb-4">
            Find us at the local market in Puerto Morelos, Quintana Roo, Mexico. Come see the pieces in person, meet the family, and discover the beauty of Talavera up close.
          </p>
          <p className="font-body text-sm text-dark-light">
            Contact us for current hours and location details.
          </p>
        </div>
      </section>
    </Layout>
  );
}
