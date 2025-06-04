import { HanabiData } from '../types/hanabi';

export const futtsuData: HanabiData = {
  id: 'futtsu',
  name: '「東京湾口道路建設促進」第10回 富津市民花火大会',
  englishName: 'Futtsu Citizens Fireworks Festival',
  year: 2025,
  date: '2025年7月26日(土)',
  time: '19:30～',
  duration: '约90分钟',
  fireworksCount: '5000発',
  expectedVisitors: '约5万人',
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
        id: 'kamogawa',
        name: '鸭川市民花火大会',
        date: '7月29日',
        location: '前原横渚海岸',
        visitors: '4万人',
        link: '/july/hanabi/chiba/kamogawa'
      },
      {
        id: 'sanmu',
        name: '山武市サマーカーニバル',
        date: '7月26日',
        location: '蓮沼海浜公園',
        visitors: '1万9000人',
        link: '/july/hanabi/chiba/sanmu'
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
        id: 'oamishirasato',
        name: '大网白里花火',
        date: '7月26日',
        location: '白里海水浴场',
        visitors: '2万8000人',
        link: '/july/hanabi/chiba/oamishirasato'
      }
    ]
  },

  venues: [
    {
      name: '富津海水浴場',
      location: '富津市富津2280',
      startTime: '19:30',
      features: [
        '東京湾の絶景ロケーション',
        '海上から打ち上げる花火',
        '都心からアクセス良好',
        '夕涼みに最適な海風'
      ]
    }
  ],

  access: [
    {
      venue: '富津海水浴場',
      stations: [
        { 
          name: 'JR青堀駅', 
          lines: ['JR内房線'], 
          walkTime: 'バス約15分' 
        },
        { 
          name: 'JR大貫駅', 
          lines: ['JR内房線'], 
          walkTime: 'バス約10分' 
        }
      ]
    }
  ],

  viewingSpots: [
    {
      name: '富津海水浴場メイン会場',
      rating: 5,
      crowdLevel: 'High',
      tips: '花火打ち上げ地点に最も近い',
      pros: ['間近で花火を体験', '海上花火の迫力', '設備充実'],
      cons: ['混雑が激しい', '駐車場が満車になりやすい', '帰りの渋滞']
    },
    {
      name: '富津岬展望台',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '少し離れるが全体的な景色が楽しめる',
      pros: ['展望台からの眺望', '比較的空いている', '撮影スポット'],
      cons: ['花火がやや遠い', '夜間の足元注意', '車でのアクセスのみ']
    },
    {
      name: '富津公園',
      rating: 4,
      crowdLevel: 'Medium',
      tips: '家族連れにおすすめの観覧スポット',
      pros: ['芝生でゆったり', 'トイレ設備あり', '子供連れに安心'],
      cons: ['花火は斜めから', '木々で一部見えない場合', '虫対策必要']
    }
  ],

  history: {
    established: 2016,
    significance: '東京湾口道路建設促進をテーマにした市民花火大会',
    highlights: [
      '第10回の記念大会',
      '東京湾口道路建設促進のPR',
      '富津市の夏の風物詩',
      '海上花火の美しさ'
    ]
  },

  tips: [
    {
      category: '時間安排',
      items: [
        '海水浴も楽しめるので早めの到着がおすすめ',
        '夕方から場所取り開始',
        '花火開始前に東京湾の夕日も楽しめる',
        '帰りの電車時刻を事前確認'
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
        '海上花火の水面反射が美しい',
        '東京湾越しの花火を満喫',
        '海水浴場なので水着での観覧も可能',
        '夕日から花火まで連続で楽しめる'
      ]
    },
    {
      category: '交通攻略',
      items: [
        'JR内房線で都心からアクセス良好',
        '車の場合は早めの到着推奨',
        '臨時バスの運行確認',
        '帰りの混雑を避けるため余裕を持った計画'
      ]
    }
  ],

  contact: {
    organizer: '富津市商工観光課',
    phone: '0439-80-1291',
    website: 'https://www.city.futtsu.lg.jp/',
    socialMedia: '富津市公式Twitter'
  },

  mapInfo: {
    hasMap: true,
    mapNote: '富津海水浴場',
    parking: '臨時駐車場あり（無料）'
  },

  weatherInfo: {
    recommendation: '海風対策の羽織り必須',
    rainPolicy: '小雨決行、荒天時は翌日延期',
    note: '海水浴場のため着替え施設あり'
  },

  specialFeatures: {
    scale: '约5000发花火',
    location: '东京湾富津海岸',
    tradition: '市民参与型海滨花火大会',
    atmosphere: '5万人共享房总半岛夏日盛典'
  },

  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.123456789!2d139.8234567890!3d35.3123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022abcdef123456%3A0x123456789abcdef!2z5a-M5rSl5rW36Kq-5rag!5e0!3m2!1szh-CN!2sjp!4v1698835200000!5m2!1szh-CN!2sjp',

  // 媒体内容 - 示例数据
  media: [
    {
      type: 'image',
      url: '/hanabi-futtsu-main.jpg',
      title: '富津海岸花火',
      description: '东京湾美丽海岸线上绽放的花火'
    },
    {
      type: 'image',
      url: '/hanabi-futtsu-beach.jpg',
      title: '海滨观赏',
      description: '在沙滩上观赏花火的独特体验'
    },
    {
      type: 'image',
      url: '/hanabi-futtsu-crowd.jpg',
      title: '市民花火',
      description: '富津市民共享的夏日盛典'
    }
  ]
}; 