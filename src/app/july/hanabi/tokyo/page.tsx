'use client';

import RegionalHanabiTemplate from '../../../../components/RegionalHanabiTemplate';

// 动态计算地区信息 - 避免数字引用
const getDynamicRegionDescription = () => {
  return '全日本花火密度最高地区，从传统隅田川到现代竞马场应有尽有';
};

// 东京花火大会事件数据 - 基于 https://hanabi.walkerplus.com 官方数据
const tokyoHanabiEvents = [
  {
    id: 'tokyo-racecourse',
    name: '东京竞马场花火大会',
    englishName: 'Tokyo Racecourse Fireworks 2025',
    date: '7/2',
    specificDate: '2025年7月2日(水)',
    time: '19:30～20:40',
    location: 'JRA东京竞马场',
    area: '府中市',
    visitors: '非公布',
    fireworks: '14,000发',
    highlights: ['J-POP音乐同步', '日本最高峰花火娱乐', '全席指定'],
    level: 'primary' as const,
    crowdLevel: 'medium' as const,
    station: '府中竞马场正门前駅',
    walkingTime: '徒步约2分钟',
    mapUrl: 'https://maps.google.com/tokyo-racecourse',
    image: '/images/tokyo-racecourse-hanabi.jpg'
  },
  {
    id: 'katsushika',
    name: '葛饰纳凉花火大会',
    englishName: 'Katsushika Fireworks Festival',
    date: '7/22',
    specificDate: '2025年7月22日(火)',
    time: '19:20～20:20',
    location: '葛飾区柴又野球場(江戸川河川敷)',
    area: '葛飾区',
    visitors: '约77万人',
    fireworks: '15,000发',
    highlights: ['五感体验', '临场感十足', '下町风情'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: '柴又駅',
    walkingTime: '徒步约7分钟',
    mapUrl: 'https://maps.google.com/katsushika',
    image: '/images/katsushika-hanabi.jpg'
  },
  {
    id: 'sumida',
    name: '隅田川花火大会',
    englishName: 'Sumida River Fireworks Festival',
    date: '7/26',
    specificDate: '2025年7月26日(土)',
    time: '19:00～20:30',
    location: '桜橋下流～言問橋上流(第一会场)、駒形橋下流～厩橋上流(第二会场)',
    area: '墨田区·台東区',
    visitors: '约91万人',
    fireworks: '20,000发',
    highlights: ['关东随一传统格式', '两个会场同时', '东京代表性花火'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: '浅草駅',
    walkingTime: '徒步约5分钟',
    mapUrl: 'https://maps.google.com/sumida-river',
    image: '/images/sumida-hanabi.jpg'
  },
  {
    id: 'hachioji',
    name: '八王子花火大会',
    englishName: 'Hachioji Fireworks Festival',
    date: '7/26',
    specificDate: '2025年7月26日(土)',
    time: '19:00～20:30',
    location: '富士森公园',
    area: '八王子市',
    visitors: '约9万人',
    fireworks: '4,000发',
    highlights: ['迫力花火', '公园会场', '家庭友好'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: '八王子駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/hachioji',
    image: '/images/hachioji-hanabi.jpg'
  },
  {
    id: 'tachikawa',
    name: '立川昭和记念公园花火大会',
    englishName: 'Tachikawa Showa Kinen Park Fireworks',
    date: '7/26',
    specificDate: '2025年7月26日(土)',
    time: '19:00～20:30',
    location: '国営昭和記念公園',
    area: '立川市',
    visitors: '32万人',
    fireworks: '5,000发',
    highlights: ['芸协玉', '趣向花火', '广阔会场'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: '立川駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/tachikawa-park',
    image: '/images/tachikawa-hanabi.jpg'
  },
  {
    id: 'mikurajima',
    name: '御蔵島花火大会',
    englishName: 'Mikurajima Fireworks Festival',
    date: '7/31',
    specificDate: '2025年7月31日(木)',
    time: '20:00～20:30',
    location: '御蔵島港',
    area: '御蔵島村',
    visitors: '约500人',
    fireworks: '802发',
    highlights: ['大自然围绕', '开放感十足', '离岛特色'],
    level: 'secondary' as const,
    crowdLevel: 'low' as const,
    station: '竹芝客船站',
    walkingTime: '港口步行约5分钟',
    mapUrl: 'https://maps.google.com/mikurajima',
    image: '/images/mikurajima-hanabi.jpg'
  }
];

// 东京地区信息 - 基于官方数据优化
const tokyoRegionInfo = {
  name: '东京',
  englishName: 'Tokyo',
  icon: '🗼',
  description: getDynamicRegionDescription(),
  urlSlug: 'tokyo',
  features: [
    {
      icon: '🏆',
      title: '人气第一',
      description: 'J-POP同步花火'
    },
    {
      icon: '🎭',
      title: '传统格式',
      description: '关东随一传统'
    },
    {
      icon: '🌊',
      title: '多元体验',
      description: '从都心到离岛'
    }
  ],
  navigationLinks: [
    {
      label: '返回花火总览',
      href: '/july/hanabi',
      isPrimary: false
    },
    {
      label: '查看神奈川花火',
      href: '/july/hanabi/kanagawa',
      isPrimary: false
    },
    {
      label: '查看埼玉花火',
      href: '/july/hanabi/saitama',
      isPrimary: false
    }
  ]
};

// 月份信息
const monthInfo = {
  month: '七月',
  monthName: '文月',
  urlPath: 'july'
};

export default function JulyTokyoHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={tokyoHanabiEvents}
      regionInfo={tokyoRegionInfo}
      monthInfo={monthInfo}
    />
  );
} 