/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    dangerouslyAllowSVG: true,
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
