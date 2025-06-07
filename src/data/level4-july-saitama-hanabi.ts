/**
 * 第四层数据文件 - 7月埼玉花火大会数据
 * @layer 四层 (Regional Layer)
 * @month 7月
 * @region 埼玉
 * @type 地区花火数据
 * @source Walker Plus官方数据 (https://hanabi.walkerplus.com/calendar/07/ar0311/)
 * @description 包含7个埼玉花火活动的详细信息和跳转链接
 */
import { HanabiEvent, RegionInfo, MonthInfo } from '../types/hanabi';

// 花火活动接口定义
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
  area?: string;
  detailLink?: string;
}

export interface MonthInfo {
  month: string;
  monthName: string;
  urlPath: string;
}

export interface RegionInfo {
  name: string;
  icon: string;
  description: string;
  totalEvents: number;
  nextRegion: string;
  previousRegion: string;
  urlSlug: string;
  features?: {
    icon: string;
    title: string;
    description: string;
  }[];
}

// 埼玉地区信息
export const regionInfo: RegionInfo = {
  name: '埼玉',
  icon: '🌽',
  description: '埼玉县拥有关东地区最丰富的夏季花火大会，从大规模的越谷花火大会到独特的入间基地纳凉祭，每场都有其独特魅力。',
  totalEvents: 6,
  nextRegion: 'chiba',
  previousRegion: 'tokyo',
  urlSlug: 'saitama',
  features: [
    {
      icon: '🌾',
      title: '田园花火',
      description: '体现埼玉农业特色的田园风光花火大会，在广阔的田野间绽放绚烂烟花。'
    },
    {
      icon: '✈️',
      title: '基地花火',
      description: '入间基地独特的军事基地背景花火体验，是全日本罕见的特色活动。'
    },
    {
      icon: '🏞️',
      title: '主题花火',
      description: '姆明谷和西武园等主题公园花火，融合娱乐设施的独特观赏体验。'
    }
  ]
};

export const monthInfo: MonthInfo = {
  month: '7月',
  monthName: '七月',
  urlPath: 'july'
};

// 埼玉7月花火大会数据 - 基于Walker Plus官方信息
// 数据来源: https://hanabi.walkerplus.com/calendar/07/ar0311/

export const events: HanabiEvent[] = [
  {
    id: 'iruma-base-2025',
    name: '入间基地纳凉祭',
    date: "7月23日",
    location: '入间基地',
    area: '入间市',
    visitors: '4万2000人',
    fireworks: "约900发",
    likes: 20,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'iruma-base-2025',
    detailLink: "/july/hanabi/saitama/iruma-base-2025"
  },
  {
    id: 'koshigaya-2025',
    name: '越谷花火大会',
    date: "7月26日",
    location: '越谷市',
    area: '越谷市',
    visitors: '27万人',
    fireworks: "约5000发",
    likes: 84,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'koshigaya-2025',
    detailLink: "/july/hanabi/saitama/koshigaya-2025"
  },
  {
    id: 'ogawa-tanabata-2025',
    name: '小川町七夕祭花火大会',
    date: "7月26日",
    location: '小川町',
    area: '小川町',
    visitors: "约9万人",
    fireworks: "约200发",
    likes: 4,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'ogawa-tanabata-2025',
    detailLink: "/july/hanabi/saitama/ogawa-tanabata-2025"
  },
  {
    id: 'saitama-owada-2025',
    name: '埼玉市花火大会大和田公园会场',
    date: "7月27日",
    location: '大和田公园',
    area: '埼玉市',
    visitors: "约9万人",
    fireworks: '未定',
    likes: 33,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'saitama-owada-2025',
    detailLink: "/july/hanabi/saitama/saitama-owada-2025"
  },
  {
    id: 'seibu-en-2025',
    name: '西武园游乐园大火祭',
    date: '7月19日~9月15日期间',
    location: '西武园游乐园',
    area: '所泽市',
    visitors: '非公开',
    fireworks: '非公开',
    likes: 29,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'seibu-en-2025',
    detailLink: "/july/hanabi/saitama/seibu-en-2025"
  },
  {
    id: 'metsza-nordic-2025',
    name: '梅兹塔北欧花火',
    date: '7月12日・19日・20日・26日等',
    location: '梅兹塔',
    area: '饭能市',
    visitors: '非公开',
    fireworks: '非公开',
    likes: 10,
    imageUrl: '/images/default-hanabi.jpg',
    category: 'hanabi',
    slug: 'metsza-nordic-2025',
    detailLink: "/july/hanabi/saitama/metsza-nordic-2025"
  }
]; 