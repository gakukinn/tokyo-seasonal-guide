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
}

export const kanagawaHanabiEvents: HanabiEvent[] = [
  {
    id: 'yokohama-night-flowers',
    name: '横浜夜间花火2025',
    englishName: 'Yokohama Night Flowers 2025',
    date: "9月6日・14日",
    specificDate: '2025年4/5・6・19、5/17・24、6/21、7/5・12、8/10、9/6・14年间通过毎月打ち上げ',
    time: '夜间举办',
    location: '横浜港(新港码头、大栈桥)',
    area: '横浜市中区',
    visitors: '非公开',
    fireworks: "约150发",
    highlights: ['年间通过毎月横浜港的短时间花火', '港口夜景与花火的绝美结合', '横浜港湾浪漫花火'],
    level: 'primary',
    crowdLevel: 'medium',
    station: '港未来站',
    walkingTime: '5分钟',
    mapUrl: '#',
    image: '/images/yokohama-night-flowers.jpg',
    likes: 154
  },
  {
    id: 'hakkeijima-symphony',
    name: '横浜・八景岛海洋天堂「花火交响曲」',
    englishName: 'Yokohama Hakkeijima SeaParadise Fireworks Symphony',
    date: "9月13日・14日",
    specificDate: '7月19日(土)・20日(日)・26日(土)、8月2日(土)・9日(土)・10日(日)・16日(土)・23日(土)、9月13日(土)・14日(日)',
    time: '夜间举办',
    location: '横浜・八景岛海洋天堂',
    area: '横浜市金沢区',
    visitors: '非公开',
    fireworks: "约2500发",
    highlights: ['音与光的现场娱乐花火秀', '海洋主题乐园花火', '水上花火奇观'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: '八景岛站',
    walkingTime: '徒步可达',
    mapUrl: '#',
    image: '/images/hakkeijima-symphony.jpg',
    likes: 22
  }
];

export const regionInfo = {
  id: "kanagawa",
  name: "神奈川",
  icon: "🌊",
  description: "九月神奈川，横浜港湾与海洋乐园的花火盛宴",
  totalEvents: 2
};

export const monthInfo = {
  month: "september",
  monthName: "九月",
  urlPath: "september",
  seasonDescription: "秋风习习，港湾花火映月色"
}; 