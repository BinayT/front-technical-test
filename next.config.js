/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const images = {
  domains: ['dummyjson.com']
}

module.exports = {
  nextConfig,
  images
}