import { HanabiData } from '../types/hanabi';

export const itabashiData: HanabiData = {
  id: 'itabashi',
  name: '第66回 板桥花火大会',
  englishName: 'Itabashi Fireworks Festival',
  year: 2025,
  date: '2025年8月2日(土)',
  time: '19:00～20:30',
  duration: '90分钟',
  fireworksCount: '约1万5000发',
  expectedVisitors: '约57万人',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '免费观赏（有料席另收费）',
  status: '已确认举办',
  themeColor: 'pink',
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
        id: 'edogawa',
        name: '江戸川区花火大会',
        date: '8月2日',
        location: '江戸川河川敷',
        visitors: '3万人',
        link: '/august/hanabi/tokyo/edogawa'
      },
      {
        id: 'kozushima',
        name: '神津岛花火大会',
        date: '8月4日',
        location: '神津岛港',
        visitors: '1000人',
        link: '/august/hanabi/tokyo/kozushima'
      },
      {
        id: 'okutama',
        name: '奥多摩纳凉花火',
        date: '8月9日',
        location: '爱宕山广场',
        visitors: '1万人',
        link: '/august/hanabi/tokyo/okutama'
      }
    ],
    timeRecommendations: [
      {
        id: 'edogawa',
        name: '江戸川区花火大会',
        date: '8月2日',
        location: '江戸川河川敷',
        visitors: '3万人',
        link: '/august/hanabi/tokyo/edogawa'
      },
      {
        id: 'akishima',
        name: '昭岛市民花火大会',
        date: '8月23日',
        location: '昭岛市民球场',
        visitors: '4万5000人',
        link: '/august/hanabi/tokyo/akishima'
      }
    ]
  },

  venues: [
    {
      name: '荒川河川敷会场',
      location: '板橋区荒川河川敷',
      startTime: '19:00',
      features: [
        '都内最大尺五寸玉',
        '超近距离观赏体验',
        '压倒性震撼效果',
        '专业花火师表演'
      ]
    }
  ],

  access: [
    {
      venue: '主会场',
      stations: [
        { 
          name: 'JR戸田公園站', 
          lines: ['JR埼京线'], 
          walkTime: '徒步约15分钟' 
        },
        { 
          name: '東武浮間舟渡站', 
          lines: ['东武东上线'], 
          walkTime: '徒步约20分钟' 
        },
        { 
          name: 'JR赤羽站', 
          lines: ['JR京浜东北线', 'JR宇都宫线'], 
          walkTime: '徒步约25分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '荒川河川敷右岸',
      rating: 5,
      crowdLevel: 'Very High',
      tips: '最佳观赏位置，都内最大尺五寸玉的最佳视角',
      pros: ['最佳视角', '超近距离', '震撼体验'],
      cons: ['人流量极大', '需要早上占位', '竞争激烈']
    },
    {
      name: '荒川河川敷左岸',
      rating: 4,
      crowdLevel: 'High', 
      tips: '相对宽敞，但视角稍逊',
      pros: ['视野开阔', '空间较充足', '交通便利'],
      cons: ['距离稍远', '观赏角度有限']
    },
    {
      name: '戸田桥周边',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '可拍摄桥梁与花火的组合美景',
      pros: ['独特角度', '拍照效果好', '人流相对较少'],
      cons: ['距离较远', '花火相对较小', '需要占位']
    }
  ],

  history: {
    established: 1959,
    significance: '首都圈代表性花火大会，以都内最大尺五寸玉闻名',
    highlights: [
      '都内规模最大的尺五寸玉',
      '超近距离的震撼观赏体验',
      '专业花火师的精湛技艺',
      '荒川河川敷的开阔视野'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议上午10点前到达占位',
        '尺五寸玉在19:30左右登场',
        '花火结束后避开人流高峰',
        '预留充足返程时间'
      ]
    },
    {
      category: '必备物品',
      items: [
        '折叠椅或野餐垫',
        '遮阳帽和防晒用品',
        '充足的饮用水',
        '便携式充电器',
        '垃圾袋（保持环境整洁）'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '重点关注都内最大尺五寸玉',
        '建议携带望远镜增强体验',
        '注意安全，听从现场指挥',
        '拍摄时避免使用闪光灯'
      ]
    },
    {
      category: '交通贴士',
      items: [
        '优先选择JR戸田公園站',
        '避开花火结束后的返程高峰',
        '考虑步行至较远车站',
        '提前查询末班车时间'
      ]
    }
  ],

  specialFeatures: {
    scale: '都内最大级别1万5000发',
    location: '荒川河川敷的超近距离观赏',
    tradition: '都内最大尺五寸玉的专业技艺',
    atmosphere: '57万人共赏的震撼现场'
  },

  contact: {
    organizer: '板桥区',
    phone: '03-3579-2525',
    website: 'https://www.city.itabashi.tokyo.jp/',
    socialMedia: '@itabashi_city'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '荒川河川敷板桥侧观赏地图',
    parking: '临时停车场，强烈建议使用公共交通'
  },

  weatherInfo: {
    recommendation: '夏季高温，建议携带充足防暑用品',
    rainPolicy: '小雨举行，台风等恶劣天气取消',
    note: '57万人观赏，请注意安全和秩序'
  }
}; 