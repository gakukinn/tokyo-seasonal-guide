import { HanabiData } from '@/types/hanabi';

export const eventData: HanabiData = {
  id: 'hachioji-fireworks',
  name: '八王子花火大会',
  japaneseName: '八王子花火大会',
  englishName: 'Hachioji Fireworks Festival',
  year: 2025,
  date: '2025年7月19日',
  time: '19:00～20:30',
  duration: '90分钟',
  fireworksCount: '约4000发',
  expectedVisitors: '约8万人',
  weather: '晴朗',
  ticketPrice: '免费',
  status: '确定举办',
  themeColor: '#6C5CE7',
  description: '每年夏天举办的"八王子花火大会"，是八王子市民熟悉的季节性活动。约4000发烟花接连在夜空中绽放，在会场可以近距离感受烟花在头顶绽放的震撼。',
  month: 7,
  tags: {
    timeTag: '7月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },
  venues: [{
    name: '富士森公园',
    location: '东京都八王子市台町2-2',
    startTime: '19:00',
    features: ['市民花火', '免费观赏', '家庭友好']
  }],
  access: [{
    venue: '富士森公园',
    stations: [{
      name: '八王子站',
      lines: ['JR中央线', 'JR横滨线', 'JR八高线'],
      walkTime: '15分钟'
    }]
  }],
  viewingSpots: [{
    name: '富士森公园芝生广场',
    rating: 4,
    crowdLevel: '高',
    tips: '提前到场占位，携带野餐垫',
    pros: ['免费观赏', '家庭氛围', '近距离观看'],
    cons: ['需要占位', '设施有限']
  }],
  history: {
    established: 1961,
    significance: '八王子市民夏季传统活动',
    highlights: ['市民参与', '地域密着', '历史传统']
  },
  tips: [{
    category: '观赏建议',
    items: ['提前1-2小时到场', '携带坐垫和饮料', '注意垃圾分类']
  }],
  contact: {
    organizer: '八王子花火大会实行委员会',
    phone: '042-620-7378',
    website: 'https://hanabi.walkerplus.com/detail/ar0313e00929/',
    socialMedia: '未公开'
  },
  mapInfo: {
    hasMap: true,
    mapNote: '会场位于八王子市中心，交通便利',
    parking: '周边有临时停车场'
  },
  weatherInfo: {
    month: '7月',
    temperature: '24-29°C',
    humidity: '70%',
    rainfall: '少',
    recommendation: '夏季服装，注意防暑'
  },
  related: {
    regionRecommendations: [],
    timeRecommendations: []
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.979318182424!2d139.319349315258!3d35.6529349801999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191c6e11899c7b%3A0x4c28f1e5821e257!2sFujimori%20Park!5e0!3m2!1sen!2sjp!4v1689234832483!5m2!1sen!2sjp'
}; 