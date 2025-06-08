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
 id: 'chiba-aug-01',
 name: '第126回水郷小见川花火大会',
 date: "8月1日",
 location: '香取市小见川大桥下流利根川河畔',
 visitors: '8万人',
 fireworks: '约5000～7000发',
 likes: 8,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'omigawa-hanabi',
 area: '香取市',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR成田线小见川站',
 walkingTime: '徒步15分钟',
 specificDate: '2025年8月1日(金)',
 detailLink: "/august/hanabi/chiba/omigawa"
 },
 {
 id: 'chiba-aug-02-makuhari',
 name: '幕张海滩花火节2025(第47回千叶市民花火大会)',
 date: "8月2日",
 location: '千叶市美浜区幕张海滨公园',
 visitors: "约30万人",
 fireworks: '约2万发',
 likes: 49,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'makuhari-beach-hanabi',
 area: '千叶市美浜区',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR京叶线海滨幕张站',
 walkingTime: '徒步15分钟',
 specificDate: '2025年8月2日(土)',
 detailLink: "/august/hanabi/chiba/makuhari-beach-hanabi"
 },
 {
 id: 'chiba-aug-02-choshi',
 name: '铫子港祭花火大会',
 date: "8月2日",
 location: '铫子市利根川河畔',
 visitors: "约7万人",
 fireworks: "约8000发",
 likes: 12,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'choshi-minato-hanabi',
 area: '铫子市',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR总武本线铫子站',
 walkingTime: '徒步10分钟',
 specificDate: '2025年8月2日(土)',
 detailLink: "/august/hanabi/chiba/choshi-minato-hanabi"
 },
 {
 id: 'chiba-aug-02-ichikawa',
 name: '第41回市川市民纳凉花火大会',
 date: "8月2日",
 location: '市川市江户川河川敷',
 visitors: "约49万人",
 fireworks: '约1万4000发',
 likes: 36,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'ichikawa-hanabi',
 area: '市川市',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR总武线市川站',
 walkingTime: '徒步15分钟',
 specificDate: '2025年8月2日(土)',
 detailLink: "/august/hanabi/chiba/ichikawa"
 },
 {
 id: 'chiba-aug-02-narashino',
 name: '令和7年习志野驻屯地夏祭',
 date: "8月2日",
 location: '船桥市陆上自卫队习志野驻屯地',
 visitors: "约5万人",
 fireworks: "约850发",
 likes: 44,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'narashino-hanabi',
 area: '船桥市',
 level: 'secondary',
 crowdLevel: 'medium',
 station: 'JR总武线津田沼站',
 walkingTime: '徒步15分钟',
 specificDate: '2025年8月2日(土)',
 detailLink: "/august/hanabi/chiba/narashino"
 },
 {
 id: 'chiba-aug-02-matsudo',
 name: '松户花火大会2025',
 date: "8月2日",
 location: '松户市古个崎河川敷体育广场',
 visitors: "约27万人",
 fireworks: '1万发',
 likes: 23,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'matsudo-hanabi',
 area: '松户市',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR常磐线松户站',
 walkingTime: '徒步20分钟',
 specificDate: '2025年8月2日(土)',
 detailLink: "/august/hanabi/chiba/matsudo"
 },
 {
 id: 'chiba-aug-02-teganuma',
 name: '手贺沼花火大会2025',
 date: "8月2日",
 location: '柏市、我孙子市手贺沼',
 visitors: '48万人',
 fireworks: '约1万3500发',
 likes: 20,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'teganuma-hanabi',
 area: '柏市、我孙子市',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR常磐线我孙子站',
 walkingTime: '徒步10分钟',
 specificDate: '2025年8月2日(土)',
 detailLink: "/august/hanabi/chiba/teganuma"
 },
 {
 id: 'chiba-aug-15',
 name: '第78回木更津港祭',
 date: "8月15日",
 location: '木更津市中之岛公园',
 visitors: '28万4500人',
 fireworks: '约1万3000发',
 likes: 68,
 imageUrl: '/images/hanabi/default.jpg',
 category: 'hanabi',
 slug: 'kisarazu-port-hanabi',
 area: '木更津市',
 level: 'primary',
 crowdLevel: 'high',
 station: 'JR内房线木更津站',
 walkingTime: '徒步10分钟',
 specificDate: '2025年8月15日(金)',
 detailLink: "/august/hanabi/chiba/kisarazu"
 }
];

export const regionInfo = {
 name: '千叶',
 icon: '🌊',
 description: '太平洋沿岸的花火盛典。从幕张海滨到房总半岛，体验千叶独特的海岸花火魅力。',
 totalEvents: 8,
 nextRegion: 'kanagawa',
 previousRegion: 'saitama'
};

export const monthInfo = {
 month: '八月',
 monthName: '八月',
 urlPath: 'august'
}; 