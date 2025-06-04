import { HanabiData } from '../types/hanabi';

export const chofuData: HanabiData = {
  id: 'chofu',
  name: '第40回调布花火大会',
  englishName: 'The 40th Chofu Fireworks Festival',
  year: 2025,
  date: '2025年9月6日(土)',
  time: '18:30～19:30',
  duration: '60分钟',
  fireworksCount: '约8000发',
  expectedVisitors: '约28万人',
  weather: '小雨决行，荒天中止',
  ticketPrice: '有料观览席',
  status: '花火幻境音乐花火',
  themeColor: 'blue',
  month: 9,

  // 标签系统
  tags: {
    timeTag: '9月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 4详情页'
  },

  venues: [
    {
      name: '布田会场',
      location: '东京都调布市多摩川河川敷',
      startTime: '18:15',
      features: [
        '大玉50连发',
        '花火幻境音乐花火',
        '匠人花火玉特别企划',
        '多摩川河畔绝景'
      ]
    },
    {
      name: '京王多摩川会场',
      location: '东京都调布市多摩川河川敷',
      startTime: '18:15',
      features: [
        '距离最近观赏位置',
        '大型花火全景视野',
        '丰富多样的表演节目',
        '河川敷开阔空间'
      ]
    },
    {
      name: '电通大运动场会场',
      location: '东京都调布市多摩川河川敷',
      startTime: '18:15',
      features: [
        '指定席观赏区域',
        '安全舒适环境',
        '完整60分钟演出',
        '专业音响设备'
      ]
    }
  ],

  access: [
    {
      venue: '布田会场',
      stations: [
        { 
          name: '布田站', 
          lines: ['京王线'], 
          walkTime: '徒步约20分钟' 
        },
        { 
          name: '调布站', 
          lines: ['京王线'], 
          walkTime: '徒步约25分钟' 
        }
      ]
    },
    {
      venue: '京王多摩川会场',
      stations: [
        { 
          name: '京王多摩川站', 
          lines: ['京王相模原线'], 
          walkTime: '徒步约10分钟' 
        },
        { 
          name: '调布站', 
          lines: ['京王线'], 
          walkTime: '徒步约20分钟' 
        }
      ]
    },
    {
      venue: '电通大运动场会场',
      stations: [
        { 
          name: '京王多摩川站', 
          lines: ['京王相模原线'], 
          walkTime: '徒步约15分钟' 
        },
        { 
          name: '调布站东口', 
          lines: ['京王线'], 
          walkTime: '徒步约20分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '桌席(4人用)',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '最高级观赏体验，含餐食饮品',
      pros: ['绝佳视角', '专用座席', '餐食提供'],
      cons: ['价格最高', '需提前预约', '数量极限']
    },
    {
      name: '升席(10人用)',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '团体观赏最佳选择，传统升席体验',
      pros: ['团体包场', '传统体验', '宽敞空间'],
      cons: ['需10人团体', '价格较高', '预约困难']
    },
    {
      name: '座席(4人用)',
      rating: 4,
      crowdLevel: 'Controlled',
      tips: '性价比较高的指定席选择',
      pros: ['价格适中', '指定座席', '视野良好'],
      cons: ['无餐食服务', '座位稍挤', '需提前购票']
    },
    {
      name: '全景席(1人用)',
      rating: 4,
      crowdLevel: 'Controlled',
      tips: '个人观赏，全景视野体验',
      pros: ['个人专享', '全景视野', '自由度高'],
      cons: ['单人限制', '价格偏高', '社交性差']
    },
    {
      name: '自由观览区',
      rating: 3,
      crowdLevel: 'Very High',
      tips: '免费观赏，需提前占位',
      pros: ['完全免费', '选位自由', '距离较近'],
      cons: ['人流密集', '需早到', '无座席保证']
    }
  ],

  history: {
    established: 1986,
    significance: '多摩川畔40年传统，音乐花火融合先驱',
    highlights: [
      '第40回纪念大会特别企划',
      '花火幻境音乐花火创新',
      '大玉50连发震撼演出传统',
      '匠人花火玉职人技艺展示'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议16:00前到达各会场占位',
        '18:00开会式，18:15正式开始',
        '19:15结束，预留充足返程时间',
        '注意各会场的不同入场时间'
      ]
    },
    {
      category: '必备物品',
      items: [
        '有料席券或身份证件',
        '防潮垫和折叠椅(自由观览)',
        '充足饮用水和轻食',
        '雨具(秋季天气变化)'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '重点关注大玉50连发高潮',
        '聆听花火幻境音乐同步',
        '欣赏匠人花火玉职人技艺',
        '多摩川河畔夜景与花火融合美'
      ]
    },
    {
      category: '会场选择',
      items: [
        '布田会场：传统观赏，距离适中',
        '京王多摩川会场：最近距离，震撼体验',
        '电通大运动场：舒适环境，指定席',
        '根据交通便利性选择合适会场'
      ]
    }
  ],

  contact: {
    organizer: '调布市花火实行委员会',
    phone: '042-481-7311',
    website: 'https://hanabi.csa.gr.jp/',
    socialMedia: '调布花火实行委员会官方'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '△ 周边停车场有限（强烈推荐公共交通）'
  },

  weatherInfo: {
    recommendation: '建议出发前查看当日天气预报',
    rainPolicy: '雨天中止（延期日程另行通知）',
    note: '9月秋季天气变化，请携带雨具和保暖衣物'
  },

  specialFeatures: {
    scale: '约1万发・60分钟连续',
    location: '多摩川河川敷三会场',
    tradition: '第40回纪念大会',
    atmosphere: '15万人秋夜花火盛典'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.678901234567!2d139.54123456789012!3d35.64567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f4567890abcd%3A0x1234567890abcdef!2z6LCD5biD5biC5aSa5pGp5bed!5e0!3m2!1szh-CN!2sjp!4v1698835600000!5m2!1szh-CN!2sjp',

  // 媒体内容 - 示例数据（请替换为实际的视频或图片）
  media: [
    {
      type: 'image',
      url: '/images/chofu-hanabi-main.jpg',
      title: '调布市花火大会精彩瞬间',
      description: '多摩川河岸8000发花火照亮西东京夜空的绚烂场面'
    }
  ]
}; 