/**
 * 第五层页面 - nojiri-lake-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 甲信越
 * @event nojiri-lake-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/koshinetsu/nojiri-lake-hanabi
 * @description nojiri-lake-hanabi完整详情信息，包含交通、观赏、历史等
 */
import { Metadata } from 'next';
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { hanabiData } from '@/data/level5-nojiri-lake-hanabi';

export const metadata: Metadata = {
  title: '第101回野尻湖花火大会 2025 | 芙蓉湖水上星雷 | 北信五岳山间花火',
  description: '2025年7月26日举办的第101回野尻湖花火大会。被北信五岳环绕的芙蓉湖上，约2000发花火绚烂绽放，水上星雷与水中星雷演出别具特色。',
  keywords: '野尻湖花火,芙蓉湖,水上星雷,水中星雷,北信五岳,第101回,信浓町花火,长野花火',
  openGraph: {
    title: '第101回野尻湖花火大会 2025',
    description: '芙蓉湖水上星雷，山间音响效果的独特花火体验',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function NojiriLakeHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={hanabiData}
      regionKey="koshinetsu"
    />
  );
} 