import { HanabiEvent, RegionInfo, MonthInfo } from '@/types/region-info';

export const events: HanabiEvent[] = [
  {
    id: 'chofu-hanabi-2025',
    name: '第40回调布花火',
    date: "9月20日",
    location: '调布市多摩川布田地区',
    visitors: '35万人',
    fireworks: "约12000发",
    likes: 0,
    imageUrl: '/images/hanabi/default.jpg',
    category: '大型花火大会',
    slug: 'chofu-hanabi',
    area: '调布市',
    level: 'primary',
    crowdLevel: 'high',
    station: '调布站',
    walkingTime: '20分钟',
    specificDate: '2025年9月20日(土)',
    detailLink: "/september/hanabi/tokyo/chofu-hanabi"
  }
];

export const regionInfo: RegionInfo = {
  name: '东京',
  icon: '🏙️',
  description: '首都圈的花火盛典，传统与现代的完美融合',
  totalEvents: 1,
  nextRegion: '埼玉',
  previousRegion: '甲信越',
  features: [
    {
      icon: '🏙️',
      title: '都市花火',
      description: '现代都市背景下的传统花火艺术'
    },
    {
      icon: '🎆',
      title: '传统工艺',
      description: '传承百年的花火制作技艺'
    },
    {
      icon: '🌉',
      title: '河川会场',
      description: '多摩川沿岸的绝美观览环境'
    }
  ]
};

export const monthInfo: MonthInfo = {
  month: '9月',
  monthName: '九月',
  urlPath: 'september'
}; 