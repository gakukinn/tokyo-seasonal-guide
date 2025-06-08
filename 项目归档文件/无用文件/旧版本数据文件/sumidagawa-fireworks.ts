import { HanabiData } from '@/types/hanabi';

export const eventData: HanabiData = {
  id: 'sumidagawa-fireworks',
  name: '第48回隅田川花火大会',
  japaneseName: '第48回 隅田川花火大会',
  englishName: '48th Sumida River Fireworks Festival',
  year: 2025,
  date: '2025年7月26日',
  time: '19:00～20:30',
  duration: '90分钟',
  fireworksCount: '约2万发',
  expectedVisitors: '约95万人',
  weather: '晴朗',
  ticketPrice: '有料席',
  status: '确定举办',
  themeColor: '#FF9F43',
  description: '继承传统两国川开花火大会的盛事，是关东地区无论是传统还是格式都首屈一指的花火大会。第一会场将举办花火比赛，汇集了与两国花火有渊源以及在各大竞赛中取得优异成绩的烟火业者。',
  month: 7,
  tags: {
    timeTag: '7月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },
  venues: [{
    name: '隅田川第一会场',
    location: '樱桥下游～言问桥上游',
    startTime: '19:00',
    features: ['花火竞技大会', '传统技艺', '历史悠久']
  }, {
    name: '隅田川第二会场',
    location: '驹形桥下游～厩桥上游',
    startTime: '19:30',
    features: ['创作花火', '现代演出', '音乐同步']
  }],
  access: [{
    venue: '隅田川第一会场',
    stations: [{
      name: '浅草站',
      lines: ['东京Metro银座线', '都营浅草线'],
      walkTime: '15分钟'
    }]
  }],
  viewingSpots: [{
    name: '隅田公园',
    rating: 5,
    crowdLevel: '极高',
    tips: '最佳观赏地点，需要极早到场',
    pros: ['视野最佳', '传统氛围', '免费观赏'],
    cons: ['极度拥挤', '需要占位']
  }],
  history: {
    established: 1978,
    significance: '继承江户时代两国川开花火大会传统',
    highlights: ['关东最大规模', '花火竞技大会', '江户传统']
  },
  tips: [{
    category: '观赏建议',
    items: ['提前4-5小时到场', '选择付费观览席', '注意人群安全']
  }],
  contact: {
    organizer: '隅田川花火大会实行委员会',
    phone: '03-5246-1111',
    website: 'https://hanabi.walkerplus.com/detail/ar0313e00858/',
    socialMedia: '未公开'
  },
  mapInfo: {
    hasMap: true,
    mapNote: '两个会场分别位于隅田川不同区域',
    parking: '周边无停车场，建议公共交通'
  },
  weatherInfo: {
    month: '7月',
    temperature: '26-31°C',
    humidity: '80%',
    rainfall: '中等',
    recommendation: '夏季服装，携带雨具',
    rainPolicy: '小雨决行，大雨延期'
  },
  related: {
    regionRecommendations: [],
    timeRecommendations: []
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.123456789!2d139.7967890123456!3d35.7109012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea1234567890%3A0x1234567890abcdef!2sSumida%20River!5e0!3m2!1sen!2sjp!4v1234567890123!5m2!1sen!2sjp'
}; 