/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static HTML export (replaces `next export`)
  output: 'export',

  // GitHub Pages needs trailing slashes for proper routing
  trailingSlash: true,

  // Avoid type and lint errors during production build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image settings (e.g., for use with <Image /> component)
  images: {
    domains: ['placeholder.svg'], // update if you're loading from actual image domains
    unoptimized: true, // required for static export
  },

  // Experimental features (careful on future upgrades)
  experimental: {
    optimizeCss: true, // optimize CSS output
  },
};

module.exports = nextConfig;
