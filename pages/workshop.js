import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout';
import { contactInfo } from '@/data/products';

const steps = [
  { num: '01', title: 'Shaping the clay', desc: 'Raw clay is carefully shaped by hand or on a wheel, forming the base of each unique piece.', image: '/photos/workshop-artisan-sifting.jpg' },
  { num: '02', title: 'Drying & preparation', desc: 'Shaped pieces are left to dry slowly, then refined and smoothed before the first firing.', image: '/photos/workshop-drying-shelves.jpg' },
  { num: '03', title: 'First firing', desc: 'Pieces are fired in the kiln at extreme temperatures, transforming soft clay into solid ceramic.', image: '/photos/workshop-kiln.jpg' },
  { num: '04', title: 'Hand-painting the designs', desc: 'Using natural pigments and fine brushes, artisans paint each motif freehand — no two pieces are alike.', image: '/photos/workshop-pigments.jpg' },
  { num: '05', title: 'Glazing', desc: 'A tin-based glaze is carefully applied, giving Talavera its signature glossy, luminous finish.', image: '/photos/plate-baroque-blue-traditional.jpg' },
  { num: '06', title: 'Final firing', desc: 'A second firing at over 1,000°C fuses the paint and glaze into a permanent, vibrant surface.', image: '/photos/plate-baroque-blue-gold.jpg' },
];

export default function Workshop() {
  return (
    <Layout>
      <Head>
        <title>The Workshop — Talavera Casa Juárez</title>
      </Head>

      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="/photos/workshop-kiln.jpg"
          alt="Inside the ceramic kiln at the Juárez workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Behind Every Piece</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">Inside the Workshop</h1>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">The Process</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera">
              From clay to masterpiece
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

      {/* Gallery */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-12">
            Workshop gallery
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
                <Image src={src} alt="Workshop detail" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-talavera mb-6">Own a piece of this craft</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collection" className="inline-flex items-center justify-center px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer">
              See the Collection
            </Link>
            <a href={contactInfo.etsy} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-talavera text-talavera rounded-full font-body text-sm font-semibold hover:bg-talavera hover:text-white transition-colors cursor-pointer">
              Shop on Etsy <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
