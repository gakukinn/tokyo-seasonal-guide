import { HanabiData } from '../types/hanabi';

export const jinguData: HanabiData = {
  id: 'jingu',
  name: '神宫外苑花火大会',
  englishName: 'Jingu Gaien Fireworks Festival',
  year: 2025,
  date: '2025年8月9日(土)',
  time: '19:30～20:30',
  duration: '60分钟',
  fireworksCount: '约1万发',
  expectedVisitors: '约100万人',
  weather: '小雨决行，荒天时顺延至翌日',
  ticketPrice: '有料观览席',
  status: '东京都代表性花火大会',
  themeColor: 'blue',
  month: 8,

  // 标签系统
  tags: {
    timeTag: '8月',
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
        id: 'itabashi',
        name: '板橋花火大会',
        date: '8月2日',
        location: '东京都板橋区',
        visitors: '57万人',
        link: '/july/hanabi/tokyo/itabashi'
      }
    ],
    timeRecommendations: [
      {
        id: 'itabashi',
        name: '板橋花火大会',
        date: '8月2日',
        location: '东京都板橋区',
        visitors: '57万人',
        link: '/july/hanabi/tokyo/itabashi'
      },
      {
        id: 'edogawa',
        name: '江戸川花火大会',
        date: '8月2日',
        location: '东京都江戸川区',
        visitors: '14万人',
        link: '/hanabi/detail/edogawa'
      }
    ]
  },

  venues: [
    {
      name: '神宫球场',
      location: '东京都新宿区霞丘町3-1',
      startTime: '19:30',
      features: [
        '全席指定座席',
        '绝佳观赏角度',
        '1万发花火全景',
        '音乐花火祭典'
      ]
    },
    {
      name: '秩父宫橄榄球场',
      location: '东京都港区北青山2-8-35',
      startTime: '19:30',
      features: [
        '全席指定座席',
        '专业体育场环境',
        '震撼音响效果',
        '舒适观赏体验'
      ]
    }
  ],

  access: [
    {
      venue: '神宫球场',
      stations: [
        { 
          name: '外苑前站', 
          lines: ['东京地铁银座线', '东京地铁半藏门线'], 
          walkTime: '徒步约5分钟' 
        },
        { 
          name: '青山一丁目站', 
          lines: ['东京地铁银座线', '东京地铁半藏门线', '都营地铁大江户线'], 
          walkTime: '徒步约10分钟' 
        },
        { 
          name: '信濃町站', 
          lines: ['JR中央·总武线'], 
          walkTime: '徒步约10分钟' 
        }
      ]
    },
    {
      venue: '秩父宫橄榄球场',
      stations: [
        { 
          name: '外苑前站', 
          lines: ['东京地铁银座线', '东京地铁半藏门线'], 
          walkTime: '徒步约5分钟' 
        },
        { 
          name: '表参道站', 
          lines: ['东京地铁银座线', '东京地铁半藏门线', '东京地铁千代田线'], 
          walkTime: '徒步约10分钟' 
        },
        { 
          name: '北参道站', 
          lines: ['东京地铁副都心线'], 
          walkTime: '徒步约10分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '神宫球场指定席',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '最佳观赏体验，球场内安全舒适',
      pros: ['指定座席', '绝佳视角', '音响效果'],
      cons: ['价格较高', '需提前购票', '数量有限']
    },
    {
      name: '秩父宫橄榄球场指定席',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '专业体育场环境，观赏角度优秀',
      pros: ['全席指定', '体育场设施', '安全管理'],
      cons: ['票价不低', '预约竞争', '距离稍远']
    },
    {
      name: '周边自由观览区',
      rating: 3,
      crowdLevel: 'Very High',
      tips: '免费观赏，但人流极其密集',
      pros: ['完全免费', '气氛热烈', '多个观赏点'],
      cons: ['人流如潮', '视线遮挡', '安全风险']
    }
  ],

  history: {
    established: 1980,
    significance: '东京都心最大规模花火大会，音乐花火祭典先驱',
    highlights: [
      '约100万人观众的超大规模',
      '音乐与花火完美融合的祭典',
      '都心明治神宫外苑的绝景',
      '艺术家现场演出的音乐花火'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议17:00前到达会场周边',
        '19:30花火正式开始',
        '20:30结束，预留充足离场时间',
        '注意开催决定在当日正午发表'
      ]
    },
    {
      category: '必备物品',
      items: [
        '有料席入场券或预约确认',
        '身份证件和预约信息',
        '适量饮用水和轻食',
        '雨具(小雨决行政策)'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '感受1万发花火的壮观规模',
        '聆听现场艺术家音乐演出',
        '体验音乐花火同步的震撼',
        '欣赏都心夜景与花火融合美'
      ]
    },
    {
      category: '会场选择',
      items: [
        '神宫球场：传统最佳观赏位置',
        '秩父宫橄榄球场：专业体育场体验',
        '周边自由区：免费但极其拥挤',
        '考虑交通便利性选择入场路线'
      ]
    }
  ],

  contact: {
    organizer: '神宫外苑花火大会实行委员会',
    phone: '03-5794-4721',
    website: 'https://www.jinguhanabi.com/',
    socialMedia: '@jinguhanabi'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '× 无停车场（强烈推荐公共交通）'
  },

  weatherInfo: {
    recommendation: '建议出发前查看当日天气和开催决定',
    rainPolicy: '小雨决行，荒天时顺延至翌日',
    note: '开催决定在当日正午通过官方网站和SNS发表'
  },

  specialFeatures: {
    scale: '约1万发・60分钟',
    location: '明治神宫外苑',
    tradition: '音乐花火祭典',
    atmosphere: '100万人都心花火盛典'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.345678901234!2d139.69123456789012!3d35.67234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c123456789a%3A0x1234567890abcdef!2z5piO5rK75pyr5aCV!5e0!3m2!1szh-CN!2sjp!4v1698835500000!5m2!1szh-CN!2sjp',

  // 媒体内容 - 示例数据（请替换为实际的视频或图片）
  media: [
    {
      type: 'image',
      url: '/images/jingu-hanabi-main.jpg',
      title: '神宫外苑花火大会精彩瞬间',
      description: '东京市中心1万发花火与都市景观的完美融合'
    }
  ]
}; 