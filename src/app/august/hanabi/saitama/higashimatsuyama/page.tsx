/**
 * 第五层页面 - higashimatsuyama完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 埼玉
 * @event higashimatsuyama
 * @type 花火详情页面
 * @path /august/hanabi/saitama/higashimatsuyama
 * @description higashimatsuyama完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { higashimatsuyamaHanabiData } from '@/data/level5-august-higashimatsuyama-hanabi';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: '第26回东松山花火大会 | 2025年8月23日 | 关东花火攻略',
 description: '2019年台风19号水害复兴重生的象征，市民参与型花火大会的完美重启。2025年8月23日19:00开始，约6万人参加，约5000发花火。',
 keywords: '东松山花火大会,都幾川,花火,烟花,2025,8月,埼玉,关东,复兴',
};

export default function HigashimatsuyamaHanabiPage() {
 return <HanabiDetailTemplate data={higashimatsuyamaHanabiData} regionKey="saitama" />;
} 