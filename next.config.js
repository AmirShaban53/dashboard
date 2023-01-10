/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "cdn.weatherapi.com", "undefined"],
  },
};

module.exports = nextConfig;
