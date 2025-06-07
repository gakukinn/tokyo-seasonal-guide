/**
 * 第五层数据文件 - 第109回足利花火大会详情数据
 * @layer 五层 (Detail Data)
 * @month 8月
 * @region 北关东
 * @event 足利花火大会
 * @type 花火详情数据文件
 */
import { HanabiData } from '../types/hanabi';

export const ashikagaHanabiData: HanabiData = {
  id: 'ashikaga-august',
  name: '第109回足利花火大会',
  japaneseName: '第109回あしかがの花火',
  englishName: '109th Ashikaga Fireworks Festival',
  year: 2025,
  date: '2025年8月2日(土)',
  time: '19:00-20:30',
  duration: '90分钟',
  fireworksCount: '约2万发',
  expectedVisitors: '约45万人',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '免费观赏',
  status: '已确认举办',
  themeColor: 'orange',
  month: 8,

  tags: {
    timeTag: '8月',
    regionTag: '栃木县',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  related: {
    regionRecommendations: [
      {
        id: 'koga-august',
        name: '第20回古河花火大会',
        date: '2025年8月2日',
        location: '茨城县古河市',
        visitors: '约20万人',
        link: '/august/hanabi/kitakanto/koga'
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
        id: 'takasaki-august',
        name: '第51回高崎大花火大会',
        date: '2025年8月23日',
        location: '群马县高崎市',
        visitors: '约90万人',
        link: '/august/hanabi/kitakanto/takasaki'
      }
    ]
  },

  venues: [
    {
      name: '主会场',
      location: '渡良瀬川田中桥下流河川敷',
      startTime: '19:00'
    }
  ],

  access: [
    {
      venue: '主会场',
      stations: [
        { 
          name: '足利市站', 
          lines: ['东武伊势崎线'], 
          walkTime: '徒步约20分钟' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '河川敷主会场',
      rating: 5,
      crowdLevel: 'Very High',
      tips: '最佳观赏位置，可近距离欣赏花火',
      pros: ['收费观赏席', '最佳视角', '设施完备'],
      cons: ['收费区域', '需要提前预约', '人流量大']
    },
    {
      name: '田中桥周边',
      rating: 4,
      crowdLevel: 'High',
      tips: '免费观赏区域，视野开阔',
      pros: ['免费区域', '交通便利', '视野良好'],
      cons: ['人流较多', '需要早到占位', '设施有限']
    }
  ],

  history: {
    established: 1916,
    significance: '拥有百年历史的栃木县传统花火大会',
    highlights: [
      '百年传统花火文化传承',
      '渡良瀬川河畔的绝美景色',
      '传统工艺花火技术展示',
      '北关东地区重要的夏季盛典'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议下午4点前到达占位',
        '花火结束后避开人流高峰',
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
    organizer: '足利花火大会实行委员会',
    phone: '0284-44-8881',
    website: 'https://hanabi.walkerplus.com/detail/ar0309e00831/',
    socialMedia: '官方网站查询'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '渡良瀬川田中桥下流河川敷',
    parking: '临时停车场约3000台'
  },

  weatherInfo: {
    month: '8月',
    temperature: '最高32°C，最低24°C',
    humidity: '75%',
    rainfall: '小雨举行（恶劣天气取消）',
    recommendation: '夏季炎热，请注意防暑降温'
  },

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.8234567890123!2d139.4567890123456!3d36.3456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6Laz5Yip6YeM5biC!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
}; 