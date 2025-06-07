import { HanabiData } from '../types/hanabi';

export const katsushikaData: HanabiData = {
  id: 'katsushika',
  name: '第59回 葛飾納涼花火大会',
  japaneseName: '第48回葛飾納涼花火大会',

  englishName: 'Katsushika Fireworks Festival',
  year: 2025,
  date: '2025年7月22日(火)',
  time: '19:20～20:20',
  duration: '60分钟',
  fireworksCount: '约15,000发',
  expectedVisitors: '约77万人',
  weather: '荒天取消',
  ticketPrice: '有料席・自由席',
  status: '东京都人气第2位',
  themeColor: 'blue',
  month: 7,

  // 标签系统
  tags: {
    timeTag: '7月',
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
        date: '2025年7月26日',
        location: '隅田川两岸',
        visitors: '91万人',
        link: '/hanabi/detail/sumida'
      },
      {
        id: 'edogawa',
        name: '江戸川花火大会',
        date: '2025年7月2日',
        location: '江戸川河川敷',
        visitors: '14万人',
        link: '/hanabi/detail/edogawa'
      },
      {
        id: 'tachikawa',
        name: '立川昭和纪念公园花火',
        date: '2025年7月12日',
        location: '昭和纪念公园',
        visitors: '25万人',
        link: '/hanabi/detail/tachikawa'
      }
    ],
    timeRecommendations: [
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '2025年7月26日',
        location: '隅田川两岸',
        visitors: '91万人',
        link: '/hanabi/detail/sumida'
      },
      {
        id: 'tachikawa',
        name: '立川昭和纪念公园花火',
        date: '2025年7月12日',
        location: '昭和纪念公园',
        visitors: '25万人',
        link: '/hanabi/detail/tachikawa'
      }
    ]
  },

  venues: [
    {
      name: '葛飾区柴又野球場',
      location: '葛飾区柴又七丁目17番13号先（江戸川河川敷）',
      startTime: '19:20',
      features: [
        '观赏距离极近',
        '轰音振动体验',
        '音乐花火联动',
        '下町柴又风情'
      ]
    }
  ],

  access: [
    {
      venue: '柴又野球场会场',
      stations: [
        { 
          name: '柴又站', 
          lines: ['京成线'], 
          walkTime: '徒步约10分钟' 
        },
        { 
          name: '金町站', 
          lines: ['JR线'], 
          walkTime: '徒步约20分钟' 
        },
        { 
          name: '新柴又站', 
          lines: ['北总线'], 
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
      tips: '距离打上地点最近，震撼体验',
      pros: ['极近距离', '轰音振动', '最佳视角'],
      cons: ['需要购票', '价格较高', '数量有限']
    },
    {
      name: '江戸川河川敷自由席',
      rating: 4,
      crowdLevel: 'High', 
      tips: '免费观赏，需要早到占位',
      pros: ['免费观赏', '下町氛围', '空间开阔'],
      cons: ['需要早到', '距离较远', '竞争激烈']
    },
    {
      name: '东京晴空塔同框拍摄点',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '可以拍摄花火与晴空塔同框',
      pros: ['独特角度', '拍照胜地', '纪念价值'],
      cons: ['距离较远', '人流较多', '花火较小']
    }
  ],

  history: {
    established: 1966,
    significance: '下町情怀满溢的夏季传统祭典',
    highlights: [
      '半世纪以上历史传承',
      '观赏距离极近的震撼体验',
      '都内最大级规模1万5000发',
      '柴又帝释天下町风情'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午早些时候到达占位',
        '提前享受柴又街道散步',
        '关注官方网站确认举办状态',
        '预留充足返程时间'
      ]
    },
    {
      category: '必备物品',
      items: [
        '防潮垫或折叠椅',
        '充电宝和手机',
        '雨具（夏季多雨）',
        '充足的水和食物'
      ]
    },
    {
      category: '体验建议',
      items: [
        '体验下町柴又的昭和风情',
        '参观柴又帝释天',
        '品尝当地传统美食',
        '感受轰音振动的震撼体验'
      ]
    }
  ],

  contact: {
    organizer: '葛飾納涼花火大会実行委員会',
    phone: '03-6758-2222',
    website: 'https://www.city.katsushika.lg.jp/tourism/1000064/1000065/1031830.html',
    socialMedia: '@葛飾納涼花火大会公式X'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '× 不提供停车位，请使用公共交通工具'
  },

  weatherInfo: {
    recommendation: '建议出发前查看当日天气预报',
    rainPolicy: '荒天取消',
    note: '夏季多雨，请携带雨具'
  },

  specialFeatures: {
    scale: '约1万5000发花火',
    location: '柴又下町风情与花火的完美融合',
    tradition: '半世纪历史传承的下町祭典',
    atmosphere: '32万人共享震撼体验'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.654321098765!2d139.84123456789012!3d35.73567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188abc123456789%3A0x1234567890abcdef!2z6JCS5aOr6aOB6Iqx54Gr5aSn5Lya!5e0!3m2!1szh-CN!2sjp!4v1698836000000!5m2!1szh-CN!2sjp',

  // 媒体内容 - 示例数据（请替换为实际的视频或图片）
  media: [
    {
      type: 'image',
      url: '/images/katsushika-hanabi-main.jpg',
      title: '葛饰納涼花火大会精彩瞬间',
      description: '江户川河岸1万3千发花火展现下町文化的传统魅力'
    }
  ]
}; 