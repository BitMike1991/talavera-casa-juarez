import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Talavera Casa Juárez — Cerámica artesanal de Talavera hecha a mano en Puebla, México. Una artesanía hecha con el corazón." />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Talavera Casa Juárez" />
        <meta property="og:title" content="Talavera Casa Juárez — Cerámica artesanal de Puebla, México" />
        <meta property="og:description" content="Cada pieza refleja el oficio de nuestras manos, la riqueza de nuestra cultura y la belleza de lo hecho con el corazón." />
        <meta property="og:image" content="https://talaveracasajuarez.com/icon-512.png" />
        <meta property="og:url" content="https://talaveracasajuarez.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Talavera Casa Juárez" />
        <meta name="twitter:description" content="Cerámica artesanal de Talavera hecha a mano en Puebla, México." />
        <meta name="twitter:image" content="https://talaveracasajuarez.com/icon-512.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
