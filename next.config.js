/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  babel: {
    devtool: "source-map",
  },

  images: {
    domains: ["cdn.sanity.io"],
    // loader: "custom",
  },

  experimental: {
    // Enables the effect of the immutable keyword on JS and CSS
    jsconfigPaths: true,
  },
};

module.exports = nextConfig;
