/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['cdn.discordapp.com', 'i.scdn.co'],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/xDwQKtqNaV',
        permanent: false,
      }
    ];
  }
}

module.exports = nextConfig
