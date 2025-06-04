import { HanabiData } from '../types/hanabi';

export const itabashiData: HanabiData = {
  id: 'itabashi',
  name: '第66回 板桥花火大会',
  englishName: 'The 66th Itabashi Fireworks Festival',
  year: 2025,
  date: '2025年8月2日(土)',
  time: '19:00～20:30',
  duration: '90分钟',
  fireworksCount: '约1万5000发',
  expectedVisitors: '约57万人',
  weather: '荒天时中止',
  ticketPrice: '有料观览席',
  status: '都内最大尺五寸玉',
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
        id: 'edogawa',
        name: '江戸川花火大会',
        date: '8月2日',
        location: '江戸川河川敷',
        visitors: '14万人',
        link: '/hanabi/detail/edogawa'
      },
      {
        id: 'katsushika',
        name: '葛飾納涼花火大会',
        date: '7月22日',
        location: '葛飾柴又',
        visitors: '32万人',
        link: '/hanabi/detail/katsushika'
      }
    ],
    timeRecommendations: [
      {
        id: 'edogawa',
        name: '江戸川花火大会',
        date: '8月2日',
        location: '江戸川河川敷',
        visitors: '14万人',
        link: '/hanabi/detail/edogawa'
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
      name: '荒川河川敷主会场',
      location: '东京都板桥区 荒川河川敷',
      startTime: '19:00',
      features: [
        '都内最大尺五寸玉',
        '与戸田桥花火大会同时开催',
        '5处同时打上',
        '天空的尼亚加拉瀑布'
      ]
    }
  ],

  access: [
    {
      venue: '荒川河川敷会场',
      stations: [
        { 
          name: '浮間舟渡站', 
          lines: ['JR埼京线'], 
          walkTime: '徒步约20分钟' 
        },
        { 
          name: '高島平站', 
          lines: ['都营地下铁三田线'], 
          walkTime: '徒步约20分钟' 
        },
        { 
          name: '西台站', 
          lines: ['都营地下铁三田线'], 
          walkTime: '徒步约20分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '有料观览席',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '最佳视角，观赏都内最大尺五寸玉',
      pros: ['绝佳视角', '指定座席', '震撼体验'],
      cons: ['价格较高', '需提前预约', '数量有限']
    },
    {
      name: '荒川河川敷自由观览区',
      rating: 4,
      crowdLevel: 'Very High', 
      tips: '免费观赏，提前占位是关键',
      pros: ['免费观赏', '气氛热烈', '贴近花火'],
      cons: ['人流密集', '需提早到达', '视角有限']
    },
    {
      name: '戸田桥周边',
      rating: 3,
      crowdLevel: 'High',
      tips: '可同时观赏两岸花火',
      pros: ['双岸花火', '人流稍少', '交通便利'],
      cons: ['距离较远', '花火较小', '音响效果弱']
    }
  ],

  history: {
    established: 1950,
    significance: '都内最大尺五寸玉与戸田桥花火同时开催',
    highlights: [
      '第66届历史悠久传统花火大会',
      '都内最大尺五寸玉震撼演出',
      '与戸田桥花火大会同时开催双重享受',
      '5处同时打上的壮观星雷'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议16:00前到达占据观赏位置',
        '19:00正式开始，20:30结束',
        '双岸花火同时进行，视觉盛宴',
        '预留充足返程时间'
      ]
    },
    {
      category: '必备物品',
      items: [
        '防潮垫和折叠椅（河川敷观赏）',
        '充足的饮用水和轻食',
        '防蚊虫用品和小扇子',
        '垃圾袋（请带走垃圾保护环境）'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '重点关注都内最大尺五寸玉',
        '注意天空的尼亚加拉瀑布终演',
        '河川敷中央位置视野最佳',
        '可同时欣赏戸田侧花火'
      ]
    }
  ],

  contact: {
    organizer: '板桥区观光协会',
    phone: '03-3579-2251',
    website: 'https://itabashihanabi.jp/',
    socialMedia: '@itabashihanabi (X), Instagram: itabashi_hanabi'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '△ 周边停车场有限（强烈推荐公共交通）'
  },

  weatherInfo: {
    recommendation: '建议出发前查看当日天气预报',
    rainPolicy: '雨天延期（延期日程另行通知）',
    note: '夏季河川敷闷热，请做好防暑准备'
  },

  specialFeatures: {
    scale: '约1万5000发花火',
    location: '荒川河川敷双岸观赏',
    tradition: '第66届传统花火大会',
    atmosphere: '57万人共享夏夜盛典'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.876543210987!2d139.71234567890123!3d35.74567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018914567890abc%3A0x1234567890abcdef!2z5p2%2F5qmL6Iqx54Gr5aSn5Lya!5e0!3m2!1szh-CN!2sjp!4v1698835800000!5m2!1szh-CN!2sjp',

  // 媒体内容 - 示例数据（请替换为实际的视频或图片）
  media: [
    {
      type: 'image',
      url: '/images/itabashi-hanabi-main.jpg',
      title: '板桥花火大会精彩瞬间',
      description: '荒川河岸1万2千发花火点亮北东京夜空的盛大景象'
    }
  ]
}; 