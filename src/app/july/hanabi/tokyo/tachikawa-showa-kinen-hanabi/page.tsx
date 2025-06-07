/**
 * 第五层页面 - tachikawa-showa-kinen-hanabi详情
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 东京
 * @event tachikawa-showa-kinen-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/tokyo/tachikawa-showa-kinen-hanabi
 * @description tachikawa-showa-kinen-hanabi完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { tachikawaShowaHanabiData } from '@/data/level5-july-hanabi-tachikawa-showa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '立川祭国营昭和纪念公园花火大会 - 东京花火指南',
  description: '立川祭国营昭和纪念公园花火大会详细信息。都内罕见的尺玉、一尺五寸玉等大迫力花火和艺协玉精心设计，5000发花火点亮昭和纪念公园。',
  keywords: '立川祭,国营昭和纪念公园,花火大会,东京花火,尺玉,艺协玉,立川,夏季花火',
};

export default function TachikawaShowaHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={tachikawaShowaHanabiData} 
      regionKey="tokyo"
    />
  );
} 