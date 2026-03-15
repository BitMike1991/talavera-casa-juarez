import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout';
import Lightbox from '@/components/Lightbox';
import { contactInfo } from '@/data/products';
import { categoriesEs } from '@/data/products-es';

export default function ColeccionEs() {
  const allProducts = categoriesEs.flatMap(c => c.products);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (product) => {
    const idx = allProducts.findIndex(p => p.image === product.image);
    setLightboxIndex(idx);
  };

  return (
    <Layout locale="es">
      <Head>
        <title>Colección — Talavera Casa Juárez</title>
      </Head>

      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center">
        <Image src="/photos/licorera-set-blue-pastel.jpg" alt="Set de licorera azul pastel de Talavera" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Piezas Artesanales</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">Nuestra Colección</h1>
          <p className="font-body text-base text-white/80 mt-4 max-w-lg mx-auto">
            Una selección de piezas de Talavera hechas a mano con dedicación
          </p>
        </div>
      </section>

      {categoriesEs.map((category) => (
        <section key={category.id} id={category.id} className="py-16 sm:py-20 even:bg-white odd:bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera">{category.name}</h2>
              <p className="font-body text-base text-dark-light mt-2 max-w-2xl">{category.description}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.products.map((product, i) => (
                <div key={i} className="group cursor-pointer" onClick={() => openLightbox(product)}>
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-cream">
                    <Image src={product.image} alt={product.name} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="font-body text-sm font-medium text-dark group-hover:text-talavera transition-colors">{product.name}</h3>
                  <p className="font-body text-xs text-dark-light mt-1">{product.pieces}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href={contactInfo.etsy} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm font-medium text-talavera hover:text-talavera-light transition-colors cursor-pointer">
                Disponible en Etsy <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-talavera mb-4">¿Buscas algo especial?</h2>
          <p className="font-body text-base text-dark-light mb-8">
            Diseños personalizados, piezas grandes y pedidos al mayoreo son bienvenidos. Contáctanos directamente.
          </p>
          <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer">
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          src={allProducts[lightboxIndex].image}
          alt={allProducts[lightboxIndex].name}
          onClose={() => setLightboxIndex(null)}
          onPrev={lightboxIndex > 0 ? () => setLightboxIndex(lightboxIndex - 1) : null}
          onNext={lightboxIndex < allProducts.length - 1 ? () => setLightboxIndex(lightboxIndex + 1) : null}
        />
      )}
    </Layout>
  );
}
