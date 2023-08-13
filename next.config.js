/** @type {import('next').NextConfig} */
const nextConfig = { 
  formats: ['image/png', 'image/webp', 'image/avif'],
  images: {
    protocol:'https',
    hostname: 'www.google.com',
    port: '',
    
  },
}

module.exports = nextConfig
