'use client';

import React from 'react';
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';

export default function AugustAroundHanabiPage() {
  const events = [
    {
      id: 'kawaguchi-lake-fireworks',
      name: '河口湖湖上祭',
      englishName: 'Kawaguchi Lake Festival',
      date: '8月5日(火)',
      specificDate: '2025年8月5日(火)',
      time: '19:45～20:40',
      location: '山梨県富士河口湖町',
      area: '富士河口湖町',
      visitors: '7万人',
      fireworks: '約1万発',
      highlights: [
        '1917年(大正6年)から続く歴史ある大会',
        '雄大な富士山を背景にした絶景花火',
        'ミュージカル花火・大型打ち上げ花火',
        '特大スターマイン・大玉連発',
        '水面に映る美しい花火'
      ],
      level: 'primary' as const,
      crowdLevel: 'high' as const,
      station: '富士急行河口湖駅',
      walkingTime: '徒歩15分',
      mapUrl: 'https://maps.google.com/kawaguchi-lake',
      image: '/images/kawaguchi-lake-fireworks.jpg'
    },
    {
      id: 'nagaoka-festival-fireworks',
      name: '長岡まつり大花火大会',
      englishName: 'Nagaoka Festival Grand Fireworks',
      date: '8月2日(土)・3日(日)',
      specificDate: '2025年8月2日(土)・3日(日)',
      time: '19:20～21:10',
      location: '新潟県長岡市',
      area: '長岡市',
      visitors: '非公開',
      fireworks: '日本三大花火大会',
      highlights: [
        '開花幅約650メートルの正三尺玉',
        '開花幅約2キロの「復興祈願フェニックス」',
        '慰霊と復興への願いが込められた花火',
        '信濃川両岸からの迫力ある演出',
        '尺玉を多用した稀有な花火大会'
      ],
      level: 'primary' as const,
      crowdLevel: 'high' as const,
      station: 'JR長岡駅',
      walkingTime: '徒歩約30分',
      mapUrl: 'https://maps.google.com/nagaoka-fireworks',
      image: '/images/nagaoka-fireworks.jpg'
    },
    {
      id: 'suwa-lake-fireworks',
      name: '第77回 諏訪湖祭湖上花火大会',
      englishName: 'Suwa Lake Festival Fireworks',
      date: '8月15日(金)',
      specificDate: '2025年8月15日(金)',
      time: '19:00～終了時間未定',
      location: '長野県諏訪市',
      area: '諏訪市',
      visitors: '非公開',
      fireworks: '全国屈指の規模',
      highlights: [
        '湖上ならではの「水上スターマイン」',
        '四方を山に囲まれた音響効果',
        '体の芯まで響く迫力の轟音',
        '斬新な発想と独創的な技術',
        '圧倒的なスケールの演出'
      ],
      level: 'primary' as const,
      crowdLevel: 'high' as const,
      station: 'JR上諏訪駅',
      walkingTime: '徒歩10分',
      mapUrl: 'https://maps.google.com/suwa-lake-fireworks',
      image: '/images/suwa-lake-fireworks.jpg'
    }
  ];

  const regionInfo = {
    name: '周边',
    englishName: 'Surrounding Areas around Kanto',
    icon: '🗻',
    description: '富士山、信濃川、諏訪湖等关东周边名胜的花火盛典',
    urlSlug: 'around',
    features: [
      {
        icon: '🏔️',
        title: '日本三大花火',
        description: '长岡祭是日本三大花火大会之一'
      },
      {
        icon: '🌋',
        title: '富士山绝景',
        description: '河口湖背景下的壮美花火'
      },
      {
        icon: '🌊',
        title: '湖上花火',
        description: '諏訪湖独特的水上演出'
      }
    ],
    navigationLinks: [
      {
        label: '返回花火总览',
        href: '/august/hanabi',
        isPrimary: false
      },
      {
        label: '查看其他地区',
        href: '/august/hanabi',
        isPrimary: true
      }
    ]
  };

  const monthInfo = {
    month: '8月',
    monthName: '盛夏花火月',
    urlPath: 'august'
  };

  return <RegionalHanabiTemplate events={events} regionInfo={regionInfo} monthInfo={monthInfo} />;
} 