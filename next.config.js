/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST_API_KEY: "http://idclab.jasonchoi.dev:3000",
    HOST_API_KEY: "http://localhost:3001",
  },
};

module.exports = nextConfig;
