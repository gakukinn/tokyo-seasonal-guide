'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';

export default function OctoberTokyoHanabiPage() {
  const events = [
    {
      id: 'shinagawa-autumn',
      name: '品川秋季花火祭',
      englishName: 'Shinagawa Autumn Fireworks Festival',
      date: '10月14日',
      specificDate: '2024年10月14日',
      time: '18:30-20:00',
      location: '品川区天王洲公园',
      area: '东京',
      visitors: '约15,000人',
      fireworks: '约3,000发',
      highlights: ['音乐花火', '秋季主题', '东京湾夜景'],
      level: 'primary' as const,
      crowdLevel: 'medium' as const,
      station: 'JR品川站',
      walkingTime: '步行15分钟',
      mapUrl: 'https://maps.google.com',
      image: '/images/shinagawa-autumn.jpg'
    },
    {
      id: 'odaiba-rainbow',
      name: '台场彩虹花火节',
      englishName: 'Odaiba Rainbow Fireworks Festival',
      date: '10月21日',
      specificDate: '2024年10月21日',
      time: '19:00-20:30',
      location: '台场海滨公园',
      area: '东京',
      visitors: '约25,000人',
      fireworks: '约4,500发',
      highlights: ['彩虹大桥背景', '水上花火', '免费观赏'],
      level: 'primary' as const,
      crowdLevel: 'high' as const,
      station: '新桥站',
      walkingTime: '乘坐百合海鸥线至台场海滨公园站',
      mapUrl: 'https://maps.google.com',
      image: '/images/odaiba-rainbow.jpg'
    }
  ];

  const regionInfo = {
    name: '东京',
    englishName: 'Tokyo',
    icon: '🏙️',
    description: '东京地区秋季花火大会，结合都市夜景的绚烂盛典',
    urlSlug: 'tokyo',
    features: [
      {
        icon: '🎆',
        title: '秋季主题',
        description: '以红叶和明月为主题的特色烟花'
      },
      {
        icon: '🌊',
        title: '湾岸风光',
        description: '东京湾畔的绝美夜景配合'
      },
      {
        icon: '🚇',
        title: '交通便利',
        description: '多条电车线路直达会场'
      }
    ],
    navigationLinks: [
      {
        label: '返回十月花火',
        href: '/october/hanabi'
      },
      {
        label: '神奈川花火',
        href: '/october/hanabi/kanagawa',
        isPrimary: true
      }
    ]
  };

  const monthInfo = {
    month: '十月',
    monthName: '神無月',
    urlPath: 'october'
  };

  return (
    <RegionalHanabiTemplate
      events={events}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  );
} 