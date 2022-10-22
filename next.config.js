/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

let isLocalBuild =
  process.env.npm_lifecycle_script ===
  'NODE_ENV=development next build && next export'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  }),
  assetPrefix: isLocalBuild
    ? '/Users/ittae/GitHub/get6.github.io/out/'
    : undefined,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
