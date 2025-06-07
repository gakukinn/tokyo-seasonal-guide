export interface HanabiEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  visitors: string;
  fireworks: string;
  likes: number;
  imageUrl: string;
  category: string;
  slug: string;
  area: string;
  level?: 'primary' | 'secondary';
  crowdLevel?: 'high' | 'medium' | 'low';
  station: string;
  walkingTime: string;
  specificDate: string;
  detailLink?: string;
}

export const saitamaHanabiEvents: HanabiEvent[] = [
  {
    id: 'higashimatsuyama-hanabi-2025',
    name: '东松山花火大会',
    date: "8月23日",
    location: '都幾川リバーサイドパーク',
    visitors: '6万人',
    fireworks: '5000发',
    likes: 77,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'higashimatsuyama-hanabi-2025',
    area: '东松山市',
    level: 'primary',
    crowdLevel: 'medium',
    station: '东武东上线高坂站',
    walkingTime: '巴士15分',
    specificDate: '2025年8月23日(土)',
    detailLink: "/august/hanabi/saitama/higashimatsuyama"
  },
  {
    id: 'todabashi-hanabi-2025',
    name: '戸田桥花火大会',
    date: "8月2日",
    location: '国道17号戸田橋上流荒川河川敷',
    visitors: '45万人',
    fireworks: '1万5000发',
    likes: 69,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'todabashi-hanabi-2025',
    area: '戸田市',
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR埼京线戸田公园站',
    walkingTime: '徒步15分',
    specificDate: '2025年8月2日(土)',
    detailLink: "/august/hanabi/saitama/todabashi"
  },
  {
    id: 'kumagaya-hanabi-2025',
    name: '熊谷花火大会',
    date: "8月9日",
    location: '荒川河畔(荒川大橋下流)',
    visitors: '42万人',
    fireworks: '1万发',
    likes: 29,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'kumagaya-hanabi-2025',
    area: '熊谷市',
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR高崎线熊谷站',
    walkingTime: '徒步30分',
    specificDate: '2025年8月9日(土)',
    detailLink: "/august/hanabi/saitama/kumagaya"
  },
  {
    id: 'asaka-sainatsusai-2025',
    name: '朝霞彩夏祭',
    date: "8月2日",
    location: 'キャンプ朝霞跡地',
    visitors: '73万人',
    fireworks: '9000发',
    likes: 23,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'asaka-sainatsusai-2025',
    area: '朝霞市',
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR武蔵野线北朝霞站',
    walkingTime: '徒步10分',
    specificDate: '2025年8月2日(土)',
    detailLink: "/august/hanabi/saitama/asaka"
  },
  {
    id: 'saitama-omagi-hanabi-2025',
    name: '埼玉市花火大会大间木公园会场',
    date: "8月9日",
    location: '大間木公園周辺',
    visitors: '6万人',
    fireworks: '未定',
    likes: 21,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'saitama-omagi-hanabi-2025',
    area: '埼玉市绿区',
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR武蔵野线东浦和站',
    walkingTime: '徒步15分',
    specificDate: '2025年8月9日(土)',
    detailLink: "/august/hanabi/saitama/omagi"
  },
  {
    id: 'ina-matsuri-2025',
    name: '伊奈祭花火',
    date: "8月23日",
    location: '伊奈町制施行記念公園',
    visitors: '4万人',
    fireworks: '未定',
    likes: 20,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'ina-matsuri-2025',
    area: '北足立郡伊奈町',
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR高崎线上尾站',
    walkingTime: '巴士20分',
    specificDate: '2025年8月23日(土)',
    detailLink: "/august/hanabi/saitama/ina"
  }
];

export const regionInfo = {
  name: '埼玉',
  icon: '🌸',
  description: '关东内陆的花火传统。从荒川河畔到都市公园，体验埼玉独特的田园花火魅力。',
  totalEvents: 6,
  nextRegion: 'chiba',
  previousRegion: 'tokyo',
  features: [
    {
      icon: '🌾',
      title: '田园花火',
      description: '体现埼玉农业特色的田园风光花火大会，在广阔的田野间绽放绚烂烟花。'
    },
    {
      icon: '🏞️',
      title: '河畔花火',
      description: '荒川河畔的壮观花火体验，享受水面倒影与花火交相辉映的美景。'
    },
    {
      icon: '🎆',
      title: '传统花火',
      description: '传承关东内陆花火传统，展现埼玉县独特的花火文化和历史底蕴。'
    }
  ]
};

export const monthInfo = {
  month: '八月',
  monthName: '八月',
  urlPath: 'august'
}; 