'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';

// 7月千叶花火大会数据 - 按官方时间排序 (数据来源: Walker Plus 2025)
const chibaEvents = [
  {
    id: 'marines-hanabi',
    name: 'MARINES HANABI (マリーンズ花火)',
    englishName: 'Marines Hanabi',
    date: '7月11-8月11日',
    specificDate: '2025年7月11日(金)～8月11日(祝)特定日',
    time: '试合后',
    location: 'ZOZOマリンスタジアム',
    area: '千葉市美浜区',
    visitors: '约3万人',
    fireworks: '300发',
    highlights: ['棒球与花火', 'ホームラン级', '体育场花火'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR海浜幕張駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/marines-hanabi',
    image: '/hanabi-marines.jpg'
  },
  {
    id: 'shirahama-ama',
    name: '第61回 南房総白浜海女まつり',
    englishName: 'Shirahama Ama Festival',
    date: '7月19-20日',
    specificDate: '2025年7月19日(土)・20日(日)',
    time: '各日19:00～',
    location: '白浜野島埼灯台前公園広場',
    area: '南房総市',
    visitors: '2万5000人',
    fireworks: '水中花火',
    highlights: ['海女文化', '水中花火', '房总最南端'],
    level: 'primary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR館山駅',
    walkingTime: '巴士约30分钟',
    mapUrl: 'https://maps.google.com/shirahama-matsuri',
    image: '/hanabi-shirahama.jpg'
  },
  {
    id: 'futtsu-citizen',
    name: '「東京湾口道路建設促進」第10回 富津市民花火大会',
    englishName: 'Futtsu Citizen Fireworks Festival',
    date: '7月26日',
    specificDate: '2025年7月26日(土)',
    time: '19:30～20:30',
    location: '富津海水浴場',
    area: '富津市',
    visitors: '约5万人',
    fireworks: '5000发',
    highlights: ['东京湾海岸', '东京湾口道路', '房总半岛美景'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR青堀駅',
    walkingTime: '巴士约15分钟',
    mapUrl: 'https://maps.google.com/futtsu-hanabi',
    image: '/hanabi-futtsu.jpg'
  },
  {
    id: 'sanmu-carnival',
    name: '山武市サマーカーニバル',
    englishName: 'Sanmu City Summer Carnival',
    date: '7月26日',
    specificDate: '2025年7月26日(土)',
    time: 'カーニバルフィナーレ',
    location: '蓮沼海浜公園展望塔前広場',
    area: '山武市',
    visitors: '1万9000人',
    fireworks: '1500发',
    highlights: ['嘉年华祭典', '海滨公园', '夏季庆典'],
    level: 'secondary' as const,
    crowdLevel: 'low' as const,
    station: 'JR松尾駅',
    walkingTime: '巴士约20分钟',
    mapUrl: 'https://maps.google.com/sanmu-hanabi',
    image: '/hanabi-sanmu.jpg'
  },
  {
    id: 'oamishirasato',
    name: 'おおあみしらさとの花火',
    englishName: 'Oamishirasato Fireworks Festival',
    date: '7月26日',
    specificDate: '2025年7月26日(土)',
    time: '19:30～20:30',
    location: '白里海水浴場',
    area: '大網白里市',
    visitors: '2万8000人',
    fireworks: '3000发',
    highlights: ['海岸花火', '水中スターマイン', '60分钟连续'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR大網駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/oamishirasato-hanabi',
    image: '/hanabi-oamishirasato.jpg'
  },
  {
    id: 'kamogawa-citizen',
    name: '鴨川市民花火大会',
    englishName: 'Kamogawa Citizen Fireworks Festival',
    date: '7月29日',
    specificDate: '2025年7月29日(火)',
    time: '19:30～20:30',
    location: '前原横渚海岸',
    area: '鴨川市',
    visitors: '4万人',
    fireworks: '约1500发',
    highlights: ['日本渚100选', '太平洋海岸', '夏日度假胜地'],
    level: 'primary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR安房鴨川駅',
    walkingTime: '徒步约5分钟',
    mapUrl: 'https://maps.google.com/kamogawa-hanabi',
    image: '/hanabi-kamogawa.jpg'
  },
  {
    id: 'mother-farm',
    name: 'マザー牧場 サマーナイトファーム',
    englishName: 'Mother Farm Summer Night Farm',
    date: '7月26-27日等',
    specificDate: '7/26(土)・27(日)、8/2-17・23-24・30-31',
    time: '夜间活动',
    location: 'マザー牧場',
    area: '富津市',
    visitors: '未公布',
    fireworks: '大迫力花火',
    highlights: ['动物互动', '间近花火', '牧场体验'],
    level: 'secondary' as const,
    crowdLevel: 'low' as const,
    station: 'JR君津駅',
    walkingTime: '巴士约30分钟',
    mapUrl: 'https://maps.google.com/motherfarm',
    image: '/hanabi-motherfarm.jpg'
  }
];

const chibaMonthInfo = {
  month: '七月',
  monthName: '文月',
  urlPath: 'july'
};

const chibaRegionInfo = {
  name: '千叶',
  englishName: '千叶县拥有丰富的海岸线，从东京湾到太平洋，7个特色花火大会展现着独特的海洋风情',
  icon: '🌊',
  description: '房总半岛的海岸花火盛典',
  urlSlug: 'chiba',
  features: [
    {
      icon: '🌊',
      title: '海岸花火',
      description: '在东京湾和太平洋沿岸举办，海风中观赏花火的独特体验'
    },
    {
      icon: '🏖️',
      title: '海水浴场',
      description: '多个花火大会在海水浴场举办，可以享受夏日海滨度假'
    },
    {
      icon: '🏮',
      title: '传统文化',
      description: '保持着房总半岛的传统文化特色，地域性强烈的花火体验'
    },
    {
      icon: '🎌',
      title: '规模适中',
      description: '相比东京的大型花火，千叶花火规模适中，更适合家庭观赏'
    }
  ],
  navigationLinks: [
    {
      label: '← 返回花火大会',
      href: '/july/hanabi'
    },
    {
      label: '东京花火 →',
      href: '/july/hanabi/tokyo'
    },
    {
      label: '白浜海女祭详情 →',
      href: '/july/hanabi/chiba/shirahama-ama',
      isPrimary: true
    }
  ]
};

export default function JulyChibaHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={chibaEvents}
      regionInfo={chibaRegionInfo}
      monthInfo={chibaMonthInfo}
    />
  );
} 