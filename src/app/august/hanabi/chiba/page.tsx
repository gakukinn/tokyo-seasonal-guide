'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';

// 8月千叶花火大会数据 - 按官方时间排序 (数据来源: Walker Plus 2025)
const chibaEvents = [
  {
    id: 'suigo-omigawa',
    name: '第126回 水郷おみがわ花火大会',
    englishName: 'The 126th Suigo Omigawa Fireworks Festival',
    date: '8月1日',
    specificDate: '2025年8月1日(金)',
    time: '19:30～20:30',
    location: '小見川大橋下流 利根川河畔',
    area: '香取市',
    visitors: '8万人',
    fireworks: '约5000～7000发',
    highlights: ['全国匠人', '尺玉竞演', '利根川畔'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR成田線小見川駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/suigo-omigawa-hanabi',
    image: '/hanabi-suigo-omigawa.jpg'
  },
  {
    id: 'makuhari-beach',
    name: '幕張ビーチ花火フェスタ2025(第47回千葉市民花火大会)',
    englishName: 'Makuhari Beach Fireworks Festival 2025',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:30～20:30',
    location: '幕張海浜公園、幕張メッセ駐車場',
    area: '千葉市美浜区',
    visitors: '约30万人',
    fireworks: '约2万发',
    highlights: ['国内最大级', '海滨花火', '幕张夜空'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR京葉線海浜幕張駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/makuhari-beach-hanabi',
    image: '/hanabi-makuhari-beach.jpg'
  },
  {
    id: 'choshi-minato',
    name: '銚子みなとまつり花火大会',
    englishName: 'Choshi Port Festival Fireworks',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:30～20:30',
    location: '利根川河畔',
    area: '銚子市',
    visitors: '约7万人',
    fireworks: '约8000发',
    highlights: ['夏季盛典', '港町风情', '利根川畔'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR総武本線銚子駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/choshi-minato-hanabi',
    image: '/hanabi-choshi-minato.jpg'
  },
  {
    id: 'ichikawa-shiminryourin',
    name: '第41回 市川市民納涼花火大会',
    englishName: 'The 41st Ichikawa Citizens Cool Evening Fireworks Festival',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:15～20:30',
    location: '江戸川河川敷',
    area: '市川市',
    visitors: '约49万人',
    fireworks: '约1万4000发',
    highlights: ['7个主题', '魅力程序', '江户川畔'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR総武線市川駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/ichikawa-hanabi',
    image: '/hanabi-ichikawa.jpg'
  },
  {
    id: 'narashino-chutonden',
    name: '令和7年 習志野駐屯地夏まつり',
    englishName: 'Narashino Garrison Summer Festival 2025',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '18:00～20:30',
    location: '陸上自衛隊習志野駐屯地敷地内',
    area: '船橋市',
    visitors: '约5万人',
    fireworks: '约850发',
    highlights: ['自卫队基地', '夏季祭典', '夜空花火'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR総武線津田沼駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/narashino-chutonden-hanabi',
    image: '/hanabi-narashino-chutonden.jpg'
  },
  {
    id: 'matsudo-hanabi',
    name: '松戸花火大会2025',
    englishName: 'Matsudo Fireworks Festival 2025',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:15～20:20',
    location: '古ヶ崎河川敷スポーツ広場',
    area: '松戸市',
    visitors: '约27万人',
    fireworks: '1万发',
    highlights: ['传统花火', '音乐花火', '多彩程序'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR常磐線松戸駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/matsudo-hanabi',
    image: '/hanabi-matsudo.jpg'
  },
  {
    id: 'teganuma-hanabi',
    name: '手賀沼花火大会2025',
    englishName: 'Teganuma Fireworks Festival 2025',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:10～20:30',
    location: '我孫子市・手賀沼',
    area: '柏市/我孫子市',
    visitors: '48万人',
    fireworks: '约1万3500发',
    highlights: ['超级巨型烟花', '手賀沼湖畔', '各种花火'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR常磐線我孫子駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/teganuma-hanabi',
    image: '/hanabi-teganuma.jpg'
  },
  {
    id: 'kujukuri-furusato',
    name: '九十九里町ふるさとまつり',
    englishName: 'Kujukuri Town Hometown Festival',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '20:00～20:30',
    location: '片貝中央海岸(ふるさと自然公園内)',
    area: '山武郡九十九里町',
    visitors: '未公布',
    fireworks: '约2000发',
    highlights: ['九十九里海岸', '故乡祭典', '海岸花火'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR東金線東金駅',
    walkingTime: '巴士约30分钟',
    mapUrl: 'https://maps.google.com/kujukuri-furusato-hanabi',
    image: '/hanabi-kujukuri-furusato.jpg'
  }
];

const chibaMonthInfo = {
  month: '八月',
  monthName: '叶月',
  urlPath: 'august'
};

const chibaRegionInfo = {
  name: '千叶',
  englishName: '八月千叶县呈现海陆双重花火魅力，从幕张海滨到利根川畔，15场花火大会展现多元地域特色',
  icon: '🌊',
  description: '海陆交融的夏季花火盛典',
  urlSlug: 'chiba',
  features: [
    {
      icon: '🏖️',
      title: '幕张海滨',
      description: '幕张ビーチ花火フェスタ是国内最大级海滨花火秀，30万人在海风中观赏2万发绚烂花火'
    },
    {
      icon: '🌊',
      title: '手賀沼湖畔',
      description: '手賀沼花火大会汇聚48万人，超级巨型烟花在湖面倒影中绽放双重美景'
    },
    {
      icon: '🏞️',
      title: '江户川流域',
      description: '市川市民納涼花火大会49万人参与，7个主题花火在江户川河畔上演夏夜交响'
    },
    {
      icon: '⚓',
      title: '港町银座',
      description: '銚子港町祭典与九十九里海岸花火，展现千叶独特的海洋文化和渔港风情'
    }
  ],
  navigationLinks: [
    {
      label: '← 返回花火大会',
      href: '/august/hanabi'
    },
    {
      label: '八月埼玉 →',
      href: '/august/hanabi/saitama'
    },
    {
      label: '幕张海滨详情 →',
      href: '/august/hanabi/chiba/makuhari-beach',
      isPrimary: true
    }
  ]
};

export default function AugustChibaHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={chibaEvents}
      regionInfo={chibaRegionInfo}
      monthInfo={chibaMonthInfo}
    />
  );
} 