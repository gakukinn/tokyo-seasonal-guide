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

export const chibaHanabiEvents: HanabiEvent[] = [
 // 九月千叶暂无花火大会
];

export const regionInfo = {
 id: "chiba",
 name: "千叶",
 icon: "🌊",
 description: "九月千叶暂无花火大会，请期待其他月份的精彩活动",
 totalEvents: 0
};

export const monthInfo = {
 month: "september",
 monthName: "九月",
 urlPath: "september",
 seasonDescription: "虽然九月千叶暂无花火，但秋季的海岸风光依然迷人"
}; 