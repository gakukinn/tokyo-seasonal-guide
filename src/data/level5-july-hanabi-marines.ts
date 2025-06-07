import { HanabiData } from '@/types/hanabi';

export const marinesHanabiData: HanabiData = {
  id: 'marines-hanabi',
  name: '千叶罗德花火',
  japaneseName: 'MARINES HANABI',
  englishName: 'MARINES HANABI',
  year: 2025,
  month: 7,
  date: '2025年7月11日',
  time: '试合进行中',
  duration: '约10分钟',
  fireworksCount: '300发',
  expectedVisitors: '约3万人(各日)',
  weather: '晴雨举办',
  ticketPrice: '需试合观战门票',
  status: '开催确定',
  themeColor: 'blue',
  
  tags: {
    timeTag: '7月',
    regionTag: '千叶县',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },
  
  media: [
    {
      type: 'image',
      url: '/images/hanabi/marines-hanabi-stadium.jpg',
      title: '千叶罗德花火精彩瞬间',
      description: 'ZOZO海洋体育场背后绽放的职业棒球花火，与试合观战的独特体验'
    }
  ],
  
  related: {
    regionRecommendations: [
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
        date: '2025年7月26日',
        location: '隅田川',
        visitors: '95万人',
        link: '/july/hanabi/tokyo/sumida'
      }
    ]
  },

  venues: [
    {
      name: 'ZOZO海洋体育场',
      location: '千叶县千叶市美浜区丰砂1-5',
      startTime: '试合开始后',
      features: [
        '野球观赏席',
        '餐饮设施',
        '商品销售店',
        '停车场313台'
      ]
    }
  ],

  access: [
    {
      venue: 'ZOZO海洋体育场',
      stations: [
        {
          name: '海滨幕张站',
          lines: ['JR京叶线'],
          walkTime: '步行约15分钟'
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '球场观赏席',
      rating: 5,
      crowdLevel: '高',
      tips: '需购买试合观战门票',
      pros: ['最佳观赏位置', '试合与花火同时享受', '有屋顶保护'],
      cons: ['需门票费用', '需关注试合时间']
    },
    {
      name: '幕张海滨公园',
      rating: 3,
      crowdLevel: '中',
      tips: '免费观赏，需步行约20分钟',
      pros: ['免费观赏', '宽敞空间', '家庭友好'],
      cons: ['距离较远', '观赏效果一般']
    }
  ],

  history: {
    established: 1992,
    significance: '千叶罗德海洋队创立以来的传统活动',
    highlights: [
      '与职业棒球结合的独特花火体验',
      '球场背后直接打上的迫力花火',
      '夏季期间全试合开催'
    ]
  },

  tips: [
    {
      category: '观赏建议',
      items: [
        '建议提前购买试合门票',
        '内野席观赏效果更佳',
        '注意试合开始时间'
      ]
    },
    {
      category: '交通提示',
      items: [
        '停车场容量有限，建议使用公共交通',
        '试合日交通拥挤，请预留充分时间',
        '海滨幕张站步行约15分钟'
      ]
    },
    {
      category: '注意事项',
      items: [
        '花火开催与否至打上直前才能决定',
        '即使有野球试合，花火也可能中止',
        '风向不佳或近距离落雷时花火中止'
      ]
    }
  ],

  contact: {
    organizer: '千叶罗德海洋队',
    phone: '0570-026-226',
    website: 'https://www.marines.co.jp/event/fireworks/',
    socialMedia: 'マリーンズ・インフォメーションセンター'
  },

  mapInfo: {
    hasMap: true,
    mapNote: 'ZOZO海洋体育场及周边地图',
    parking: '313台，费用依试合而异'
  },

  weatherInfo: {
    month: '7-8月',
    temperature: '25-30℃',
    humidity: '70-80%',
    rainfall: '夏季雷雨多发',
    recommendation: '建议携带雨具，关注天气预报',
    rainPolicy: '试合中止时花火中止',
    note: '风速・风向不佳时花火可能中止'
  },

  specialFeatures: {
    scale: '职业棒球场花火',
    location: '都市型体育场',
    tradition: '千叶罗德海洋队传统活动',
    atmosphere: '试合与花火的双重享受',
    collaboration: '职业棒球与花火的完美结合'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7!2d140.0331!3d35.6447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602285c9b9d4a2a7%3A0x123456789!2sZOZO%E3%83%9E%E3%83%AA%E3%83%B3%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0!5e0!3m2!1sja!2sjp!4v1234567890!5m2!1sja!2sjp'
}; 