import { HanabiData } from '../types/hanabi';

export const shirahamaData: HanabiData = {
  id: 'shirahama',
  name: '第61回 南房総白浜海女まつり',
  japaneseName: '第61回南房総白浜海女まつり',

  englishName: 'Shirahama Ama Festival',
  year: 2025,
  date: '2025年7月19日(土)・20日(日)',
  time: '各日19:00～',
  duration: '各日约60分钟',
  fireworksCount: '水中花火（非公開）',
  expectedVisitors: '2万5000人',
  weather: '小雨举行（恶劣天气延期）',
  ticketPrice: '免费观赏（有料席另售）',
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
        id: 'kamogawa',
        name: '鸭川市民花火大会',
        date: '2025年7月29日',
        location: '前原横渚海岸',
        visitors: '4万人',
        link: '/july/hanabi/chiba/kamogawa'
      },
      {
        id: 'oamishirasato',
        name: '大网白里花火',
        date: '2025年7月26日',
        location: '白里海水浴场',
        visitors: '2万8000人',
        link: '/july/hanabi/chiba/oamishirasato'
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
        id: 'katsushika',
        name: '葛飾納涼花火大会',
        date: '2025年7月22日',
        location: '葛飾区',
        visitors: '77万人',
        link: '/july/hanabi/tokyo/katsushika'
      },
      {
        id: 'kamogawa',
        name: '鸭川市民花火大会',
        date: "7月29日",
        location: '前原横渚海岸',
        visitors: '4万人',
        link: '/july/hanabi/chiba/kamogawa'
      }
    ]
  },

  venues: [
    {
      name: '白浜野島埼灯台前公園広場',
      location: '南房総市白浜町白浜',
      startTime: '19:00',
      features: [
        '水中花火の迫力体験',
        '海女文化との融合',
        '房総半島最南端',
        '伝統的海女まつり'
      ]
    }
  ],

  access: [
    {
      venue: '白浜野島埼灯台前公園広場',
      stations: [
        { 
          name: 'JR館山駅', 
          lines: ['JR内房線'], 
          walkTime: 'バス約30分' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '白浜野島埼灯台前公園',
      rating: 5,
      crowdLevel: 'Medium',
      tips: '海女まつりのメイン会場、水中花火が見どころ',
      pros: ['水中花火の迫力', '海女文化体験', '比較的ゆったり観賞'],
      cons: ['アクセスやや不便', '宿泊施設限定', '天候の影響受けやすい']
    },
    {
      name: '白浜海岸',
      rating: 4,
      crowdLevel: 'Low',
      tips: '海岸線からの花火観賞',
      pros: ['広々とした空間', '波音とのコラボ', 'ロマンチック'],
      cons: ['施設少ない', '夜間の安全注意', '砂浜歩行']
    }
  ],

  history: {
    established: 1964,
    significance: '房総半島の伝統的な海女文化を継承する祭り',
    highlights: [
      '61回の歴史を持つ伝統祭り',
      '海女文化の保存と継承',
      '水中花火の迫力ある演出',
      '房総半島最南端での開催'
    ]
  },

  tips: [
    {
      category: '時間安排',
      items: [
        '2日間開催なので予定に合わせて選択',
        '海女まつりの他イベントも楽しめる',
        '夕方早めに現地到達推奨',
        'バスの最終時刻要確認'
      ]
    },
    {
      category: '必備物品',
      items: [
        '防寒対策（海風のため）',
        '虫除けスプレー',
        'レジャーシート',
        '懐中電灯',
        '飲食物（現地で購入可能）'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '水中花火のタイミングに注目',
        '海女文化の実演も見学',
        '房総の海の幸グルメを堪能',
        '灯台とのコラボ撮影がおすすめ'
      ]
    },
    {
      category: '交通攻略',
      items: [
        'JR館山駅からバス利用',
        '車でのアクセスも可能',
        '宿泊は館山市内がおすすめ',
        '帰りのバス時刻要事前確認'
      ]
    }
  ],

  contact: {
    organizer: '南房総市観光協会',
    phone: '0470-33-1091',
    website: 'https://www.mboso-etoko.jp/',
    socialMedia: '公式Facebook'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '白浜野島埼灯台前公園広場',
    parking: '臨時駐車場あり（有料）'
  },

  weatherInfo: {
    recommendation: '海風があるため薄手の羽織り必須',
    rainPolicy: '小雨決行、荒天時は延期',
    note: '海沿いのため天候変化に注意'
  }
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7!2d140.03!3d35.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602285c9b9d4a2a7%3A0x123456789!2z5Y2D6JGJ55yM!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp',
}; 