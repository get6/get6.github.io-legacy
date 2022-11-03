let isLocalBuild =
  process.env.npm_lifecycle_script ===
  'NODE_ENV=development next build && next export'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isLocalBuild
    ? '/Users/ittae/GitHub/get6.github.io/out/'
    : undefined,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
}
// next.config.js -> next.config.mjs로 바꾸고 markdownToHtml.ts에서 하고있는 일인 remark, rehype를 여기서 처리하게끔 해줘도 될 것 같음.
module.exports = nextConfig
