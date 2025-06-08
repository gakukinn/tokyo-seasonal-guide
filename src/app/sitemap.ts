import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.vercel.app' // 替换为您的实际域名

  // 基础页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    // 月份页面
    ...['january', 'february', 'march', 'april', 'may', 'june', 
        'july', 'august', 'september', 'october', 'november', 'december'].map(month => ({
      url: `${baseUrl}/${month}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // 花火活动页面
    {
      url: `${baseUrl}/july/hanabi`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/august/hanabi`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/september/hanabi`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // 地区页面
  const regions = ['tokyo', 'kanagawa', 'saitama', 'chiba', 'kitakanto', 'koshinetsu']
  const months = ['july', 'august', 'september']
  
  const regionPages = months.flatMap(month =>
    regions.map(region => ({
      url: `${baseUrl}/${month}/hanabi/${region}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  return [...staticPages, ...regionPages]
} 