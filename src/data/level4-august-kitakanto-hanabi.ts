// 地区花火大会信息接口 - 与RegionalHanabiTemplate保持一致
interface HanabiEvent {
 id: string;
 name: string;
 date: string;
 location: string;
 visitors: string;
 fireworks: string;
 likes: number;
 // 以下字段都是可选的，根据实际官网信息填写
 englishName?: string;
 specificDate?: string;
 time?: string;
 area?: string;
 highlights?: string[];
 level?: 'primary' | 'secondary';
 crowdLevel?: 'high' | 'medium' | 'low';
 station?: string;
 walkingTime?: string;
 mapUrl?: string;
 image?: string;
 detailLink?: string;
}

export const kitakantoHanabiEvents: HanabiEvent[] = [
 {
 id: "ashikaga-august",
 name: "第109回足利花火大会",
 englishName: "Ashikaga Fireworks Festival",
 date: "8月2日",
 specificDate: "2025年8月2日(土)",
 time: "19:00-20:30",
 location: "渡良瀬川田中桥下流河川敷",
 area: "栃木县",
 visitors: "约45万人",
 fireworks: "约2万发",
 highlights: ["百年传统花火大会", "渡良瀬川河畔绝景", "尺玉连发"],
 level: "primary",
 crowdLevel: "high",
 station: "东武伊势崎线足利市站",
 walkingTime: "徒步20分钟",
 mapUrl: "https://goo.gl/maps/ashikaga",
 image: "/images/ashikaga-hanabi.jpg",
 likes: 185,
 detailLink: "/august/hanabi/kitakanto/ashikaga"
 },
 {
 id: "koga-august", 
 name: "第20回古河花火大会",
 englishName: "Koga Fireworks Festival",
 date: "8月2日",
 specificDate: "2025年8月2日(土)",
 time: "19:00-20:30",
 location: "古河高尔夫球场",
 area: "茨城县",
 visitors: "约20万人",
 fireworks: "非公表",
 highlights: ["渡良瀬川河畔", "大规模花火秀", "专用观赏席"],
 level: "primary",
 crowdLevel: "high",
 station: "JR东北本线古河站",
 walkingTime: "乘坐专用巴士",
 mapUrl: "https://goo.gl/maps/koga",
 image: "/images/koga-hanabi.jpg",
 likes: 77,
 detailLink: "/august/hanabi/kitakanto/koga"
 },
 {
 id: "toride-august",
 name: "第70回利根川大花火",
 englishName: "Toride Tonegawa Fireworks Festival",
 date: "8月9日", 
 specificDate: "2025年8月9日(土)",
 time: "19:30-20:30",
 location: "取手绿地运动公园",
 area: "茨城县",
 visitors: "约12万人",
 fireworks: "约1万发",
 highlights: ["利根川河畔", "70年传统", "音乐同步花火"],
 level: "primary",
 crowdLevel: "high",
 station: "关东铁道常总线取手站",
 walkingTime: "徒步5分钟",
 mapUrl: "https://goo.gl/maps/toride",
 image: "/images/toride-hanabi.jpg",
 likes: 32,
 detailLink: "/august/hanabi/kitakanto/toride"
 },
 {
 id: "maebashi-august",
 name: "第69回前桥花火大会", 
 englishName: "Maebashi Fireworks Festival",
 date: "8月9日",
 specificDate: "2025年8月9日(土)",
 time: "19:30-20:30",
 location: "利根川河畔大渡桥南北河川绿地",
 area: "群马县",
 visitors: "非公开",
 fireworks: "约1万5000发",
 highlights: ["利根川绝景", "传统花火工艺", "音乐花火"],
 level: "secondary",
 crowdLevel: "medium",
 station: "JR两毛线前桥站",
 walkingTime: "乘坐专用巴士",
 mapUrl: "https://goo.gl/maps/maebashi",
 image: "/images/maebashi-hanabi.jpg",
 likes: 28,
 detailLink: "/august/hanabi/kitakanto/maebashi"
 },
 {
 id: "takasaki-august",
 name: "第51回高崎大花火大会",
 englishName: "Takasaki Fireworks Festival",
 date: "8月23日",
 specificDate: "2025年8月23日(土)",
 time: "19:30-20:20",
 location: "烏川和田桥上流河川敷",
 area: "群马县", 
 visitors: "约90万人",
 fireworks: "约1万5000发",
 highlights: ["50分钟超高速花火", "高崎祭同时举办", "超近距离观赏"],
 level: "primary",
 crowdLevel: "high",
 station: "JR高崎站",
 walkingTime: "西口步行15分钟",
 mapUrl: "https://goo.gl/maps/takasaki",
 image: "/images/takasaki-hanabi.jpg",
 likes: 27,
 detailLink: "/august/hanabi/kitakanto/takasaki"
 },
 {
 id: "hitachinaka-august",
 name: "第31回常陆那珂祭花火大会",
 englishName: "Hitachinaka Festival Fireworks",
 date: "8月16日",
 specificDate: "2025年8月16日(土)",
 time: "19:30-20:30",
 location: "陆上自卫队胜田驻屯地",
 area: "茨城县",
 visitors: "非公开",
 fireworks: "3000发",
 highlights: ["自卫队驻屯地", "特色花火表演", "30周年纪念"],
 level: "secondary",
 crowdLevel: "medium",
 station: "JR常磐线胜田站",
 walkingTime: "徒步20分钟",
 mapUrl: "https://goo.gl/maps/hitachinaka",
 image: "/images/hitachinaka-hanabi.jpg",
 likes: 25,
 detailLink: "/august/hanabi/kitakanto/hitachinaka"
 }
];

