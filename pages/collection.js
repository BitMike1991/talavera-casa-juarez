import Head from 'next/head';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout';
import { categories, contactInfo } from '@/data/products';

export default function Collection() {
  return (
    <Layout>
      <Head>
        <title>Collection — Talavera Casa Juárez</title>
      </Head>

      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center">
        <Image
          src="/photos/licorera-set-blue-pastel.jpg"
          alt="Blue pastel Talavera decanter set"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Handcrafted Pieces</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">Our Collection</h1>
          <p className="font-body text-base text-white/80 mt-4 max-w-lg mx-auto">
            A curated selection of handcrafted Talavera pieces
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="py-16 sm:py-20 even:bg-white odd:bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera">{category.name}</h2>
              <p className="font-body text-base text-dark-light mt-2 max-w-2xl">{category.description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.products.map((product, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-cream">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-body text-sm font-medium text-dark group-hover:text-talavera transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-body text-xs text-dark-light mt-1">{product.pieces}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={contactInfo.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-talavera hover:text-talavera-light transition-colors cursor-pointer"
              >
                Available on Etsy <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* Custom Orders CTA */}
      <section className="py-16 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-talavera mb-4">Looking for something special?</h2>
          <p className="font-body text-base text-dark-light mb-8">
            Custom designs, larger pieces, and wholesale inquiries are welcome. Contact us directly.
          </p>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
