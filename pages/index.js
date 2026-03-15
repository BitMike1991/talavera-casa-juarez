import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Sparkles, Heart, Paintbrush, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import { heroProducts, categories, contactInfo } from '@/data/products';

const values = [
  { icon: Paintbrush, title: 'Handmade with care', desc: 'Every piece is shaped, painted, and glazed entirely by hand.' },
  { icon: Sparkles, title: 'Puebla tradition', desc: 'Inspired by centuries of Talavera ceramic artistry from Puebla.' },
  { icon: Heart, title: 'Family craftsmanship', desc: 'Rooted in family values, each creation carries a personal touch.' },
  { icon: Award, title: 'Unique character', desc: 'No two pieces are identical — each one is a work of art.' },
];

export default function Home() {
  const featuredProducts = categories.flatMap(c => c.products).slice(0, 6);

  return (
    <Layout>
      <Head>
        <title>Talavera Casa Juárez — Handcrafted Talavera from Puebla, Mexico</title>
      </Head>

      {/* HERO */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/plate-baroque-blue-gold.jpg"
            alt="Handcrafted Talavera baroque plate with blue and gold floral motifs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory/95 via-ivory/80 to-ivory/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-talavera/70 mb-4">
              Handcrafted in Mexico
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-talavera leading-[1.1] mb-6">
              Authentic Talavera from Puebla
            </h1>
            <p className="font-body text-lg text-dark-light leading-relaxed mb-8 max-w-lg">
              Each piece reflects craftsmanship, cultural heritage, and the beauty of handmade work — created by the Juárez family and shared with the world from Mexico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={contactInfo.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer"
              >
                Shop on Etsy
                <ExternalLink size={16} />
              </a>
              <Link
                href="/our-story"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-talavera text-talavera rounded-full font-body text-sm font-semibold hover:bg-talavera hover:text-white transition-colors cursor-pointer"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">Our Heritage</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-6">
                A family tradition,<br />born in Puebla
              </h2>
              <p className="font-body text-base text-dark-light leading-relaxed mb-6">
                Talavera Casa Juárez is a family-rooted artisan brand inspired by the historic ceramic tradition of Puebla, Mexico. Each piece reflects craftsmanship, cultural heritage, and the beauty of handmade work.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-talavera">100%</p>
                  <p className="font-body text-xs text-dark-light mt-1">Handmade</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-talavera">Puebla</p>
                  <p className="font-body text-xs text-dark-light mt-1">Origin</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-talavera">Family</p>
                  <p className="font-body text-xs text-dark-light mt-1">Crafted</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/photos/workshop-artisan-sifting.jpg"
                alt="Artisan preparing clay in the workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID PREVIEW */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">Our Pieces</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera">
              Handcrafted with soul
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {featuredProducts.map((product, i) => (
              <div key={i} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-body text-sm font-medium text-white">{product.name}</p>
                    <p className="font-body text-xs text-white/80">${product.price} USD</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/collection"
              className="inline-flex items-center px-8 py-3 border-2 border-talavera text-talavera rounded-full font-body text-sm font-semibold hover:bg-talavera hover:text-white transition-colors cursor-pointer"
            >
              View the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera">
              Why Talavera Casa Juárez
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-talavera/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-talavera" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark mb-2">{v.title}</h3>
                <p className="font-body text-sm text-dark-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ETSY CTA */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">Begin Your Collection</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-6">
            Start your collection
          </h2>
          <p className="font-body text-base text-dark-light leading-relaxed mb-8 max-w-xl mx-auto">
            We are beginning our international journey through Etsy, where you can discover selected pieces and support authentic handmade Mexican craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contactInfo.etsy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer"
            >
              Shop on Etsy
              <ExternalLink size={16} />
            </a>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-sage text-sage rounded-full font-body text-sm font-semibold hover:bg-sage hover:text-white transition-colors cursor-pointer"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
