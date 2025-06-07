/**
 * 第五层数据文件 - 第51回高崎大花火大会详情数据
 * @layer 五层 (Detail Data)
 * @month 8月
 * @region 北关东
 * @event 高崎大花火大会
 * @type 花火详情数据文件
 */
import { HanabiData } from '../types/hanabi';

export const takasakiHanabiData: HanabiData = {
  id: 'takasaki-august',
  name: '第51回高崎大花火大会',
  japaneseName: '第51回高崎まつり大花火大会',
  englishName: '51st Takasaki Grand Fireworks Festival',
  year: 2025,
  date: '2025年8月23日(土)',
  time: '19:30-20:30',
  duration: '60分钟',
  fireworksCount: '约1万5000发',
  expectedVisitors: '约90万人',
  weather: '小雨举行（恶劣天气取消）',
  ticketPrice: '免费观赏',
  status: '已确认举办',
  themeColor: 'red',
  month: 8,

  tags: {
    timeTag: '8月',
    regionTag: '群马县',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  related: {
    regionRecommendations: [
      {
        id: 'maebashi-august',
        name: '第69回前桥花火大会',
        date: '2025年8月9日',
        location: '群马县前桥市',
        visitors: '非公开',
        link: '/august/hanabi/kitakanto/maebashi'
      },
      {
        id: 'ashikaga-august',
        name: '第109回足利花火大会',
        date: '2025年8月2日',
        location: '栃木县足利市',
        visitors: '约45万人',
        link: '/august/hanabi/kitakanto/ashikaga'
      }
    ],
    timeRecommendations: [
      {
        id: 'hitachinaka-august',
        name: '第31回常陆那珂祭花火大会',
        date: '2025年8月16日',
        location: '茨城县常陆那珂市',
        visitors: '非公开',
        link: '/august/hanabi/kitakanto/hitachinaka'
      }
    ]
  },

  venues: [
    {
      name: '主会场',
      location: '乌川和田桥上流河川敷',
      startTime: '19:30'
    }
  ],

  access: [
    {
      venue: '主会场',
      stations: [
        { 
          name: '高崎站', 
          lines: ['JR高崎线'], 
          walkTime: '乘坐专用巴士' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '乌川河川敷主会场',
      rating: 5,
      crowdLevel: 'Very High',
      tips: '关东最大规模花火大会，90万人观赏的壮观场面',
      pros: ['关东最大规模', '尺玉大玉连发', '设施完备'],
      cons: ['人流量极大', '需要极早到达', '竞争最激烈']
    },
    {
      name: '和田桥周边',
      rating: 4,
      crowdLevel: 'Very High',
      tips: '桥梁附近观赏区域，人流同样很大',
      pros: ['视野较好', '交通相对便利', '观赏角度不错'],
      cons: ['人流极多', '需要早到', '设施有限']
    }
  ],

  history: {
    established: 1975,
    significance: '关东地区最大规模的花火大会之一，50年历史的群马县重要盛典',
    highlights: [
      '关东最大规模90万人观赏',
      '50年传统花火文化',
      '尺玉大玉连发表演',
      '群马县最重要的夏季活动'
    ]
  },

  tips: [
    {
      category: '时间安排',
      items: [
        '建议上午就开始前往占位',
        '提前了解专用巴士详细时刻表',
        '预留充足返程时间，人流极大'
      ]
    },
    {
      category: '必备物品',
      items: [
        '野餐垫和便携椅子（必须）',
        '大量饮用水和食物',
        '防虫喷雾和防晒用品',
        '便携充电器和手电筒',
        '垃圾袋和湿纸巾'
      ]
    }
  ],

  contact: {
    organizer: '高崎祭大花火大会实行委员会',
    phone: '027-327-2111',
    website: 'https://hanabi.walkerplus.com/detail/ar0310e00708/',
    socialMedia: '官方网站查询'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '乌川和田桥上流河川敷',
    parking: '大型临时停车场多处设置'
  },

  weatherInfo: {
    month: '8月',
    temperature: '最高34°C，最低23°C',
    humidity: '72%',
    rainfall: '小雨举行（恶劣天气取消）',
    recommendation: '夏季炎热，90万人聚集，务必做好防暑准备'
  },

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.4567890123456!2d139.0100000123456!3d36.3200000012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6auY5bSO5biC!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
}; 