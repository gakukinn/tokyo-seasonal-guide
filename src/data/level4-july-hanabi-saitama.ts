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

// 7月埼玉花火大会数据 - 基于Walker Plus 2025年官方数据
export const saitamaHanabiEvents: HanabiEvent[] = [
  {
    id: 'metsza-nordic',
    name: '梅茨北欧花火2025',
    englishName: 'Metsä Nordic Fireworks 2025',
    date: '7月12日等',
    specificDate: '2025年7月12日(土)、19日(土)、20日(日)、26日(土)',
    time: '19:00~21:00',
    location: '梅茨(梅茨村·姆明谷乐园)',
    area: '饭能市',
    visitors: '未公布',
    fireworks: '非公表',
    highlights: ['北欧各国大使館推荐音乐', '湖畔花火', '北欧主题'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: '飯能駅',
    walkingTime: '徒步约13分钟',
    mapUrl: 'https://maps.google.com/metsza-nordic-hanabi',
    image: '/hanabi-metsza-nordic.jpg'
  },
  {
    id: 'seibu-en',
    name: '西武园大火祭',
    englishName: 'Seibu-en Yuenchi Dai Kasai Matsuri',
    date: '7月19日～',
    specificDate: '2025年7月19日(土)～9月15日(祝)的土日祝、8月11日(祝)～8月15日(金)',
    time: '18:30~21:30',
    location: '西武园游乐园',
    area: '所沢市',
    visitors: '未公布',
    fireworks: '非公开',
    highlights: ['大迫力音乐与花火', '游乐园夜间花火节', '一体感热狂'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: '西武遊園地駅',
    walkingTime: '徒步约3分钟',
    mapUrl: 'https://maps.google.com/seibu-en-hanabi',
    image: '/hanabi-seibu-en.jpg'
  },
  {
    id: 'iruma-base',
    name: '入间基地纳凉祭',
    englishName: 'Reiwa 7 Iruma Air Base Summer Festival',
    date: '7月23日',
    specificDate: '2025年7月23日(水)',
    time: '18:00~20:30',
    location: '航空自卫队入间基地',
    area: '狭山市',
    visitors: '4万2000',
    fireworks: '约900发',
    highlights: ['自卫队基地打上', '4号玉スターマイン', '盆踊り文化体验'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: '稲荷山公園駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/iruma-base-hanabi',
    image: '/hanabi-iruma-base.jpg'
  },
  {
    id: 'koshigaya',
    name: '越谷花火大会',
    englishName: 'Koshigaya Fireworks Festival',
    date: '7月26日',
    specificDate: '2025年7月26日(土)',
    time: '19:15~20:30',
    location: '越谷市中央市民会馆葛西用水中土堤',
    area: '越谷市',
    visitors: '27万',
    fireworks: '约5000发',
    highlights: ['种类丰富约5000发', '越谷夏日明星活动', '27万人规模'],
    level: 'primary',
    crowdLevel: 'high',
    station: '越谷駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/koshigaya-hanabi',
    image: '/hanabi-koshigaya.jpg'
  },
  {
    id: 'ogawa-tanabata',
    name: '小川町七夕花火大会',
    englishName: 'The 77th Ogawa-machi Tanabata Matsuri Fireworks Festival',
    date: '7月26日',
    specificDate: '2025年7月26日(土)',
    time: '19:30~20:15',
    location: '小川町站周边',
    area: '比企郡小川町',
    visitors: '约9万',
    fireworks: '约200发',
    highlights: ['夜空スターマイン', '尺玉绽放', '第77回历史传统'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: '小川町駅',
    walkingTime: '徒步约5分钟',
    mapUrl: 'https://maps.google.com/ogawa-tanabata-hanabi',
    image: '/hanabi-ogawa-tanabata.jpg'
  },
  {
    id: 'saitama-owada',
    name: '埼玉市大和田花火大会',
    englishName: 'Reiwa 7 Saitama City Fireworks Festival Owada Park Venue',
    date: '7月27日',
    specificDate: '2025年7月27日(日)',
    time: '19:00~20:45',
    location: '大和田公园周边',
    area: '埼玉市北区',
    visitors: '约9万',
    fireworks: '未定',
    highlights: ['さいたま市花火大会领头活动', '大和田公园会场', '2023年实绩9万人'],
    level: 'primary',
    crowdLevel: 'medium',
    station: '大和田駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/saitama-owada-hanabi',
    image: '/hanabi-saitama-owada.jpg'
  }
];

export const saitamaMonthInfo: MonthInfo = {
  month: '七月',
  monthName: '文月',
  urlPath: 'july'
};

export const saitamaRegionInfo: RegionInfo = {
  name: '埼玉',
  englishName: 'Saitama',
  icon: '🌽',
  description: '关东内陆的夏夜花火祭典，从自卫队基地到市民祭典，融合传统文化与现代娱乐的多样体验',
  urlSlug: 'saitama',
  features: [
    {
      icon: '🎋',
      title: '七夕传统文化',
      description: '小川町第77回七夕祭典花火，传承历史悠久的七夕文化，夜空スターマイン与传统祭典完美融合'
    },
    {
      icon: '✈️',
      title: '自卫队基地体验',
      description: '入间基地纳凉祭提供难得的自卫队基地花火观赏，4号玉スターマイン近距离震撼体验'
    },
    {
      icon: '🎢',
      title: '主题娱乐花火',
      description: '西武园大火祭与メッツァ北欧花火，音乐花火融合创新，提供独特的娱乐观赏体验'
    },
    {
      icon: '🏞️',
      title: '内陆花火特色',
      description: '作为关东内陆代表，埼玉花火展现不同于海岸地区的独特魅力，文化底蕴深厚'
    }
  ],
  navigationLinks: [
    {
      label: '← 返回花火大会',
      href: '/july/hanabi'
    },
    {
      label: '千叶花火 →',
      href: '/july/hanabi/chiba'
    },
    {
      label: '越谷详情 →',
      href: '/july/hanabi/saitama/koshigaya',
      isPrimary: true
    }
  ]
}; 