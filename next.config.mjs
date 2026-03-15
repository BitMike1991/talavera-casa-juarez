/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
