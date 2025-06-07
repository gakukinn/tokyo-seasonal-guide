/**
 * 第五层页面 - 第59回葛饰纳凉花火大会详情
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 东京
 * @event 第59回葛饰纳凉花火大会
 * @type 花火详情页面
 * @path /july/hanabi/tokyo/katsushika-noryo-hanabi
 * @description 第59回葛饰纳凉花火大会完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { katsushikaNoryoHanabiData } from '@/data/level5-july-hanabi-katsushika-noryo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '第59回葛饰纳凉花火大会 - 东京花火指南',
  description: '第59回葛饰纳凉花火大会详细信息。五感体验的临场感满点夏季花火，约1万5000发花火点亮江户川河川敷。',
  keywords: '葛饰纳凉花火大会,东京花火,江户川河川敷,柴又,下町,夏季花火',
};

export default function KatsushikaNoryoHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={katsushikaNoryoHanabiData} 
      regionKey="tokyo"
    />
  );
} 