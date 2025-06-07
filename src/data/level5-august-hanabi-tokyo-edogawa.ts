import { HanabiData } from '../types/hanabi';

export const edogawaData: HanabiData = {
  id: 'edogawa',
  name: '第50回 江戸川区花火大会',
  englishName: 'Edogawa Fireworks Festival',
  year: 2025,
  date: '2025年8月2日(土)',
  time: '19:15～20:30',
  duration: '75分钟',
  fireworksCount: '约1万4000发',
  expectedVisitors: '约3万人',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '免费观赏（有料席另收费）',
  status: '已确认举办',
  themeColor: 'blue',
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
        id: 'kozushima',
        name: '神津岛花火大会',
        date: '2025年8月4日',
        location: '神津岛港',
        visitors: '1000人',
        link: '/august/hanabi/tokyo/kozushima'
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
        id: 'itabashi',
        name: '板桥花火大会',
        date: '2025年8月2日',
        location: '荒川河川敷',
        visitors: '57万人',
        link: '/august/hanabi/tokyo/itabashi'
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
      name: '江戸川河川敷会场',
      location: '江戸川河川敷(都立篠崎公园先)',
      startTime: '19:15',
      features: [
        '7大主题演出',
        '江戸川夜空背景',
        '精彩连连的表演',
        '多样化花火展示'
      ]
    }
  ],

  access: [
    {
      venue: '主会场',
      stations: [
        { 
          name: 'JR小岩站', 
          lines: ['JR总武线'], 
          walkTime: '徒步约20分钟' 
        },
        { 
          name: '都营篠崎站', 
          lines: ['都营新宿线'], 
          walkTime: '徒步约15分钟' 
        },
        { 
          name: '京成江戸川站', 
          lines: ['京成本线'], 
          walkTime: '徒步约25分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '都立篠崎公园',
      rating: 5,
      crowdLevel: 'Medium',
      tips: '最佳观赏位置，视野开阔，设施完善',
      pros: ['最佳视角', '设施完善', '空间充足'],
      cons: ['需要早到占位', '距离车站较远']
    },
    {
      name: '江戸川河川敷右岸',
      rating: 4,
      crowdLevel: 'Low', 
      tips: '人流较少，观赏体验舒适',
      pros: ['人流较少', '观赏舒适', '拍照效果好'],
      cons: ['距离稍远', '观赏角度一般']
    },
    {
      name: '篠崎桥周边',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '可拍摄桥梁与花火的组合美景',
      pros: ['独特角度', '拍照胜地', '交通便利'],
      cons: ['位置有限', '需要占位']
    }
  ],

  history: {
    established: 1975,
    significance: '江戸川区代表性花火大会，以7大主题演出闻名',
    highlights: [
      '精心设计的7大主题演出',
      '江戸川河川敷的优美环境',
      '相对宽松的观赏环境',
      '丰富多样的花火表演'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午3点前到达占位',
        '7大主题演出贯穿全程',
        '花火结束后交通相对宽松',
        '预留返程时间'
      ]
    },
    {
      category: '必备物品',
      items: [
        '折叠椅或野餐垫',
        '遮阳帽和防晒用品',
        '充足的饮用水和小食',
        '便携式充电器',
        '垃圾袋（保持环境整洁）'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '关注7大主题的不同特色',
        '都立篠崎公园是最佳观赏地',
        '注意安全，听从现场指挥',
        '拍摄时避免使用闪光灯'
      ]
    },
    {
      category: '交通贴士',
      items: [
        '优先选择都营篠崎站',
        '人流相对较少，交通压力小',
        '可考虑骑自行车前往',
        '提前查询返程时间'
      ]
    }
  ],

  specialFeatures: {
    scale: '1万4000发的中等规模',
    location: '江戸川河川敷的开阔视野',
    tradition: '7大主题演出的精彩呈现',
    atmosphere: '宽松舒适的观赏环境'
  },

  contact: {
    organizer: '江戸川区',
    phone: '03-5662-8678',
    website: 'https://www.city.edogawa.tokyo.jp/',
    socialMedia: '@edogawa_city'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '江戸川河川敷观赏地图',
    parking: '临时停车场，建议使用公共交通'
  },

  weatherInfo: {
    recommendation: '夏季炎热潮湿，建议携带防暑和防虫用品',
    rainPolicy: '小雨举行，恶劣天气延期或取消',
    note: '河川敷风较大，注意保暖'
  }
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.69!3d35.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2z5p2x5Lqs6YO9!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp',
}; 