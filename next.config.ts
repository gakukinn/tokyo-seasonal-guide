import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用实验性功能
  experimental: {
    // 优化图片加载
    optimizePackageImports: ['lucide-react'],
  },
  
  // 图片优化配置
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30天缓存
  },
  
  // 性能优化
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // PWA和缓存优化
  headers: async () => {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/:path*.svg',
        headers: [
          {
            key: 'Cache-Control', 
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
  
  // 优化打包输出
  webpack: (config, { dev, isServer }) => {
    // 生产环境优化
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // 第三方库单独打包
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          // 公共组件单独打包
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    }
    
    return config
  }
};

export default nextConfig;
