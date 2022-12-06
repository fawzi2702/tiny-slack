/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        // Fix Slack API CORS error Client Side
        source: '/api/slack/:path*',
        destination: `${process.env.SLACK_API_BASE_URL}/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
