import { HanabiData } from '../types/hanabi';

export const akishimaData: HanabiData = {
  id: 'akishima',
  name: '第53回 昭岛市民鲸鱼祭 梦花火',
  englishName: 'Akishima Citizen Whale Festival Dream Fireworks',
  year: 2025,
  date: '2025年8月23日(土)',
  time: '19:30～20:30',
  duration: '60分钟',
  fireworksCount: '约2000发',
  expectedVisitors: '约4万5000人',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '免费观赏',
  status: '已确认举办',
  themeColor: 'purple',
  month: 8,

  // 标签系统
  tags: {
    timeTag: '8月',
    regionTag: '东京都',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  // 关联推荐
  related: {
    regionRecommendations: [
      {
        id: 'itabashi',
        name: '板桥花火大会',
        date: '2025年8月2日',
        location: '荒川河川敷',
        visitors: '57万人',
        link: '/august/hanabi/tokyo/itabashi'
      },
      {
        id: 'edogawa',
        name: '江戸川区花火大会',
        date: '2025年8月2日',
        location: '江戸川河川敷',
        visitors: '3万人',
        link: '/august/hanabi/tokyo/edogawa'
      },
      {
        id: 'okutama',
        name: '奥多摩纳凉花火',
        date: '2025年8月9日',
        location: '爱宕山广场',
        visitors: '1万人',
        link: '/august/hanabi/tokyo/okutama'
      }
    ],
    timeRecommendations: [
      {
        id: 'itabashi',
        name: '板桥花火大会',
        date: '2025年8月2日',
        location: '荒川河川敷',
        visitors: '57万人',
        link: '/august/hanabi/tokyo/itabashi'
      },
      {
        id: 'edogawa',
        name: '江戸川区花火大会',
        date: '2025年8月2日',
        location: '江戸川河川敷',
        visitors: '3万人',
        link: '/august/hanabi/tokyo/edogawa'
      }
    ]
  },

  venues: [
    {
      name: '昭岛市民球场会场',
      location: '昭岛市民球场',
      startTime: '19:30',
      features: [
        '夜空大轮',
        '感动迫力',
        '市民庆典',
        '鲸鱼祭特色'
      ]
    }
  ],

  access: [
    {
      venue: '主会场',
      stations: [
        { 
          name: 'JR昭岛站', 
          lines: ['JR青梅线'], 
          walkTime: '徒步约10分钟' 
        },
        { 
          name: 'JR拝岛站', 
          lines: ['JR青梅线', 'JR八高线'], 
          walkTime: '徒步约15分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '昭岛市民球场',
      rating: 5,
      crowdLevel: 'Medium',
      tips: '市民球场内的最佳观赏位置',
      pros: ['距离近', '视野好', '设施完善'],
      cons: ['需要早到', '人流较多']
    },
    {
      name: '球场周边',
      rating: 4,
      crowdLevel: 'Medium', 
      tips: '球场外围的观赏点',
      pros: ['空间较大', '自由观赏', '交通便利'],
      cons: ['距离稍远', '视野受限']
    }
  ],

  history: {
    established: 1971,
    significance: '昭岛市代表性的市民庆典花火大会',
    highlights: [
      '市民鲸鱼祭的重要组成部分',
      '感动人心的花火表演',
      '市民参与度极高的庆典',
      '多摩地区知名花火活动'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午4点前到达',
        '鲸鱼祭活动从下午开始',
        '花火是庆典的压轴节目',
        '预留充足返程时间'
      ]
    },
    {
      category: '必备物品',
      items: [
        '折叠椅或野餐垫',
        '遮阳帽和防晒用品',
        '充足的饮用水',
        '便携式充电器'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '参与白天的鲸鱼祭活动',
        '市民球场是最佳观赏地',
        '注意安全，听从现场指挥',
        '感受市民庆典的热烈氛围'
      ]
    },
    {
      category: '交通贴士',
      items: [
        '优先选择JR昭岛站',
        '庆典期间人流较大',
        '考虑提早返程',
        '注意末班车时间'
      ]
    }
  ],

  contact: {
    organizer: '昭岛市',
    phone: '042-544-5111',
    website: 'https://www.city.akishima.lg.jp/',
    socialMedia: '@akishima_city'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '昭岛市民球场周边地图',
    parking: '临时停车场有限，建议使用公共交通'
  },

  weatherInfo: {
    recommendation: '夏季炎热，建议携带防暑用品',
    rainPolicy: '小雨举行，恶劣天气取消',
    note: '关注官方网站发布的最新信息'
  }
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.69!3d35.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2z5p2x5Lqs6YO9!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp',
}; 