import { HanabiData } from '@/types/hanabi';

export const eventData: HanabiData = {
  id: 'mikurajima-fireworks',
  name: '御藏岛花火大会',
  japaneseName: '御蔵島花火大会',
  englishName: 'Mikurajima Island Fireworks Festival',
  year: 2025,
  date: '2025年7月27日',
  time: '20:00～20:30',
  duration: '30分钟',
  fireworksCount: '约500发',
  expectedVisitors: '约300人',
  weather: '晴朗',
  ticketPrice: '免费',
  status: '确定举办',
  themeColor: '#74B9FF',
  description: '在被原始自然环绕的美丽岛屿上举行的花火大会。由于没有高大建筑物遮挡视线，可以尽情享受离岛独有的花火体验，感受近在咫尺的震撼。',
  month: 7,
  tags: {
    timeTag: '7月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },
  venues: [{
    name: '御藏岛港',
    location: '东京都御藏岛村',
    startTime: '20:00',
    features: ['离岛体验', '原始自然', '小规模亲密']
  }],
  access: [{
    venue: '御藏岛港',
    stations: [{
      name: '竹芝客船码头',
      lines: ['东海汽船'],
      walkTime: '船舶6小时30分'
    }]
  }],
  viewingSpots: [{
    name: '御藏岛港周边',
    rating: 5,
    crowdLevel: '低',
    tips: '岛上住宿，享受完整体验',
    pros: ['独特体验', '人少安静', '自然环境'],
    cons: ['交通不便', '住宿有限']
  }],
  history: {
    established: 1990,
    significance: '东京都唯一的离岛花火大会',
    highlights: ['离岛特色', '自然环境', '小规模精致']
  },
  tips: [{
    category: '观赏建议',
    items: ['提前预订住宿', '确认船舶时刻表', '携带防寒衣物']
  }],
  contact: {
    organizer: '御藏岛村役场',
    phone: '04996-8-2121',
    website: 'https://hanabi.walkerplus.com/detail/ar0313e00507/',
    socialMedia: '未公开'
  },
  mapInfo: {
    hasMap: true,
    mapNote: '位于伊豆诸岛，需要船舶前往',
    parking: '岛上无需停车场'
  },
  weatherInfo: {
    month: '7月',
    temperature: '22-27°C',
    humidity: '80%',
    rainfall: '中等',
    recommendation: '海岛气候，注意防风防雨'
  },
  related: {
    regionRecommendations: [],
    timeRecommendations: []
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.970185368637!2d139.600988315231!3d34.6806949804399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60183b1607a72c4d%3A0x6b8f368e7b1c313!2sMikurajima%20Port!5e0!3m2!1sen!2sjp!4v1689234832483!5m2!1sen!2sjp'
}; 