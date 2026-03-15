import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function OurStory() {
  return (
    <Layout>
      <Head>
        <title>Our Story — Talavera Casa Juárez</title>
      </Head>

      {/* Hero Banner */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="/photos/workshop-artisan-sifting.jpg"
          alt="Artisan at work in the Juárez family workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Our Heritage</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">The Story of Casa Juárez</h1>
        </div>
      </section>

      {/* Family Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-6">
                The Juárez Family
              </h2>
              <div className="space-y-4 font-body text-base text-dark-light leading-relaxed">
                <p>
                  Behind every piece of Talavera Casa Juárez is a family deeply rooted in the ceramic traditions of Puebla, Mexico. What began as a craft passed down through generations has become a living legacy — a bridge between ancestral artistry and the modern world.
                </p>
                <p>
                  Led by Emanuel Juárez Sánchez, the family workshop produces every piece by hand, from shaping the raw clay to painting the intricate floral motifs that have defined Talavera for centuries. Each creation carries the warmth of family, the pride of heritage, and the precision of skilled hands.
                </p>
                <p>
                  Today, from their base in Puerto Morelos on Mexico&apos;s Caribbean coast, the Juárez family shares their art with the world — preserving tradition while embracing new horizons.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/photos/workshop-pigments.jpg"
                alt="Natural pigments used in Talavera painting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">Our Mission</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-8">
            Preserving craft, sharing beauty
          </h2>
          <div className="space-y-4 font-body text-base text-dark-light leading-relaxed">
            <p>
              In a world of mass production, we believe in the power of the handmade. Every brushstroke tells a story. Every imperfection is a signature of authenticity.
            </p>
            <p>
              Our mission is to preserve the Talavera tradition by sharing it beyond Mexico&apos;s borders — bringing the colors, the patterns, and the soul of Puebla&apos;s ceramics to homes around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Documentary Photos */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-12">
            Behind the scenes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/photos/workshop-artisan-sifting.jpg', caption: 'Preparing the clay' },
              { src: '/photos/workshop-pigments.jpg', caption: 'Natural pigments' },
              { src: '/photos/workshop-kiln.jpg', caption: 'The firing kiln' },
              { src: '/photos/workshop-drying-shelves.jpg', caption: 'Drying before glazing' },
              { src: '/photos/workshop-clay-drying.jpg', caption: 'Clay preparation beds' },
              { src: '/photos/plate-baroque-blue-traditional.jpg', caption: 'Finished masterpiece' },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={photo.src} alt={photo.caption} fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-body text-xs text-white">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-talavera mb-6">See our work</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workshop" className="inline-flex items-center justify-center px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer">
              Visit the Workshop
            </Link>
            <Link href="/collection" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-talavera text-talavera rounded-full font-body text-sm font-semibold hover:bg-talavera hover:text-white transition-colors cursor-pointer">
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
