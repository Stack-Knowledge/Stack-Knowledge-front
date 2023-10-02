/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['common', 'api'],

  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
    },
  ],
  images: {
    domains: ['stack-knowledge.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
