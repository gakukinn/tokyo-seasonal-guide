import { HanabiData } from '../types/hanabi';

export const motherfarmData: HanabiData = {
  id: 'motherfarm',
  name: 'マザー牧場 サマーナイトファーム',
  englishName: 'Mother Farm Summer Night Farm',
  year: 2025,
  date: '7月26日(土)・27日(日)、8月2日(土)・3日(日)・9日(土)～17日(日)・23日(土)・24日(日)・30日(土)・31日(日)',
  time: '20:00～',
  duration: '约30分钟',
  fireworksCount: '未定',
  expectedVisitors: '未定',
  weather: '小雨举行（恶劣天气中止）',
  ticketPrice: '入園料別途必要（有料席あり）',
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
        date: '7月26日',
        location: '富津海水浴场',
        visitors: '5万人',
        link: '/july/hanabi/chiba/futtsu'
      },
      {
        id: 'oamishirasato',
        name: '大网白里花火',
        date: '7月26日',
        location: '白里海水浴场',
        visitors: '2万8000人',
        link: '/july/hanabi/chiba/oamishirasato'
      },
      {
        id: 'marines',
        name: 'MARINES HANABI',
        date: '7月11日～8月11日',
        location: 'ZOZOマリンスタジアム',
        visitors: '3万人',
        link: '/july/hanabi/chiba/marines'
      }
    ],
    timeRecommendations: [
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '7月26日',
        location: '隅田川',
        visitors: '91万人',
        link: '/july/hanabi/tokyo/sumida'
      },
      {
        id: 'sanmu',
        name: '山武市サマーカーニバル',
        date: '7月26日',
        location: '蓮沼海浜公園',
        visitors: '1万9000人',
        link: '/july/hanabi/chiba/sanmu'
      },
      {
        id: 'futtsu',
        name: '富津市民花火大会',
        date: '7月26日',
        location: '富津海水浴场',
        visitors: '5万人',
        link: '/july/hanabi/chiba/futtsu'
      }
    ]
  },

  venues: [
    {
      name: 'マザー牧場',
      location: '富津市田倉940-3',
      startTime: '20:00',
      features: [
        '動物とのふれあい後の花火',
        '間近に上がる大迫力の花火',
        '牧場ならではの開放感',
        'サマーナイトファーム特別企画'
      ]
    }
  ],

  access: [
    {
      venue: 'マザー牧場',
      stations: [
        { 
          name: 'JR佐貫町駅', 
          lines: ['JR内房線'], 
          walkTime: 'バス約25分' 
        },
        { 
          name: '君津IC', 
          lines: ['館山自動車道'], 
          walkTime: '車約10分' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: 'マザー牧場メイン会場',
      rating: 5,
      crowdLevel: 'Medium',
      tips: '動物とのふれあいから花火まで一日中楽しめる',
      pros: ['間近の大迫力花火', '牧場の開放感', 'ファミリー向け'],
      cons: ['入園料必要', 'アクセスやや不便', '帰路の混雑']
    },
    {
      name: 'まきばゲート周辺',
      rating: 4,
      crowdLevel: 'Low',
      tips: '牧場入り口付近からの観覧',
      pros: ['比較的空いている', '車でのアクセス', '混雑回避'],
      cons: ['花火がやや遠い', '入園料別途', '雰囲気劣る']
    },
    {
      name: '展望台エリア',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '牧場の高台からパノラマビューで花火観賞',
      pros: ['絶景パノラマ', '撮影スポット', '開放感抜群'],
      cons: ['歩行距離長い', '夜間の移動注意', '風が強い']
    }
  ],

  history: {
    established: 2015,
    significance: 'マザー牧場の夏の特別イベント',
    highlights: [
      '10年の歴史を持つ牧場花火',
      '動物とのふれあいと花火の融合',
      'ファミリー向け特別企画',
      '間近で楽しめる大迫力花火'
    ]
  },

  tips: [
    {
      category: '時間安排',
      items: [
        '昼間から牧場を楽しんで夜の花火まで',
        '動物とのふれあい時間も確保',
        '複数日程開催なので都合に合わせて選択',
        '夜間の牧場内移動時間も考慮'
      ]
    },
    {
      category: '必備物品',
      items: [
        'マザー牧場入園券',
        '動物とのふれあい用着替え',
        '防寒対策（夜間は涼しい）',
        'カメラ',
        '懐中電灯'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '昼間の動物ふれあいから夜の花火まで満喫',
        '間近に上がる花火の迫力を体感',
        '牧場ならではの開放的な雰囲気',
        'サマーナイトファーム限定企画も楽しむ'
      ]
    },
    {
      category: '交通攻略',
      items: [
        '車でのアクセスが便利',
        'JR佐貫町駅からバス利用も可能',
        '帰りの混雑を想定した時間計画',
        '牧場内の移動も計画に含める'
      ]
    }
  ],

  contact: {
    organizer: 'マザー牧場',
    phone: '0439-37-3211',
    website: 'https://www.motherfarm.co.jp/',
    socialMedia: 'マザー牧場公式SNS'
  },

  mapInfo: {
    hasMap: true,
    mapNote: 'マザー牧場園内',
    parking: 'マザー牧場駐車場（有料）'
  },

  weatherInfo: {
    recommendation: '牧場の夜は涼しいので防寒対策必須',
    rainPolicy: '小雨決行、荒天時は中止',
    note: '動物の体調により一部プログラム変更の可能性'
  }
}; 