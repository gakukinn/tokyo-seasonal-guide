import { HanabiData } from '../types/hanabi';

export const tachikawaData: HanabiData = {
  id: 'tachikawa',
  name: '立川祭国营昭和纪念公园花火大会',
  englishName: 'Tachikawa Matsuri Showa Kinen Park Fireworks Festival',
  year: 2025,
  date: '2025年7月26日(土)',
  time: '19:15～20:15',
  duration: '60分钟',
  fireworksCount: '約5000発',
  expectedVisitors: '約72万人',
  weather: '少雨决行，荒天中止',
  ticketPrice: '有料观览席',
  status: '都内屈指可数的广阔空间',
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
        date: '7月26日',
        location: '隅田川两岸',
        visitors: '91万人',
        link: '/july/hanabi/tokyo/sumida'
      },
      {
        id: 'katsushika',
        name: '葛飾納涼花火大会',
        date: '7月22日',
        location: '葛飾柴又',
        visitors: '77万人',
        link: '/july/hanabi/tokyo/katsushika'
      },
      {
        id: 'hachioji',
        name: '八王子花火大会',
        date: '7月26日',
        location: '八王子市',
        visitors: '9万人',
        link: '/july/hanabi/tokyo/hachioji'
      }
    ],
    timeRecommendations: [
      {
        id: 'katsushika',
        name: '葛飾納涼花火大会',
        date: '7月22日',
        location: '葛飾柴又',
        visitors: '77万人',
        link: '/july/hanabi/tokyo/katsushika'
      },
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月26日',
        location: '隅田川两岸',
        visitors: '91万人',
        link: '/july/hanabi/tokyo/sumida'
      }
    ]
  },

  venues: [
    {
      name: '国营昭和纪念公园 大家的原野',
      location: '东京都立川市绿町3173',
      startTime: '19:15',
      features: [
        '都内罕见的尺玉、一尺五寸玉等大迫力花火',
        '花火职人竞技大会入奖作品「艺协玉」展示',
        '在广阔的「大家的原野」上悠闲观赏',
        '华丽的Star Mine（速射连发花火）演出'
      ]
    }
  ],

  access: [
    {
      venue: '国营昭和纪念公园',
      stations: [
        { 
          name: 'JR立川站', 
          lines: ['JR中央线', 'JR南武线', 'JR青梅线'], 
          walkTime: '徒步约15分钟' 
        },
        { 
          name: 'JR西立川站', 
          lines: ['JR青梅线'], 
          walkTime: '徒步约2分钟（最近车站）' 
        },
        { 
          name: '多摩都市单轨立川北站', 
          lines: ['多摩都市单轨线'], 
          walkTime: '徒步约8分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '大家的原野中央区域',
      rating: 5,
      crowdLevel: 'High',
      tips: '最佳观赏位置，视野开阔无遮挡',
      pros: ['绝佳视野', '开放空间', '适合家庭观赏'],
      cons: ['需提前占位', '人流密集']
    },
    {
      name: '有料观览席',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '提供桌椅，观赏条件最佳',
      pros: ['座位保证', '观赏条件优越', '设施完善'],
      cons: ['需提前购买', '价格较高']
    },
    {
      name: '公园周边区域',
      rating: 3,
      crowdLevel: 'Medium',
      tips: '稍远但人流较少，适合不喜拥挤的游客',
      pros: ['人流适中', '免费观赏', '进出方便'],
      cons: ['距离较远', '花火较小']
    }
  ],

  history: {
    established: 1954,
    significance: '立川市夏季传统花火盛典，延续70多年历史',
    highlights: [
      '立川市最大规模的文化活动',
      '在广阔昭和纪念公园内悠闲观赏',
      '高品质花火职人作品展示',
      '都内罕见大型花火演出'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议17:00前入园占据观赏位置',
        '19:15正式开始，20:15结束',
        '花火大会当天终日入园免费'
      ]
    },
    {
      category: '必备物品',
      items: [
        '野餐垫或折叠椅',
        '防蚊虫用品',
        '轻便的外套（夜晚可能转凉）',
        '手电筒'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '重点关注尺玉、一尺五寸玉大型花火',
        '欣赏花火职人制作的艺协玉',
        '注意星雷(Star Mine)速射连发花火演出',
        '园内禁止携带酒类和BBQ用具'
      ]
    }
  ],

  contact: {
    organizer: '立川祭国营昭和纪念公园花火大会实行委员会',
    phone: '042-527-2700',
    website: 'https://hanabi.tokyo-tachikawa.org/',
    socialMedia: 'X(Twitter): @tachikawahanabi'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '△ 园内设有停车场（建议使用公共交通）'
  },

  weatherInfo: {
    recommendation: '建议出发前确认最新天气预报',
    rainPolicy: '少雨决行，荒天中止（无延期）',
    note: '建议携带雨具以备不时之需'
  },

  specialFeatures: {
    scale: '约5000发花火',
    location: '昭和纪念公园大家的原野',
    tradition: '立川市70年传统花火大会',
    atmosphere: '72万人共享夏夜盛典'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.012345678901!2d139.41234567890123!3d35.70567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e9876543210a%3A0x1234567890abcdef!2z56uL5bed5biC5piO5LiL6Kq_5biD!5e0!3m2!1szh-CN!2sjp!4v1698835700000!5m2!1szh-CN!2sjp',

  // 媒体内容 - 示例数据（请替换为实际的视频或图片）
  media: [
    {
      type: 'image',
      url: '/images/tachikawa-hanabi-main.jpg',
      title: '立川诏和纪念公园花火大会精彩瞬间',
      description: '国营昭和纪念公园内5000发花火与自然美景的和谐共演'
    }
  ]
}; 