/**
 * 第五层数据文件 - 第20回古河花火大会详情数据
 * @layer 五层 (Detail Data)
 * @month 8月
 * @region 北关东
 * @event 古河花火大会
 * @type 花火详情数据文件
 */
import { HanabiData } from '../types/hanabi';

export const kogaHanabiData: HanabiData = {
  id: 'koga-august',
  name: '第20回古河花火大会',
  japaneseName: '第20回古河花火大会',
  englishName: '20th Koga Fireworks Festival',
  year: 2025,
  date: '2025年8月2日(土)',
  time: '19:00-20:30',
  duration: '90分钟',
  fireworksCount: '非公表',
  expectedVisitors: '约20万人',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '免费观赏',
  status: '已确认举办',
  themeColor: 'blue',
  month: 8,

  tags: {
    timeTag: '8月',
    regionTag: '茨城县',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  related: {
    regionRecommendations: [
      {
        id: 'ashikaga-august',
        name: '第109回足利花火大会',
        date: '2025年8月2日',
        location: '栃木县足利市',
        visitors: '约45万人',
        link: '/august/hanabi/kitakanto/ashikaga'
      },
      {
        id: 'toride-august',
        name: '第70回利根川大花火',
        date: '2025年8月9日',
        location: '茨城县取手市',
        visitors: '约12万人',
        link: '/august/hanabi/kitakanto/toride'
      }
    ],
    timeRecommendations: [
      {
        id: 'maebashi-august',
        name: '第69回前桥花火大会',
        date: '2025年8月9日',
        location: '群马县前桥市',
        visitors: '非公开',
        link: '/august/hanabi/kitakanto/maebashi'
      }
    ]
  },

  venues: [
    {
      name: '主会场',
      location: '古河高尔夫球场',
      startTime: '19:00'
    }
  ],

  access: [
    {
      venue: '主会场',
      stations: [
        { 
          name: '古河站', 
          lines: ['JR东北本线'], 
          walkTime: '乘坐专用巴士' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '专用观赏席',
      rating: 5,
      crowdLevel: 'Very High',
      tips: '最佳观赏位置，需要提前预约',
      pros: ['专用观赏席', '最佳视角', '设施完备'],
      cons: ['可能需要收费', '需要提前预约', '竞争激烈']
    },
    {
      name: '渡良瀬川河畔',
      rating: 4,
      crowdLevel: 'High',
      tips: '免费观赏区域，视野开阔',
      pros: ['免费区域', '河畔美景', '视野良好'],
      cons: ['人流较多', '需要早到占位', '交通不便']
    }
  ],

  history: {
    established: 2006,
    significance: '茨城县古河市的重要夏季盛典，渡良瀬川河畔的花火美景',
    highlights: [
      '20年传统的花火大会',
      '渡良瀬川河畔的绝美景色',
      '大规模花火秀表演',
      '专用观赏席提供最佳体验'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议提前2小时到达',
        '注意专用巴士时间表',
        '关注官方网站确认举办状态'
      ]
    },
    {
      category: '必备物品',
      items: [
        '野餐垫或便携椅子',
        '防虫喷雾和驱蚊用品',
        '充足的饮用水和食物',
        '便携充电器'
      ]
    }
  ],

  contact: {
    organizer: '古河花火大会实行委员会',
    phone: '0280-92-3111',
    website: 'https://hanabi.walkerplus.com/detail/ar0308e00705/',
    socialMedia: '官方网站查询'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '古河高尔夫球场',
    parking: '专用停车场及临时停车场'
  },

  weatherInfo: {
    month: '8月',
    temperature: '最高32°C，最低24°C',
    humidity: '75%',
    rainfall: '小雨举行（恶劣天气取消）',
    recommendation: '夏季炎热，请注意防暑降温'
  },

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.1234567890123!2d139.7000000123456!3d36.1900000012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5Y+k5rKz6aeF5Zy6!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
}; 