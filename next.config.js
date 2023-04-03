/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.discordapp.net',
                port: '',
                pathname: '/attachments/**',
            },
        ],
    },
}

module.exports = nextConfig
