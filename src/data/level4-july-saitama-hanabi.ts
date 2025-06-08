/**
 * 第四层数据文件 - 7月埼玉花火大会数据
 * @layer 四层 (Regional Layer)
 * @month 7月
 * @region 埼玉
 * @type 地区花火数据
 * @source Walker Plus官方数据 (https://hanabi.walkerplus.com/calendar/07/ar0311/)
 * @description 包含7个埼玉花火活动的详细信息和跳转链接
 */
import { RegionInfo, MonthInfo } from '@/types/region-info';

// 花火事件接口
interface HanabiEvent {
 id: string;
 name: string;
 date: string;
 location: string;
 visitors: string;
 fireworks: string;
 likes: number;
 specificDate?: string;
 area?: string;
 level?: 'primary' | 'secondary';
 crowdLevel?: 'high' | 'medium' | 'low';
 station?: string;
 walkingTime?: string;
 detailLink?: string;
}

// 埼玉地区信息
export const regionInfo: RegionInfo = {
 name: '埼玉花火',
 icon: '🎆',
 description: '埼玉县的花火大会，展现关东平原的夏日风情。',
 totalEvents: 6,
 nextRegion: 'tokyo',
 previousRegion: 'kanagawa'
};

// 月份信息
export const monthInfo: MonthInfo = {
 month: '7月',
 monthName: '七月',
 urlPath: 'july'
};

// 埼玉7月花火大会数据 - 基于Walker Plus官方信息
// 数据来源: https://hanabi.walkerplus.com/calendar/07/ar0311/

export const events: HanabiEvent[] = [
 {
 id: 'metsa-nordic-fireworks',
 name: '梅兹塔北欧花火2025',
 date: '7月12日起特定日',
 location: '饭能市',
 visitors: "约1万人",
 fireworks: "约500发",
 likes: 12,
 specificDate: '7月12日起特定日',
 area: '饭能市',
 level: 'secondary',
 crowdLevel: 'medium',
 station: '饭能',
 walkingTime: '巴士10分钟',
 detailLink: "/july/hanabi/saitama/metsza-nordic-2025",
 },
 {
 id: 'seibuen-fireworks',
 name: '西武园游乐园大火祭',
 date: '7月19日起特定日',
 location: '所泽市',
 visitors: "约2万人",
 fireworks: "约1000发",
 likes: 28,
 specificDate: '7月19日起特定日',
 area: '所泽市',
 level: 'primary',
 crowdLevel: 'high',
 station: '西武园游乐园',
 walkingTime: '1分钟',
 detailLink: "/july/hanabi/saitama/seibu-en-2025",
 },
 {
 id: 'iruma-airbase-festival',
 name: '入间基地纳凉祭',
 date: "7月23日",
 location: '狭山市',
 visitors: '约1万5000人',
 fireworks: "约800发",
 likes: 15,
 specificDate: '7月23日',
 area: '狭山市',
 level: 'secondary',
 crowdLevel: 'high',
 station: '稻荷山公园',
 walkingTime: '3分钟',
 detailLink: "/july/hanabi/saitama/iruma-base-2025",
 },
 {
 id: 'koshigaya-fireworks',
 name: '第41回越谷花火大会',
 date: "7月26日",
 location: '越谷市',
 visitors: "约3万人",
 fireworks: "约2000发",
 likes: 30,
 specificDate: '7月26日',
 area: '越谷市',
 level: 'primary',
 crowdLevel: 'high',
 station: '越谷',
 walkingTime: '7分钟',
 detailLink: "/july/hanabi/saitama/koshigaya-2025",
 },
 {
 id: 'ogawamachi-tanabata-fireworks',
 name: '小川町七夕祭花火大会',
 date: "7月26日",
 location: '小川町',
 visitors: '约1万2000人',
 fireworks: "约600发",
 likes: 18,
 specificDate: '7月26日',
 area: '小川町',
 level: 'secondary',
 crowdLevel: 'medium',
 station: '小川町',
 walkingTime: '10分钟',
 detailLink: "/july/hanabi/saitama/ogawa-tanabata-2025",
 },
 {
 id: 'saitama-city-owada-park-fireworks',
 name: '埼玉市花火大会 大和田公园会场',
 date: "7月27日",
 location: '埼玉市见沼区',
 visitors: "约4万人",
 fireworks: "约3000发",
 likes: 40,
 specificDate: '7月27日',
 area: '埼玉市见沼区',
 level: 'primary',
 crowdLevel: 'high',
 station: '大宫公园',
 walkingTime: '15分钟',
 detailLink: "/july/hanabi/saitama/saitama-owada-2025",
 },
]; 