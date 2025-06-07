import { HanabiData } from '@/types/hanabi';

export const oamishirasatoHanabiData: HanabiData = {
  id: 'oamishirasato-hanabi',
  name: '大网白里花火大会',
  japaneseName: 'おおあみしらさとの花火',
  englishName: 'Oamishirasato Fireworks',
  year: 2025,
  month: 7,
  date: '2025年7月26日',
  time: '19:30～20:30',
  duration: '60分钟',
  fireworksCount: '3000发',
  expectedVisitors: '2万8000人',
  weather: '夏季',
  ticketPrice: '有料席收费',
  status: '确定举办',
  themeColor: 'blue',
  
  tags: {
    timeTag: '7月',
    regionTag: '千叶县',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },
  
  venues: [
    {
      name: '白里海水浴场',
      location: '千叶县大网白里市',
      startTime: '19:30',
      features: ['海岸观赏', '水中花火', '60分钟花火', '有料席设置']
    }
  ],
  
  access: [
    {
      venue: '白里海水浴场',
      stations: [
        {
          name: 'JR大网站',
          lines: ['JR外房线'],
          walkTime: '巴士约30分钟'
        }
      ]
    }
  ],
  
  viewingSpots: [
    {
      name: '白里海水浴场会场',
      rating: 5,
      crowdLevel: '中等',
      tips: '海岸无遮挡观赏，可欣赏水中花火特色',
      pros: ['视野开阔', '无遮挡观赏', '水中花火观赏'],
      cons: ['海风较大', '人员较多']
    },
    {
      name: '有料席区域', 
      rating: 4,
      crowdLevel: '较少',
      tips: '收费席位，观赏位置佳，详情确认官方网站',
      pros: ['位置优越', '舒适观赏'],
      cons: ['需要付费', '需要预约']
    }
  ],
  
  history: {
    established: 1964,
    significance: '海沿岸无遮挡的60分钟花火大会，以水中花火为特色',
    highlights: [
      '60分钟连续花火',
      '海面倒影的水中花火',
      '3000发花火彩色夜空',
      '海风中的夏日体验'
    ]
  },
  
  tips: [
    {
      category: '观赏建议',
      items: [
        '海岸无遮挡，视野开阔',
        '可欣赏到独特的水中花火表演',
        '携带防风衣物应对海风'
      ]
    },
    {
      category: '交通提示',
      items: [
        '停车场有限，推荐公共交通',
        'JR大网站搭乘巴士约30分钟',
        '无免费巴士运行'
      ]
    },
    {
      category: '活动信息',
      items: [
        '荒天时延期至8月11日同时间举办',
        '设有屋台和移动餐车',
        '详细票务信息请确认官方网站'
      ]
    }
  ],
  
  contact: {
    organizer: '大网白里市夏祭实行委员会',
    phone: '0475-70-0356',
    website: 'https://www.city.oamishirasato.lg.jp/',
    socialMedia: '详见官网'
  },
  
  mapInfo: {
    hasMap: true,
    mapNote: '会场位于白里海水浴场，有1000台停车位',
    parking: '1000台 公共交通推奨'
  },
  
  weatherInfo: {
    month: '7月',
    temperature: '26-30°C',
    humidity: '75%',
    rainfall: '适中',
    recommendation: '海边风大，注意防风保暖'
  },

  
  media: [
    {
      type: 'image',
      url: '/images/hanabi-placeholder.jpg',
      title: '大网白里花火大会海岸观赏',
      description: '白里海水浴场的花火观赏风景'
    }
  ],
  
  related: {
    regionRecommendations: [
      {
        id: 'futtsu-shimin-hanabi',
        name: '富津市民花火大会',
        date: '2025年7月26日',
        location: '富津海水浴场',
        visitors: '5万人',
        link: '/july/hanabi/chiba/futtsu'
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
        id: 'marines-hanabi',
        name: '千叶罗德花火',
        date: '2025年7月11日',
        location: 'ZOZO海洋体育场',
        visitors: '3万人',
        link: '/july/hanabi/chiba/marines'
      },
      {
        id: 'mother-farm-summer-night',
        name: '母亲牧场夏夜农场', 
        date: '2025年7月26日',
        location: '母亲牧场',
        visitors: '未公布',
        link: '/july/hanabi/chiba/mother-farm-summer-night'
      }
    ]
  }
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.69!3d35.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2z5p2x5Lqs6YO9!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp',
}; 