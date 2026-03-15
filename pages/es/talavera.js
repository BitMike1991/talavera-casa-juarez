import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

const timeline = [
  { era: 'Siglo XVI', title: 'Orígenes en España', desc: 'Las técnicas cerámicas de mayólica se desarrollan en Talavera de la Reina, España, con influencias moriscas e italianas.' },
  { era: '1550s', title: 'Llegada a la Nueva España', desc: 'Monjes y artesanos españoles traen el oficio al México colonial, estableciendo talleres en Puebla.' },
  { era: 'Siglo XVII', title: 'Florecimiento en Puebla', desc: 'Puebla se convierte en el centro indiscutible de producción de Talavera, con motivos mexicanos propios que comienzan a surgir.' },
  { era: 'Siglo XVIII', title: 'Una identidad única', desc: 'La Talavera mexicana desarrolla su propio lenguaje artístico — colores más intensos, influencias indígenas y formas barrocas.' },
  { era: 'Hoy', title: 'Patrimonio vivo', desc: 'La Talavera es reconocida como parte del patrimonio cultural de México, con artesanos poblanos que mantienen viva la tradición.' },
];

const characteristics = [
  { title: 'Pintada a mano', desc: 'Cada motivo es pintado a pulso por artesanos expertos — sin plantillas, sin atajos.' },
  { title: 'Motivos ricos', desc: 'Arabescos florales, patrones geométricos y diseños inspirados en la naturaleza definen cada pieza.' },
  { title: 'Colores icónicos', desc: 'Azul cobalto profundo, terracota, verde, amarillo y negro sobre una base blanca esmaltada con estaño.' },
  { title: 'Doble propósito', desc: 'Suficientemente bella para exhibir, suficientemente resistente para el uso diario.' },
  { title: 'Doble cocción', desc: 'Cada pieza pasa por dos cocciones — una para el cuerpo, otra para el esmalte — a más de 1,000°C.' },
  { title: 'Única e irrepetible', desc: 'No existen dos piezas iguales. Cada una lleva la huella única de su creador.' },
];

export default function TalaveraEs() {
  return (
    <Layout locale="es">
      <Head>
        <title>El Arte de la Talavera — Talavera Casa Juárez</title>
      </Head>

      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image src="/photos/plate-baroque-multicolor-01.jpg" alt="Plato barroco de Talavera con motivos florales" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Patrimonio Cultural</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">El Arte de la Talavera</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-6">
            Una tradición de siglos
          </h2>
          <p className="font-body text-base text-dark-light leading-relaxed">
            La Talavera es una de las tradiciones cerámicas más celebradas de México — una fusión de técnicas españolas de mayólica y el arte indígena mexicano que ha florecido en Puebla durante más de cuatro siglos. Lo que comenzó como un oficio colonial se ha transformado en un símbolo de identidad cultural mexicana, reconocido en todo el mundo por sus colores vibrantes y sus diseños pintados a mano.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-16">
            Un viaje a través del tiempo
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 sm:gap-10 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-talavera flex-shrink-0 mt-1" />
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-talavera/20 mt-2" />}
                </div>
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

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/photos/plate-baroque-blue-traditional.jpg" alt="Plato tradicional azul de Talavera de Puebla" fill className="object-cover" />
            </div>
            <div>
              <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">El Corazón</p>
              <h2 className="font-heading text-3xl font-bold text-talavera mb-6">
                Puebla — el alma de la Talavera
              </h2>
              <div className="space-y-4 font-body text-base text-dark-light leading-relaxed">
                <p>
                  Puebla no es solo una ciudad — es la cuna y guardiana de la Talavera mexicana. Durante siglos, sus talleres han producido cerámica que fusiona la técnica europea con el espíritu audaz de México.
                </p>
                <p>
                  El barro único de la región, sus maestros artesanos y sus profundas raíces culturales hacen de Puebla el único lugar donde se crea la Talavera auténtica. Es aquí donde la familia Juárez aprendió su oficio, y es desde aquí que su arte llega al mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-12">
            Lo que hace especial a la Talavera
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

      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/photos/plate-baroque-colorful.jpg" alt="Detalle de plato colorido de Talavera" fill className="object-cover" />
        <div className="absolute inset-0 bg-talavera/70" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <blockquote className="font-heading text-2xl sm:text-4xl font-bold text-white italic leading-relaxed">
            &ldquo;Más que cerámica, la Talavera es una expresión viva de la memoria, el lugar y el oficio de las manos.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-talavera mb-6">Conoce el oficio en acción</h2>
          <Link href="/es/taller" className="inline-flex items-center justify-center px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer">
            Visita el taller
          </Link>
        </div>
      </section>
    </Layout>
  );
}
