import { HanabiData } from '../types/hanabi';

export const setagayaData: HanabiData = {
  id: 'setagaya',
  name: '第47回 世田谷区多摩川花火大会',
  englishName: 'The 47th Setagaya Tamagawa Fireworks Festival',
  year: 2025,
  date: '2025年10月4日(土)',
  time: '18:00～19:00',
  duration: '60分钟',
  fireworksCount: '约6000发',
  expectedVisitors: '约15万人',
  weather: '荒天中止',
  ticketPrice: '有料观览席',
  status: '秋季花火大会代表',
  themeColor: 'blue',
  month: 10,

  // 标签系统
  tags: {
    timeTag: '10月',
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
        id: 'jingu',
        name: '神宫外苑花火大会',
        date: '8月10日',
        location: '东京都新宿区',
        visitors: '100万人',
        link: '/hanabi/detail/jingu'
      }
    ],
    timeRecommendations: [
      {
        id: 'chofu',
        name: '调布花火大会',
        date: '9月6日',
        location: '东京都调布市',
        visitors: '28万人',
        link: '/hanabi/detail/chofu'
      },
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月27日',
        location: '东京都台东区・墨田区',
        visitors: '95万人',
        link: '/july/hanabi/tokyo/sumida'
      }
    ]
  },

  venues: [
    {
      name: '世田谷区立二子玉川绿地运动场',
      location: '东京都世田谷区玉川1-16-1',
      startTime: '18:00',
      features: [
        '秋空下的6000发花火',
        '多摩川两岸同时开催',
        '与川崎市花火大会合作',
        '华丽音乐花火演出'
      ]
    }
  ],

  access: [
    {
      venue: '世田谷区立二子玉川绿地运动场',
      stations: [
        { 
          name: '二子玉川站', 
          lines: ['东急田园都市线', '东急大井町线'], 
          walkTime: '徒步约15分钟' 
        },
        { 
          name: '上野毛站', 
          lines: ['东急大井町线'], 
          walkTime: '徒步约12分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '桌席(4人用)',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '最前方位置，可轻松观赏花火',
      pros: ['圆桌+4椅', '最佳视角', '舒适环境'],
      cons: ['价格最高(40,000円)', '需提前预约', '数量有限']
    },
    {
      name: '椅子席(1人用)',
      rating: 4,
      crowdLevel: 'Controlled',
      tips: '可根据人数灵活选择',
      pros: ['个人专用', '价格适中(6,000円)', '购买灵活'],
      cons: ['座位紧密', '视野一般', '需早到']
    },
    {
      name: '双人席位',
      rating: 4,
      crowdLevel: 'Controlled',
      tips: '情侣或朋友二人观赏首选',
      pros: ['双人专享', '椅子或席位选择', '价格合理'],
      cons: ['人数限制', '预约竞争', '位置后排']
    },
    {
      name: '团体席位(10人用)',
      rating: 5,
      crowdLevel: 'Controlled',
      tips: '大型团体观赏最佳选择',
      pros: ['10人团体', '大型席位', '最前排位置'],
      cons: ['价格昂贵(50,000円)', '需10人组团', '预约困难']
    },
    {
      name: '自由观览区',
      rating: 3,
      crowdLevel: 'Very High',
      tips: '免费观赏，需提前占位',
      pros: ['完全免费', '选择自由', '多摩川河畔'],
      cons: ['人流密集', '视野受限', '需早到占位']
    }
  ],

  history: {
    established: 1979,
    significance: '秋季花火大会先驱，多摩川两岸合作典范',
    highlights: [
      '第47回纪念大会特别演出',
      '与川崎市花火大会同时开催',
      '"彩～多摩川映照花火之彩"主题',
      '世田谷未来之光花火表现'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议15:00前到达会场',
        '18:00～19:00花火打上',
        '当日7:00前开催判断发表',
        '混雑时从车站需要1小时以上'
      ]
    },
    {
      category: '必备物品',
      items: [
        '有料席入场券(需提前发券)',
        '防寒衣物(10月秋季)',
        '雨具和保暖用品',
        '充足的饮用水和食品'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '感受秋空下6000发花火',
        '体验多摩川两岸花火呼应',
        '欣赏华丽音乐花火艺术',
        '享受世田谷特色艺术花火'
      ]
    },
    {
      category: '注意事项',
      items: [
        '与川崎市花火大会会场不同',
        '会场周边实施交通管制',
        '禁止汽车前往(请利用公共交通)',
        '15:00起可入场有料观览席'
      ]
    }
  ],

  contact: {
    organizer: '世田谷区多摩川花火大会实行委员会',
    phone: '03-5432-3333',
    website: 'https://tamagawa-hanabi.com/',
    socialMedia: '@setagaya_hanabi'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '详细地图请参考官方网站',
    parking: '× 禁止开车前往（利用公共交通）'
  },

  weatherInfo: {
    recommendation: '建议出发前查看当日天气和开催决定',
    rainPolicy: '荒天中止（当日7:00前判断）',
    note: '10月秋季天气变化，请携带防寒衣物'
  },

  specialFeatures: {
    scale: '约6000发・60分钟',
    location: '多摩川河川敷',
    tradition: '秋季花火大会',
    atmosphere: '15万人多摩川花火盛典'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.567890123456!2d139.62712345678912!3d35.60834567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f1234567890a%3A0x1234567890abcdef!2z5LiW55Sw6LC35Yy65LiK5LqM5a2Q546J5bed57u_5Zyw6L2Q5Yqo5aC0!5e0!3m2!1szh-CN!2sjp!4v1698835400000!5m2!1szh-CN!2sjp',

  // 媒体内容 - 示例数据（请替换为实际的视频或图片）
  media: [
    {
      type: 'image',
      url: '/images/setagaya-hanabi-main.jpg',
      title: '世田谷多摩川花火大会精彩瞬间',
      description: '多摩川两岸6000发花火在秋空中绽放的壮美景象'
    }
  ]
}; 