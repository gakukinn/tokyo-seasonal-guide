/**
 * 第五层页面 - 东京竞马场花火2025详情
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 东京
 * @event 东京竞马场花火2025
 * @type 花火详情页面
 * @path /july/hanabi/tokyo/tokyo-keibajo-hanabi
 * @description 东京竞马场花火2025完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '../../../../../components/HanabiDetailTemplate';
import { keibajoData } from '../../../../../data/level5-july-hanabi-tokyo-keibajo';

export default function TokyoKeibajoHanabiPage() {
  return <HanabiDetailTemplate data={keibajoData} regionKey="tokyo" />;
}

export function generateMetadata() {
  return {
    title: '东京竞马场花火 2025 〜花火と聴きたい J-POP BEST〜 | 花火大会指南',
    description: '2025年7月2日举办的东京竞马场花火大会详细信息。J-POP音乐与花火的完美融合，观览席距离花火仅100米的震撼体验。全席指定席，日本最高峰的花火娱乐。',
    keywords: '东京竞马场花火, J-POP花火, 府中市花火, 2025年花火大会, 东京花火',
    openGraph: {
      title: '东京竞马场花火 2025 〜花火と聴きたい J-POP BEST〜',
      description: 'J-POP音乐与花火的完美融合，观览席距离花火仅100米的震撼体验',
      type: 'article',
      images: [
        {
          url: '/images/hanabi/tokyo-keibajo-1.jpg',
          width: 1200,
          height: 630,
          alt: '东京竞马场花火2025'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: '东京竞马场花火 2025',
      description: 'J-POP音乐与花火的完美融合',
      images: ['/images/hanabi/tokyo-keibajo-1.jpg']
    }
  };
} 