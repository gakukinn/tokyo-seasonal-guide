import { HanabiData } from '../types/hanabi';

export const sanmuData: HanabiData = {
  id: 'sanmu',
  name: '山武市サマーカーニバル',
  japaneseName: '山武市夏まつり',

  englishName: 'Sanmu Summer Carnival',
  year: 2025,
  date: '2025年7月26日(土)',
  time: '19:30～',
  duration: '约45分钟',
  fireworksCount: '1500発',
  expectedVisitors: '1万9000人',
  weather: '小雨举行（恶劣天气延期）',
  ticketPrice: '免费观赏',
  status: '已确认举办',
  themeColor: 'blue',
  month: 7,

  // 标签系统
  tags: {
    timeTag: '7月',
    regionTag: '千叶县',
    typeTag: '花火',
    layerTag: 'Layer 5详情页'
  },

  // 关联推荐 - 双维度轮回设计
  related: {
    regionRecommendations: [
      {
        id: 'futtsu',
        name: '富津市民花火大会',
        date: '2025年7月26日',
        location: '富津海水浴场',
        visitors: '5万人',
        link: '/july/hanabi/chiba/futtsu'
      },
      {
        id: 'oamishirasato',
        name: '大网白里花火',
        date: '2025年7月26日',
        location: '白里海水浴场',
        visitors: '2万8000人',
        link: '/july/hanabi/chiba/oamishirasato'
      },
      {
        id: 'kamogawa',
        name: '鸭川市民花火大会',
        date: '2025年7月29日',
        location: '前原横渚海岸',
        visitors: '4万人',
        link: '/july/hanabi/chiba/kamogawa'
      }
    ],
    timeRecommendations: [
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '2025年7月26日',
        location: '隅田川',
        visitors: '91万人',
        link: '/july/hanabi/tokyo/sumida'
      },
      {
        id: 'edogawa',
        name: '江戸川花火大会',
        date: '2025年7月26日',
        location: '江戸川河川敷',
        visitors: '90万人',
        link: '/july/hanabi/tokyo/edogawa'
      },
      {
        id: 'futtsu',
        name: '富津市民花火大会',
        date: "7月26日",
        location: '富津海水浴场',
        visitors: '5万人',
        link: '/july/hanabi/chiba/futtsu'
      }
    ]
  },

  venues: [
    {
      name: '蓮沼海浜公園展望塔前広場',
      location: '山武市蓮沼ホ368-1',
      startTime: '19:30',
      features: [
        'サマーカーニバルのフィナーレ',
        '展望塔からの眺望',
        '家族向けイベント',
        '海浜公園の充実施設'
      ]
    }
  ],

  access: [
    {
      venue: '蓮沼海浜公園展望塔前広場',
      stations: [
        { 
          name: 'JR松尾駅', 
          lines: ['JR総武本線'], 
          walkTime: 'バス約25分' 
        },
        { 
          name: 'JR横芝駅', 
          lines: ['JR総武本線'], 
          walkTime: 'バス約20分' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '蓮沼海浜公園展望塔前広場',
      rating: 5,
      crowdLevel: 'Medium',
      tips: 'サマーカーニバルのメイン会場',
      pros: ['設備充実', '家族連れに最適', '展望塔からの眺望'],
      cons: ['駐車場の混雑', '最寄り駅から遠い', '海風が強い']
    },
    {
      name: '蓮沼海浜公園ウォーターガーデン',
      rating: 4,
      crowdLevel: 'Low',
      tips: 'プール施設周辺からの観覧',
      pros: ['人が少ない', '子供連れに安心', '設備あり'],
      cons: ['花火が斜めから', 'やや距離がある', '夜間の利用制限']
    },
    {
      name: '蓮沼海岸',
      rating: 4,
      crowdLevel: 'Low',
      tips: '砂浜から海越しの花火観賞',
      pros: ['開放感', '波音とのコラボ', '比較的空いている'],
      cons: ['足元が砂浜', '設施少ない', '夜間の安全注意']
    }
  ],

  history: {
    established: 2000,
    significance: '山武市の夏の風物詩サマーカーニバル',
    highlights: [
      '25年の歴史を持つ夏祭り',
      '蓮沼海浜公園の充実した環境',
      '家族向けイベントとしての定着',
      'カーニバルのフィナーレを飾る花火'
    ]
  },

  tips: [
    {
      category: '時間安排',
      items: [
        'サマーカーニバルの昼間イベントから楽しめる',
        '展望塔の営業時間も確認',
        '花火は19:30からの比較的短時間',
        'プール施設も利用可能（日中）'
      ]
    },
    {
      category: '必備物品',
      items: [
        'レジャーシート',
        '虫除けスプレー',
        '飲み物',
        '軽食（会場でも購入可）',
        '懐中電灯'
      ]
    },
    {
      category: '观赏建议',
      items: [
        'サマーカーニバル全体を楽しむ',
        '展望塔からの眺望も体験',
        '家族連れに最適な環境',
        '海浜公園の施設も活用'
      ]
    },
    {
      category: '交通攻略',
      items: [
        'JR総武本線利用が便利',
        '車の場合は早めの到着推奨',
        'バスの時刻表要確認',
        '蓮沼海浜公園内の移動も考慮'
      ]
    }
  ],

  contact: {
    organizer: '山武市商工観光課',
    phone: '0475-80-1201',
    website: 'https://www.city.sammu.lg.jp/',
    socialMedia: '山武市公式SNS'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '蓮沼海浜公園展望塔前広場',
    parking: '蓮沼海浜公園駐車場（有料）'
  },

  weatherInfo: {
    recommendation: '海風対策必須、日中は日焼け対策も',
    rainPolicy: '小雨決行、荒天時は翌日延期',
    note: '海浜公園なので各種施設利用可能'
  }
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7!2d140.03!3d35.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602285c9b9d4a2a7%3A0x123456789!2z5Y2D6JGJ55yM!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp',
}; 