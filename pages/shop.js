import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ShieldCheck, Globe, Package, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { contactInfo } from '@/data/products';

const etsyBenefits = [
  { icon: ShieldCheck, title: 'Secure checkout', desc: 'Protected payments through Etsy\'s trusted platform.' },
  { icon: Globe, title: 'International shipping', desc: 'We ship to select countries worldwide.' },
  { icon: Package, title: 'Carefully packed', desc: 'Each piece is securely wrapped for safe delivery.' },
  { icon: MessageCircle, title: 'Direct communication', desc: 'Message us directly through Etsy or WhatsApp.' },
];

export default function Shop() {
  return (
    <Layout>
      <Head>
        <title>Shop — Talavera Casa Juárez</title>
      </Head>

      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center">
        <Image
          src="/photos/tequilero-set-blue-cobalt-6pza.jpg"
          alt="Blue cobalt Talavera tequila set"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Shop Online</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">Shop Our Pieces</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-6">
            Our international journey begins on Etsy
          </h2>
          <p className="font-body text-base text-dark-light leading-relaxed mb-8">
            Selected Talavera Casa Juárez pieces are currently available through Etsy as we begin sharing our work internationally. Each piece is handmade to order and carefully shipped to your door.
          </p>
          <a
            href={contactInfo.etsy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-talavera text-white rounded-full font-body text-base font-semibold hover:bg-talavera-light transition-colors cursor-pointer"
          >
            Visit Our Etsy Shop
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      {/* Why Etsy */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-12">
            Why shop through Etsy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {etsyBenefits.map((b, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-talavera/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon size={24} className="text-talavera" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">{b.title}</h3>
                <p className="font-body text-sm text-dark-light">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-12">
            How to order
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Etsy */}
            <div className="bg-ivory rounded-2xl p-8 border border-talavera/10">
              <h3 className="font-heading text-xl font-semibold text-dark mb-4">Buy on Etsy</h3>
              <ul className="space-y-3 font-body text-sm text-dark-light">
                <li className="flex gap-3"><span className="text-talavera font-bold">1.</span> Browse our available pieces</li>
                <li className="flex gap-3"><span className="text-talavera font-bold">2.</span> Add to cart and checkout securely</li>
                <li className="flex gap-3"><span className="text-talavera font-bold">3.</span> Your piece is handmade and shipped within 20-25 days</li>
              </ul>
              <a
                href={contactInfo.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-talavera text-white rounded-full font-body text-sm font-medium hover:bg-talavera-light transition-colors cursor-pointer"
              >
                Shop on Etsy <ExternalLink size={14} />
              </a>
            </div>

            {/* Custom */}
            <div className="bg-ivory rounded-2xl p-8 border border-talavera/10">
              <h3 className="font-heading text-xl font-semibold text-dark mb-4">Custom pieces</h3>
              <p className="font-body text-sm text-dark-light leading-relaxed mb-4">
                Have a vision for a unique piece? We create custom Talavera tailored to your specifications — colors, patterns, sizes, and shapes made just for you. Custom pricing based on your project.
              </p>
              <ul className="space-y-2 font-body text-sm text-dark-light">
                <li>Custom colors, motifs, and sizes</li>
                <li>Personalized pieces for gifts or events</li>
                <li>Large decorative or architectural pieces</li>
                <li>Interior design projects</li>
              </ul>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 border-2 border-talavera text-talavera rounded-full font-body text-sm font-medium hover:bg-talavera hover:text-white transition-colors cursor-pointer"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale & Resellers */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">For Resellers</p>
            <h2 className="font-heading text-3xl font-bold text-talavera">
              Wholesale & bulk orders
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-talavera/10">
            <p className="font-body text-base text-dark-light leading-relaxed mb-6">
              We work with resellers, boutiques, and distributors — both in Mexico and internationally. Our workshop in Puebla produces consistent, high-quality pieces at scale. Whether you run a shop, a gallery, or an online store, we offer bulk pricing on our full catalog.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="font-heading text-lg font-semibold text-talavera mb-1">Bulk pricing</p>
                <p className="font-body text-sm text-dark-light">Volume discounts on all products</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-lg font-semibold text-talavera mb-1">Mexico & worldwide</p>
                <p className="font-body text-sm text-dark-light">We ship to resellers anywhere</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-lg font-semibold text-talavera mb-1">Consistent supply</p>
                <p className="font-body text-sm text-dark-light">Direct from our Puebla workshop</p>
              </div>
            </div>
            <div className="text-center">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer"
              >
                Contact Us for Wholesale Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Note about pricing */}
      <section className="py-12 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-body text-sm text-dark-light">
            All prices are in USD. Shipping is calculated at checkout based on your location. Each piece is handmade to order — estimated production time is 20-25 business days.
            A 50% deposit is required for custom orders.
          </p>
        </div>
      </section>
    </Layout>
  );
}
