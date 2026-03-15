import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

const timeline = [
  { era: '16th Century', title: 'Origins in Spain', desc: 'Majolica ceramic techniques develop in Talavera de la Reina, Spain, influenced by Moorish and Italian traditions.' },
  { era: '1550s', title: 'Arrival in New Spain', desc: 'Spanish monks and artisans bring the craft to colonial Mexico, establishing workshops in Puebla.' },
  { era: '17th Century', title: 'Growth in Puebla', desc: 'Puebla becomes the undisputed center of Talavera production, with distinctive Mexican motifs emerging.' },
  { era: '18th Century', title: 'A Unique Identity', desc: 'Mexican Talavera develops its own artistic language — bolder colors, indigenous influences, and baroque forms.' },
  { era: 'Today', title: 'Living Heritage', desc: 'Talavera is recognized as part of Mexico\'s cultural patrimony, with Puebla artisans keeping the tradition alive.' },
];

const characteristics = [
  { title: 'Hand-painted', desc: 'Every motif is painted freehand by skilled artisans — no stencils, no shortcuts.' },
  { title: 'Rich motifs', desc: 'Floral arabesques, geometric patterns, and nature-inspired designs define each piece.' },
  { title: 'Iconic colors', desc: 'Deep cobalt blue, terracotta, green, yellow, and black on a white tin-glazed base.' },
  { title: 'Dual purpose', desc: 'Beautiful enough for display, durable enough for daily use.' },
  { title: 'Fired twice', desc: 'Each piece undergoes two firings — once for the body, once for the glaze — at over 1,000°C.' },
  { title: 'One of a kind', desc: 'No two pieces are ever identical. Each carries the unique hand of its creator.' },
];

export default function Talavera() {
  return (
    <Layout>
      <Head>
        <title>The Art of Talavera — Talavera Casa Juárez</title>
      </Head>

      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="/photos/plate-baroque-multicolor-01.jpg"
          alt="Intricate Talavera baroque plate with floral motifs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Cultural Heritage</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">The Art of Talavera</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-6">
            A tradition centuries in the making
          </h2>
          <p className="font-body text-base text-dark-light leading-relaxed">
            Talavera is one of Mexico&apos;s most celebrated ceramic traditions — a fusion of Spanish Majolica techniques and indigenous Mexican artistry that has flourished in Puebla for over four centuries. What began as a colonial craft has evolved into a symbol of Mexican cultural identity, recognized worldwide for its vibrant colors and intricate hand-painted designs.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-16">
            A journey through time
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 sm:gap-10 pb-12 last:pb-0">
                {/* Line */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-talavera flex-shrink-0 mt-1" />
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-talavera/20 mt-2" />}
                </div>
                {/* Content */}
                <div className="pb-2">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-sage mb-1">{item.era}</p>
                  <h3 className="font-heading text-xl font-semibold text-dark mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-dark-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puebla */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/photos/plate-baroque-blue-traditional.jpg"
                alt="Traditional blue Talavera baroque plate from Puebla"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">The Heartland</p>
              <h2 className="font-heading text-3xl font-bold text-talavera mb-6">
                Puebla — the soul of Talavera
              </h2>
              <div className="space-y-4 font-body text-base text-dark-light leading-relaxed">
                <p>
                  Puebla is not just a city — it is the birthplace and guardian of Mexican Talavera. For centuries, its workshops have produced ceramics that blend European technique with the bold spirit of Mexico.
                </p>
                <p>
                  The city&apos;s unique clay, its master artisans, and its deep cultural roots make Puebla the only place where authentic Talavera is created. It is here that the Juárez family learned their craft, and it is from here that their art reaches the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-12">
            What makes Talavera special
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {characteristics.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-talavera/10">
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">{item.title}</h3>
                <p className="font-body text-sm text-dark-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Quote */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/photos/plate-baroque-colorful.jpg"
          alt="Colorful Talavera plate detail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-talavera/70" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <blockquote className="font-heading text-2xl sm:text-4xl font-bold text-white italic leading-relaxed">
            &ldquo;More than ceramics, Talavera is a living expression of memory, place, and craftsmanship.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-talavera mb-6">See the craft in action</h2>
          <Link href="/workshop" className="inline-flex items-center justify-center px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer">
            Visit the Workshop
          </Link>
        </div>
      </section>
    </Layout>
  );
}
