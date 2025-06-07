/**
 * 第五层页面 - sanjo-natsumatsuri-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 甲信越
 * @event sanjo-natsumatsuri-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/koshinetsu/sanjo-natsumatsuri-hanabi
 * @description sanjo-natsumatsuri-hanabi完整详情信息，包含交通、观赏、历史等
 */
import { Metadata } from 'next';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { hanabiData } from '@/data/level5-sanjo-natsumatsuri-hanabi';

export const metadata: Metadata = {
  title: '三条市合并20周年记念第21回三条夏祭大花火大会 2025 | 豪华星雷尺玉连发 | 川面瀑布花火',
  description: '2025年7月26日举办的三条市合并20周年记念第21回三条夏祭大花火大会。豪华星雷、尺玉连发、川面瀑布花火，4000发花火点亮三条市夏夜天空。',
  keywords: '三条夏祭,三条花火,合并20周年,豪华星雷,尺玉花火,川面瀑布花火,新潟花火,信浓川花火',
  openGraph: {
    title: '三条市合并20周年记念第21回三条夏祭大花火大会 2025',
    description: '豪华星雷、尺玉连发、川面瀑布花火的震撼演出',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function SanjoNatsumatsuriHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={hanabiData}
      regionKey="koshinetsu"
    />
  );
} 