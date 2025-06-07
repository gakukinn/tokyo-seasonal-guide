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

export const saitamaHanabiEvents: HanabiEvent[] = [
  {
    id: 'seibu-en-ookasai',
    name: '西武园游乐园大火祭',
    englishName: 'Seibu-en Amusement Park Great Fire Festival',
    date: "9月15日",
    specificDate: '2025年7月19日(土)～9月15日(祝)的土日祝',
    time: '夜间举办',
    location: '西武园游乐园',
    area: '所泽市',
    visitors: '非公表',
    fireworks: '非公开',
    highlights: ['大迫力音乐与花火', '热烈庆典的大熱狂', '夜间花火祭'],
    level: 'primary',
    crowdLevel: 'high',
    station: '西武游园地西站',
    walkingTime: '步行约3分钟',
    mapUrl: 'https://goo.gl/maps/saitama-seibu',
    image: '/images/saitama-seibu.jpg',
    likes: 29
  },
  {
    id: 'metsaa-nordic-hanabi',
    name: '梅兹塔北欧花火2025',
    englishName: 'Metsa Nordic Fireworks 2025',
    date: '9月13日・14日・20日・21日',
    specificDate: '2025年9月13日(土)・14日(日)・20日(土)・21日(日)',
    time: '夜间举办',
    location: '梅兹塔(梅兹塔村庄・姆明谷乐园)',
    area: '饭能市',
    visitors: '非公表',
    fireworks: '非公表',
    highlights: ['北欧各国大使馆推荐音乐', '湖畔花火体验', '北欧主题花火'],
    level: 'primary',
    crowdLevel: 'medium',
    station: '饭能站',
    walkingTime: '转乘巴士约13分钟',
    mapUrl: 'https://goo.gl/maps/saitama-metsaa',
    image: '/images/saitama-metsaa.jpg',
    likes: 10
  }
];

export const regionInfo = {
  name: '埼玉',
  englishName: 'Saitama',
  icon: '🎡',
  description: '秋季埼玉的主题花火。\n从西武园的热闹祭典到梅兹塔的北欧浪漫，体验多样魅力',
  urlSlug: 'saitama',
  features: [
    {
      icon: '🎡',
      title: '主题公园花火',
      description: '西武园游乐园大迫力火祭体验'
    },
    {
      icon: '🇳🇴',
      title: '北欧风花火',
      description: '梅兹塔湖畔的北欧主题花火'
    },
    {
      icon: '🍂',
      title: '秋季庆典',
      description: '九月特有的秋季花火庆典'
    }
  ],
  navigationLinks: [
    { label: '← 东京', href: '/september/hanabi/tokyo' },
    { label: '千叶 →', href: '/september/hanabi/chiba', isPrimary: true }
  ]
};

export const monthInfo = {
  month: '九月',
  monthName: '九月',
  urlPath: 'september'
}; 