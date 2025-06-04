'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';

// 8月东京花火大会数据 - 按官方时间排序 (数据来源: Walker Plus 2025)
const tokyoEvents = [
  {
    id: 'itabashi-66th',
    name: '第66回 いたばし花火大会',
    englishName: 'The 66th Itabashi Fireworks Festival',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:00～20:30',
    location: '板橋区 荒川河川敷',
    area: '板橋区',
    visitors: '57万人',
    fireworks: '约1万5000发',
    highlights: ['都内最大の尺五寸玉', '目前で開く圧巻', '超近距離観賞'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR戸田公園駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/itabashi-hanabi',
    image: '/hanabi-itabashi.jpg'
  },
  {
    id: 'edogawa-50th',
    name: '第50回 江戸川区花火大会',
    englishName: 'The 50th Edogawa Fireworks Festival',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:15～20:30',
    location: '江戸川河川敷(都立篠崎公園先)',
    area: '江戸川区',
    visitors: '约3万人',
    fireworks: '约1万4000发',
    highlights: ['江戸川の夜空を彩る', '7テーマの演出', '河川敷での観賞'],
    level: 'primary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR小岩駅',
    walkingTime: '徒步约25分钟',
    mapUrl: 'https://maps.google.com/edogawa-hanabi',
    image: '/hanabi-edogawa.jpg'
  },
  {
    id: 'kozushima-32nd',
    name: '第32回 神津島 渚の花火大会',
    englishName: 'The 32nd Kozushima Beach Fireworks Festival',
    date: '8月4日',
    specificDate: '2025年8月4日(月)',
    time: '20:00～21:00',
    location: '神津島港(前浜港)の桟橋',
    area: '神津島村',
    visitors: '约1000人',
    fireworks: '747发',
    highlights: ['白い砂浜に座りながら', '島の花火大会', '海に響く花火'],
    level: 'secondary' as const,
    crowdLevel: 'low' as const,
    station: '神津島港',
    walkingTime: '港から徒步即达',
    mapUrl: 'https://maps.google.com/kozushima-hanabi',
    image: '/hanabi-kozushima.jpg'
  },
  {
    id: 'okutama-70th',
    name: '町制施行70周年記念 奥多摩納涼花火大会',
    englishName: 'Okutama Summer Fireworks Festival',
    date: '8月9日',
    specificDate: '2025年8月9日(土)',
    time: '19:30～20:30',
    location: '愛宕山広場',
    area: '西多摩郡奥多摩町',
    visitors: '约1万人',
    fireworks: '约1000发',
    highlights: ['愛宕山山頂から', '花火と山影のコントラスト', '自然豊かな環境'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR奥多摩駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/okutama-hanabi',
    image: '/hanabi-okutama.jpg'
  },
  {
    id: 'akishima-53rd',
    name: '第53回 昭島市民くじら祭 夢花火',
    englishName: 'The 53rd Akishima Citizen Whale Festival Dream Fireworks',
    date: '8月23日',
    specificDate: '2025年8月23日(土)',
    time: '19:30～20:30',
    location: '昭島市民球場',
    area: '昭島市',
    visitors: '4万5000人',
    fireworks: '约2000发',
    highlights: ['夜空に広がる感動の大輪', '迫力ある花火', '市民祭りのフィナーレ'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR昭島駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/akishima-hanabi',
    image: '/hanabi-akishima.jpg'
  }
];

const tokyoMonthInfo = {
  month: '八月',
  monthName: '叶月',
  urlPath: 'august'
};

const tokyoRegionInfo = {
  name: '东京',
  englishName: '八月是东京夏日花火的高潮，从都市中心到山间小镇，每场花火都承载着夏日的美好回忆',
  icon: '🏮',
  description: '夏末盛典的绚烂绽放',
  urlSlug: 'tokyo',
  features: [
    {
      icon: '🎆',
      title: '都内最大級',
      description: '板橋花火大会拥有都内最大的尺五寸玉，近距离观赏震撼无比'
    },
    {
      icon: '🌊',
      title: '河川敷观赏',
      description: '荒川和江戸川河川敷提供宽阔的观赏空间和独特的都市花火体验'
    },
    {
      icon: '🏔️',
      title: '山间花火',
      description: '奥多摩的山间花火与自然环境完美融合，营造独特的观赏氛围'
    },
    {
      icon: '🏝️',
      title: '岛屿浪漫',
      description: '神津岛的海滨花火提供远离都市喧嚣的宁静观赏体验'
    }
  ],
  navigationLinks: [
    {
      label: '← 返回花火大会',
      href: '/august/hanabi'
    },
    {
      label: '七月东京花火 →',
      href: '/july/hanabi/tokyo'
    },
    {
      label: '板橋花火详情 →',
      href: '/august/hanabi/tokyo/itabashi-66th',
      isPrimary: true
    }
  ]
};

export default function AugustTokyoHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={tokyoEvents}
      regionInfo={tokyoRegionInfo}
      monthInfo={tokyoMonthInfo}
    />
  );
} 