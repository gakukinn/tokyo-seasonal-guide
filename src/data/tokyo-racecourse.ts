import { HanabiData } from '../types/hanabi';

export const tokyoRacecourseData: HanabiData = {
  id: 'tokyo-racecourse',
  name: '东京竞马场花火2025',
  englishName: 'Tokyo Racecourse Fireworks 2025',
  year: 2025,
  date: '2025年7月2日(水)',
  time: '19:30～20:30',
  duration: '60分钟',
  fireworksCount: '1万4000发',
  expectedVisitors: '约7万人',
  weather: '雨天延期至翌日',
  ticketPrice: '有料观览席',
  status: '竞马场全席指定',
  themeColor: 'blue',
  month: 7,

  // 标签系统
  tags: {
    timeTag: '7月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 4详情页'
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
    established: 2018,
    significance: '关东地区竞马场首次大型花火大会',
    highlights: [
      '府中市首个大规模花火盛典',
      '结合竞马场独特景观的花火演出',
      '关东地区最大规模夏季花火',
      '创新的马场花火融合体验'
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
    organizer: 'JRA东京竞马场',
    phone: '042-363-3141',
    website: 'https://www.jra.go.jp/facilities/race/tokyo/',
    socialMedia: 'JRA东京竞马场官方'
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
    scale: '1万4000发关东最大',
    location: '府中竞马场独特景观',
    tradition: '竞马场首次花火盛典',
    atmosphere: '10万人马场夏夜狂欢'
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