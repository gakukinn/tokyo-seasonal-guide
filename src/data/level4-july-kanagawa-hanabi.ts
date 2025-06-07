/**
 * 第四层数据文件 - 7月神奈川花火大会数据
 * @layer 四层 (Regional Layer)
 * @month 7月
 * @region 神奈川
 * @type 地区花火数据
 * @source Walker Plus官方数据 (https://hanabi.walkerplus.com/calendar/07/ar0314/)
 * @description 包含3个神奈川花火活动的详细信息和跳转链接
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

export const kanagawaHanabiEvents: HanabiEvent[] = [
  {
    id: 'kamakura-hanabi',
    name: '第77回镰仓花火大会',
    englishName: 'The 77th Kamakura Fireworks Festival',
    date: "7月18日",
    specificDate: '2025年7月18日(金)',
    time: '19:20-20:10',
    location: '由比滨海岸・材木座海岸',
    area: '镰仓市',
    visitors: "约16万人",
    fireworks: "约2500发",
    highlights: ['海上绽放光之扇', '镰仓特别夏夜', '有料席观赏', '屋台美食'],
    level: 'primary',
    crowdLevel: 'high',
    station: 'JR镰仓站',
    walkingTime: '步行约10分钟',
    mapUrl: 'https://goo.gl/maps/kanagawa01',
    image: '/images/kanagawa-kamakura.jpg',
    likes: 147,
    detailLink: "/july/hanabi/kanagawa/kamakura-hanabi"
  },
  {
    id: 'yokohama-night-flowers',
    name: '横浜夜间花火2025',
    englishName: 'Yokohama Night Flowers 2025',
    date: "7月5日・12日",
    specificDate: '2025年7月5日・12日',
    time: '19:30-19:35',
    location: '横浜港(新港码头、大栈桥)',
    area: '横浜市中区',
    visitors: '未公布',
    fireworks: "约150发",
    highlights: ['每月定期开催', '短时间精彩演出', '横浜港夜景'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: 'JR桜木町站',
    walkingTime: '步行约10分钟',
    mapUrl: 'https://goo.gl/maps/kanagawa02',
    image: '/images/kanagawa-nightflowers.jpg',
    likes: 151,
    detailLink: "/july/hanabi/kanagawa/yokohama-night-flowers"
  },
  {
    id: 'seaparadise-hanabi-symphonia',
    name: '横滨八景岛海洋天堂花火交响曲',
    englishName: 'Yokohama Hakkeijima SeaParadise Fireworks Symphonia',
    date: '7月19日・20日・26日',
    specificDate: '2025年7月19日(土)・20日(日)・26日(土)',
    time: '20:30-20:45',
    location: '横浜・八景岛海洋天堂',
    area: '横浜市金泽区',
    visitors: '非公开',
    fireworks: "约2500发",
    highlights: ['音与光的现场娱乐', '花火演出秀', '有料席观赏'],
    level: 'secondary',
    crowdLevel: 'medium',
    station: '金泽海滨线八景岛站',
    walkingTime: '步行约5分钟',
    mapUrl: 'https://goo.gl/maps/kanagawa03',
    image: '/images/kanagawa-seaparadise.jpg',
    likes: 22,
    detailLink: "/july/hanabi/kanagawa/seaparadise-hanabi-symphonia"
  }
];

export const regionInfo = {
  name: '神奈川',
  englishName: 'Kanagawa',
  icon: '⛵',
  description: '港都横浜与古都镰仓的花火胜地。\n从横浜港的现代花火到镰仓海岸的传统大会',
  urlSlug: 'kanagawa',
  features: [
    {
      icon: '🌊',
      title: '海滨花火',
      description: '镰仓海岸与横浜港的绝美花火'
    },
    {
      icon: '🎼',
      title: '音乐花火',
      description: '八景岛音与光的花火交响曲'
    },
    {
      icon: '🏯',
      title: '历史名城',
      description: '镰仓古都背景下的传统花火'
    }
  ],
  navigationLinks: [
    { label: '← 千叶', href: '/july/hanabi/chiba' },
    { label: '北关东 →', href: '/july/hanabi/kitakanto', isPrimary: true }
  ]
};

export const monthInfo = {
  month: '七月',
  monthName: '七月',
  urlPath: 'july'
}; 