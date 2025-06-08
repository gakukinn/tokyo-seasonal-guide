import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tokyo-seasonal-guide.vercel.app'
  
  // 基础页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    // 月份页面
    {
      url: `${baseUrl}/july`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/august`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/september`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // 花火总览页面
    {
      url: `${baseUrl}/july/hanabi`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/august/hanabi`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/september/hanabi`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // 地区页面
  const regions = ['tokyo', 'kanagawa', 'chiba', 'saitama', 'kitakanto', 'koshinetsu']
  const regionPages = regions.flatMap(region => [
    {
      url: `${baseUrl}/july/hanabi/${region}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/august/hanabi/${region}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/september/hanabi/${region}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ])

  // 重要的花火详细页面（7月东京）
  const tokyoJulyEvents = [
    'keibajo',
    'katsushika-noryo', 
    'sumida',
    'hachioji',
    'tachikawa-showa',
    'mikurajima'
  ]

  const detailPages = tokyoJulyEvents.map(event => ({
    url: `${baseUrl}/july/hanabi/tokyo/${event}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...regionPages, ...detailPages]
} 