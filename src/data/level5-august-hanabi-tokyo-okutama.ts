import { HanabiData } from '../types/hanabi';

export const okutamaData: HanabiData = {
  id: 'okutama',
  name: '町制施行70周年記念 奥多摩納涼花火大会',
  englishName: 'Okutama Summer Fireworks Festival',
  year: 2025,
  date: '2025年8月9日(土)', // 来自Walker Plus官方确认
  time: '19:45～20:20(予定)', // 来自Walker Plus官方确认
  duration: '35分钟', // 来自Walker Plus官方确认
  fireworksCount: '约1000发', // 来自Walker Plus官方确认
  expectedVisitors: '约1万人', // 来自Walker Plus官方确认
  weather: '雨天延期至8月10日(日)19:45～20:20', // 来自Walker Plus官方确认
  ticketPrice: '有料席：升席、停车场（事前销售，当日无销售）',
  status: '已确认举办',
  themeColor: 'green',
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
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月26日',
        location: '隅田川河川敷',
        visitors: '91万人',
        link: '/hanabi/detail/sumida'
      },
      {
        id: 'tachikawa',
        name: '立川昭和纪念公园花火',
        date: '7月26日',
        location: '昭和纪念公园',
        visitors: '72万人',
        link: '/hanabi/detail/tachikawa'
      }
    ],
    timeRecommendations: [
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月26日',
        location: '隅田川河川敷',
        visitors: '91万人',
        link: '/hanabi/detail/sumida'
      }
    ]
  },

  venues: [
    {
      name: '愛宕山広場',
      location: 'JR奥多摩駅すぐ',
      startTime: '19:45',
      features: [
        '大自然环绕的观赏环境',
        '町制施行70周年纪念大会',
        '家庭友好的氛围',
        '祭祀活动同时举办'
      ]
    }
  ],

  access: [
    {
      venue: '愛宕山広場',
      stations: [
        { 
          name: 'JR奥多摩站', 
          lines: ['JR青梅线'], 
          walkTime: '即到达' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '愛宕山広場',
      rating: 4,
      crowdLevel: 'Low',
      tips: '自然环境优美，人流相对较少',
      pros: ['大自然背景', '人群较少', '交通便利'],
      cons: ['离市中心较远', '山区夜晚较凉']
    }
  ],

  history: {
    established: 1955,
    significance: '町制施行70周年記念特別大会',
    highlights: [
      '奥多摩町70周年庆典',
      '大自然中的花火体验',
      '地区居民的重要夏季庆典',
      '传统与自然的完美结合'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午提前到达',
        '19:45准时开始，20:20结束',
        '雨天延期至次日同时间',
        '山区夜晚温度较低，注意保暖'
      ]
    },
    {
      category: '必备物品',
      items: [
        '防潮垫或折叠椅',
        '保暖衣物（山区夜晚）',
        '手电筒（山区照明）',
        '驱虫剂（自然环境）'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '推荐体验自然环境中的花火',
        '可同时参加祭祀活动',
        '注意会场18:30-21:00交通管制',
        '建议使用公共交通'
      ]
    }
  ],

  contact: {
    organizer: '奥多摩納涼花火大会実行委員会',
    phone: '0428-83-2295', // 来自Walker Plus官方确认
    website: 'https://www.town.okutama.tokyo.jp/', // 来自Walker Plus官方确认
    socialMedia: '奥多摩町役場観光産業課内'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考奥多摩町公式网站',
    parking: '△ 有料停车场需事前购买，当日无销售'
  },

  weatherInfo: {
    recommendation: '建议出发前查看当日天气预报',
    rainPolicy: '雨天延期至8月10日(日)19:45～20:20',
    note: '山区夜晚温度较低，请携带保暖衣物'
  },

  specialFeatures: {
    scale: '约1000发中规模花火大会',
    location: '奥多摩大自然环绕的独特环境',
    tradition: '町制施行70周年記念特別大会',
    atmosphere: '自然与花火的和谐融合',
    collaboration: '与同日举办的祭祀活动联动'
  }
}; 