'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';

// 7月关东周边花火大会数据 - 仅包含官方确认信息 (数据来源: Walker Plus 2025)
const aroundEvents = [
  {
    id: 'fujisan-kawaguchiko',
    name: '富士山・河口湖山開き花火大会',
    englishName: 'Mount Fuji Kawaguchi Lake Mountain Opening Fireworks Festival',
    date: '7月5日',
    specificDate: '2025年7月5日(土)',
    time: '20:00～20:20',
    location: '大池公園',
    area: '山梨県南都留郡富士河口湖町',
    visitors: '未公布',
    fireworks: '约2000发',
    highlights: ['富士山背景', '山开仪式', '夏季开幕'],
    level: 'primary' as const,
    crowdLevel: 'medium' as const,
    station: '富士急行河口湖駅',
    walkingTime: '徒步约15分钟或河口湖周遊バスRedLine',
    mapUrl: 'https://maps.google.com/fujisan-kawaguchiko-hanabi',
    image: '/hanabi-fujisan-kawaguchiko.jpg'
  },
  {
    id: 'gion-kashiwazaki-umi',
    name: 'ぎおん柏崎まつり 海の大花火大会',
    englishName: 'Gion Kashiwazaki Festival Sea Fireworks Festival',
    date: '7月26日',
    specificDate: '2025年7月26日(土)',
    time: '19:30～21:10',
    location: '柏崎市中央海岸・みなとまち海浜公園一帯',
    area: '新潟県柏崎市',
    visitors: '未公布',
    fireworks: '1万6000发',
    highlights: ['越后三大花火之一', '海中空スターマイン', '600m宽度ワイドスターマイン', '尺玉100发一斉打上', '新潟県人气第2位'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR柏崎駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/gion-kashiwazaki-hanabi',
    image: '/hanabi-gion-kashiwazaki.jpg'
  }
];

const aroundMonthInfo = {
  month: '七月',
  monthName: '文月',
  urlPath: 'july'
};

const aroundRegionInfo = {
  name: '周边',
  englishName: '七月关东周边汇聚富士山麓与新潟海岸两大绝景花火，感受山与海的夏日盛典',
  icon: '🗻',
  description: '山海交融的花火胜地',
  urlSlug: 'around',
  features: [
    {
      icon: '🗻',
      title: '富士山花火',
      description: '富士山・河口湖山開き花火大会，以富士山为背景的绝景花火，1977年以来的传统盛典'
    },
    {
      icon: '🌊',
      title: '海岸花火',
      description: 'ぎおん柏崎まつり 海の大花火大会，越后三大花火之一，新潟県人气第2位的海岸大花火'
    },
    {
      icon: '🎆',
      title: '规模盛大',
      description: '从河口湖的2000发到柏崎海岸的1万6000发，多种规模的花火体验'
    },
    {
      icon: '🌅',
      title: '特色演出',
      description: '海中空スターマイン、600米宽度ワイドスターマイン、尺玉100发一斉打上等独特演出'
    }
  ],
  navigationLinks: [
    {
      label: '← 返回花火大会',
      href: '/july/hanabi'
    },
    {
      label: '七月千叶 →',
      href: '/july/hanabi/chiba'
    },
    {
      label: '富士山详情 →',
      href: '/july/hanabi/around/fujisan-kawaguchiko',
      isPrimary: true
    }
  ]
};

export default function JulyAroundHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={aroundEvents}
      regionInfo={aroundRegionInfo}
      monthInfo={aroundMonthInfo}
    />
  );
} 