'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';

// 8月神奈川花火大会数据 - 按官方时间排序 (数据来源: Walker Plus 2025)
const kanagawaEvents = [
  {
    id: 'sagamiko-koujou',
    name: '第73回 さがみ湖湖上祭花火大会',
    englishName: 'The 73rd Sagamiko Lake Festival Fireworks',
    date: '8月1日',
    specificDate: '2025年8月1日(金)',
    time: '19:30～20:30',
    location: '相模湖上',
    area: '相模原市緑区',
    visitors: '约5万5000人',
    fireworks: '约4000发',
    highlights: ['湖上花火', '自然环境', '豪华彩色'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR相模湖駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/sagamiko-hanabi',
    image: '/hanabi-sagamiko.jpg'
  },
  {
    id: 'kurihama-perry',
    name: '2025 久里浜ペリー祭花火大会',
    englishName: 'Kurihama Perry Festival Fireworks 2025',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:30～20:15',
    location: '久里浜海岸付近',
    area: '横須賀市',
    visitors: '约8万人',
    fireworks: '约5000发',
    highlights: ['开国纪念', 'ペリー上陸172周年', '历史意义'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR久里浜駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/kurihama-perry-hanabi',
    image: '/hanabi-kurihama-perry.jpg'
  },
  {
    id: 'odawara-sakawa',
    name: '第36回 小田原酒匂川花火大会',
    englishName: 'The 36th Odawara Sakawa River Fireworks Festival',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:10～20:00',
    location: '酒匂川スポーツ広場',
    area: '小田原市',
    visitors: '约25万人',
    fireworks: '约1万发',
    highlights: ['娱乐性强', '花火秀', '关东最大级'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR鴨宮駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/odawara-sakawa-hanabi',
    image: '/hanabi-odawara-sakawa.jpg'
  },
  {
    id: 'southern-beach-chigasaki',
    name: '第51回 サザンビーチちがさき花火大会',
    englishName: 'The 51st Southern Beach Chigasaki Fireworks Festival',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:30～20:20',
    location: 'サザンビーチちがさき(茅ヶ崎海水浴場)',
    area: '茅ヶ崎市',
    visitors: '5万人',
    fireworks: '2000发(预定)',
    highlights: ['水中孔雀花火', '羽を広げる', '海岸花火'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR茅ケ崎駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/chigasaki-hanabi',
    image: '/hanabi-chigasaki.jpg'
  },
  {
    id: 'atsugi-ayu',
    name: '市制70周年記念 第79回 あつぎ鮎まつり',
    englishName: '70th Anniversary The 79th Atsugi Ayu Festival',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:00～21:00',
    location: '相模川河川敷(三川合流点)',
    area: '厚木市',
    visitors: '约28万人',
    fireworks: '约1万发',
    highlights: ['大ナイアガラ', '市制70周年', '压轴表演'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: '小田急本厚木駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/atsugi-ayu-hanabi',
    image: '/hanabi-atsugi-ayu.jpg'
  },
  {
    id: 'hakone-en-summer',
    name: '箱根園サマーナイトフェスタ',
    englishName: 'Hakone-en Summer Night Festival',
    date: '8月2-3日',
    specificDate: '2025年8月2日(土)・3日(日)',
    time: '20:00～20:30',
    location: '箱根園湾(箱根園湖上)',
    area: '足柄下郡箱根町',
    visitors: '约6000人',
    fireworks: '5000发(1日约2500发)',
    highlights: ['芦ノ湖面映照', '水上スターマイン', '避暑胜地'],
    level: 'secondary' as const,
    crowdLevel: 'low' as const,
    station: '箱根湯本駅',
    walkingTime: '巴士约40分钟',
    mapUrl: 'https://maps.google.com/hakone-en-hanabi',
    image: '/hanabi-hakone-en.jpg'
  },
  {
    id: 'yugawara-onsen',
    name: '湯河原温泉花火大会',
    englishName: 'Yugawara Onsen Fireworks Festival',
    date: '8月3日',
    specificDate: '2025年8月3日(日)',
    time: '20:00～20:30',
    location: '湯河原町 吉浜海岸沖合',
    area: '足柄下郡湯河原町',
    visitors: '约1万4000人',
    fireworks: '约2200发',
    highlights: ['温泉与花火', '海背景', '彩色夜空'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR湯河原駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/yugawara-onsen-hanabi',
    image: '/hanabi-yugawara-onsen.jpg'
  },
  {
    id: 'minatomirai-smart',
    name: 'みなとみらいスマートフェスティバル 2025',
    englishName: 'Minato Mirai Smart Festival 2025',
    date: '8月多日',
    specificDate: '2025年8月(多个日期)',
    time: '20:00～',
    location: 'みなとみらい21地区 臨海パーク',
    area: '横浜市中区',
    visitors: '约10万人',
    fireworks: '约2500发',
    highlights: ['光与音结合', '横浜夜景', '智能娱乐'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'みなとみらい線馬車道駅',
    walkingTime: '徒步约5分钟',
    mapUrl: 'https://maps.google.com/minatomirai-smart-hanabi',
    image: '/hanabi-minatomirai-smart.jpg'
  }
];

const kanagawaMonthInfo = {
  month: '八月',
  monthName: '叶月',
  urlPath: 'august'
};

const kanagawaRegionInfo = {
  name: '神奈川',
  englishName: '八月神奈川县呈现最丰富的花火盛典，从相模湖的自然美景到横滨港的都市风情，13场花火大会各具特色',
  icon: '🌊',
  description: '夏末海滨花火的绚烂绽放',
  urlSlug: 'kanagawa',
  features: [
    {
      icon: '🏔️',
      title: '湖山花火',
      description: '相模湖湖上祭在豊富自然中绽放，湖面倒影与山景形成独特的观赏体验'
    },
    {
      icon: '⚓',
      title: '历史纪念',
      description: '久里浜ペリー祭纪念开国172周年，花火承载着厚重的历史文化意义'
    },
    {
      icon: '🌃',
      title: '都市夜景',
      description: '横滨みなとみらい将现代科技与传统花火结合，创造光与音的视听盛宴'
    },
    {
      icon: '♨️',
      title: '温泉花火',
      description: '湯河原温泉花火大会结合温泉文化，在海岸背景下展现独特的度假氛围'
    }
  ],
  navigationLinks: [
    {
      label: '← 返回花火大会',
      href: '/august/hanabi'
    },
    {
      label: '八月东京 →',
      href: '/august/hanabi/tokyo'
    },
    {
      label: '小田原酒匂川详情 →',
      href: '/august/hanabi/kanagawa/odawara-sakawa',
      isPrimary: true
    }
  ]
};

export default function AugustKanagawaHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={kanagawaEvents}
      regionInfo={kanagawaRegionInfo}
      monthInfo={kanagawaMonthInfo}
    />
  );
} 