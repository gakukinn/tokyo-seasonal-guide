/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // 静态导出配置
  output: 'export',
  trailingSlash: true,
  distDir: 'out'
};

export default nextConfig; 