import { HanabiData } from '../types/hanabi';

export const sumidaData: HanabiData = {
  id: 'sumida',
  name: '第48回 隅田川花火大会',
  englishName: 'Sumida River Fireworks Festival',
  year: 2025,
  date: '2025年7月26日(土)',
  time: '19:00～（第一会场19:00～、第二会场19:30～）',
  duration: '90分钟',
  fireworksCount: '约2万发',
  expectedVisitors: '约91万人',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '免费观赏',
  status: '已确认举办',
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
        id: 'edogawa',
        name: '江戸川花火大会',
        date: '7月27日',
        location: '江戸川河川敷',
        visitors: '90万人',
        link: '/hanabi/detail/edogawa'
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
        id: 'edogawa',
        name: '江戸川花火大会',
        date: '7月27日',
        location: '江戸川河川敷',
        visitors: '90万人',
        link: '/hanabi/detail/edogawa'
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
    ]
  },

  venues: [
    {
      name: '第一会场',
      location: '桜橋下流～言問橋上流',
      startTime: '19:00',
      features: [
        '传统花火竞技大会',
        '创意花火表演',
        '最佳摄影角度',
        '花火师技艺比拼'
      ]
    },
    {
      name: '第二会场', 
      location: '駒形橋下流～厩橋上流',
      startTime: '19:30',
      features: [
        '创新花火设计',
        '音乐同步表演',
        '东京晴空塔背景',
        '现代花火艺术'
      ]
    }
  ],

  access: [
    {
      venue: '第一会场',
      stations: [
        { 
          name: '浅草站', 
          lines: ['东武线', '东京地铁银座线', '都营浅草线'], 
          walkTime: '徒步约15分钟' 
        },
        { 
          name: '东京晴空塔站', 
          lines: ['东武晴空塔线'], 
          walkTime: '徒步约20分钟' 
        },
        { 
          name: '押上站', 
          lines: ['京成押上线', '都营浅草线'], 
          walkTime: '徒步约25分钟' 
        }
      ]
    },
    {
      venue: '第二会场',
      stations: [
        { 
          name: '浅草站', 
          lines: ['东武线', '东京地铁银座线', '都营浅草线'], 
          walkTime: '徒步约5分钟' 
        },
        { 
          name: '蔵前站', 
          lines: ['都营浅草线', '都营大江户线'], 
          walkTime: '徒步约5分钟' 
        },
        { 
          name: '浅草桥站', 
          lines: ['JR总武线', '都营浅草线'], 
          walkTime: '徒步约10分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '隅田公园',
      rating: 5,
      crowdLevel: 'Very High',
      tips: '最佳观赏地点，需要早上占位',
      pros: ['最佳视角', '传统观赏地', '完整视野'],
      cons: ['人流量最大', '需要长时间等待', '竞争激烈']
    },
    {
      name: '汐入公园',
      rating: 4,
      crowdLevel: 'High', 
      tips: '第二会场附近，相对宽敞',
      pros: ['视野开阔', '设施较好', '空间充足'],
      cons: ['距离第一会场较远', '观赏角度有限']
    },
    {
      name: '东京晴空塔周边',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '可拍摄花火与晴空塔同框',
      pros: ['独特角度', '拍照胜地', '现代背景'],
      cons: ['距离较远', '收费区域', '花火较小']
    }
  ],

  history: {
    established: 1978,
    significance: '日本最古老、最著名的花火大会之一',
    highlights: [
      '传承江户时代花火文化',
      '两会场同时举办的独特形式',
      '花火师技艺比拼的竞技性质',
      '与东京晴空塔共演的现代美景'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午2点前到达占位',
        '花火结束后避开人流高峰',
        '关注官方网站确认举办状态',
        '预留充足返程时间'
      ]
    },
    {
      category: '必备物品',
      items: [
        '便携式椅子或野餐垫',
        '充电宝和手机',
        '雨具（夏季多雨）',
        '充足的水和食物'
      ]
    },
    {
      category: '交通建议',
      items: [
        '避免私家车，公共交通必备',
        '准备多个返程路线',
        '考虑步行到较远车站',
        '预计严重交通拥堵'
      ]
    }
  ],

  contact: {
    organizer: '隅田川花火大会実行委員会',
    phone: '03-5246-1111',
    website: 'https://www.sumidagawa-hanabi.com/',
    socialMedia: '隅田川花火大会公式X'
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
    scale: '约2万发花火',
    location: '隅田川两岸双会场',
    tradition: '日本最古老花火大会传统',
    atmosphere: '91万人共享江户文化盛典'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.1234567890123!2d139.80123456789012!3d35.71234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0abc12345%3A0x1234567890abcdef!2z6ZqF55Sw5bed6Iqx54Gr5aSn5Lya!5e0!3m2!1szh-CN!2sjp!4v1698835200000!5m2!1szh-CN!2sjp',

  // 媒体内容 - 示例数据（临时使用图片演示，您可以后续替换为视频）
  media: [
    {
      type: 'image',
      url: '/images/sumida-hanabi-main.jpg',
      title: '隅田川花火大会精彩瞬间',
      description: '2024年隅田川花火大会现场实拍，感受江户时代传承至今的花火魅力'
    }
  ]
}; 