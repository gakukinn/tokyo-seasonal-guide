import { HanabiData } from '../types/hanabi';

export const oamishirasatoData: HanabiData = {
  id: 'oamishirasato',
  name: 'おおあみしらさとの花火',
  englishName: 'Oamishirasato Fireworks',
  year: 2025,
  date: '2025年7月26日(土)',
  time: '19:30～20:30',
  duration: '60分钟',
  fireworksCount: '3000発',
  expectedVisitors: '2万8000人',
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
        date: '7月26日',
        location: '富津海水浴场',
        visitors: '5万人',
        link: '/july/hanabi/chiba/futtsu'
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
        id: 'kamogawa',
        name: '鸭川市民花火大会',
        date: '7月29日',
        location: '前原横渚海岸',
        visitors: '4万人',
        link: '/july/hanabi/chiba/kamogawa'
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
        id: 'edogawa',
        name: '江戸川花火大会',
        date: '7月26日',
        location: '江戸川河川敷',
        visitors: '90万人',
        link: '/july/hanabi/tokyo/edogawa'
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
      name: '白里海水浴場',
      location: '大網白里市白里',
      startTime: '19:30',
      features: [
        '60分間の花火スペクタクル',
        '海面を彩る水中スターマイン',
        '砂浜からの大迫力花火',
        '海岸で楽しむ夏の夜'
      ]
    }
  ],

  access: [
    {
      venue: '白里海水浴場',
      stations: [
        { 
          name: 'JR大網駅', 
          lines: ['JR外房線'], 
          walkTime: 'バス約20分' 
        },
        { 
          name: 'JR茂原駅', 
          lines: ['JR外房線'], 
          walkTime: 'バス約25分' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '白里海水浴場メイン会場',
      rating: 5,
      crowdLevel: 'High',
      tips: '水中スターマインが見どころの中心会場',
      pros: ['水中花火の迫力', '海面反射が美しい', '砂浜でゆったり'],
      cons: ['混雑が激しい', '砂で汚れる', '駐車場満車']
    },
    {
      name: '白里海岸北側',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '少し離れるが比較的空いている',
      pros: ['人混みを避けられる', '全体的な眺望', '車でのアクセス'],
      cons: ['花火がやや遠い', '設備少ない', '夜間の移動注意']
    },
    {
      name: '白里神社周辺',
      rating: 3,
      crowdLevel: 'Low',
      tips: '花火を遠くから眺める静かなスポット',
      pros: ['静かな環境', '地元の雰囲気', '駐車しやすい'],
      cons: ['花火が小さく見える', '音が聞こえにくい', '雰囲気に欠ける']
    }
  ],

  history: {
    established: 1990,
    significance: '大網白里市の夏の風物詩として定着した海岸花火大会',
    highlights: [
      '35年の歴史を持つ地域密着型花火大会',
      '水中スターマインの美しさ',
      '60分間の充実したプログラム',
      '海水浴場での夏祭り文化'
    ]
  },

  tips: [
    {
      category: '時間安排',
      items: [
        '海水浴も楽しめるので早めの到着がおすすめ',
        '60分間の充実したプログラム',
        '夕方から場所取り開始',
        '花火終了後の混雑を想定した帰路計画'
      ]
    },
    {
      category: '必備物品',
      items: [
        'レジャーシート（砂浜用）',
        '日焼け止め',
        '飲み物（多めに）',
        '虫除けスプレー',
        '懐中電灯'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '水中スターマインのタイミングに注目',
        '海面反射と花火のコラボを楽しむ',
        '砂浜に座って迫力を体感',
        '60分間の多彩なプログラムを満喫'
      ]
    },
    {
      category: '交通攻略',
      items: [
        'JR外房線でアクセス',
        'バスの時刻表を事前確認',
        '車の場合は早めの到着必須',
        '帰りの混雑対策を立てておく'
      ]
    }
  ],

  contact: {
    organizer: '大網白里市商工観光課',
    phone: '0475-70-0356',
    website: 'https://www.city.oamishirasato.lg.jp/',
    socialMedia: '大網白里市公式SNS'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '白里海水浴場',
    parking: '臨時駐車場あり（有料）'
  },

  weatherInfo: {
    recommendation: '海風対策と日焼け対策必須',
    rainPolicy: '小雨決行、荒天時は翌日延期',
    note: '海水浴場のため更衣室等設備充実'
  }
}; 