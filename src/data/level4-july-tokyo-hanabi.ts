/**
 * 第四层数据文件 - 7月东京花火大会数据
 * @layer 四层 (Regional Data)
 * @month 7月
 * @region 东京
 * @type 地区花火数据文件
 * @contains 6个东京花火大会事件数据 + 地区信息 + 月份信息
 * @usage 供 /july/hanabi/tokyo 页面使用
 */

// 地区花火大会信息接口
interface HanabiEvent {
  id: string;
  name: string;
  englishName: string;
  date: string;
  specificDate: string;
  time: string;
  location: string;
  area: string;
  visitors: string;
  fireworks: string;
  highlights: string[];
  level: 'primary' | 'secondary';
  crowdLevel: 'high' | 'medium' | 'low';
  station: string;
  walkingTime: string;
  mapUrl: string;
  image: string;
  likes: number;
  detailLink?: string;
}

export const tokyoHanabiEvents: HanabiEvent[] = [
  {
    id: 'tokyo-keibajo-hanabi',
    name: '东京竞马场花火2025',
    englishName: 'Tokyo Racecourse Fireworks 2025',
    date: "7月2日",
    specificDate: '2025年7月2日(水)',
    time: '夜间举办',
    location: 'JRA东京竞马场',
    area: '府中市',
    visitors: '非公表',
    fireworks: '1万4000发',
    highlights: ['日本最高峰花火娱乐', 'J-POP同步花火', '有料席观赏'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR府中本町站',
    walkingTime: '步行约15分钟',
    mapUrl: 'https://goo.gl/maps/tokyo01',
    image: '/images/tokyo-keibajo.jpg',
    likes: 152,
    detailLink: "/july/hanabi/tokyo/tokyo-keibajo-hanabi"
  },
  {
    id: 'katsushika-noryo-hanabi',
    name: '第59回葛饰纳凉花火大会',
    englishName: 'The 59th Katsushika Noryo Fireworks Festival',
    date: "7月22日",
    specificDate: '2025年7月22日(火)',
    time: '19:20-20:20',
    location: '葛饰区柴又野球场(江户川河川敷)',
    area: '葛饰区',
    visitors: "约77万人",
    fireworks: '约1万5000发',
    highlights: ['五感体验临场感', '夏季花火盛典', '有料席观赏'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR金町站',
    walkingTime: '步行约20分钟',
    mapUrl: 'https://goo.gl/maps/tokyo02',
    image: '/images/tokyo-katsushika.jpg',
    likes: 98,
    detailLink: "/july/hanabi/tokyo/katsushika-noryo-hanabi"
  },
  {
    id: 'sumida',
    name: '第48回隅田川花火大会',
    englishName: 'The 48th Sumida River Fireworks Festival',
    date: "7月26日",
    specificDate: '2025年7月26日(土)',
    time: '19:00-20:30',
    location: '樱桥下游～言问桥上游(第一会场)、驹形桥下游～厩桥上游(第二会场)',
    area: '墨田区',
    visitors: "约91万人",
    fireworks: '约2万发',
    highlights: ['关东随一传统与格式', '双会场同时开催', '东京代表花火大会'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR浅草站',
    walkingTime: '步行约10分钟',
    mapUrl: 'https://goo.gl/maps/tokyo03',
    image: '/images/tokyo-sumidagawa.jpg',
    likes: 124,
    detailLink: "/july/hanabi/tokyo/sumida"
  },
  {
    id: 'hachioji-hanabi',
    name: '八王子花火大会',
    englishName: 'Hachioji Fireworks Festival',
    date: "7月26日",
    specificDate: '2025年7月26日(土)',
    time: '19:00-20:30',
    location: '富士森公园',
    area: '八王子市',
    visitors: "约9万人",
    fireworks: "约4000发",
    highlights: ['迫力十足打上花火', '富士森公园观赏'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR八王子站',
    walkingTime: '步行约15分钟',
    mapUrl: 'https://goo.gl/maps/tokyo04',
    image: '/images/tokyo-hachioji.jpg',
    likes: 30,
    detailLink: "/july/hanabi/tokyo/hachioji-hanabi"
  },
  {
    id: 'tachikawa-showa-kinen-hanabi',
    name: '立川昭和纪念公园花火大会',
    englishName: 'Tachikawa Festival Showa Kinen Park Fireworks',
    date: "7月26日",
    specificDate: '2025年7月26日(土)',
    time: '19:00-20:30',
    location: '国营昭和纪念公园',
    area: '立川市',
    visitors: '32万2575人',
    fireworks: '5000发',
    highlights: ['艺协玉等精心设计', '有料席观赏', '屋台美食'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR立川站',
    walkingTime: '步行约10分钟',
    mapUrl: 'https://goo.gl/maps/tokyo05',
    image: '/images/tokyo-tachikawa.jpg',
    likes: 36,
    detailLink: "/july/hanabi/tokyo/tachikawa-showa-kinen-hanabi"
  },
  {
    id: 'mikurajima-hanabi',
    name: '御藏岛花火大会',
    englishName: 'Mikurajima Fireworks Festival',
    date: "7月31日",
    specificDate: '2025年7月31日(木)',
    time: '20:00-20:30',
    location: '御藏岛港',
    area: '御藏岛村',
    visitors: "500人",
    fireworks: "约802发",
    highlights: ['大自然环绕', '开放感满点', '岛屿独特体验'],
    level: 'secondary',
    crowdLevel: 'low',
    station: '竹芝客船码头',
    walkingTime: '乘船约6小时30分钟',
    mapUrl: 'https://goo.gl/maps/tokyo06',
    image: '/images/tokyo-mikurajima.jpg',
    likes: 1,
    detailLink: "/july/hanabi/tokyo/mikurajima-hanabi"
  }
];

export const regionInfo = {
  name: '东京',
  englishName: 'Tokyo',
  icon: '🗼',
  description: '首都东京的夏日花火盛典。\n从传统隅田川到现代竞马场，都市与传统花火艺术交融',
  urlSlug: 'tokyo',
  features: [
    {
      icon: '🎆',
      title: '传统格式花火',
      description: '隅田川花火大会关东随一传统格式'
    },
    {
      icon: '🎵',
      title: 'J-POP花火秀',
      description: '东京竞马场音乐与花火完美融合'
    },
    {
      icon: '🌃',
      title: '都市花火景观',
      description: '东京夜景与花火的绝美组合'
    }
  ],
  navigationLinks: [
    { label: '← 甲信越', href: '/july/hanabi/koshinetsu' },
    { label: '埼玉 →', href: '/july/hanabi/saitama', isPrimary: true }
  ]
};

export const monthInfo = {
  month: '七月',
  monthName: '七月',
  urlPath: 'july'
}; 