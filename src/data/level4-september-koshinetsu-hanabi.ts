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

export const koshinetsuHanabiEvents: HanabiEvent[] = [
 {
 id: 'asahara-shrine-festival',
 name: '浅原神社 秋季例大祭奉納大煙火',
 englishName: 'Asahara Shrine Autumn Festival Fireworks',
 date: "9月12日、13日",
 specificDate: '2025年9月12日(金)、13日(土)',
 time: '夜间举办',
 location: '片贝町浅原神社裏手',
 area: '新潟县小千谷市',
 visitors: "约17万人",
 fireworks: '约1万5000发',
 highlights: ['四尺玉叶子尺玉多数', '大迫力的尺玉连发', '日本传统神社祭典花火'],
 level: 'primary',
 crowdLevel: 'high',
 station: '小千谷站',
 walkingTime: '15分钟',
 mapUrl: '/maps/koshinetsu-september',
 image: '/images/koshinetsu-september-asahara.jpg',
 likes: 15,
 detailLink: "/september/hanabi/koshinetsu/asahara-hanabi"
 },
 {
 id: 'zenkoku-shinsaku-hanabi',
 name: '全国新作花火挑战杯2025',
 englishName: 'National New Fireworks Challenge Cup 2025',
 date: '9月6日、13日、20日、27日',
 specificDate: '预选：2025年9月6日(土)、13日(土)、20日(土)、27日(土)。决赛：10月26日(日)',
 time: '夜间举办',
 location: '长野县诹访市湖畔公园前诹访湖上',
 area: '长野县诹访市',
 visitors: "约25万人",
 fireworks: '400发×5回',
 highlights: ['6年年来的更新', '分散方式竞技花火', '全国花火师新作挑战'],
 level: 'primary',
 crowdLevel: 'high',
 station: '上诹访站',
 walkingTime: '8分钟',
 mapUrl: '/maps/koshinetsu-september',
 image: '/images/koshinetsu-september-shinsaku.jpg',
 likes: 6,
 detailLink: "/september/hanabi/koshinetsu/shinsaku-hanabi"
 }
];

export const regionInfo = {
 id: "koshinetsu",
 name: "甲信越",
 icon: "🏔️",
 description: "九月甲信越，秋季传统祭典与新作花火的完美融合",
 totalEvents: 2
};

export const monthInfo = {
 month: "september",
 monthName: "九月",
 urlPath: "september",
 seasonDescription: "秋高气爽，传统与创新的花火盛宴"
}; 