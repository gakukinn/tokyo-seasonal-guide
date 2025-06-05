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
}

export const chibaHanabiEvents: HanabiEvent[] = [
  {
    id: 'chiba-july-01',
    name: '南房总白浜海女祭',
    englishName: 'Shirahama Ama Festival',
    date: '2025年7月19日-20日',
    specificDate: '7月19-20日',
    time: '19:30-21:00',
    location: '白浜野岛埼灯台前公园',
    area: '南房总市',
    visitors: '2万5千',
    fireworks: '水中花火',
    highlights: ['海女祭传统文化', '水中花火表演', '海岸绝景'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR馆山站',
    walkingTime: '转巴士约20分钟',
    mapUrl: 'https://goo.gl/maps/chiba01',
    image: '/images/chiba-shirahama.jpg'
  },
  {
    id: 'chiba-july-02',
    name: '富津市民花火大会',
    englishName: 'Futtsu Citizen Fireworks',
    date: '2025年7月26日',
    specificDate: '7月26日',
    time: '19:30-20:30',
    location: '富津海水浴场',
    area: '富津市',
    visitors: '5万',
    fireworks: '5000发',
    highlights: ['东京湾夕凉', '海滨花火', '亲子友好'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR青堀站',
    walkingTime: '转巴士约15分钟',
    mapUrl: 'https://goo.gl/maps/chiba02',
    image: '/images/chiba-futtsu.jpg'
  },
  {
    id: 'chiba-july-03',
    name: '山武市夏日嘉年华',
    englishName: 'Sanmu Summer Carnival',
    date: '2025年7月26日',
    specificDate: '7月26日',
    time: '19:45-20:30',
    location: '莲沼海滨公园展望塔前',
    area: '山武市',
    visitors: '1万9千',
    fireworks: '1500发',
    highlights: ['嘉年华活动', '展望塔观赏', '家庭欢乐'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR横芝站',
    walkingTime: '转巴士约10分钟',
    mapUrl: 'https://goo.gl/maps/chiba03',
    image: '/images/chiba-sanmu.jpg'
  },
  {
    id: 'chiba-july-04',
    name: '大网白里花火大会',
    englishName: 'Oamishirasato Fireworks',
    date: '2025年7月26日',
    specificDate: '7月26日',
    time: '19:30-20:30',
    location: '白里海水浴场',
    area: '大网白里市',
    visitors: '2万8千',
    fireworks: '3000发',
    highlights: ['60分钟连续', '水中星雷', '海岸美景'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR大网站',
    walkingTime: '转巴士约15分钟',
    mapUrl: 'https://goo.gl/maps/chiba04',
    image: '/images/chiba-oamishirasato.jpg'
  },
  {
    id: 'chiba-july-05',
    name: '鸭川市民花火大会',
    englishName: 'Kamogawa Citizen Fireworks',
    date: '2025年7月29日',
    specificDate: '7月29日',
    time: '19:30-20:15',
    location: '前原横渚海岸',
    area: '鸭川市',
    visitors: '4万',
    fireworks: '1500发',
    highlights: ['日本渚100选', '海岸线美景', '传统花火'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR安房鸭川站',
    walkingTime: '步行5分钟',
    mapUrl: 'https://goo.gl/maps/chiba05',
    image: '/images/chiba-kamogawa.jpg'
  },
  {
    id: 'chiba-july-06',
    name: '千叶罗德海洋花火',
    englishName: 'Marines Hanabi',
    date: '2025年7月11日-8月11日',
    specificDate: '特定日期',
    time: '试合结束后',
    location: 'ZOZO海洋体育场',
    area: '千叶市美浜区',
    visitors: '3万',
    fireworks: '300发',
    highlights: ['棒球观赛', '体育场花火', '夏日特别'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR海滨幕张站',
    walkingTime: '步行15分钟',
    mapUrl: 'https://goo.gl/maps/chiba06',
    image: '/images/chiba-marines.jpg'
  },
  {
    id: 'chiba-july-07',
    name: '母亲牧场夏夜农场',
    englishName: 'Mother Farm Summer Night',
    date: '2025年7月26日-27日等',
    specificDate: '多个日期',
    time: '20:00-20:15',
    location: '母亲牧场',
    area: '富津市',
    visitors: '未公布',
    fireworks: '400发',
    highlights: ['动物互动', '牧场体验', '近距离花火'],
    level: 'secondary',
    crowdLevel: 'low',
    station: 'JR君津站',
    walkingTime: '转巴士约35分钟',
    mapUrl: 'https://goo.gl/maps/chiba07',
    image: '/images/chiba-motherfarm.jpg'
  }
];

export const regionInfo = {
  name: '千叶县',
  englishName: 'Chiba Prefecture',
  icon: '🌊',
  description: '关东地区东南部，面向太平洋和东京湾的海洋县。拥有丰富的海岸线和自然景观，夏季花火大会多在海滨举办，以水中花火和海岸美景著称。',
  urlSlug: 'chiba',
  features: [
    {
      icon: '🌊',
      title: '海滨花火胜地',
      description: '千叶县拥有长达534公里的海岸线，多数花火大会在海滨举办，水中花火和海面倒影营造出独特的视觉效果。'
    },
    {
      icon: '🎋',
      title: '传统文化融合',
      description: '如南房总海女祭等，将传统文化与花火表演完美结合，展现千叶县深厚的海洋文化底蕴。'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: '亲子友好活动',
      description: '从牧场花火到体育场花火，千叶县的花火大会注重家庭娱乐，提供多样化的观赏体验。'
    }
  ],
  navigationLinks: [
    { label: '返回7月花火', href: '/july/hanabi', isPrimary: false },
    { label: '千叶县详情', href: '/regions/chiba', isPrimary: true }
  ]
};

export const monthInfo = {
  month: '7月',
  monthName: '盛夏花火',
  urlPath: 'july'
}; 