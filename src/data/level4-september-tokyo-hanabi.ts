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

export const tokyoHanabiEvents: HanabiEvent[] = [
  {
    id: 'chofu-hanabi',
    name: '第40回 调布花火',
    englishName: 'The 40th Chofu Fireworks Festival',
    date: "9月20日",
    specificDate: '2025年9月20日(土)',
    time: '夜间举办',
    location: '调布市多摩川周边',
    area: '调布市',
    visitors: '30万人',
    fireworks: '约1万发',
    highlights: ['约10000发花火染遍调布', '秋季夜空中的绚烂绽放', '有料席观赏'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR调布站',
    walkingTime: '步行约10分钟',
    mapUrl: 'https://goo.gl/maps/tokyo-chofu',
    image: '/images/tokyo-chofu.jpg',
    likes: 40
  }
];

export const regionInfo = {
  name: '东京',
  englishName: 'Tokyo',
  icon: '🗼',
  description: '秋季东京的花火盛典。\n在秋高气爽的季节里，感受调布花火的别样魅力',
  urlSlug: 'tokyo',
  features: [
    {
      icon: '🍂',
      title: '秋季花火',
      description: '九月秋夜中绽放的独特体验'
    },
    {
      icon: '🎆',
      title: '大规模花火',
      description: '约1万发花火染遍调布夜空'
    },
    {
      icon: '🌉',
      title: '多摩川畔',
      description: '多摩川边的绝美花火景观'
    }
  ],
  navigationLinks: [
    { label: '← 甲信越', href: '/september/hanabi/koshinetsu' },
    { label: '埼玉 →', href: '/september/hanabi/saitama', isPrimary: true }
  ]
};

export const monthInfo = {
  month: '九月',
  monthName: '九月',
  urlPath: 'september'
}; 