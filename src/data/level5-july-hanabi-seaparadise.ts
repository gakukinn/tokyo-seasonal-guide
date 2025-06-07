import { HanabiData } from '@/types/hanabi';

export const seaparadiseHanabiData: HanabiData = {
  id: 'seaparadise-hanabi-symphonia',
  name: '横浜・八景岛海洋天堂「花火交响曲」',
  japaneseName: '横浜・八景島シーパラダイス「花火シンフォニア」',
  englishName: 'Yokohama Hakkeijima SeaParadise Fireworks Symphonia',
  year: 2025,
  month: 7,
  date: '2025年7月19日',
  time: '20:30-20:40',
  duration: '10分钟',
  fireworksCount: '约2500发',
  expectedVisitors: '非公开',
  weather: '荒天时中止',
  ticketPrice: '有料席・详情见官网',
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
      url: '/images/hanabi/seaparadise-symphonia.jpg',
      title: '八景岛花火交响曲音与光的盛宴',
      description: '海岛上空绽放的花火与音乐完美同步，打造梦幻的视听体验'
    }
  ],
  
  venues: [
    {
      name: '横浜・八景岛海洋天堂',
      location: '神奈川县横浜市金泽区八景岛',
      startTime: '20:30开始',
      features: [
        '音乐花火同步演出',
        '海岛独特观赏体验', 
        '多种观赏区域选择',
        '水族馆复合设施'
      ]
    }
  ],

  // 交通方式
  access: [
    {
      venue: '八景岛海洋天堂',
      stations: [
        {
          name: '八景岛站',
          lines: ['海岸线单轨电车'],
          walkTime: '步行即达'
        },
        {
          name: '新杉田站',
          lines: ['JR根岸线', '京急本线'],
          walkTime: '转乘海岸线约13分钟'
        }
      ]
    }
  ],

  // 地图和会场信息
  mapInfo: {
    hasMap: true,
    mapNote: '八景岛海洋天堂内多个观赏区域。建议提前确认当日观赏区域和有料席信息',
    parking: '4000台 1500日元起/日\n建议利用公共交通'
  },

  // 观赏攻略
  viewingSpots: [
    {
      name: '海洋天堂园内观赏区',
      rating: 4.8,
      crowdLevel: '较多',
      tips: '距离打上场地最近，音响效果最佳',
      pros: ['音与光完美同步', '最佳视听效果', '园内设施齐全'],
      cons: ['人流较多', '需入园费用']
    },
    {
      name: '观览车观赏',
      rating: 4.9,
      crowdLevel: '中等',
      tips: '从高空俯瞰花火，独特的观赏体验',
      pros: ['360度全景观赏', '特殊观赏角度', '浪漫体验'],
      cons: ['需额外费用', '观赏时间有限']
    },
    {
      name: '八景岛周边海岸',
      rating: 4.2,
      crowdLevel: '中等',
      tips: '免费观赏区域，建议提前踩点',
      pros: ['免费观赏', '开阔视野', '人流相对较少'],
      cons: ['距离较远', '音响效果一般']
    }
  ],

  // 活动历史
  history: {
    established: 1993,
    significance: '八景岛海洋天堂的花火交响曲是将先进的数码控制技术与花火艺术完美结合的代表作。通过精确到0.1秒的同步控制，音乐与花火达到完美融合，创造出独特的"音与光的现场娱乐"体验。',
    highlights: [
      '1993年八景岛海洋天堂开业',
      '数码控制花火与音乐同步技术',
      '海岛独特的360度观赏环境',
      '水族馆与花火的复合体验'
    ]
  },

  // 观赏贴士
  tips: [
    {
      category: '最佳观赏',
      items: [
        '建议选择园内观赏区享受最佳音响效果',
        '观览车观赏需提前预约，体验独特视角',
        '演出时间仅10分钟，请提前到达观赏位置'
      ]
    },
    {
      category: '设施利用',
      items: [
        '可结合水族馆等园内设施一日游',
        '园内餐厅和商店营业至晚间',
        '有料席详情请查询官方网站'
      ]
    }
  ],

  // 联系方式
  contact: {
    organizer: '横浜・八景岛海洋天堂',
    phone: '045-788-8888',
    website: 'https://www.seaparadise.co.jp/',
    socialMedia: '@_seaparadise_'
  },

  // 天气信息
  weatherInfo: {
    month: '7月',
    temperature: '夏季气温约22-30°C',
    humidity: '相对湿度75-85%',
    rainfall: '7月为梅雨季末期',
    recommendation: '海风较强，建议适当添衣',
    rainPolicy: '荒天时中止'
  },

  // 地图嵌入URL
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.234567890!2d139.6345678901!3d35.3456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185ceab123456%3A0x123456789abcdef1!2z5YWr5pmv5bO25rW35pal5rak6Iul!5e0!3m2!1sja!2sjp!4v1698123456790!5m2!1sja!2sjp'
}; 