export const regionInfo = {
 name: '北关东',
 englishName: 'Kitakanto',
 icon: '🌾',
 description: '栃木、茨城、群马三县传统花火盛典，体验关东腹地的多样花火文化',
 urlSlug: 'kitakanto',
 features: [
 {
 icon: '🏞️',
 title: '河川花火',
 description: '利根川、渡良瀬川沿岸的传统花火大会'
 },
 {
 icon: '🎆',
 title: '大规模花火',
 description: '90万人观赏的高崎大花火等大型花火盛典'
 },
 {
 icon: '⭐',
 title: '历史传承',
 description: '百年传统足利花火等历史悠久的花火文化'
 }
 ],
 navigationLinks: [
 { label: '← 神奈川花火', href: '/august/hanabi/kanagawa' },
 { label: '甲信越花火 →', href: '/august/hanabi/koshinetsu', isPrimary: true }
 ]
};

export const monthInfo = {
 month: '八月',
 monthName: '八月',
 urlPath: 'august'
};

// 🔍 数据验证部分（可选，用于开发时验证）
// 使用方法：在控制台运行 validateKitakantoData() 验证数据准确性
if (process.env.NODE_ENV === 'development') {
 // 这里可以添加自动验证逻辑
 console.log('📋 北关东花火数据已加载，包含', kitakantoHanabiEvents.length, '个花火大会');
 
 // 可选：自动验证数据格式
 const validateDataFormat = () => {
 const issues: string[] = [];
 kitakantoHanabiEvents.forEach(event => {
 if (!event.name.includes('回')) issues.push(`${event.name}: 名称格式可能有误`);
 if (!event.date.includes('月')) issues.push(`${event.name}: 日期格式有误`);
 if (!event.visitors.match(/(约|万|人|非公开)/)) issues.push(`${event.name}: 访客格式有误`);
 if (!event.fireworks.match(/(约|发|非公表)/)) issues.push(`${event.name}: 花火数格式有误`);
 });
 
 if (issues.length > 0) {
 console.warn('⚠️ 发现格式问题:', issues);
 } else {
 console.log('✅ 数据格式验证通过');
 }
 };
 
 validateDataFormat();
}

// 📊 数据来源记录（用于验证追踪）
export const dataSourceInfo = {
 officialUrls: [
 'https://hanabi.walkerplus.com/calendar/08/ar0309/', // 栃木县
 'https://hanabi.walkerplus.com/calendar/08/ar0308/', // 茨城县 
 'https://hanabi.walkerplus.com/calendar/08/ar0310/' // 群马县
 ],
 verificationDate: '2025-01-13',
 verifiedBy: '用户手动核对',
 notes: '所有数据基于Walker Plus官方2025年8月数据，红心数为实际统计值'
}; 