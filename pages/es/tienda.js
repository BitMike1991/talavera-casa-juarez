import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ShieldCheck, Globe, Package, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { contactInfo } from '@/data/products';

const beneficiosEtsy = [
  { icon: ShieldCheck, title: 'Pago seguro', desc: 'Pagos protegidos a través de la plataforma confiable de Etsy.' },
  { icon: Globe, title: 'Envío internacional', desc: 'Enviamos a países selectos de todo el mundo.' },
  { icon: Package, title: 'Empaque cuidadoso', desc: 'Cada pieza se envuelve con cuidado para un envío seguro.' },
  { icon: MessageCircle, title: 'Comunicación directa', desc: 'Escríbenos directamente por Etsy o WhatsApp.' },
];

export default function TiendaEs() {
  return (
    <Layout locale="es">
      <Head>
        <title>Tienda — Talavera Casa Juárez</title>
      </Head>

      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center">
        <Image src="/photos/tequilero-set-blue-cobalt-6pza.jpg" alt="Set de tequila azul cobalto de Talavera" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-talavera/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-3">Compra en Línea</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">Adquiere Nuestras Piezas</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-talavera mb-6">
            Nuestro camino internacional comienza en Etsy
          </h2>
          <p className="font-body text-base text-dark-light leading-relaxed mb-8">
            Piezas selectas de Talavera Casa Juárez están disponibles a través de Etsy mientras comenzamos a compartir nuestro trabajo a nivel internacional. Cada pieza se elabora por pedido y se envía con cuidado hasta tu puerta.
          </p>
          <a href={contactInfo.etsy} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-talavera text-white rounded-full font-body text-base font-semibold hover:bg-talavera-light transition-colors cursor-pointer">
            Visita nuestra tienda en Etsy
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-12">
            ¿Por qué comprar en Etsy?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficiosEtsy.map((b, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-talavera/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon size={24} className="text-talavera" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">{b.title}</h3>
                <p className="font-body text-sm text-dark-light">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-talavera text-center mb-12">
            Cómo ordenar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-ivory rounded-2xl p-8 border border-talavera/10">
              <h3 className="font-heading text-xl font-semibold text-dark mb-4">Compra en Etsy</h3>
              <ul className="space-y-3 font-body text-sm text-dark-light">
                <li className="flex gap-3"><span className="text-talavera font-bold">1.</span> Explora nuestras piezas disponibles</li>
                <li className="flex gap-3"><span className="text-talavera font-bold">2.</span> Agrega al carrito y paga de forma segura</li>
                <li className="flex gap-3"><span className="text-talavera font-bold">3.</span> Tu pieza se elabora a mano y se envía en 20-25 días</li>
              </ul>
              <a href={contactInfo.etsy} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-talavera text-white rounded-full font-body text-sm font-medium hover:bg-talavera-light transition-colors cursor-pointer">
                Comprar en Etsy <ExternalLink size={14} />
              </a>
            </div>
            <div className="bg-ivory rounded-2xl p-8 border border-talavera/10">
              <h3 className="font-heading text-xl font-semibold text-dark mb-4">Piezas personalizadas</h3>
              <p className="font-body text-sm text-dark-light leading-relaxed mb-4">
                ¿Tienes en mente una pieza única? Creamos Talavera personalizada a tu medida — colores, diseños, tamaños y formas hechos especialmente para ti. Precio según el proyecto.
              </p>
              <ul className="space-y-2 font-body text-sm text-dark-light">
                <li>Colores, motivos y tamaños personalizados</li>
                <li>Piezas para regalos o eventos especiales</li>
                <li>Piezas decorativas o arquitectónicas grandes</li>
                <li>Proyectos de diseño de interiores</li>
              </ul>
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 border-2 border-talavera text-talavera rounded-full font-body text-sm font-medium hover:bg-talavera hover:text-white transition-colors cursor-pointer">
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">Para Revendedores</p>
            <h2 className="font-heading text-3xl font-bold text-talavera">
              Venta al mayoreo y por lote
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-talavera/10">
            <p className="font-body text-base text-dark-light leading-relaxed mb-6">
              Trabajamos con revendedores, boutiques y distribuidores — tanto en México como a nivel internacional. Nuestro taller en Puebla produce piezas consistentes y de alta calidad a escala. Ya sea que tengas una tienda, una galería o una tienda en línea, ofrecemos precios por volumen en todo nuestro catálogo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="font-heading text-lg font-semibold text-talavera mb-1">Precio por volumen</p>
                <p className="font-body text-sm text-dark-light">Descuentos en todos los productos</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-lg font-semibold text-talavera mb-1">México y el mundo</p>
                <p className="font-body text-sm text-dark-light">Enviamos a revendedores en cualquier lugar</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-lg font-semibold text-talavera mb-1">Abasto constante</p>
                <p className="font-body text-sm text-dark-light">Directo de nuestro taller en Puebla</p>
              </div>
            </div>
            <div className="text-center">
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 bg-talavera text-white rounded-full font-body text-sm font-semibold hover:bg-talavera-light transition-colors cursor-pointer">
                Contáctanos para precios de mayoreo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-body text-sm text-dark-light">
            Todos los precios están en USD. El envío se calcula al momento del pago según tu ubicación. Cada pieza se elabora por pedido — tiempo estimado de producción de 20 a 25 días hábiles.
            Se requiere un anticipo del 50% para pedidos personalizados.
          </p>
        </div>
      </section>
    </Layout>
  );
}
