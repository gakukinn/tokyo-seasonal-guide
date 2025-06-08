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
 area: string;
 level?: 'primary' | 'secondary';
 crowdLevel?: 'high' | 'medium' | 'low';
 station: string;
 walkingTime: string;
 specificDate: string;
 detailLink?: string;
}

export const events: HanabiEvent[] = [
 {
 id: 'koshinetsu-aug-02-nagaoka',
 name: '长冈祭大花火大会',
 date: "8月2日、3日",
 location: '长冈市信浓川河川敷',
 visitors: '约34万5000人',
 fireworks: '非公开',
 likes: 77,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'nagaoka-hanabi',
 area: '长冈市',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR上越新干线长冈站',
 walkingTime: '徒步20分钟',
 specificDate: '2025年8月2日(土)、3日(日)',
 detailLink: "/august/hanabi/koshinetsu/nagaoka-hanabi"
 },
 {
 id: 'koshinetsu-aug-15-suwa',
 name: '第77回诹访湖祭湖上花火大会',
 date: "8月15日",
 location: '诹访市湖畔公园前诹访湖上',
 visitors: '非公开',
 fireworks: '非公开',
 likes: 40,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'suwa-hanabi',
 area: '诹访市',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR中央本线上诹访站',
 walkingTime: '徒步8分钟',
 specificDate: '2025年8月15日(金)',
 detailLink: "/august/hanabi/koshinetsu/suwa-hanabi"
 },
 {
 id: 'koshinetsu-aug-07-shinmei',
 name: '市川三郡町故乡夏日祭第37回神明花火大会',
 date: "8月7日",
 location: '市川三郡町三郡桥下流笛吹川河畔',
 visitors: "约20万人",
 fireworks: '约2万发',
 likes: 25,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'shinmei-hanabi',
 area: '市川三郡町',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR身延线市川大门站',
 walkingTime: '徒步20分钟',
 specificDate: '2025年8月7日(木)',
 detailLink: "/august/hanabi/koshinetsu/shinmei-hanabi"
 },
 {
 id: 'koshinetsu-aug-05-kawaguchi',
 name: '河口湖湖上祭',
 date: "8月5日",
 location: '富士河口湖町河口湖畔船津浜',
 visitors: '12万人',
 fireworks: '约1万发',
 likes: 20,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'kawaguchi-hanabi',
 area: '富士河口湖町',
 level: 'primary',
 crowdLevel: 'high',
 station: '富士急行线河口湖站',
 walkingTime: '徒步10分钟',
 specificDate: '2025年8月5日(火)',
 detailLink: "/august/hanabi/koshinetsu/kawaguchi-hanabi"
 },
 {
 id: 'koshinetsu-aug-10-niigata',
 name: '新潟祭花火大会',
 date: "8月10日",
 location: '新潟市中央区信浓川河畔',
 visitors: "约32万人",
 fireworks: '非公开',
 likes: 17,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'niigata-hanabi',
 area: '新潟市',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR新潟站',
 walkingTime: '徒步15分钟',
 specificDate: '2025年8月10日(日)',
 detailLink: "/august/hanabi/koshinetsu/niigata-hanabi"
 },
 {
 id: 'koshinetsu-aug-05-ueda',
 name: '上田市诞生20周年纪念第38回信州上田大花火大会',
 date: "8月5日",
 location: '上田市千曲川河川敷',
 visitors: "约8万人",
 fireworks: "约8000发",
 likes: 11,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'ueda-hanabi',
 area: '上田市',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR北陆新干线上田站',
 walkingTime: '徒步15分钟',
 specificDate: '2025年8月5日(火)',
 detailLink: "/august/hanabi/koshinetsu/ueda-hanabi"
 }
];

export const regionInfo = {
 name: '甲信越',
 icon: '🏔️',
 description: '山岳湖泊与花火的绝美共演，感受甲信越独特的山间花火文化',
 totalEvents: 6,
 nextRegion: 'tokyo',
 previousRegion: 'kitakanto'
};

export const monthInfo = {
 month: '八月',
 monthName: '八月',
 urlPath: 'august'
}; 