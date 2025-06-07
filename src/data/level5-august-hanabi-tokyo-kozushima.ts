import { HanabiData } from '../types/hanabi';

export const kozushimaData: HanabiData = {
  id: 'kozushima',
  name: '第32回 神津岛 渚の花火大会',
  englishName: 'Kozushima Beach Fireworks Festival',
  year: 2025,
  date: '2025年8月4日(月)',
  time: '20:00～21:00',
  duration: '60分钟',
  fireworksCount: '747发',
  expectedVisitors: '约1000人',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '免费观赏',
  status: '已确认举办',
  themeColor: 'cyan',
  month: 8,

  // 标签系统
  tags: {
    timeTag: '8月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  // 关联推荐
  related: {
    regionRecommendations: [
      {
        id: 'itabashi',
        name: '板桥花火大会',
        date: '2025年8月2日',
        location: '荒川河川敷',
        visitors: '57万人',
        link: '/august/hanabi/tokyo/itabashi'
      },
      {
        id: 'edogawa',
        name: '江戸川区花火大会',
        date: '2025年8月2日',
        location: '江戸川河川敷',
        visitors: '3万人',
        link: '/august/hanabi/tokyo/edogawa'
      },
      {
        id: 'okutama',
        name: '奥多摩纳凉花火',
        date: '2025年8月9日',
        location: '爱宕山广场',
        visitors: '1万人',
        link: '/august/hanabi/tokyo/okutama'
      }
    ],
    timeRecommendations: [
      {
        id: 'okutama',
        name: '奥多摩纳凉花火',
        date: '2025年8月9日',
        location: '爱宕山广场',
        visitors: '1万人',
        link: '/august/hanabi/tokyo/okutama'
      },
      {
        id: 'akishima',
        name: '昭岛市民花火大会',
        date: '2025年8月23日',
        location: '昭岛市民球场',
        visitors: '4万5000人',
        link: '/august/hanabi/tokyo/akishima'
      }
    ]
  },

  venues: [
    {
      name: '神津岛港前浜会场',
      location: '神津岛港(前浜港)の桟橋',
      startTime: '20:00',
      features: [
        '白砂海滩观赏',
        '坐享花火体验',
        '岛屿浪漫氛围',
        '海风徐徐凉爽'
      ]
    }
  ],

  access: [
    {
      venue: '主会场',
      stations: [
        { 
          name: '神津岛港', 
          lines: ['东海汽船'], 
          walkTime: '徒步约5分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '前浜海滩',
      rating: 5,
      crowdLevel: 'Low',
      tips: '白砂海滩上坐享花火，独特的观赏体验',
      pros: ['独特体验', '海滩观赏', '人流极少'],
      cons: ['交通不便', '住宿有限']
    },
    {
      name: '神津岛港桟橋',
      rating: 4,
      crowdLevel: 'Low', 
      tips: '距离花火最近的观赏点',
      pros: ['距离最近', '视野清晰', '交通便利'],
      cons: ['位置有限', '海风较大']
    }
  ],

  history: {
    established: 1993,
    significance: '东京都离岛独特的海滩花火大会',
    highlights: [
      '白砂海滩的独特观赏体验',
      '岛屿环境的宁静氛围',
      '海洋背景的花火表演',
      '远离都市喧嚣的浪漫'
    ]
  },

  tips: [
    {
      category: '交通安排',
      items: [
        '需乘坐东海汽船前往神津岛',
        '建议提前预订船票和住宿',
        '考虑在岛上住宿一晚',
        '注意返程船班时间'
      ]
    },
    {
      category: '必备物品',
      items: [
        '海滩毛巾或垫子',
        '防风外套（海风较大）',
        '防晒用品',
        '充足的饮用水',
        '防水袋保护物品'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '在白砂海滩上席地而坐',
        '享受海风与花火的结合',
        '适合情侣或家庭观赏',
        '拍摄海洋背景的花火美景'
      ]
    },
    {
      category: '住宿贴士',
      items: [
        '建议预订岛上住宿',
        '民宿和旅馆选择有限',
        '提前确认住宿和餐饮',
        '享受岛屿度假氛围'
      ]
    }
  ],

  contact: {
    organizer: '神津岛村',
    phone: '04992-8-0011',
    website: 'https://www.vill.kouzushima.tokyo.jp/',
    socialMedia: '@kouzushima_official'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '神津岛港前浜海水浴场地图',
    parking: '港口周边停车场'
  },

  weatherInfo: {
    recommendation: '海岛气候多变，建议携带防风外套',
    rainPolicy: '小雨举行，强风时可能取消',
    note: '船舶运航状况可能影响观赏计划'
  }
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.69!3d35.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2z5p2x5Lqs6YO9!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp',
}; 