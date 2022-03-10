/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['cdn.discordapp.com', 'i.scdn.co'],
  },
}

module.exports = nextConfig
