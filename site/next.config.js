/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'HOP TRENDY',
    description: 'The official store for HOP supported workspaces.',
    icon: 'taimoorsiddiquiofficial.github.io/hop-workspace/1.0/img/logo.svg',
    listUrl: 'taimoorsiddiquiofficial.github.io/hop-workspace/1.0',
    contactUrl: 'taimoorsiddiquiofficial.github.io/hop-workspace/1.0/support.',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/hop-workspace/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
