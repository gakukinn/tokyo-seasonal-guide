'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';

// 8月埼玉花火大会数据 - 按官方时间排序 (数据来源: Walker Plus 2025)
const saitamaEvents = [
  {
    id: 'toda-bridge',
    name: '第72回 戸田橋花火大会 Sky Fantasia(スカイファンタジア)',
    englishName: 'The 72nd Toda Bridge Fireworks Festival Sky Fantasia',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:00～20:30',
    location: '国道17号戸田橋上流荒川河川敷',
    area: '戸田市',
    visitors: '约45万人',
    fireworks: '约1万5000发',
    highlights: ['日本唯一', '荒川两岸同步', '光的竞演'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR戸田公園駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/toda-bridge-hanabi',
    image: '/hanabi-toda-bridge.jpg'
  },
  {
    id: 'asaka-saika',
    name: '朝霞市民まつり「彩夏祭」',
    englishName: 'Asaka Citizens Festival Saika-sai',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:30～20:30',
    location: 'キャンプ朝霞跡地',
    area: '朝霞市',
    visitors: '约73万人',
    fireworks: '约9000发',
    highlights: ['祭典热闹', '光与音', '迫力满点'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: '東武東上線朝霞駅',
    walkingTime: '徒步约10分钟',
    mapUrl: 'https://maps.google.com/asaka-saika-hanabi',
    image: '/hanabi-asaka-saika.jpg'
  },
  {
    id: 'yorii-tamayodo',
    name: '寄居玉淀水天宮祭花火大会',
    englishName: 'Yorii Tamayodo Suiten-gu Festival Fireworks',
    date: '8月2日',
    specificDate: '2025年8月2日(土)',
    time: '19:30～20:30',
    location: '寄居町玉淀河原',
    area: '大里郡寄居町',
    visitors: '约6万人',
    fireworks: '约5000发',
    highlights: ['关东一水祭', '趣向花火', '连续绽放'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR八高線寄居駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/yorii-tamayodo-hanabi',
    image: '/hanabi-yorii-tamayodo.jpg'
  },
  {
    id: 'fukaya-31st',
    name: '第31回 深谷花火大会',
    englishName: 'The 31st Fukaya Fireworks Festival',
    date: '8月3日',
    specificDate: '2025年8月3日(日)',
    time: '19:00～20:30',
    location: 'ワモア川本南 荒川河川敷',
    area: '深谷市',
    visitors: '4万人',
    fireworks: '约4000发',
    highlights: ['尺玉绽放', 'スターマイン', '深谷夜空'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR高崎線深谷駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/fukaya-hanabi',
    image: '/hanabi-fukaya.jpg'
  },
  {
    id: 'saitama-omagi',
    name: '令和7年度 さいたま市花火大会 東浦和 大間木公園会場',
    englishName: 'Saitama City Fireworks Festival Omagi Park Venue',
    date: '8月9日',
    specificDate: '2025年8月9日(土)',
    time: '19:30～20:30',
    location: '大間木公園周辺',
    area: 'さいたま市緑区',
    visitors: '约6万人',
    fireworks: '未定',
    highlights: ['埼玉市代表', '公园会场', '东浦和'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: 'JR武蔵野線東浦和駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/saitama-omagi-hanabi',
    image: '/hanabi-saitama-omagi.jpg'
  },
  {
    id: 'kumagaya-hanabi',
    name: '熊谷花火大会',
    englishName: 'Kumagaya Fireworks Festival',
    date: '8月9日',
    specificDate: '2025年8月9日(土)',
    time: '19:00～21:00',
    location: '荒川河畔(荒川大橋下流)',
    area: '熊谷市',
    visitors: '约42万人',
    fireworks: '约1万发',
    highlights: ['花火与信息', '传递思想', '荒川河畔'],
    level: 'primary' as const,
    crowdLevel: 'high' as const,
    station: 'JR高崎線熊谷駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/kumagaya-hanabi',
    image: '/hanabi-kumagaya.jpg'
  },
  {
    id: 'saitama-iwatsuki',
    name: '令和7年度 さいたま市花火大会 岩槻文化公園会場',
    englishName: 'Saitama City Fireworks Festival Iwatsuki Cultural Park Venue',
    date: '8月16日',
    specificDate: '2025年8月16日(土)',
    time: '19:30～20:30',
    location: '岩槻文化公園',
    area: 'さいたま市岩槻区',
    visitors: '约4万人',
    fireworks: '未定',
    highlights: ['埼玉市花火', '文化公园', '岩槻会场'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: '東武野田線岩槻駅',
    walkingTime: '徒步约20分钟',
    mapUrl: 'https://maps.google.com/saitama-iwatsuki-hanabi',
    image: '/hanabi-saitama-iwatsuki.jpg'
  },
  {
    id: 'higashimatsuyama-26th',
    name: '第26回 ひがしまつやま花火大会',
    englishName: 'The 26th Higashimatsuyama Fireworks Festival',
    date: '8月23日',
    specificDate: '2025年8月23日(土)',
    time: '19:00～20:30',
    location: '都幾川リバーサイドパーク',
    area: '東松山市',
    visitors: '约6万人',
    fireworks: '约5000发',
    highlights: ['近距离观赏', '迫力满点', '河滨公园'],
    level: 'secondary' as const,
    crowdLevel: 'medium' as const,
    station: '東武東上線高坂駅',
    walkingTime: '徒步约15分钟',
    mapUrl: 'https://maps.google.com/higashimatsuyama-hanabi',
    image: '/hanabi-higashimatsuyama.jpg'
  }
];

const saitamaMonthInfo = {
  month: '八月',
  monthName: '叶月',
  urlPath: 'august'
};

const saitamaRegionInfo = {
  name: '埼玉',
  englishName: '八月埼玉县展现丰富多彩的花火盛典，从荒川河岸到市民祭典，11场花火大会各具地方特色',
  icon: '🌸',
  description: '内陆花火的夏末绚烂',
  urlSlug: 'saitama',
  features: [
    {
      icon: '🌉',
      title: '戸田橋奇观',
      description: '第72回戸田橋花火大会是日本唯一的荒川两岸同步花火，45万人共赏光的竞演'
    },
    {
      icon: '🎪',
      title: '市民祭典',
      description: '朝霞彩夏祭将祭典热闹与花火结合，73万人参与的超大规模市民活动'
    },
    {
      icon: '🏛️',
      title: '埼玉市花火',
      description: '分别在東浦和大間木公园和岩槻文化公园举办，展现埼玉市的多元文化'
    },
    {
      icon: '🌊',
      title: '荒川流域',
      description: '多个花火大会沿荒川流域举办，形成埼玉独特的河川花火文化带'
    }
  ],
  navigationLinks: [
    {
      label: '← 返回花火大会',
      href: '/august/hanabi'
    },
    {
      label: '八月东京 →',
      href: '/august/hanabi/tokyo'
    },
    {
      label: '戸田橋详情 →',
      href: '/august/hanabi/saitama/toda-bridge',
      isPrimary: true
    }
  ]
};

export default function AugustSaitamaHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={saitamaEvents}
      regionInfo={saitamaRegionInfo}
      monthInfo={saitamaMonthInfo}
    />
  );
} 