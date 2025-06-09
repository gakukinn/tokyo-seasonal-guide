import { HanabiData } from '@/types/hanabi';

export const eventData: HanabiData = {
  id: 'tokyo-racecourse-fireworks',
  name: '东京竞马场花火',
  japaneseName: '東京競馬場花火 2025 〜花火と聴きたい J-POP BEST〜',
  englishName: 'Tokyo Racecourse Fireworks 2025',
  year: 2025,
  date: '2025年7月2日',
  time: '19:30～20:40',
  duration: '70分钟',
  fireworksCount: '约1万4000发',
  expectedVisitors: '非公表',
  weather: '晴朗',
  ticketPrice: '有料席',
  status: '确定举办',
  themeColor: '#FF6B6B',
  description: '2025年主题为"J-POP BEST"，在"昭和100年"这一纪念年份，配合众人皆知的名曲燃放花火。在广阔的赛马场舞台上，展开与音乐同步的大规模花火表演，是这里独有的特别体验。',
  month: 7,
  tags: {
    timeTag: '7月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },
  venues: [{
    name: 'JRA东京竞马场',
    location: '东京都府中市日吉町1-1',
    startTime: '19:30',
    features: ['全席指定', '音乐同步', '大规模演出']
  }],
  access: [{
    venue: 'JRA东京竞马场',
    stations: [{
      name: '府中本町站',
      lines: ['JR南武线'],
      walkTime: '5分钟'
    }]
  }],
  viewingSpots: [{
    name: '指定观览席',
    rating: 5,
    crowdLevel: '高',
    tips: '提前购票，全席指定',
    pros: ['视野绝佳', '音响效果好', '无需占位'],
    cons: ['需要购票', '人数较多']
  }],
  history: {
    established: 2020,
    significance: '东京地区最具规模的音乐花火大会',
    highlights: ['J-POP主题', '赛马场独特会场', '高品质音响']
  },
  tips: [{
    category: '观赏建议',
    items: ['提前购买指定席票', '17:00开场可提前入场', '会场内有餐饮设施']
  }],
  contact: {
    organizer: '东京竞马场花火实行委员会',
    phone: '未公开',
    website: 'https://hanabi.walkerplus.com/detail/ar0313e436729/',
    socialMedia: '未公开'
  },
  mapInfo: {
    hasMap: true,
    mapNote: '会场位于府中市，交通便利',
    parking: '有停车场（收费）'
  },
  weatherInfo: {
    month: '7月',
    temperature: '25-30°C',
    humidity: '70%',
    rainfall: '少',
    recommendation: '夏季服装，注意防暑'
  },
  related: {
    regionRecommendations: [],
    timeRecommendations: []
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.123456789!2d139.4567890123456!3d35.6789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e1234567890%3A0x1234567890abcdef!2sTokyo%20Racecourse!5e0!3m2!1sen!2sjp!4v1234567890123!5m2!1sen!2sjp'
}; 