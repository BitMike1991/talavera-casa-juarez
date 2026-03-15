import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout';
import { contactInfo } from '@/data/products';

const steps = [
  { num: '01', title: 'Moldeado del barro', desc: 'El barro crudo se moldea cuidadosamente a mano o en torno, dando forma a la base de cada pieza única.', image: '/photos/workshop-artisan-sifting.jpg' },
  { num: '02', title: 'Secado y preparación', desc: 'Las piezas moldeadas se dejan secar lentamente, luego se refinan y alisan antes de la primera cocción.', image: '/photos/workshop-drying-shelves.jpg' },
  { num: '03', title: 'Primera cocción', desc: 'Las piezas se cocinan en el horno a temperaturas extremas, transformando el barro suave en cerámica sólida.', image: '/photos/workshop-kiln.jpg' },
  { num: '04', title: 'Pintura a mano', desc: 'Con pigmentos naturales y pinceles finos, los artesanos pintan cada motivo a pulso — no hay dos piezas iguales.', image: '/photos/workshop-pigments.jpg' },
  { num: '05', title: 'Esmaltado', desc: 'Se aplica cuidadosamente un esmalte a base de estaño, dándole a la Talavera su acabado brillante y luminoso característico.', image: '/photos/plate-baroque-blue-traditional.jpg' },
  { num: '06', title: 'Cocción final', desc: 'Una segunda cocción a más de 1,000°C fusiona la pintura y el esmalte en una superficie permanente y vibrante.', image: '/photos/plate-baroque-blue-gold.jpg' },
];

export default function TallerEs() {
  return (
    <Layout locale="es">
      <Head>
        <title>El Taller — Talavera Casa Juárez</title>
      </Head>

      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image src="/photos/workshop-kiln.jpg" alt="Interior del horno cerámico en el taller Juárez" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Detrás de Cada Pieza</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">Dentro del Taller</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">El Proceso</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera">
              Del barro a la obra maestra
            </h2>
          </div>
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="font-heading text-5xl font-bold text-talavera/15">{step.num}</span>
                  <h3 className="font-heading text-2xl font-semibold text-dark mt-2 mb-3">{step.title}</h3>
                  <p className="font-body text-base text-dark-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-12">
            Galería del taller
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              '/photos/workshop-artisan-sifting.jpg',
              '/photos/workshop-pigments.jpg',
              '/photos/workshop-kiln.jpg',
              '/photos/workshop-drying-shelves.jpg',
              '/photos/workshop-clay-drying.jpg',
              '/photos/cups-saucers-pastel-trio.jpg',
              '/photos/plate-baroque-multicolor-01.jpg',
              '/photos/licorera-set-blue-pastel.jpg',
            ].map((src, i) => (
              <div key={i} className={`relative rounded-lg overflow-hidden ${i === 0 || i === 7 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <Image src={src} alt="Detalle del taller" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-talavera mb-6">Lleva contigo una pieza de este oficio</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/coleccion" className="inline-flex items-center justify-center px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer">
              Ver la colección
            </Link>
            <a href={contactInfo.etsy} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-talavera text-talavera rounded-full font-body text-sm font-semibold hover:bg-talavera hover:text-white transition-colors cursor-pointer">
              Comprar en Etsy <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
