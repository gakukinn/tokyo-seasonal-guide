import { HanabiData } from '../types/hanabi';

export const kamogawaHanabiData: HanabiData = {
  id: 'kamogawa-shimin-hanabi',
  name: '鸭川市民花火大会',
  japaneseName: '鴨川市民花火大会',
  englishName: 'Kamogawa Citizen Fireworks Festival',
  year: 2025,
  date: '2025年7月29日',
  time: '19:30-20:00',
  duration: '30分钟',
  fireworksCount: '约1500发',
  expectedVisitors: '4万人',
  weather: '7月',
  ticketPrice: '观览免费',
  status: '确定举办',
  ranking: '千叶县第5位',
  themeColor: 'blue',
  month: 7,

  // 标签系统
  tags: {
    timeTag: '7月',
    regionTag: '千叶县',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  // 会场信息
  venues: [
    {
      name: '前原横渚海岸',
      location: '千叶县鸭川市前原',
      startTime: '19:30',
      features: [
        '日本渚100选认定海岸',
        '约1公里弧形海岸线',
        '海浜プロムナード遊歩道',
        '全方位观赏视野',
        '海面映照花火景观'
      ]
    }
  ],

  // 交通信息
  access: [
    {
      venue: '前原横渚海岸',
      stations: [
        {
          name: '安房鸭川站',
          lines: ['JR外房线'],
          walkTime: '步行约5分钟'
        }
      ]
    }
  ],

  // 观赏地点
  viewingSpots: [
    {
      name: '前原横渚海岸',
      rating: 5,
      crowdLevel: '高',
      tips: '推荐早到确保观赏位置，可近距离观赏花火与海面映照',
      pros: ['近距离观赏', '海面映照', '全景视野', '交通便利'],
      cons: ['人群拥挤', '早到抢位', '海风较强']
    },
    {
      name: '海浜プロムナード',
      rating: 4,
      crowdLevel: '中',
      tips: '约1公里遊歩道，可从不同角度欣赏花火，选择喜欢的位置',
      pros: ['多样角度', '步行便利', '海风感受', '相对宽敞'],
      cons: ['部分位置视野有限', '需要选择好位置']
    },
    {
      name: '鸭川漁港周边',
      rating: 3,
      crowdLevel: '低',
      tips: '稍远但相对宽敞，适合带小孩家庭或希望避开人群的游客',
      pros: ['人少舒适', '全景观赏', '停车便利', '空间宽敞'],
      cons: ['距离稍远', '观赏效果一般']
    }
  ],

  // 历史信息
  history: {
    established: 1952,
    significance: '鸭川夏季风物诗，延续至今的市民花火大会，以日本渚100选认定的前原横渚海岸为舞台。',
    highlights: [
      '1952年开始举办的历史悠久花火大会',
      '日本渚100选认定的美丽海岸会场',
      '房总半岛代表性海岸花火大会',
      '雄大太平洋背景的绚烂花火',
      '海面映照花火的双重美景',
      '约1公里弧形海岸的完善观览环境'
    ]
  },

  // 贴士信息
  tips: [
    {
      category: '观赏建议',
      items: [
        '推荐提前1小时到达确保观赏位置',
        '海岸线任何位置都可观赏花火',
        '注意海风，建议携带外套',
        '观赏时请注意脚下安全',
        '雨天决行，建议准备雨具'
      ]
    },
    {
      category: '交通提醒',
      items: [
        'JR外房线安房鸭川站步行5分钟',
        '推荐使用公共交通避开管制',
        '花火结束后车站拥挤，建议错峰返回',
        '当日下午起前原海岸附近交通管制',
        '可考虑提前购买往返车票'
      ]
    },
    {
      category: '注意事项',
      items: [
        '海岸观赏注意安全，小心海浪',
        '禁止携带酒类到观赏区域',
        '垃圾请自行带回，维护海岸环境',
        '遵守现场工作人员指导',
        '禁止在海岸使用无人机拍摄'
      ]
    }
  ],

  // 联系信息
  contact: {
    organizer: '鸭川市民花火大会实行委员会',
    phone: '04-7092-0086',
    website: 'https://kamotabi.jp/',
    socialMedia: '(一社)鸭川市观光协会'
  },

  // 地图信息
  mapInfo: {
    hasMap: true,
    mapNote: '前原横渚海岸，日本渚100选认定的美丽海岸',
    parking: '收费停车场，推荐公共交通'
  },

  // 天气信息
  weatherInfo: {
    month: '7月',
    temperature: '25-30°C',
    humidity: '70-80%',
    rainfall: '偶有雷阵雨',
    recommendation: '轻便夏装，携带外套应对海风',
    rainPolicy: '雨天决行',
    note: '海岸夜间较凉，海风较强'
  },

  // 特色功能
  specialFeatures: {
    scale: '约1500发花火绽放夜空',
    location: '日本渚100选认定的前原横渚海岸',
    tradition: '鸭川夏季风物诗，延续至今的市民花火大会',
    atmosphere: '海面映照花火的双重美景，房总半岛独有开放感'
  },

  // 2025年特别企划
  special2025: {
    theme: '海与花火的绚烂共演',
    concept: '日本渚100选海岸的夏日浪漫',
    features: [
      '尺玉等大型花火的迫力演出',
      '花火与海面映照的梦幻光景',
      '约1公里海浜プロムナード观览',
      '房总半岛南端的开放景观'
    ]
  },

  // 地图嵌入URL
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.2!2d140.098!3d35.112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601894b2b8abf9eb%3A0x1234567890!2z6pit5bed5biC5YmN5Y6f5qiq5rGa5rW36bqt!5e0!3m2!1sja!2sjp!4v1234567890',

  // 媒体内容
  media: [
    {
      type: 'image',
      url: '/images/kamogawa-hanabi-main.jpg',
      title: '鸭川市民花火大会全景',
      description: '前原横渚海岸的花火大会全景，约1500发花火绽放在日本渚100选认定的美丽海岸上空'
    },
    {
      type: 'image',
      url: '/images/kamogawa-hanabi-reflection.jpg',
      title: '海面映照花火',
      description: '花火映照在海面的美景，呈现出双重花火的梦幻光景'
    },
    {
      type: 'image',
      url: '/images/kamogawa-beach-day.jpg',
      title: '前原横渚海岸',
      description: '白天的前原横渚海岸，约1公里弧形海岸线和海浜プロムナード遊歩道'
    }
  ],

  // 关联推荐
  related: {
    regionRecommendations: [
      {
        id: 'futtsu-shimin-hanabi',
        name: '富津市民花火大会',
        date: '2025年7月26日',
        location: '富津海岸',
        visitors: '5万人',
        link: '/july/hanabi/chiba/futtsu'
      },
      {
        id: 'oamishirasato-hanabi',
        name: '大网白里花火大会',
        date: '2025年7月26日',
        location: '白里海水浴场',
        visitors: '2万8000人',
        link: '/july/hanabi/chiba/oamishirasato-hanabi'
      }
    ],
    timeRecommendations: [
      {
        id: 'shirahama-ama-matsuri',
        name: '南房总白浜海女祭',
        date: '2025年7月19日',
        location: '白浜野岛埼',
        visitors: '2万5000人',
        link: '/july/hanabi/chiba/shirahama-ama-matsuri'
      }
    ],
    sameMonth: ['富津市民花火大会', '大网白里花火大会', '南房总白浜海女祭'],
    sameRegion: ['千叶罗德花火', '山武市夏季嘉年华', '母亲牧场夏夜农场'],
    recommended: ['神奈川镰仓花火大会', '东京竞马场花火']
  }
}; 