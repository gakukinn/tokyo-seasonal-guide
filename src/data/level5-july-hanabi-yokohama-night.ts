import { HanabiData } from '@/types/hanabi';

export const yokohamaNightHanabiData: HanabiData = {
  id: 'yokohama-night-flowers',
  name: '横浜夜间花火2025',
  japaneseName: 'よこはま夜景×HANABI 2025',

  englishName: 'Yokohama Night Flowers 2025',
  year: 2025,
  month: 7,
  date: '2025年7月5日',
  time: '19:30-19:35',
  duration: '5分钟',
  fireworksCount: '约150发',
  expectedVisitors: '未公布',
  weather: '雨天・荒天时中止',
  ticketPrice: '免费观赏',
  status: '开催确定',
  themeColor: 'blue',
  
  tags: {
    timeTag: '7月',
    regionTag: '神奈川县',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  // 关联推荐
  related: {
    regionRecommendations: [],
    timeRecommendations: []
  },

  // 媒体展示内容
  media: [
    {
      type: 'image',
      url: '/images/hanabi/yokohama-night-flowers.svg',
      title: '横浜夜间花火短时精彩演出',
      description: '横浜港上空绽放的短时花火，与都市夜景的完美融合'
    }
  ],
  
  venues: [
    {
      name: '横浜港(新港码头、大栈桥)',
      location: '神奈川县横浜市中区',
      startTime: '19:30开始',
      features: [
        '短时间精彩演出',
        '都市夜景背景',
        '港湾特色花火',
        '多会场同时开催'
      ]
    }
  ],

  // 交通方式
  access: [
    {
      venue: '新港码头',
      stations: [
        {
          name: 'JR桜木町站',
          lines: ['JR根岸线'],
          walkTime: '步行约10分钟'
        },
        {
          name: '马车道站',
          lines: ['みなとみらい线'],
          walkTime: '步行约6分钟'
        }
      ]
    },
    {
      venue: '大栈桥',
      stations: [
        {
          name: 'JR关内站',
          lines: ['JR根岸线'],
          walkTime: '步行约10分钟'
        },
        {
          name: '日本大通站',
          lines: ['みなとみらい线'],
          walkTime: '步行约3分钟'
        }
      ]
    }
  ],

  // 地图和会场信息
  mapInfo: {
    hasMap: true,
    mapNote: '横浜港区域，新港码头、大栈桥等多个观赏地点。建议提前确认当日开催会场',
    parking: '周边有收费停车场\n建议利用公共交通'
  },

  // 观赏攻略
  viewingSpots: [
    {
      name: '新港码头观赏区',
      rating: 4.5,
      crowdLevel: '中等',
      tips: '人潮相对较少，拍照效果佳',
      pros: ['开阔的港湾视野', '可同时欣赏花火与横浜夜景'],
      cons: ['风较强']
    },
    {
      name: '大栈桥观赏区', 
      rating: 4.8,
      crowdLevel: '较多',
      tips: '需要注意人流较多，建议提前到达',
      pros: ['著名的观光栈桥', '360度港湾全景'],
      cons: ['人流拥挤']
    },
    {
      name: '赤砖仓库周边',
      rating: 4.3,
      crowdLevel: '中等',
      tips: '适合喜爱摄影的游客',
      pros: ['历史建筑背景', '现代花火对比'],
      cons: ['位置相对较远']
    }
  ],

  // 活动历史
  history: {
    established: 2024,
    significance: '横浜夜间花火是从2024年开始的新兴花火活动，旨在通过定期的短时花火演出为横浜港增添魅力。活动采用"每月开催"的创新模式，让市民和游客能够更频繁地享受花火之美。',
    highlights: [
      '2024年开始的新型花火活动',
      '每月定期开催的创新模式',
      '横浜市观光振兴新举措',
      '港都现代活力的体现'
    ]
  },

  // 观赏贴士
  tips: [
    {
      category: '时间安排',
      items: [
        '每月都有开催，建议关注官方最新日程',
        '演出时间仅5分钟，请提前到达观赏位置'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '可结合周边观光设施一同游览',
        '建议携带轻便的观赏用品',
        '注意海风较强，请适当添衣'
      ]
    }
  ],

  // 联系方式
  contact: {
    organizer: '横浜夜间花火实行委员会',
    phone: '045-663-7267',
    website: 'https://www.yokohama-sparkling-twilight.com/',
    socialMedia: '未公布'
  },

  // 天气信息
  weatherInfo: {
    month: '7月',
    temperature: '夏季气温约20-28°C',
    humidity: '相对湿度70-80%',
    rainfall: '7月为梅雨季末期',
    recommendation: '晴天・微风为最佳观赏条件',
    rainPolicy: '雨天・荒天・高波时中止'
  },

  // 地图嵌入URL
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.123456789!2d139.6234567890!3d35.4534567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c7b12345678%3A0x123456789abcdef0!2z5qiq5rWc5rip!5e0!3m2!1sja!2sjp!4v1698123456789!5m2!1sja!2sjp'
}; 