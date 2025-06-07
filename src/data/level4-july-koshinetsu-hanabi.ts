// 地区花火大会信息接口
export interface HanabiEvent {
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

export interface MonthInfo {
  month: string;
  monthName: string;
  urlPath: string;
}

export interface RegionInfo {
  name: string;
  englishName: string;
  icon: string;
  description: string;
  urlSlug: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  navigationLinks: {
    label: string;
    href: string;
    isPrimary?: boolean;
  }[];
}

// 甲信越地区七月花火大会数据（按红心数排序前6名）
export const koshinetsuHanabiEvents: HanabiEvent[] = [
  {
    id: 'gion-kashiwazaki-matsuri-hanabi',
    name: '祇园柏崎祭海之大花火大会',
    englishName: 'Gion Kashiwazaki Festival Sea Fireworks',
    date: "7月26日",
    specificDate: '2025年7月26日(土)',
    time: '19:30-21:10',
    location: '柏崎市中央海岸・港町海滨公园一带',
    area: '柏崎市',
    visitors: '17万',
    fireworks: '1万6000发',
    highlights: ['尺玉100发一齐打上', '海之大花火盛典', '日本海花火'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR柏崎站',
    walkingTime: '步行约20分钟',
    mapUrl: 'https://goo.gl/maps/koshinetsu01',
    image: '/images/koshinetsu-kashiwazaki.jpg',
    likes: 22,
    detailLink: "/july/hanabi/koshinetsu/gion-kashiwazaki-hanabi"
  },
  {
    id: 'fuji-kawaguchi-lake-hanabi',
    name: '富士山河口湖山开花火大会',
    englishName: 'Fuji Mountain Kawaguchi Lake Opening Fireworks',
    date: "7月5日",
    specificDate: '2025年7月5日(土)',
    time: '20:00-20:30',
    location: '大池公园',
    area: '富士河口湖町',
    visitors: '未公布',
    fireworks: '2000发',
    highlights: ['色彩鲜艳花火', '河口湖夏季到来标志', '富士山背景'],
    level: 'primary',
    crowdLevel: 'medium',
    station: '河口湖站',
    walkingTime: '步行约10分钟',
    mapUrl: 'https://goo.gl/maps/koshinetsu02',
    image: '/images/koshinetsu-kawaguchi.jpg',
    likes: 10,
    detailLink: "/july/hanabi/koshinetsu/fuji-kawaguchi-lake-hanabi"
  },
  {
    id: 'suzaka-minna-hanabi',
    name: '第38回须坂大家花火大会',
    englishName: 'The 38th Suzaka Minna Fireworks Festival',
    date: "7月20日",
    specificDate: '2025年7月20日(日)',
    time: '19:30-20:30',
    location: '百々川绿地公园',
    area: '须坂市',
    visitors: '1万3000人',
    fireworks: '1000发',
    highlights: ['须坂夜空夏季风物诗', '5号玉含星雷', '蔵町夜景'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: '长野电铁须坂站',
    walkingTime: '步行约10分钟',
    mapUrl: 'https://goo.gl/maps/koshinetsu03',
    image: '/images/koshinetsu-suzaka.jpg',
    likes: 8,
    detailLink: "/july/hanabi/koshinetsu/suzaka-minna-hanabi"
  },
  {
    id: 'anime-classics-anisong-hanabi',
    name: '动漫经典动画歌曲花火',
    englishName: 'Anime Classics Anisong Fireworks',
    date: "7月5日",
    specificDate: '2025年7月5日(土)',
    time: '夜间举办',
    location: '富士川生机运动公园特设会场',
    area: '富士川町',
    visitors: '未公布',
    fireworks: '1万发',
    highlights: ['怀念名作动漫与花火融合', '动画歌曲同步花火', '有料席观赏'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR甲府站',
    walkingTime: '巴士约30分钟',
    mapUrl: 'https://goo.gl/maps/koshinetsu04',
    image: '/images/koshinetsu-anime.jpg',
    likes: 7,
    detailLink: "/july/hanabi/koshinetsu/anime-classics-anisong-hanabi"
  },
  {
    id: 'sanjo-natsumatsuri-hanabi',
    name: '三条市夏祭大花火大会',
    englishName: 'Sanjo Summer Festival Fireworks',
    date: "7月26日",
    specificDate: '2025年7月26日(土)',
    time: '19:30-21:30',
    location: '上须顷堤外地',
    area: '三条市',
    visitors: '6万6000人',
    fireworks: '4000发',
    highlights: ['尺玉豪华星烟火', '头上花火川面流泻', '三条合并20周年纪念'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR北三条站',
    walkingTime: '步行约10分钟',
    mapUrl: 'https://goo.gl/maps/koshinetsu05',
    image: '/images/koshinetsu-sanjo.jpg',
    likes: 5,
    detailLink: "/july/hanabi/koshinetsu/sanjo-natsumatsuri-hanabi"
  },
  {
    id: 'nojiri-lake-hanabi',
    name: '第101回野尻湖花火大会',
    englishName: 'The 101st Nojiri Lake Fireworks Festival',
    date: "7月26日",
    specificDate: '2025年7月26日(土)',
    time: '19:30开始',
    location: '野尻湖上',
    area: '信濃町',
    visitors: '3万',
    fireworks: '2000发',
    highlights: ['鲜艳花火照亮高原湖畔', '湖面反射光影', '山々花火音回响'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'しなの铁道黑姬站',
    walkingTime: '巴士约15分钟',
    mapUrl: 'https://goo.gl/maps/koshinetsu06',
    image: '/images/koshinetsu-nojiri.jpg',
    likes: 5,
    detailLink: "/july/hanabi/koshinetsu/nojiri-lake-hanabi"
  }
];

// 甲信越地区信息
export const regionInfo: RegionInfo = {
  name: '甲信越',
  englishName: 'Koshinetsu',
  icon: '🏔️',
  description: '山梨・长野・新潟三县，以富士山、温泉、日本海为特色的花火胜地',
  urlSlug: 'koshinetsu',
  features: [
    {
      icon: '🗻',
      title: '富士山花火',
      description: '以富士山为背景的壮观花火演出'
    },
    {
      icon: '♨️',
      title: '温泉花火',
      description: '在温泉街享受传统花火大会'
    },
    {
      icon: '🌊',
      title: '海滨花火',
      description: '日本海沿岸的大型花火盛典'
    }
  ],
  navigationLinks: [
    { label: '← 北关东', href: '/july/hanabi/kitakanto' },
    { label: '东京 →', href: '/july/hanabi/tokyo', isPrimary: true }
  ]
};

// 七月信息
export const monthInfo: MonthInfo = {
  month: '7月',
  monthName: '七月',
  urlPath: '/july/hanabi/koshinetsu'
};