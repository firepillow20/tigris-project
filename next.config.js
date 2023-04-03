/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
    },
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
