import { HanabiData } from '@/types/hanabi';

export const shirahamaAmaHanabiData: HanabiData = {
  id: 'shirahama-ama-matsuri',
  name: '第61回南房总白浜海女祭',
  japaneseName: '第61回南房総白浜海女まつり',
  englishName: '61st Minamiboso Shirahama Ama Festival',
  year: 2025,
  month: 7,
  date: '2025年7月19日',
  time: '20:45～21:00',
  duration: '15分钟',
  fireworksCount: '非公开',
  expectedVisitors: '2万5000人',
  weather: '夏季',
  ticketPrice: '有料席2000日元',
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
      name: '白浜野岛埼灯台前公园广场',
      location: '千叶县南房总市白浜町',
      startTime: '20:45',
      features: ['水中花火', '海女夜泳', '房总半岛', '海岸观赏']
    }
  ],
  
  access: [
    {
      venue: '白浜野岛埼灯台前公园广场',
      stations: [
        {
          name: 'JR内房线馆山站',
          lines: ['JR内房线'],
          walkTime: 'JR巴士关东白浜行灯台入口站下车步行10分钟'
        }
      ]
    }
  ],
  
  viewingSpots: [
    {
      name: '有料观赏席',
      rating: 5,
      crowdLevel: '中等',
      tips: '2000日元(当日券)或1500日元(事前预约)，最佳观赏位置',
      pros: ['距离最近', '视野开阔', '舒适观赏'],
      cons: ['需付费', '需要预约']
    },
    {
      name: '野岛埼灯台周边',
      rating: 4,
      crowdLevel: '较高',
      tips: '免费观赏区域，可欣赏海岸线全景，需早到占位',
      pros: ['免费观赏', '海岸美景', '房总半岛风情'],
      cons: ['需要早到', '人员较多']
    },
    {
      name: '白浜海岸沿线',
      rating: 3,
      crowdLevel: '中等',
      tips: '海岸散步道观赏，注意潮汐时间',
      pros: ['散步观赏', '海风凉爽'],
      cons: ['视野受限', '距离较远']
    }
  ],
  
  history: {
    established: 1964,
    significance: '为祈愿海的丰收和悼念海难逝者而举办的传统祭典',
    highlights: ['海女文化传承', '水中花火表演', '房总半岛海洋文化']
  },
  
  tips: [
    {
      category: '观赏建议',
      items: [
        '建议观赏海女大夜泳表演',
        '水中花火的幻想光景是最大看点',
        '携带坐垫和薄外套夜间观赏'
      ]
    },
    {
      category: '交通提示',
      items: [
        '建议使用公共交通前往',
        '有350台免费停车场',
        '从东京约需2-3小时车程'
      ]
    },
    {
      category: '海女文化体验',
      items: [
        '可了解传统海女文化',
        '白浜音头总踊表演',
        '感受房总半岛渔港氛围'
      ]
    }
  ],
  
  contact: {
    organizer: '南房总市观光协会',
    phone: '0470-28-5307',
    website: 'https://amamatsuri.com/',
    socialMedia: '详见官网'
  },
  
  mapInfo: {
    hasMap: true,
    mapNote: '房总半岛南端，野岛埼灯台前',
    parking: '350台免费'
  },
  
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.123!2d139.845678!3d34.905123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f5a1b2c3d4e%3A0x1234567890abcdef!2z55m955ub57eP5L2Q55uX!5e0!3m2!1sja!2sjp!4v1621234567890!5m2!1sja!2sjp',
  
  weatherInfo: {
    month: '7月',
    temperature: '26°C',
    humidity: '75%',
    rainfall: '中等',
    recommendation: '海边夜间，建议携带薄外套防风',
    rainPolicy: '小雨决行，荒天中止',
    note: '海边温差较大，注意保暖'
  },
  
  media: [
    {
      type: 'image',
      url: '/images/hanabi-placeholder.jpg',
      title: '水中花火',
      description: '海女祭的水中花火表演'
    },
    {
      type: 'image', 
      url: '/images/hanabi-placeholder.jpg',
      title: '海女夜泳',
      description: '传统海女松明夜泳表演'
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
      },
      {
        id: 'futtsu-shimin-hanabi', 
        name: '富津市民花火大会',
        date: '2025年7月26日',
        location: '富津海水浴场',
        visitors: '5万人',
        link: '/july/hanabi/chiba/futtsu-shimin-hanabi'
      }
    ],
    timeRecommendations: [
      {
        id: 'oamishirasato-hanabi',
        name: '大网白里花火大会',
        date: '2025年7月26日',
        location: '白里海水浴场',
        visitors: '2万8000人',
        link: '/july/hanabi/chiba/oamishirasato-hanabi'
      }
    ]
  }
}; 