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

let isProd = process.env.NODE_ENV === 'production'
let isDev = !isProd && process.env.npm_lifecycle_script === 'next dev'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  }),
  assetPrefix: isProd
    ? '/'
    : isDev
    ? undefined
    : '/Users/ittae/GitHub/get6.github.io/out/',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
