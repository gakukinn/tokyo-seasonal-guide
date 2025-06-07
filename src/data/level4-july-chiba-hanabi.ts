/**
 * 第四层数据文件 - 7月千叶花火大会数据
 * @layer 四层 (Regional Layer)
 * @month 7月
 * @region 千叶
 * @type 地区花火数据
 * @source Walker Plus官方数据 (https://hanabi.walkerplus.com/calendar/07/ar0312/)
 * @description 包含7个千叶花火活动的详细信息和跳转链接
 */
import { HanabiEvent, RegionInfo, MonthInfo } from '../types/hanabi';

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

// 千叶地区七月花火大会数据（按时间顺序排序）
export const chibaHanabiEvents: HanabiEvent[] = [
  {
    id: 'marines-hanabi',
    name: '千叶罗德花火',
    englishName: 'Marines Hanabi',
    date: "7月11日-8月11日",
    specificDate: '特定日开催',
    time: '试合后',
    location: 'ZOZO海洋体育场',
    area: '千叶市美浜区',
    visitors: '3万',
    fireworks: '300发',
    highlights: ['试合与花火', '本垒打级花火', '体育场特色', '棒球观战'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR京叶线海滨幕张站',
    walkingTime: '步行约15分钟',
    mapUrl: 'https://goo.gl/maps/chiba06',
    image: '/images/chiba-marines.jpg',
    likes: 6,
    detailLink: "/july/hanabi/chiba/marines-hanabi"
  },
  {
    id: 'shirahama-ama-matsuri',
    name: '南房总白浜海女祭',
    englishName: 'Minamiboso Shirahama Ama Festival',
    date: "7月19日・20日",
    specificDate: '2025年7月19日(土)・20日(日)',
    time: '夜间开催',
    location: '白浜野岛埼灯台前公园广场',
    area: '南房总市',
    visitors: '2万5000',
    fireworks: '非公开',
    highlights: ['水中花火', '海女传统文化', '海边夏祭', '房总半岛风情'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR内房线馆山站',
    walkingTime: '巴士约30分钟',
    mapUrl: 'https://goo.gl/maps/chiba01',
    image: '/images/chiba-shirahama.jpg',
    likes: 10,
    detailLink: "/july/hanabi/chiba/shirahama-ama-matsuri"
  },
  {
    id: 'futtsu-shimin-hanabi',
    name: '富津市民花火大会',
    englishName: 'Futtsu Citizen Fireworks Festival',
    date: "7月26日",
    specificDate: '2025年7月26日(土)',
    time: '19:30-20:30',
    location: '富津海水浴场',
    area: '富津市',
    visitors: '5万',
    fireworks: '5000发',
    highlights: ['东京湾夕凉', '海岸线花火', '东京湾口道路建设促进'],
    level: 'primary',
    crowdLevel: 'medium',
    station: 'JR内房线青堀站',
    walkingTime: '巴士约15分钟',
    mapUrl: 'https://goo.gl/maps/chiba02',
    image: '/images/chiba-futtsu.jpg',
    likes: 23,
    detailLink: "/july/hanabi/chiba/futtsu-shimin-hanabi"
  },
  {
    id: 'oamishirasato-hanabi',
    name: '大网白里花火大会',
    englishName: 'Oamishirasato Fireworks',
    date: "7月26日",
    specificDate: '2025年7月26日(土)',
    time: '19:30-20:30',
    location: '白里海水浴场',
    area: '大网白里市',
    visitors: '2万8000',
    fireworks: '3000发',
    highlights: ['60分钟花火', '水中明星雷', '海面彩色', '有料席观赏'],
    level: 'primary',
    crowdLevel: 'medium',
    station: 'JR外房线大网站',
    walkingTime: '巴士约15分钟',
    mapUrl: 'https://goo.gl/maps/chiba04',
    image: '/images/chiba-oamishirasato.jpg',
    likes: 10,
    detailLink: "/july/hanabi/chiba/oamishirasato-hanabi"
  },
  {
    id: 'mother-farm-summer-night',
    name: '母亲牧场夏夜农场',
    englishName: 'Mother Farm Summer Night Farm',
    date: "7月26日・27日",
    specificDate: '7月26日(土)・27日(日)',
    time: '夜间开催',
    location: '母亲牧场',
    area: '富津市',
    visitors: '未公布',
    fireworks: '未公布',
    highlights: ['动物接触', '近距离大迫力', '牧场体验', '有料席观赏'],
    level: 'secondary',
    crowdLevel: 'low',
    station: 'JR内房线君津站',
    walkingTime: '巴士约35分钟',
    mapUrl: 'https://goo.gl/maps/chiba07',
    image: '/images/chiba-motherfarm.jpg',
    likes: 7,
    detailLink: "/july/hanabi/chiba/mother-farm-summer-night"
  },
  {
    id: 'kamogawa-shimin-hanabi',
    name: '鸭川市民花火大会',
    englishName: 'Kamogawa Citizen Fireworks Festival',
    date: "7月29日",
    specificDate: '2025年7月29日(火)',
    time: '19:30-20:30',
    location: '前原横渚海岸',
    area: '鸭川市',
    visitors: '4万',
    fireworks: '1500发',
    highlights: ['日本渚100选', '鸭川海岸', '房总半岛南端', '屋台美食'],
    level: 'primary',
    crowdLevel: 'medium',
    station: 'JR外房线安房鸭川站',
    walkingTime: '步行约5分钟',
    mapUrl: 'https://goo.gl/maps/chiba05',
    image: '/images/chiba-kamogawa.jpg',
    likes: 15,
    detailLink: "/july/hanabi/chiba/kamogawa-shimin-hanabi"
  }
];

export const regionInfo = {
  name: '千叶',
  englishName: 'Chiba',
  icon: '🌊',
  description: '房总半岛的海岸花火盛典。\n从东京湾到太平洋，海风与花火交织的夏日浪漫',
  urlSlug: 'chiba',
  features: [
    {
      icon: '🌊',
      title: '海岸花火',
      description: '房总半岛独特的海岸线花火体验'
    },
    {
      icon: '🐚',
      title: '海女文化',
      description: '白浜海女祭传统文化与花火融合'
    },
    {
      icon: '⚾',
      title: '体育花火',
      description: '千叶罗德海洋棒球与花火的独特组合'
    }
  ],
  navigationLinks: [
    { label: '← 埼玉', href: '/july/hanabi/saitama' },
    { label: '神奈川 →', href: '/july/hanabi/kanagawa', isPrimary: true }
  ]
};

export const monthInfo = {
  month: '七月',
  monthName: '七月',
  urlPath: 'july'
};
