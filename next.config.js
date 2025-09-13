/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable the webpack build worker for faster builds
  experimental: {
    workerThreads: true,
    cpus: 4,
  },
  // Enable static HTML export
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Configure image optimization
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  // Configure webpack
  webpack: (config, { isServer }) => {
    // Add custom webpack configurations here if needed
    return config;
  },
};

module.exports = nextConfig;
