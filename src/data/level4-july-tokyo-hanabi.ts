/**
 * 第四层数据文件 - 7月东京花火大会数据
 * @layer 四层 (Regional Data)
 * @month 7月
 * @region 东京
 * @type 地区花火数据文件
 * @contains 6个东京花火大会事件数据 + 地区信息 + 月份信息
 * @usage 供 /july/hanabi/tokyo 页面使用
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

export const regionInfo: RegionInfo = {
 name: '东京花火',
 icon: '🗼',
 description: '东京都的花火大会，展现都市夏夜的璀璨。',
 totalEvents: 6,
 nextRegion: 'koshinetsu',
 previousRegion: 'saitama'
};

export const events: HanabiEvent[] = [
 {
   id: 'tokyo-racecourse-fireworks',
   name: '东京竞马场花火',
   date: "7月2日",
   location: '府中市',
   visitors: "约8万人",
   fireworks: "约7000发",
   likes: 165,
   specificDate: '7月2日',
   area: '府中市',
   level: 'primary',
   crowdLevel: 'high',
   station: '府中本町',
   walkingTime: '5分钟',
   detailLink: "/july/hanabi/tokyo/keibajo",
 },
 {
   id: 'katsushika-fireworks',
   name: '葛饰纳凉花火大会',
   date: "7月22日",
   location: '葛饰区',
   visitors: "约65万人",
   fireworks: '约1万3000发',
   likes: 105,
   specificDate: '7月22日',
   area: '葛饰区',
   level: 'primary',
   crowdLevel: 'high',
   station: '柴又',
   walkingTime: '10分钟',
   detailLink: "/july/hanabi/tokyo/katsushika-noryo",
 },
 {
   id: 'sumidagawa-fireworks',
   name: '隅田川花火大会',
   date: "7月26日",
   location: '墨田区',
   visitors: "约95万人",
   fireworks: '约2万发',
   likes: 130,
   specificDate: '7月26日',
   area: '墨田区',
   level: 'primary',
   crowdLevel: 'high',
   station: '浅草',
   walkingTime: '15分钟',
   detailLink: "/july/hanabi/tokyo/sumida",
 },
 {
   id: 'hachioji-fireworks',
   name: '八王子花火大会',
   date: "7月26日",
   location: '八王子市',
   visitors: "约3万人",
   fireworks: "约3500发",
   likes: 32,
   specificDate: '7月26日',
   area: '八王子市',
   level: 'secondary',
   crowdLevel: 'medium',
   station: '西八王子',
   walkingTime: '15分钟',
   detailLink: "/july/hanabi/tokyo/hachioji",
 },
 {
   id: 'tachikawa-showa-kinen-park-fireworks',
   name: '立川祭国营昭和纪念公园花火大会',
   date: "7月26日",
   location: '立川市',
   visitors: "约7万人",
   fireworks: "约5000发",
   likes: 34,
   specificDate: '7月26日',
   area: '立川市',
   level: 'primary',
   crowdLevel: 'high',
   station: '立川',
   walkingTime: '15分钟',
   detailLink: "/july/hanabi/tokyo/tachikawa-showa",
 },
 {
   id: 'mikurajima-fireworks',
   name: '御藏岛花火大会',
   date: "7月31日",
   location: '御蔵島村',
   visitors: '约500人',
   fireworks: "约300发",
   likes: 2,
   specificDate: '7月31日',
   area: '御蔵島村',
   level: 'secondary',
   crowdLevel: 'low',
   station: '御藏岛港',
   walkingTime: '5分钟',
   detailLink: "/july/hanabi/tokyo/mikurajima",
 },
];

export const monthInfo: MonthInfo = {
 month: '七月',
 monthName: '七月',
 urlPath: 'july'
}; 