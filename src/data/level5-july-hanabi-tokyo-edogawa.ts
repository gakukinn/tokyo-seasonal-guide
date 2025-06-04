import { HanabiData } from '../types/hanabi';

export const edogawaData: HanabiData = {
  id: 'edogawa',
  name: '第50回 江戸川区花火大会',
  englishName: 'Edogawa Fireworks Festival',
  year: 2025,
  date: '2025年8月2日(土)',
  time: '19:15～20:20（预定）',
  duration: '65分钟',
  fireworksCount: '约1万4000发',
  expectedVisitors: '约14万人',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '有料席3万席',
  status: '50周年纪念大会',
  themeColor: 'blue',
  month: 8,

  // 标签系统
  tags: {
    timeTag: '8月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 4详情页'
  },

  // 关联推荐 - 双维度轮回设计
  related: {
    regionRecommendations: [
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月26日',
        location: '隅田川两岸',
        visitors: '91万人',
        link: '/hanabi/detail/sumida'
      },
      {
        id: 'katsushika',
        name: '葛飾納涼花火大会',
        date: '7月22日',
        location: '葛飾柴又',
        visitors: '32万人',
        link: '/hanabi/detail/katsushika'
      },
      {
        id: 'tachikawa',
        name: '立川昭和纪念公园花火',
        date: '7月12日',
        location: '昭和纪念公园',
        visitors: '25万人',
        link: '/hanabi/detail/tachikawa'
      }
    ],
    timeRecommendations: [
      {
        id: 'itabashi',
        name: '板橋花火大会',
        date: '8月2日',
        location: '荒川河川敷',
        visitors: '52万人',
        link: '/hanabi/detail/itabashi'
      },
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月26日',
        location: '隅田川两岸',
        visitors: '91万人',
        link: '/hanabi/detail/sumida'
      }
    ]
  },

  venues: [
    {
      name: '江戸川河川敷主会场',
      location: '江戸川河川敷（都立篠崎公園先）',
      startTime: '19:15',
      features: [
        '7主题音乐同步演出',
        '吉尼斯世界记录挑战',
        '50周年纪念企划',
        '宗家花火"鍵屋"360年历史传承'
      ]
    }
  ],

  access: [
    {
      venue: '江戸川河川敷会场',
      stations: [
        { 
          name: '江戸川站', 
          lines: ['京成本线'], 
          walkTime: '徒步约15分钟' 
        },
        { 
          name: '小岩站', 
          lines: ['JR总武线'], 
          walkTime: '徒步约20分钟' 
        },
        { 
          name: '篠崎站', 
          lines: ['都营新宿线'], 
          walkTime: '徒步约15分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '有料观览席',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '最佳观赏体验，建议提前购票',
      pros: ['最佳视角', '座位保证', '相对舒适'],
      cons: ['需要购票', '价格较高', '数量有限']
    },
    {
      name: '江戸川河川敷自由席',
      rating: 4,
      crowdLevel: 'High', 
      tips: '免费观赏区域，需要早到占位',
      pros: ['免费观赏', '空间较大', '氛围热烈'],
      cons: ['需要早到', '设施简单', '竞争激烈']
    },
    {
      name: '篠崎公园周边',
      rating: 3,
      crowdLevel: 'Medium',
      tips: '距离稍远但人流相对较少',
      pros: ['人流较少', '公园设施', '交通便利'],
      cons: ['距离较远', '观赏角度一般', '花火较小']
    }
  ],

  history: {
    established: 1976,
    significance: '江户川区具有代表性的夏季祭典',
    highlights: [
      '50周年纪念大会特别企划',
      '宗家花火"鍵屋"360年历史传承',
      '7主题音乐同步演出',
      '吉尼斯世界记录挑战"富士大烟花"'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午4点前到达占位（自由席）',
        '有料席建议提前30分钟入场',
        '关注官方网站确认举办状态',
        '预留充足返程时间'
      ]
    },
    {
      category: '必备物品',
      items: [
        '防潮垫或折叠椅（自由席）',
        '充电宝和手机',
        '雨具（夏季多雨）',
        '充足的水和食物'
      ]
    },
    {
      category: '交通建议',
      items: [
        '强烈推荐公共交通',
        '考虑多条返程路线',
        '预留充足的往返时间',
        '避免自驾前往'
      ]
    }
  ],

  contact: {
    organizer: '江戸川区花火大会実行委員会',
    phone: '03-5662-0523',
    website: 'https://www.city.edogawa.tokyo.jp/hanabi/',
    socialMedia: '江戸川区公式SNS'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '× 不提供停车位，请使用公共交通工具'
  },

  weatherInfo: {
    recommendation: '建议出发前查看当日天气预报',
    rainPolicy: '小雨决行（恶劣天气时中止）',
    note: '夏季多雨，请携带雨具'
  },

  specialFeatures: {
    scale: '约1万4000发花火',
    location: '江戸川河川敷会场',
    tradition: '50周年纪念大会特别企划',
    atmosphere: '14万人共享夏夜盛典'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.789012345678!2d139.86123456789012!3d35.70567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188def456789abc%3A0x1234567890abcdef!2z5rGf5oi45bed6Iqx54Gr5aSn5Lya!5e0!3m2!1szh-CN!2sjp!4v1698836100000!5m2!1szh-CN!2sjp',

  // 媒体内容 - 示例数据（请替换为实际的视频或图片）
  media: [
    {
      type: 'image',
      url: '/images/edogawa-hanabi-main.jpg',
      title: '江户川区花火大会精彩瞬间',
      description: '江户川河岸1万4千发花火为东京东部带来的夏日盛典'
    }
  ]
}; 