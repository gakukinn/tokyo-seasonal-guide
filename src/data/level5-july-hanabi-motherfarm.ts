import { HanabiData } from '@/types/hanabi';

export const motherFarmHanabiData: HanabiData = {
  id: 'mother-farm-summer-night',
  name: '母亲牧场夏夜农场',
  japaneseName: 'マザー牧場 サマーナイトファーム',
  englishName: 'マザー牧場 サマーナイトファーム',
  year: 2025,
  month: 7,
  date: '2025年7月26日',
  time: '19:30-19:45',
  duration: '15分钟',
  fireworksCount: '未定',
  expectedVisitors: '入场券限定',
  weather: '荒天中止',
  ticketPrice: '大人1500日元，儿童800日元',
  status: '开催确定',
  themeColor: 'green',
  
  tags: {
    timeTag: '7月',
    regionTag: '千叶县',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  // 添加媒体展示内容
  media: [
    {
      type: 'image',
      url: '/images/hanabi/mother-farm-fireworks.jpg',
      title: '母亲牧场夏夜农场花火',
      description: '牧场谷间近距离绽放的大迫力花火体验'
    }
  ],
  
  venues: [
    {
      name: '母亲牧场',
      location: '千叶县富津市田仓940-3',
      startTime: '16:00(サマーナイトファーム开始)',
      features: [
        '与动物亲密接触体验',
        '牧场风情景观',
        '室内不需预约设施',
        'ジンギスカン观览席(需预约)'
      ]
    }
  ],

  access: [
    {
      venue: '母亲牧场',
      stations: [
        {
          name: '君津站',
          lines: ['JR内房线'],
          walkTime: '巴士约35分钟'
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '牧场内观览区域',
      rating: 4.2,
      crowdLevel: 'medium',
      tips: '可在草原上躺着观看花火，近距离观赏从山谷间打上的迫力花火',
      pros: ['饮食区域完备', '更衣设施齐全', '停车场充足'],
      cons: ['需要入场费', '天气影响较大']
    },
    {
      name: 'ジンギスカン观览席',
      rating: 4.5,
      crowdLevel: 'low',
      tips: '边享用牧场名物ジンギスカン边观赏花火，母亲牧场独有的美食花火体验',
      pros: ['专用座席舒适', '餐饮服务优质', '特色美食体验'],
      cons: ['需要预约', '费用较高']
    }
  ],

  history: {
    established: 1962,
    significance: '母亲牧场自1962年开园以来，结合牧场经营开展各种季节性活动，夏夜农场花火是其夏季代表性活动之一',
    highlights: [
      '与动物接触的独特花火体验',
      '山间谷地的近距离花火观赏',
      '家族向的安全花火环境',
      '牧场美食与花火的完美结合'
    ]
  },

  tips: [
    {
      category: '交通指南',
      items: [
        'JR君津站有直通巴士，约35分钟到达',
        '花火结束后有君津站行临时巴士',
        '自驾需注意停车场收费为1日1000日元',
        '16:00以后有夜间费用，建议提前了解'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '建议提前到场体验牧场设施',
        '可在草原上铺垫子躺着观看',
        '推荐预约ジンギスカン观览席',
        '准备防寒衣物，山间夜晚较凉'
      ]
    },
    {
      category: '入场须知',
      items: [
        '需购买サマーナイトファーム入场券',
        '大人1500日元，儿童800日元',
        '16:00开始入场，花火19:30开始',
        '荒天时中止，建议确认官网信息'
      ]
    }
  ],

  contact: {
    organizer: '母亲牧场',
    phone: '0439-37-3211',
    website: 'https://www.motherfarm.co.jp/',
    socialMedia: '@motherfarm'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '母亲牧场位于富津市山间，自然环境优美。停车场3270台，1日1000日元，16:00以后夜间费用',
    parking: '3270台\n费用依试合而异'
  },

  weatherInfo: {
    month: '7月',
    temperature: '日间25-30℃，夜间18-22℃',
    humidity: '70-80%',
    rainfall: '200-250mm',
    recommendation: '山间夜晚较凉，建议准备薄外套',
    rainPolicy: '荒天时中止',
    note: '山间地区天气变化较快，建议关注最新天气预报'
  },

  specialFeatures: {
    scale: '牧场内近距离观赏，山谷间独特音响效果',
    location: '富津市山间牧场，自然环境优美',
    tradition: '牧场经营结合花火活动的独特形态',
    atmosphere: '家族向温馨，动物与花火的治愈组合',
    collaboration: '与动物接触体验的独特花火活动'
  },

  special2025: {
    theme: '动物与花火的夏夜农场',
    concept: '在自然牧场环境中享受花火的温馨体验',
    features: [
      '与动物亲密接触后观赏花火',
      '山谷间近距离花火体验',
      'ジンギスカン美食观览席',
      '浴衣着装优惠活动'
    ]
  },

  related: {
    regionRecommendations: [
      {
        id: 'futtsu-shimin-hanabi',
        name: '富津市民花火大会',
        date: '2025年7月26日',
        location: '富津海水浴场',
        visitors: '5万人',
        link: '/july/hanabi/chiba/futtsu-shimin-hanabi'
      },
      {
        id: 'kamogawa-shimin-hanabi',
        name: '鸭川市民花火大会',
        date: '2025年7月29日',
        location: '前原横渚海岸',
        visitors: '4万人',
        link: '/july/hanabi/chiba/kamogawa-shimin-hanabi'
      }
    ],
    timeRecommendations: [
      {
        id: 'sumida-hanabi',
        name: '隅田川花火大会',
        date: '7月最后一个周六',
        location: '隅田川河畔',
        visitors: '95万人',
        link: '/july/hanabi/tokyo/sumida-hanabi'
      }
    ]
  }
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.69!3d35.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2z5p2x5Lqs6YO9!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp',
}; 
 