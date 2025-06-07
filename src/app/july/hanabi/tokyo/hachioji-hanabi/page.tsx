/**
 * 第五层页面 - hachioji-hanabi详情
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 东京
 * @event hachioji-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/tokyo/hachioji-hanabi
 * @description hachioji-hanabi完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { hachiojiHanabiData } from '@/data/level5-july-hanabi-hachioji';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '八王子花火大会 - 东京花火指南',
  description: '八王子花火大会详细信息。富士森公园举办的传统花火大会，约4000发花火点亮八王子夏夜。',
  keywords: '八王子花火大会,东京花火,富士森公园,八王子市,夏季花火',
};

export default function HachiojiHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={hachiojiHanabiData} 
      regionKey="tokyo"
    />
  );
} 