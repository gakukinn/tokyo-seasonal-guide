/**
 * 第五层数据文件 - 第77回镰仓花火大会数据
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 神奈川
 * @event 第77回镰仓花火大会
 * @type 花火详情数据
 * @source Walker Plus官方数据
 * @description 包含完整的花火详细信息：基本信息、会场信息、交通指南、观赏攻略等
 */
import { HanabiData } from '@/types/hanabi';

export const kamakuraHanabiData: HanabiData = {
  id: 'kamakura-hanabi',
  name: '第77回镰仓花火大会',
  japaneseName: '第77回 鎌倉花火大会',

  englishName: '第77回 鎌倉花火大会',
  year: 2025,
  month: 7,
  date: '2025年7月18日',
  time: '19:20-20:10',
  duration: '50分钟',
  fireworksCount: '约2500发',
  expectedVisitors: '约16万人',
  weather: '雨天・荒天・高波时中止',
  ticketPrice: '免费观赏',
  status: '开催确定',
  themeColor: 'blue',
  
  tags: {
    timeTag: '7月',
    regionTag: '神奈川县',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  // 媒体展示内容
  media: [
    {
      type: 'image',
      url: '/images/hanabi/kamakura-fireworks.svg',
      title: '镰仓花火大会水中花火',
      description: '海上绽放的扇形水中花火，镰仓夏夜的传统风物诗'
    }
  ],
  
  venues: [
    {
      name: '由比滨海岸・材木座海岸',
      location: '神奈川县镰仓市',
      startTime: '19:20开始',
      features: [
        '传统水中花火演出',
        '海上扇形光之盛典',
        '镰仓古都背景',
        '有料席观赏体验'
      ]
    }
  ],

  access: [
    {
      venue: '由比滨海岸・材木座海岸',
      stations: [
        {
          name: 'JR镰仓站',
          lines: ['JR东海道本线', '江之岛电铁线'],
          walkTime: '步行约15分钟'
        },
        {
          name: '江之岛电铁由比滨站',
          lines: ['江之岛电铁线'],
          walkTime: '步行约5分钟'
        },
        {
          name: '江之岛电铁和田塚站',
          lines: ['江之岛电铁线'],
          walkTime: '步行约5分钟'
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '由比滨海岸观赏区',
      rating: 4.8,
      crowdLevel: 'high',
      tips: '最佳观赏位置，可欣赏水中花火的扇形展开。建议提早到场占位，避开人流高峰',
      pros: ['水中花火最佳视角', '海岸线优美景色', '传统观赏体验'],
      cons: ['人流密集', '需要早到占位', '沙滩观赏较累']
    },
    {
      name: '材木座海岸观赏区',
      rating: 4.6,
      crowdLevel: 'high',
      tips: '另一个主要观赏地点，视角略有不同。相对人少一些，但观赏效果同样精彩',
      pros: ['人流相对较少', '观赏角度独特', '海滩氛围浓厚'],
      cons: ['距离稍远', '部分视角受限']
    },
    {
      name: '有料席观赏区',
      rating: 4.9,
      crowdLevel: 'low',
      tips: '付费座席提供舒适观赏体验，建议通过众筹方式购买砂滩座席券',
      pros: ['座席舒适保证', '最佳观赏位置', '避免人群拥挤'],
      cons: ['需要付费', '座席数量有限', '需提前预约']
    }
  ],

  history: {
    established: 1948,
    significance: '镰仓花火大会自1948年开始举办，是镰仓夏季的传统风物诗，以独特的水中花火著称。作为湘南地区具有历史意义的花火大会，承载着战后复兴的愿望和地域文化传承',
    highlights: [
      '77年历史传承的传统花火大会',
      '独特的水中花火技艺展示',
      '镰仓古都文化背景',
      '湘南海岸夏季代表活动',
      '5年ぶり再开的珍贵机会'
    ]
  },

  tips: [
    {
      category: '交通指南',
      items: [
        '推荐使用公共交通工具，当日会场周边有交通管制',
        'JR镰仓站或江之岛电铁各站均可到达',
        '建议避开17:00-21:00的交通高峰时段',
        '回程时江之岛电铁可能会有临时增班'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '建议17:00前到达占据有利观赏位置',
        '携带防潮垫或简易椅子增加舒适度',
        '水中花火是最大看点，注意观赏海面',
        '建议携带望远镜以获得更佳观赏体验'
      ]
    },
    {
      category: '注意事项',
      items: [
        '雨天・荒天・高波时会中止，无预备日',
        '海边风大，注意保暖准备',
        '垃圾请自行带走，保护海岸环境',
        '禁止在海岸生火或烧烤'
      ]
    }
  ],

  contact: {
    organizer: '镰仓花火大会实行委员会',
    phone: '0467-23-3050',
    website: 'https://www.trip-kamakura.com/site/kamakura-hanabi/',
    socialMedia: '@kamakura_kyokai'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '由比滨海岸・材木座海岸位于镰仓市南部，面向相模湾。当日19:00-21:30会场周边实施交通管制，建议提前了解管制范围',
    parking: '无专用停车场\n建议公共交通前往'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.123456789!2d139.5123456789!3d35.3123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z由比滨海岸!5e0!3m2!1sja!2sjp!4v1234567890123',

  weatherInfo: {
    month: '7月',
    temperature: '日间26-30℃，夜间22-25℃',
    humidity: '70-85%',
    rainfall: '150-200mm',
    recommendation: '海边风大，建议准备薄外套防风',
    rainPolicy: '雨天・荒天・高波时中止',
    note: '海岸地区天气变化快，建议关注最新天气预报和开催决定'
  },

  specialFeatures: {
    scale: '约2500发花火，50分钟精彩演出',
    location: '镰仓历史古都海岸，相模湾绝美背景',
    tradition: '77年历史传承，镰仓夏季传统风物诗',
    atmosphere: '古都文化与海岸花火的完美融合',
    collaboration: '水中花火职人技艺的传统展示'
  },

  special2025: {
    theme: '海上绽放的光之扇',
    concept: '在镰仓古都海岸感受传统水中花火的魅力',
    features: [
      '传统水中花火扇形展开',
      '海上与空中花火共演',
      '镰仓古都夜景背景',
      '有料席砂滩观赏体验'
    ]
  },

  related: {
    regionRecommendations: [
      {
        id: 'yokohama-night-flowers',
        name: '横浜夜间花火2025',
        date: '2025年7月5日',
        location: '横浜港',
        visitors: '未公布',
        link: '/july/hanabi/kanagawa/yokohama-night-flowers'
      },
      {
        id: 'seaparadise-hanabi-symphonia',
        name: '横浜・八景岛海洋天堂花火交响曲',
        date: '2025年7月19日',
        location: '八景岛海洋天堂',
        visitors: '非公开',
        link: '/july/hanabi/kanagawa/seaparadise-hanabi-symphonia'
      }
    ],
    timeRecommendations: [
      {
        id: 'sumida-hanabi',
        name: '隅田川花火大会',
        date: '7月最后一个周六',
        location: '隅田川河畔',
        visitors: '95万人',
        link: '/july/hanabi/tokyo/sumida-hanabi'
      }
    ]
  }
}; 