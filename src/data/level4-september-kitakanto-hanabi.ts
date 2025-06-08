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

export const kitakantoHanabiEvents: HanabiEvent[] = [
 {
 id: 'tone-river-fireworks',
 name: '第38回利根川大花火大会',
 englishName: 'Tone River Grand Fireworks Festival',
 date: "9月13日",
 specificDate: '2025年9月13日(土)',
 time: '夜间举办',
 location: '利根川河川敷（境町河边公园）',
 area: '茨城县境町',
 visitors: "约30万人",
 fireworks: '约3万发',
 highlights: ['四大花火师梦幻合作', '关东地区最大规模花火大会', '利根川河岸的壮观花火'],
 level: 'primary',
 crowdLevel: 'high',
 station: '古河站',
 walkingTime: '穿梭巴士',
     mapUrl: '#',
    image: '/images/tone-river-fireworks.jpg',
    likes: 87,
    detailLink: "/september/hanabi/kitakanto/tonegawa-hanabi"
 },
 {
 id: 'numata-fireworks',
 name: '第13回沼田花火大会',
 englishName: 'Numata Fireworks Festival',
 date: "9月13日",
 specificDate: '2025年9月13日(土)',
 time: '夜间举办',
 location: '沼田市运动公园',
 area: '群马县沼田市',
 visitors: '5万3000人',
 fireworks: '约1万1000发',
 highlights: ['间近距离观赏迫力满点花火', '山间运动公园的花火大会', '群马北部的秋日花火'],
 level: 'secondary',
 crowdLevel: 'medium',
 station: '沼田站',
 walkingTime: '穿梭巴士',
 mapUrl: '#',
 image: '/images/numata-fireworks.jpg',
 likes: 8,
 detailLink: "/september/hanabi/kitakanto/numata-hanabi"
 },
 {
 id: 'rindoko-fireworks',
 name: '第31回りんどう湖花火大会',
 englishName: 'Rindoko Lake Fireworks Festival',
 date: "9月14日・21日",
 specificDate: '2025年9月14日・21日',
 time: '夜间举办',
 location: 'りんどう湖家庭牧场',
 area: '栃木县那须町',
 visitors: "约3万人",
 fireworks: "约3000发",
 highlights: ['湖面映照的幻想花火', '音乐与花火的协作演出', '那须高原的自然环境'],
 level: 'secondary',
 crowdLevel: 'medium',
 station: '那须盐原站',
 walkingTime: '开车30分钟',
 mapUrl: '#',
 image: '/images/rindoko-fireworks.jpg',
 likes: 12,
 detailLink: "/september/hanabi/kitakanto/rindoko-hanabi"
 },
 {
 id: 'joso-kinugawa-fireworks',
 name: '第58回常总绢川花火大会',
 englishName: 'Joso Kinugawa Fireworks Festival',
 date: "9月20日",
 specificDate: '2025年9月20日(土)',
 time: '夜间举办',
 location: '鬼怒川河畔、桥本运动公园',
 area: '茨城县常总市',
 visitors: "约13万人",
 fireworks: '约1万3000发',
 highlights: ['日本代表花火师作品', '鬼怒川河畔的秋夜花火', '传统与创新的花火艺术'],
 level: 'primary',
 crowdLevel: 'high',
 station: '石下站',
 walkingTime: '10分钟',
 mapUrl: '#',
 image: '/images/joso-kinugawa-fireworks.jpg',
 likes: 9,
 detailLink: "/september/hanabi/kitakanto/joso-kinugawa-hanabi"
 },
 {
 id: 'oyama-fireworks',
 name: '第73回小山花火',
 englishName: 'Oyama Fireworks Festival',
 date: "9月23日",
 specificDate: '2025年9月23日(祝)',
 time: '夜间举办',
 location: '观晃桥下游思川河畔',
 area: '栃木县小山市',
 visitors: "约43万人",
 fireworks: '约2万发',
 highlights: ['小山市制70周年纪念', '关东地区屈指可数的大规模花火', '思川河畔的秋分花火'],
 level: 'primary',
 crowdLevel: 'high',
 station: '小山站',
 walkingTime: '15分钟',
 mapUrl: '#',
 image: '/images/oyama-fireworks.jpg',
 likes: 26,
 detailLink: "/september/hanabi/kitakanto/oyama-hanabi"
 },
 {
 id: 'oarai-hanabi',
 name: '大洗海上花火大会2025～千櫓祭～',
 englishName: 'Oarai Seaside Fireworks Festival',
 date: "9月27日",
 specificDate: '2025年9月27日(土)',
 time: '夜间举办',
 location: '大洗阳光海滩',
 area: '茨城县大洗町',
 visitors: "约18万人",
 fireworks: '约1万8000发',
 highlights: ['大迫力2尺玉花火', '海滩上的豪华花火盛宴', '千櫓祭的绚烂收官'],
 level: 'primary',
 crowdLevel: 'high',
 station: '大洗站',
 walkingTime: '15分钟',
 mapUrl: '#',
 image: '/images/oarai-hanabi.jpg',
 likes: 174,
 detailLink: "/september/hanabi/kitakanto/oarai-hanabi"
 }
];

export const regionInfo = {
 id: "kitakanto",
 name: "北关东",
 icon: "🏔️",
 description: "九月北关东，山川河海间绽放的秋日花火",
 totalEvents: 6
};

export const monthInfo = {
 month: "september",
 monthName: "九月",
 urlPath: "september",
 seasonDescription: "秋高气爽，山川河海花火缤纷"
}; 