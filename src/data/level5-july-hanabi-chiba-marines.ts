import { HanabiData } from '../types/hanabi';

export const marinesData: HanabiData = {
  id: 'marines',
  name: 'MARINES HANABI (マリーンズ花火)',
  englishName: 'Marines Hanabi',
  year: 2025,
  date: '2025年7月11日(金)～8月11日(祝)の特定日',
  time: '試合後約20:00～',
  duration: '约20分钟',
  fireworksCount: '300発',
  expectedVisitors: '约3万人',
  weather: '野球開催時同様',
  ticketPrice: '野球観戦券が必要',
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
        id: 'motherfarm',
        name: 'マザー牧場花火',
        date: '7月26-27日',
        location: 'マザー牧場',
        visitors: '未定',
        link: '/july/hanabi/chiba/motherfarm'
      }
    ]
  },

  venues: [
    {
      name: 'ZOZOマリンスタジアム',
      location: '千葉市美浜区美浜1',
      startTime: '試合後約20:00',
      features: [
        '野球観戦と花火のコラボ',
        'ホームラン級の花火体験',
        'スタジアムからの特別な眺望',
        'マリーンズファンとの一体感'
      ]
    }
  ],

  access: [
    {
      venue: 'ZOZOマリンスタジアム',
      stations: [
        { 
          name: 'JR海浜幕張駅', 
          lines: ['JR京葉線'], 
          walkTime: '徒歩約15分' 
        },
        { 
          name: '海浜幕張駅', 
          lines: ['東京メトロ東西線（直通）'], 
          walkTime: '徒歩約15分' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: 'ZOZOマリンスタジアム内野席',
      rating: 5,
      crowdLevel: 'High',
      tips: '野球観戦と花火を同時に楽しめる特等席',
      pros: ['野球と花火のダブル体験', 'スタジアム設備', '一体感抜群'],
      cons: ['チケット購入必要', '混雑激しい', '席により見え方差']
    },
    {
      name: 'ZOZOマリンスタジアム外野席',
      rating: 4,
      crowdLevel: 'Medium',
      tips: 'よりカジュアルに楽しめる外野席',
      pros: ['比較的安価', '自由な雰囲気', '花火角度良好'],
      cons: ['チケット必要', '席確保競争', '試合展開に左右']
    },
    {
      name: '幕張海浜公園',
      rating: 3,
      crowdLevel: 'Low',
      tips: 'スタジアム外から遠望する無料スポット',
      pros: ['無料で観賞可能', '芝生でリラックス', '駐車場あり'],
      cons: ['花火が遠い', '音が聞こえにくい', '雰囲気に欠ける']
    }
  ],

  history: {
    established: 2010,
    significance: '千葉ロッテマリーンズの夏の風物詩',
    highlights: [
      '15年の歴史を持つスタジアム花火',
      '野球と花火の融合エンターテイメント',
      '千葉の夏の新しい楽しみ方',
      'ホームラン級の演出'
    ]
  },

  tips: [
    {
      category: '時間安排',
      items: [
        '野球観戦チケットの事前購入必須',
        '試合終了後の花火なので終了時間不定',
        '複数日程から選択可能',
        '帰りの電車時刻に余裕を持つ'
      ]
    },
    {
      category: '必備物品',
      items: [
        '野球観戦チケット',
        'マリーンズグッズ（任意）',
        '応援用具',
        '飲み物（スタジアム内販売あり）',
        'カメラ（撮影ルール確認）'
      ]
    },
    {
      category: '观赏建议',
      items: [
        '野球観戦から花火まで通しで楽しむ',
        'ホームラン級の花火演出に注目',
        'マリーンズファンとの一体感を味わう',
        'スタジアムならではの特別感'
      ]
    },
    {
      category: '交通攻略',
      items: [
        'JR京葉線海浜幕張駅利用',
        '試合開催日の混雑を想定',
        '花火終了後の帰宅ラッシュ注意',
        '幕張エリア観光とセットも可能'
      ]
    }
  ],

  contact: {
    organizer: '千葉ロッテマリーンズ',
    phone: '03-5682-6341',
    website: 'https://www.marines.co.jp/',
    socialMedia: 'マリーンズ公式SNS'
  },

  mapInfo: {
    hasMap: true,
    mapNote: 'ZOZOマリンスタジアム',
    parking: 'スタジアム駐車場あり（有料）'
  },

  weatherInfo: {
    recommendation: '野球観戦準備と同様',
    rainPolicy: '野球開催に準ずる',
    note: 'スタジアム内なので天候影響限定的'
  }
}; 