import { HanabiData } from '../types/hanabi';

export const tokyoRacecourseData: HanabiData = {
  id: 'tokyo-racecourse',
  name: '东京竞马场花火2025',
  englishName: 'Tokyo Racecourse Fireworks 2025',
  year: 2025,
  date: '2025年7月2日(水)',
  time: '19:30～20:40',
  duration: '70分钟',
  fireworksCount: '14,000发',
  expectedVisitors: '未公布',
  weather: '雨天延期至翌日',
  ticketPrice: '全席指定席',
  status: '17:00开场，19:30开演，终演后规制退场',
  themeColor: 'blue',
  month: 7,

  // 标签系统
  tags: {
    timeTag: '7月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 4详情页'
  },

  // 相关花火大会推荐
  related: {
    regionRecommendations: [
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月27日',
        location: '东京都台东区・墨田区',
        visitors: '95万人',
        link: '/july/hanabi/tokyo/sumida'
      },
      {
        id: 'tachikawa',
        name: '立川花火大会',
        date: '7月27日',
        location: '东京都立川市',
        visitors: '35万人',
        link: '/july/hanabi/tokyo/tachikawa'
      }
    ],
    timeRecommendations: [
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月27日',
        location: '东京都台东区・墨田区',
        visitors: '95万人',
        link: '/july/hanabi/tokyo/sumida'
      },
      {
        id: 'itabashi',
        name: '板橋花火大会',
        date: '7月20日',
        location: '东京都板橋区',
        visitors: '52万人',
        link: '/july/hanabi/tokyo/itabashi'
      }
    ]
  },

  venues: [
    {
      name: '东京竞马场主赛场',
      location: '东京都府中市日吉町1-1',
      startTime: '18:30',
      features: [
        '关东地区最大规模',
        '雷管音响效果震撼',
        '马场专用特别演出',
        '壮观竞马场夜景'
      ]
    }
  ],

  access: [
    {
      venue: '东京竞马场',
      stations: [
        { 
          name: '府中竞马场前站', 
          lines: ['京王线'], 
          walkTime: '徒步约2分钟' 
        },
        { 
          name: '府中本町站', 
          lines: ['JR南武线', 'JR武藏野线'], 
          walkTime: '徒步约10分钟' 
        },
        { 
          name: '东府中站', 
          lines: ['京王线'], 
          walkTime: '徒步约15分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '竞马场中央草坪',
      rating: 5,
      crowdLevel: 'Medium',
      tips: '最佳视角，整个天空尽收眼底',
      pros: ['视野开阔', '音响震撼', '免费入场'],
      cons: ['需提前占位', '草地较硬', '人流较多']
    },
    {
      name: '竞马场看台',
      rating: 4,
      crowdLevel: 'Low',
      tips: '有遮挡的观赏体验',
      pros: ['有座椅', '有遮挡', '视角稳定'],
      cons: ['部分视角受限', '距离较远', '音响效果弱']
    },
    {
      name: '竞马场周边道路',
      rating: 3,
      crowdLevel: 'Very High',
      tips: '免费观赏，但体验一般',
      pros: ['完全免费', '进出方便', '无入场限制'],
      cons: ['视角受限', '花火较小', '缺乏氛围']
    }
  ],

  history: {
    established: 2022,
    significance: '日本最高峰花火娱乐盛典',
    highlights: [
      '东京最早夏季花火',
      '音乐主题年度企划',
      '昭和100年纪念',
      '超近距离观赏体验'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议16:30前到达竞马场',
        '18:30开始，20:30结束',
        '中央草坪位置需提前占据',
        '结束后立即离场避免拥挤'
      ]
    },
    {
      category: '必备物品',
      items: [
        '防潮垫和小椅子（草坪观赏）',
        '充足饮用水和简单食物',
        '防蚊虫用品和遮阳帽',
        '手电筒（夜间照明）'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '选择中央草坪获得最佳体验',
        '注意竞马场特有的音响效果',
        '欣赏马场夜景与花火的完美结合',
        '关注大规模连发特别演出'
      ]
    }
  ],

  contact: {
    organizer: '东京竞马场花火2025实行委员会',
    phone: '未公布',
    website: 'https://hanabitokyo.com/',
    socialMedia: '@hanabitokyo2025'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考JRA官方网站',
    parking: '○ 竞马场内大型停车场可利用'
  },

  weatherInfo: {
    recommendation: '建议出发前查看当日天气预报',
    rainPolicy: '雨天延期（延期日程另行通知）',
    note: '夏季草坪闷热，请做好防暑准备'
  },

  specialFeatures: {
    scale: '广阔竞马场舞台',
    location: '100米超近距离',
    tradition: '音乐花火同步',
    atmosphere: '全席指定席'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.345678901234!2d139.48123456789012!3d35.66567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f7890abcdef1%3A0x1234567890abcdef!2z5p2x5Lqs56uL6LSs5b2v5aC0!5e0!3m2!1szh-CN!2sjp!4v1698835900000!5m2!1szh-CN!2sjp',

  // 媒体内容 - 示例数据（请替换为实际的视频或图片）
  media: [
    {
      type: 'image',
      url: '/images/tokyo-racecourse-hanabi-main.jpg',
      title: '东京竞马场花火大会精彩瞬间',
      description: '竞马场内7000发花火与赛马场独特氛围的特别体验'
    }
  ]
}; 