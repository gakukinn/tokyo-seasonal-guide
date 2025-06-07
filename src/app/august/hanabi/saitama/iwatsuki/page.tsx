/**
 * 第五层页面 - iwatsuki完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 埼玉
 * @event iwatsuki
 * @type 花火详情页面
 * @path /august/hanabi/saitama/iwatsuki
 * @description iwatsuki完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { iwatsukiHanabiData } from '@/data/level5-august-iwatsuki-hanabi';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '埼玉市花火大会（岩槻文化公园会场）| 2025年8月16日 | 关东花火攻略',
  description: '埼玉市三大会场花火节的收官之作，在自然丰富的岩槻文化公园内近距离感受震撼花火。2025年8月16日19:30开始，约4万人参加。',
  keywords: '埼玉市花火大会,岩槻文化公园,花火,烟花,2025,8月,埼玉,关东',
};

export default function IwatsukiHanabiPage() {
  return <HanabiDetailTemplate data={iwatsukiHanabiData} regionKey="saitama" />;
} 