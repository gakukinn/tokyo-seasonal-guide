// 北关东花火大会数据 (来源: Walker Plus官方数据)
export const kitakantoHanabiData = [
 {
 id: 'kitakanto-july-01',
 name: '玉村花火大会',
 date: "7月12日",
 specificDate: '7月12日（土）',
 location: '玉村町上陽地区',
 area: '群馬県',
 visitors: '1万2000人',
 fireworks: '3000发',
 likes: 19,
 level: 'secondary' as const,
 crowdLevel: 'medium' as const,
 station: '新町駅',
 walkingTime: '步行约15分钟',
 detailLink: "/july/hanabi/kitakanto/tamura-hanabi"
 },
 {
 id: 'kitakanto-july-02', 
 name: '水戸偕楽園花火大会',
 date: "7月26日",
 specificDate: '7月26日（土）',
 location: '千波公园',
 area: '茨城県',
 visitors: "约23万人",
 fireworks: "约5000发",
 likes: 25,
 level: 'primary' as const,
 crowdLevel: 'high' as const,
 station: '水戸駅',
 walkingTime: '步行约20分钟',
 detailLink: "/july/hanabi/kitakanto/mito-hanabi"
 },
 {
 id: 'kitakanto-july-03',
 name: '真岡市夏祭大花火大会', 
 date: "7月26日",
 specificDate: '7月26日（土）',
 location: '真岡市役所东侧五行川沿岸',
 area: '栃木県',
 visitors: "约17万人",
 fireworks: '约2万发',
 likes: 18,
 level: 'primary' as const,
 crowdLevel: 'high' as const,
 station: '真岡駅',
 walkingTime: '步行约10分钟',
 detailLink: "/july/hanabi/kitakanto/moka-hanabi"
 },
 {
 id: 'kitakanto-july-04',
 name: '館林手筒花火大会',
 date: "7月26日", 
 specificDate: '7月26日（土）',
 location: '館林城夢広場',
 area: '群馬県',
 visitors: '3万人',
 fireworks: '1073发',
 likes: 11,
 level: 'secondary' as const,
 crowdLevel: 'medium' as const,
 station: '館林駅',
 walkingTime: '步行约15分钟',
 detailLink: "/july/hanabi/kitakanto/tatebayashi-hanabi"
 }
];

// 北关东地区信息
export const kitakantoRegionInfo = {
 name: '北关东',
 icon: '🏔️',
 description: '群馬、栃木、茨城三县，山川湖海与传统花火的和谐共演',
 urlSlug: 'kitakanto',
 features: [
 {
 icon: '🏔️',
 title: '山川花火',
 description: '群馬山地与関東平原的自然花火'
 },
 {
 icon: '🌾',
 title: '传统花火',
 description: '手筒花火等传统工艺的精彩演出'
 },
 {
 icon: '🏞️',
 title: '公园花火',
 description: '偕楽園等历史名园的花火盛会'
 }
 ]
};

export const kitakantoMonthInfo = {
 month: '七月',
 monthName: '七月',
 urlPath: 'july'
}; 