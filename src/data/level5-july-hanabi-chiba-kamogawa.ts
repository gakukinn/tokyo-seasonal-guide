import { HanabiData } from '../types/hanabi';

export const kamogawaData: HanabiData = {
  id: 'kamogawa',
  name: '鴨川市民花火大会',
  japaneseName: '鴨川市民花火大会',

  englishName: 'Kamogawa Citizens Fireworks Festival',
  year: 2025,
  date: '2025年7月29日(火)',
  time: '19:30～20:15',
  duration: '45分钟',
  fireworksCount: '约1500発',
  expectedVisitors: '4万人',
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
        id: 'shirahama',
        name: '南房総白浜海女まつり',
        date: '7月19-20日',
        location: '白浜野島埼灯台前',
        visitors: '2万5000人',
        link: '/july/hanabi/chiba/shirahama'
      },
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
      }
    ],
    timeRecommendations: [
      {
        id: 'adachi',
        name: '足立の花火',
        date: '2025年7月19日',
        location: '荒川河川敷',
        visitors: '60万人',
        link: '/july/hanabi/tokyo/adachi'
      },
      {
        id: 'sumida',
        name: '隅田川花火大会',
        date: '2025年7月26日',
        location: '隅田川',
        visitors: '91万人',
        link: '/july/hanabi/tokyo/sumida'
      },
      {
        id: 'shirahama',
        name: '南房総白浜海女まつり',
        date: '7月19-20日',
        location: '白浜野島埼灯台前',
        visitors: '2万5000人',
        link: '/july/hanabi/chiba/shirahama'
      }
    ]
  },

  venues: [
    {
      name: '前原横渚海岸',
      location: '鴨川市前原',
      startTime: '19:30',
      features: [
        '日本の渚100選の美しい海岸',
        '房総半島の絶景ロケーション',
        '約1500発の花火スペクタクル',
        '鴨川シーワールド近くの好立地'
      ]
    }
  ],

  access: [
    {
      venue: '前原横渚海岸',
      stations: [
        { 
          name: 'JR安房鴨川駅', 
          lines: ['JR外房線'], 
          walkTime: '徒歩約10分' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '前原横渚海岸メイン会場',
      rating: 5,
      crowdLevel: 'High',
      tips: '日本の渚100選に選ばれた美しい海岸',
      pros: ['絶景ロケーション', '駅から近い', '設備充実'],
      cons: ['混雑が激しい', '駐車場確保困難', '風の影響']
    },
    {
      name: '鴨川シーワールド周辺',
      rating: 4,
      crowdLevel: 'Medium',
      tips: 'シーワールドの帰りに花火も楽しめる',
      pros: ['観光とセット', '比較的空いている', 'アクセス良好'],
      cons: ['花火が斜めから', 'やや距離がある', '施設利用制限']
    },
    {
      name: '前原海岸北側',
      rating: 4,
      crowdLevel: 'Low',
      tips: '地元の人が知る穴場スポット',
      pros: ['人が少ない', '落ち着いて観賞', '駐車しやすい'],
      cons: ['花火が遠い', '設備不足', '夜間の安全性']
    }
  ],

  history: {
    established: 1980,
    significance: '房総半島の美しい海岸で開催される鴨川の夏祭り',
    highlights: [
      '45年の歴史を持つ伝統的花火大会',
      '日本の渚100選の絶景会場',
      '鴨川観光の夏のハイライト',
      '房総半島の海岸美と花火の融合'
    ]
  },

  tips: [
    {
      category: '時間安排',
      items: [
        '鴨川シーワールドとセットで楽しめる',
        '45分間のコンパクトな構成',
        '火曜日開催なので平日の特別感',
        '駅から近いので電車利用がおすすめ'
      ]
    },
    {
      category: '必備物品',
      items: [
        'レジャーシート',
        '防風対策（海風強い）',
        '虫除けスプレー',
        '飲み物',
        '懐中電灯'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '日本の渚100選の美しさを堪能',
        '房総半島の海岸線を背景にした花火',
        '鴨川観光と合わせて楽しむ',
        '比較的コンパクトな規模で親しみやすい'
      ]
    },
    {
      category: '交通攻略',
      items: [
        'JR外房線安房鴨川駅利用',
        '徒歩10分の好アクセス',
        '車の場合は早めの到着必須',
        '鴨川市内宿泊もおすすめ'
      ]
    }
  ],

  contact: {
    organizer: '鴨川市観光協会',
    phone: '04-7092-0086',
    website: 'https://www.kamogawa-kanko.com/',
    socialMedia: '鴨川市観光協会SNS'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '前原横渚海岸',
    parking: '臨時駐車場あり（有料）'
  },

  weatherInfo: {
    recommendation: '海風対策必須、羽織りもの持参',
    rainPolicy: '小雨決行、荒天時は翌日延期',
    note: '海岸のため天候変化に注意'
  }
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7!2d140.03!3d35.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602285c9b9d4a2a7%3A0x123456789!2z5Y2D6JGJ55yM!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp',
}; 