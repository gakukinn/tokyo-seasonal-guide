import { HanabiData } from '@/types/hanabi';

export const eventData: HanabiData = {
  id: 'katsushika-fireworks',
  name: '第59回葛饰纳凉花火大会',
  japaneseName: '第59回 葛飾納涼花火大会',
  englishName: '59th Katsushika Fireworks Festival',
  year: 2025,
  date: '2025年7月22日',
  time: '19:20～20:20',
  duration: '60分钟',
  fireworksCount: '约1万5000发',
  expectedVisitors: '约77万人',
  weather: '晴朗',
  ticketPrice: '有料席',
  status: '确定举办',
  themeColor: '#4ECDC4',
  description: '半个世纪以来深受喜爱的下町情怀夏日例行活动。观赏席离燃放地点非常近，被近距离炸裂的声光包围的体验，是别处无法体验的震撼。',
  month: 7,
  tags: {
    timeTag: '7月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },
  venues: [{
    name: '葛饰区柴又棒球场',
    location: '东京都葛饰区柴又7-3-29',
    startTime: '19:20',
    features: ['江户川河畔', '下町风情', '近距离观赏']
  }],
  access: [{
    venue: '葛饰区柴又棒球场',
    stations: [{
      name: '柴又站',
      lines: ['京成金町线'],
      walkTime: '10分钟'
    }]
  }],
  viewingSpots: [{
    name: '河川敷观览区',
    rating: 4,
    crowdLevel: '非常高',
    tips: '提前到场占位，注意安全',
    pros: ['免费观赏', '震撼体验', '传统氛围'],
    cons: ['人群拥挤', '需要占位']
  }],
  history: {
    established: 1966,
    significance: '东京都内历史悠久的花火大会之一',
    highlights: ['下町传统', '江户川河畔', '半世纪历史']
  },
  tips: [{
    category: '观赏建议',
    items: ['提前2-3小时到场', '携带坐垫和饮料', '注意河边安全']
  }],
  contact: {
    organizer: '葛饰纳凉花火大会实行委员会',
    phone: '03-3695-1111',
    website: 'https://hanabi.walkerplus.com/detail/ar0313e00861/',
    socialMedia: '未公开'
  },
  mapInfo: {
    hasMap: true,
    mapNote: '会场位于江户川河畔，交通便利',
    parking: '周边有临时停车场'
  },
  weatherInfo: {
    month: '7月',
    temperature: '25-30°C',
    humidity: '75%',
    rainfall: '少',
    recommendation: '夏季服装，携带防虫用品'
  },
  related: {
    regionRecommendations: [],
    timeRecommendations: []
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.123456789!2d139.8567890123456!3d35.7589012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e1234567890%3A0x1234567890abcdef!2sKatsushika%20Shibamata%20Baseball%20Field!5e0!3m2!1sen!2sjp!4v1234567890123!5m2!1sen!2sjp'
}; 