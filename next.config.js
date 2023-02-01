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
};

module.exports = nextConfig;
