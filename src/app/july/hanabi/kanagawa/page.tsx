'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';

// 7月神奈川花火大会数据 - 按官方时间排序 (数据来源: Walker Plus 2025)
const kanagawaEvents = [
  {
    id: 'yokohama-nightflowers',
    name: '横浜ナイトフラワーズ2025',
    englishName: 'Yokohama Night Flowers 2025',
    date: '7月5日・12日',
    specificDate: '2025年7月5日・12日',
    time: '短时间打上',
    location: '横浜港(新港ふ頭、大さん橋)',
    area: '横浜市中区',
    visitors: '观赏人数未公开',
    fireworks: '约150发',
    highlights: ['年间毎月开催', '港口夜景', '短时精彩'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'みなとみらい線馬車道駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/yokohama-nightflowers',
    image: '/hanabi-nightflowers.jpg'
  },
  {
    id: 'kamakura-77th',
    name: '第77回 鎌倉花火大会',
    englishName: 'The 77th Kamakura Fireworks Festival',
    date: '7月18日',
    specificDate: '2025年7月18日(金)',
    time: '19:20～20:10',
    location: '由比ヶ浜海岸・材木座海岸',
    area: '鎌倉市',
    visitors: '约16万人',
    fireworks: '约2500发',
    highlights: ['海上に咲く光の扇', '鎌倉古都背景', '夏の特別な夜'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR鎌倉駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/kamakura-hanabi',
    image: '/hanabi-kamakura.jpg'
  },
  {
    id: 'hakkeijima-symphonia',
    name: '横浜・八景島シーパラダイス「花火シンフォニア」',
    englishName: 'Yokohama Hakkeijima Sea Paradise Fireworks Symphonia',
    date: '7月19-20日・26日',
    specificDate: '7/19(土)・20(日)・26(土)',
    time: '音と光のライブ',
    location: '横浜・八景島シーパラダイス',
    area: '横浜市金沢区',
    visitors: '非公开',
    fireworks: '约2500发',
    highlights: ['音楽花火秀', '海島テーマパーク', 'ライブエンターテインメント'],
    level: 'primary' as const,
    crowdLevel: 'medium' as const,
    station: 'シーサイドライン八景島駅',
    walkingTime: '徒步即达',
    mapUrl: 'https://maps.google.com/hakkeijima-hanabi',
    image: '/hanabi-seaparadise.jpg'
  }
];

const kanagawaMonthInfo = {
  month: '七月',
  monthName: '文月',
  urlPath: 'july'
};

const kanagawaRegionInfo = {
  name: '神奈川',
  englishName: '神奈川县拥有美丽的海岸线，镰仓和横滨的花火大会结合了海景与城市夜景的独特魅力',
  icon: '🌊',
  description: '海滨城市的夏夜烟花',
  urlSlug: 'kanagawa',
  features: [
    {
      icon: '🏛️',
      title: '古都镰仓',
      description: '在历史悠久的古都背景下，观赏海上绽放的光之扇花火'
    },
    {
      icon: '🌃',
      title: '横滨港口',
      description: '现代都市港口的夜景与花火交相辉映，营造浪漫氛围'
    },
    {
      icon: '🎵',
      title: '音乐花火',
      description: '八景岛的音乐花火秀提供视听双重享受的娱乐体验'
    },
    {
      icon: '🎡',
      title: '主题公园',
      description: '结合海洋主题公园的设施，享受全方位的娱乐体验'
    }
  ],
  navigationLinks: [
    {
      label: '← 返回花火大会',
      href: '/july/hanabi'
    },
    {
      label: '千叶花火 →',
      href: '/july/hanabi/chiba'
    },
    {
      label: '鎌倉花火详情 →',
      href: '/july/hanabi/kanagawa/kamakura-77th',
      isPrimary: true
    }
  ]
};

export default function JulyKanagawaHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={kanagawaEvents}
      regionInfo={kanagawaRegionInfo}
      monthInfo={kanagawaMonthInfo}
    />
  );
} 