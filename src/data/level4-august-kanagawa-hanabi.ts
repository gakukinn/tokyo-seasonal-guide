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
}

export const events: HanabiEvent[] = [
  {
    id: 'kanagawa-aug-01',
    name: '第73回相模湖湖上祭花火大会',
    date: "8月1日",
    location: '相模原市绿区相模湖上',
    visitors: '约5万5000人',
    fireworks: "约4000发",
    likes: 11,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'sagamiko-hanabi',
    area: '相模原市',
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR中央本线相模湖站',
    walkingTime: '徒步10分钟',
    specificDate: '2025年8月1日(金)'
  },
  {
    id: 'kanagawa-aug-02a',
    name: '2025久里浜佩里祭花火大会',
    date: "8月2日",
    location: '横须贺市久里浜海岸附近',
    visitors: "约8万人",
    fireworks: "约5000发",
    likes: 55,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'kurihama-perry-hanabi',
    area: '横须贺市',
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR久里浜线京急久里浜站',
    walkingTime: '徒步15分钟',
    specificDate: '2025年8月2日(土)'
  },
  {
    id: 'kanagawa-aug-02b',
    name: '第36回小田原酒匂川花火大会',
    date: "8月2日",
    location: '小田原市酒匂川体育广场',
    visitors: "约25万人",
    fireworks: '约1万发',
    likes: 20,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'odawara-sakawa-hanabi',
    area: '小田原市',
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR东海道本线小田原站',
    walkingTime: '徒步20分钟',
    specificDate: '2025年8月2日(土)'
  },
  {
    id: 'kanagawa-aug-02c',
    name: '第51回南海滩茅崎花火大会',
    date: "8月2日",
    location: '茅崎市南海滩茅崎(茅崎海水浴场)',
    visitors: '5万人',
    fireworks: '2000发(预定)',
    likes: 15,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'southern-beach-chigasaki-hanabi',
    area: '茅崎市',
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR东海道本线茅崎站',
    walkingTime: '徒步20分钟',
    specificDate: '2025年8月2日(土)'
  },
  {
    id: 'kanagawa-aug-02d',
    name: '市制70周年纪念第79回厚木鲇祭',
    date: "8月2日",
    location: '厚木市相模川河川敷(三川合流点)',
    visitors: "约28万人",
    fireworks: '约1万发',
    likes: 20,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'atsugi-ayu-matsuri-hanabi',
    area: '厚木市',
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR东海道本线厚木站',
    walkingTime: '徒步15分钟',
    specificDate: '2025年8月2日(土)'
  },
  {
    id: 'kanagawa-aug-02e',
    name: '箱根园夏日夜间节庆',
    date: "8月2日・3日",
    location: '足柄下郡箱根町箱根园湾(箱根园湖上)',
    visitors: '约6000人',
    fireworks: '5000发(1日约2500发)',
    likes: 2,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'hakone-en-summer-night-festa',
    area: '箱根町',
    level: 'secondary',
    crowdLevel: 'low',
    station: 'JR东海道本线小田原站转巴士',
    walkingTime: '巴士40分钟+徒步5分钟',
    specificDate: '2025年8月2日(土)・3日(日)'
  },
  {
    id: 'kanagawa-aug-03',
    name: '汤河原温泉花火大会',
    date: "8月3日",
    location: '足柄下郡汤河原町吉浜海岸冲合',
    visitors: '约1万4000人',
    fireworks: "约2200发",
    likes: 2,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'yugawara-onsen-hanabi',
    area: '汤河原町',
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR东海道本线汤河原站',
    walkingTime: '徒步20分钟',
    specificDate: '2025年8月3日(日)'
  },
  {
    id: 'kanagawa-aug-04',
    name: '港未来智能节庆2025',
    date: "8月4日",
    location: '横滨市中区港未来21地区临海公园等',
    visitors: "约2万人",
    fireworks: '约2万发',
    likes: 362,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'minato-mirai-smart-festival',
    area: '横滨市',
    level: 'primary',
    crowdLevel: 'medium',
    station: 'JR根岸线樱木町站',
    walkingTime: '徒步10分钟',
    specificDate: '2025年8月4日(月)'
  },
  {
    id: 'kanagawa-aug-07',
    name: '三浦海岸纳凉祭花火大会',
    date: "8月7日",
    location: '三浦市三浦海岸',
    visitors: "约11万人",
    fireworks: "约2000发",
    likes: 15,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'miura-kaigan-hanabi',
    area: '三浦市',
    level: 'primary',
    crowdLevel: 'high',
    station: '京急久里浜线三浦海岸站',
    walkingTime: '徒步3分钟',
    specificDate: '2025年8月7日(木)'
  },
  {
    id: 'kanagawa-aug-10',
    name: '横滨夜间花火2025',
    date: "8月10日",
    location: '横滨港(新港码头、大栈桥)',
    visitors: '非公开',
    fireworks: "约150发",
    likes: 154,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'yokohama-night-flowers',
    area: '横滨市',
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR根岸线樱木町站',
    walkingTime: '徒步15分钟',
    specificDate: '2025年8月10日(日)'
  },
  {
    id: 'kanagawa-aug-17',
    name: '箱根强罗温泉「大文字烧」',
    date: "8月17日",
    location: '足柄下郡箱根町强罗温泉全域',
    visitors: '2万人',
    fireworks: '2000发',
    likes: 5,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'hakone-gora-daimonji-yaki',
    area: '箱根町',
    level: 'secondary',
    crowdLevel: 'medium',
    station: '箱根登山铁道强罗站',
    walkingTime: '徒步5分钟',
    specificDate: '2025年8月17日(日)'
  },
  {
    id: 'kanagawa-aug-30',
    name: '第51回金泽祭花火大会',
    date: "8月30日",
    location: '横滨市金泽区海之公园',
    visitors: '约25万5000人',
    fireworks: "约3500发",
    likes: 145,
    imageUrl: '/images/hanabi/default.jpg',
    category: 'hanabi',
    slug: 'kanazawa-matsuri-hanabi',
    area: '横滨市',
    level: 'primary',
    crowdLevel: 'high',
    station: '京急本线金泽文库站',
    walkingTime: '徒步20分钟',
    specificDate: '2025年8月30日(土)'
  }
];

export const regionInfo = {
  name: '神奈川',
  icon: '⛵',
  description: '从湘南海岸到箱根山脉，神奈川的花火大会展现了海滨城市的独特魅力。',
  totalEvents: 12,
  nextRegion: 'kitakanto',
  previousRegion: 'chiba'
};

export const monthInfo = {
  month: '八月',
  monthName: '八月',
  urlPath: 'august'
}; 