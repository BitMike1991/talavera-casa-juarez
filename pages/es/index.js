import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ExternalLink, Sparkles, Heart, Paintbrush, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import Lightbox from '@/components/Lightbox';
import { contactInfo } from '@/data/products';
import { categoriesEs } from '@/data/products-es';

const values = [
  { icon: Paintbrush, title: 'Hecho a mano con cariño', desc: 'Cada pieza es moldeada, pintada y esmaltada completamente a mano.' },
  { icon: Sparkles, title: 'Tradición de Puebla', desc: 'Inspirada en siglos de arte cerámico talavera nacido en Puebla.' },
  { icon: Heart, title: 'Artesanía familiar', desc: 'Arraigada en valores familiares, cada creación lleva un toque personal.' },
  { icon: Award, title: 'Carácter único', desc: 'No existen dos piezas iguales — cada una es una obra de arte.' },
];

export default function HomeEs() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const featuredProducts = [
    categoriesEs[0].products[0],
    categoriesEs[1].products[2],
    categoriesEs[2].products[0],
    categoriesEs[3].products[0],
    categoriesEs[5].products[4],
    categoriesEs[0].products[1],
  ];

  return (
    <Layout locale="es">
      <Head>
        <title>Talavera Casa Juárez — Talavera artesanal de Puebla, México</title>
      </Head>

      {/* HERO */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/plate-baroque-blue-gold.jpg"
            alt="Plato barroco de Talavera con motivos florales en azul y oro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/90 to-ivory/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="font-body text-sm font-semibold tracking-[0.3em] uppercase text-talavera mb-4 drop-shadow-sm">
              Hecho a mano en México
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-talavera leading-[1.1] mb-6 drop-shadow-sm">
              Talavera auténtica de Puebla
            </h1>
            <p className="font-body text-lg font-medium text-dark leading-relaxed mb-8 max-w-lg">
              Cada pieza refleja el oficio de nuestras manos, la riqueza de nuestra cultura y la belleza de lo hecho con el corazón — creada por la familia Juárez y compartida con el mundo desde México.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={contactInfo.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer"
              >
                Comprar en Etsy
                <ExternalLink size={16} />
              </a>
              <Link
                href="/es/nuestra-historia"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-talavera text-talavera rounded-full font-body text-sm font-semibold hover:bg-talavera hover:text-white transition-colors cursor-pointer"
              >
                Conoce nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">Nuestras Raíces</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-6">
                Una tradición familiar<br />nacida en Puebla
              </h2>
              <p className="font-body text-base text-dark-light leading-relaxed mb-6">
                Talavera Casa Juárez es una marca artesanal con raíces familiares, inspirada en la tradición cerámica de Puebla, México. Cada pieza refleja el oficio, la herencia cultural y la belleza de lo hecho a mano.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-talavera">100%</p>
                  <p className="font-body text-xs text-dark-light mt-1">Artesanal</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-talavera">Puebla</p>
                  <p className="font-body text-xs text-dark-light mt-1">Origen</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-talavera">Familia</p>
                  <p className="font-body text-xs text-dark-light mt-1">Tradición</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/photos/workshop-artisan-sifting.jpg" alt="Artesano preparando el barro en el taller" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">Nuestras Piezas</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera">
              Hechas a mano, hechas con alma
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {featuredProducts.map((product, i) => (
              <div key={i} className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer bg-cream" onClick={() => setLightboxIndex(i)}>
                <Image src={product.image} alt={product.name} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-body text-sm font-medium text-white">{product.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/es/coleccion" className="inline-flex items-center px-8 py-3 border-2 border-talavera text-talavera rounded-full font-body text-sm font-semibold hover:bg-talavera hover:text-white transition-colors cursor-pointer">
              Ver la colección
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera">
              ¿Por qué Talavera Casa Juárez?
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
          <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">Inicia Tu Colección</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-6">
            Comienza tu colección
          </h2>
          <p className="font-body text-base text-dark-light leading-relaxed mb-8 max-w-xl mx-auto">
            Estamos iniciando nuestro camino internacional a través de Etsy, donde puedes descubrir piezas selectas y apoyar la auténtica artesanía mexicana hecha a mano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={contactInfo.etsy} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer">
              Comprar en Etsy
              <ExternalLink size={16} />
            </a>
            <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-sage text-sage rounded-full font-body text-sm font-semibold hover:bg-sage hover:text-white transition-colors cursor-pointer">
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          src={featuredProducts[lightboxIndex].image}
          alt={featuredProducts[lightboxIndex].name}
          onClose={() => setLightboxIndex(null)}
          onPrev={lightboxIndex > 0 ? () => setLightboxIndex(lightboxIndex - 1) : null}
          onNext={lightboxIndex < featuredProducts.length - 1 ? () => setLightboxIndex(lightboxIndex + 1) : null}
        />
      )}
    </Layout>
  );
}
