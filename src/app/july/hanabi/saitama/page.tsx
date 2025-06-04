'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';

// 7月埼玉花火大会数据 - 按官方时间排序 (数据来源: Walker Plus)
const saitamaHanabiEvents = [
  {
    id: 'seibu-en',
    name: '西武園ゆうえんち大火祭り',
    englishName: 'Seibu-en Yuenchi Dai Kasai Matsuri',
    date: '7月19日-9月15日',
    specificDate: '2025年7月19日(土)～9月15日(祝)的土日祝、8月11日(祝)～8月15日(金)',
    time: '夜间活动',
    location: '西武園ゆうえんち',
    area: '所沢市',
    visitors: '未公布',
    fireworks: '非公开',
    highlights: ['游乐园花火', '大迫力音乐', '夜间花火节'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: '西武遊園地駅',
    walkingTime: '徒步约3分钟',
    mapUrl: 'https://maps.google.com/seibu-en-hanabi',
    image: '/hanabi-seibu-en.jpg'
  },
  {
    id: 'iruma-base',
    name: '令和7年度入間基地納涼祭～盆踊りと花火の夕べ～',
    englishName: 'Iruma Air Base Summer Festival',
    date: '7月23日',
    specificDate: '2025年7月23日(水)',
    time: '盆踊り与花火晚会',
    location: '航空自衛隊入間基地',
    area: '狭山市',
    visitors: '4万2000人',
    fireworks: '约900发',
    highlights: ['自卫队基地', '4号玉スターマイン', '盆踊り文化'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: '稲荷山公園駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/iruma-base-hanabi',
    image: '/hanabi-iruma-base.jpg'
  },
  {
    id: 'koshigaya',
    name: '越谷花火大会',
    englishName: 'Koshigaya Fireworks Festival',
    date: '7月26日',
    specificDate: '2025年7月26日(土)',
    time: '花火大会',
    location: '越谷市中央市民会館葛西用水中土手',
    area: '越谷市',
    visitors: '27万人',
    fireworks: '约5000发',
    highlights: ['种类丰富', '27万人观赏', '越谷夏日代表'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: '越谷駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/koshigaya-hanabi',
    image: '/hanabi-koshigaya.jpg'
  },
  {
    id: 'ogawa-tanabata',
    name: '第77回 小川町七夕まつり花火大会',
    englishName: 'Ogawa-machi Tanabata Matsuri Fireworks Festival',
    date: '7月26日',
    specificDate: '2025年7月26日(土)',
    time: '小川町七夕まつり',
    location: '小川町駅周辺',
    area: '比企郡小川町',
    visitors: '约9万人',
    fireworks: '约200发',
    highlights: ['七夕祭典', 'スターマイン', '尺玉表演'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: '小川町駅',
    walkingTime: '徒步约5分钟',
    mapUrl: 'https://maps.google.com/ogawa-tanabata-hanabi',
    image: '/hanabi-ogawa-tanabata.jpg'
  },
  {
    id: 'saitama-owada',
    name: '令和7年度 さいたま市花火大会 大和田公園会場',
    englishName: 'Saitama City Fireworks Festival Owada Park Venue',
    date: '7月27日',
    specificDate: '2025年7月27日(日)',
    time: '花火大会',
    location: '大和田公園周辺',
    area: 'さいたま市北区',
    visitors: '约9万人',
    fireworks: '未定',
    highlights: ['さいたま市代表', '大和田公园', '夏日压轴'],
    level: 'primary' as const,
    crowdLevel: 'medium' as const,
    station: '大和田駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/saitama-owada-hanabi',
    image: '/hanabi-saitama-owada.jpg'
  }
];

const saitamaMonthInfo = {
  month: '七月',
  monthName: '文月',
  urlPath: 'july'
};

const saitamaRegionInfo = {
  name: '埼玉',
  englishName: '埼玉县拥有多样化的花火大会，从自卫队基地到市民祭典，每场都展现着地域特色与传统文化',
  icon: '🌸',
  description: '关东内陆的夏夜花火祭典',
  urlSlug: 'saitama',
  features: [
    {
      icon: '🎋',
      title: '七夕文化',
      description: '小川町七夕祭典花火融合传统七夕文化，展现浓厚的地方特色与历史传承'
    },
    {
      icon: '✈️',
      title: '自卫队基地',
      description: '入间基地纳凉祭是难得的自卫队基地花火体验，观赏距离更近，震撼力十足'
    },
    {
      icon: '🎢',
      title: '游乐园花火',
      description: '西武园游乐园的大火祭结合音乐与花火，创造独特的娱乐体验'
    },
    {
      icon: '🏞️',
      title: '内陆特色',
      description: '作为关东内陆县，埼玉花火展现了与海岸地区不同的独特魅力和观赏体验'
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
      label: '越谷详情 →',
      href: '/july/hanabi/saitama/koshigaya',
      isPrimary: true
    }
  ]
};

export default function JulySaitamaHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={saitamaHanabiEvents}
      regionInfo={saitamaRegionInfo}
      monthInfo={saitamaMonthInfo}
    />
  );
} 