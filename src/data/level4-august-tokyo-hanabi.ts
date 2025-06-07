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
  crowdLevel: string;
  station: string;
  walkingTime: string;
  specificDate: string;
  detailLink?: string;
}

export const tokyoHanabiEvents: HanabiEvent[] = [
  {
    id: 'itabashi-hanabi-2025',
    name: '第66回板桥花火大会',
    date: "8月2日",
    location: '板橋区荒川河川敷',
    visitors: '57万人',
    fireworks: '1万5000发',
    likes: 77,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'itabashi-hanabi-2025',
    area: '板桥区',
    level: 'primary',
    crowdLevel: '非常拥挤',
    station: 'JR浮间舟渡站',
    walkingTime: '步行约20分钟',
    specificDate: '2025年8月2日(土)',
    detailLink: "/august/hanabi/tokyo/itabashi"
  },
  {
    id: 'edogawa-hanabi-2025',
    name: '第50回江戸川区花火大会',
    date: "8月2日",
    location: '江戸川河川敷',
    visitors: '3万人',
    fireworks: '1万4000发',
    likes: 112,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'edogawa-hanabi-2025',
    area: '江户川区',
    level: 'primary',
    crowdLevel: '适中',
    station: 'JR総武本线小岩站',
    walkingTime: '徒步25分',
    specificDate: '2025年8月2日(土)',
    detailLink: "/august/hanabi/tokyo/edogawa"
  },
  {
    id: 'kouzushima-hanabi-2025',
    name: '第32回神津島渚花火大会',
    date: "8月4日",
    location: '神津島港桟橋',
    visitors: "1000人",
    fireworks: '747发',
    likes: 8,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'kouzushima-hanabi-2025',
    area: '神津岛村',
    level: 'secondary',
    crowdLevel: '轻松',
    station: '神津島港',
    walkingTime: '即到',
    specificDate: '2025年8月4日(月)',
    detailLink: "/august/hanabi/tokyo/kozushima"
  },
  {
    id: 'okutama-hanabi-2025',
    name: '町制施行70周年纪念 奥多摩纳凉花火大会',
    date: "8月9日",
    location: '愛宕山広場',
    visitors: "约1万人",
    fireworks: "约1000发",
    likes: 16,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'okutama-hanabi-2025',
    area: '奥多摩町',
    level: 'secondary',
    crowdLevel: '适中',
    station: 'JR青梅线奥多摩站',
    walkingTime: '徒步即到',
    specificDate: '2025年8月9日(土)',
    detailLink: "/august/hanabi/tokyo/okutama"
  },
  {
    id: 'jingu-gaien-hanabi-2025',
    name: '2025 神宫外苑花火大会',
    date: "8月16日",
    location: '明治神宮外苑',
    visitors: "约100万人",
    fireworks: '约1万发',
    likes: 71,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'jingu-gaien-hanabi-2025',
    area: '新宿区',
    level: 'primary',
    crowdLevel: '极度拥挤',
    station: 'JR総武线信濃町站',
    walkingTime: '徒步5-10分',
    specificDate: '2025年8月16日(土)',
    detailLink: "/august/hanabi/tokyo/jingu-gaien"
  },
  {
    id: 'akishima-hanabi-2025',
    name: '第53回 昭岛市民鲸鱼祭梦花火',
    date: "8月23日",
    location: '昭島市民球場',
    visitors: "约6万人",
    fireworks: "约2000发",
    likes: 14,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'akishima-hanabi-2025',
    area: '昭岛市',
    level: 'secondary',
    crowdLevel: '适中',
    station: 'JR青梅线东中神站',
    walkingTime: '徒步5分',
    specificDate: '2025年8月23日(土)',
    detailLink: "/august/hanabi/tokyo/akishima"
  }
];

export const regionInfo = {
  name: '东京',
  icon: '🗼',
  description: '首都圈花火盛典，从传统到现代，都市夜空绽放绚烂花火。',
  totalEvents: 6,
  nextRegion: 'saitama',
  previousRegion: 'koshinetsu'
};

export const monthInfo = {
  month: '八月',
  monthName: '八月',
  urlPath: 'august'
}; 