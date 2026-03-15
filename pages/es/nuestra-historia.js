import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function NuestraHistoria() {
  return (
    <Layout locale="es">
      <Head>
        <title>Nuestra Historia — Talavera Casa Juárez</title>
      </Head>

      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image src="/photos/workshop-artisan-sifting.jpg" alt="Artesano trabajando en el taller de la familia Juárez" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Nuestras Raíces</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">La Historia de Casa Juárez</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-6">
                La Familia Juárez
              </h2>
              <div className="space-y-4 font-body text-base text-dark-light leading-relaxed">
                <p>
                  Detrás de cada pieza de Talavera Casa Juárez hay una familia profundamente arraigada en las tradiciones cerámicas de Puebla, México. Lo que comenzó como un oficio transmitido de generación en generación se ha convertido en un legado vivo — un puente entre el arte ancestral y el mundo moderno.
                </p>
                <p>
                  Liderados por Emanuel Juárez Sánchez, el taller familiar en Puebla produce cada pieza a mano, desde el moldeado del barro hasta la pintura de los intrincados motivos florales que han definido a la Talavera durante siglos. Cada creación lleva consigo la calidez de la familia, el orgullo de la herencia y la precisión de manos experimentadas.
                </p>
                <p>
                  Desde su taller en Puebla y su punto de venta en los mercados de Puerto Morelos, en la costa caribeña de México, la familia Juárez comparte su arte con el mundo — a través de mercados locales, revendedores de confianza en todo México y ahora a nivel internacional.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image src="/photos/workshop-pigments.jpg" alt="Pigmentos naturales para la pintura de Talavera" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">Nuestra Misión</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-8">
            Preservar el oficio, compartir la belleza
          </h2>
          <div className="space-y-4 font-body text-base text-dark-light leading-relaxed">
            <p>
              En un mundo de producción en serie, creemos en el poder de lo hecho a mano. Cada pincelada cuenta una historia. Cada imperfección es la firma de lo auténtico.
            </p>
            <p>
              Nuestra misión es preservar la tradición de la Talavera compartiéndola más allá de las fronteras de México — llevando los colores, los motivos y el alma de la cerámica poblana a hogares de todo el mundo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-12">
            Detrás de las piezas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/photos/workshop-artisan-sifting.jpg', caption: 'Preparando el barro' },
              { src: '/photos/workshop-pigments.jpg', caption: 'Pigmentos naturales' },
              { src: '/photos/workshop-kiln.jpg', caption: 'El horno de cocción' },
              { src: '/photos/workshop-drying-shelves.jpg', caption: 'Secado antes del esmaltado' },
              { src: '/photos/workshop-clay-drying.jpg', caption: 'Preparación del barro' },
              { src: '/photos/plate-baroque-blue-traditional.jpg', caption: 'Obra maestra terminada' },
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

      <section className="py-16 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-talavera mb-6">Conoce nuestro trabajo</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/taller" className="inline-flex items-center justify-center px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer">
              Visita el taller
            </Link>
            <Link href="/es/coleccion" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-talavera text-talavera rounded-full font-body text-sm font-semibold hover:bg-talavera hover:text-white transition-colors cursor-pointer">
              Explora la colección
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
