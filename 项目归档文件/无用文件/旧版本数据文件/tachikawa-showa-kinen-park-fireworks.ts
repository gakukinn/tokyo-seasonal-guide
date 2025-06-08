import { HanabiData } from '@/types/hanabi';

export const eventData: HanabiData = {
  id: 'tachikawa-showa-kinen-park-fireworks',
  name: '立川祭国营昭和纪念公园花火大会',
  japaneseName: '立川まつり 国営昭和記念公園花火大会',
  englishName: 'Tachikawa Festival Showa Kinen Park Fireworks',
  year: 2025,
  date: '2025年7月26日',
  time: '19:20～20:20',
  duration: '60分钟',
  fireworksCount: '约5000发',
  expectedVisitors: '约17万人',
  weather: '晴朗',
  ticketPrice: '有料席',
  status: '确定举办',
  themeColor: '#00B894',
  description: '立川夏季的风景诗。除了在都内难得一见的尺玉、一尺五寸玉等大魄力烟花，还有花火职人竞技大会的获奖作品"艺协玉"等，让观众始终不会感到厌倦的精彩演出是其特色。',
  month: 7,
  tags: {
    timeTag: '7月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },
  venues: [{
    name: '国营昭和纪念公园',
    location: '东京都立川市绿町3173',
    startTime: '19:20',
    features: ['大型花火', '艺协玉', '广阔会场']
  }],
  access: [{
    venue: '国营昭和纪念公园',
    stations: [{
      name: '立川站',
      lines: ['JR中央线', 'JR南武线', '多摩都市单轨电车'],
      walkTime: '10分钟'
    }]
  }],
  viewingSpots: [{
    name: '昭和纪念公园花火观览区',
    rating: 5,
    crowdLevel: '高',
    tips: '购买指定席票，享受舒适观赏',
    pros: ['视野开阔', '设施完善', '大型花火'],
    cons: ['需要购票', '交通拥挤']
  }],
  history: {
    established: 1954,
    significance: '立川市夏季最大规模的花火大会',
    highlights: ['尺玉花火', '艺协玉', '职人技艺']
  },
  tips: [{
    category: '观赏建议',
    items: ['提前购买指定席票', '利用公共交通', '注意入园时间']
  }],
  contact: {
    organizer: '立川祭实行委员会',
    phone: '042-527-2700',
    website: 'https://hanabi.walkerplus.com/detail/ar0313e01045/',
    socialMedia: '未公开'
  },
  mapInfo: {
    hasMap: true,
    mapNote: '会场位于国营公园内，设施完善',
    parking: '公园内有停车场（收费）'
  },
  weatherInfo: {
    month: '7月',
    temperature: '25-30°C',
    humidity: '70%',
    rainfall: '少',
    recommendation: '夏季服装，携带防虫用品'
  },
  related: {
    regionRecommendations: [],
    timeRecommendations: []
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.691778216834!2d139.3956183152599!3d35.7099989801874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e1f5b1d9b3b3%3A0x8b3f2b4a5d4a123!2sShowa%20Kinen%20Park!5e0!3m2!1sen!2sjp!4v1689234832483!5m2!1sen!2sjp'
}; 