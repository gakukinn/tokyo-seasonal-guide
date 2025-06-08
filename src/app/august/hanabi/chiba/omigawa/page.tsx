/**
 * 第五层页面 - omigawa完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 千叶
 * @event omigawa
 * @type 花火详情页面
 * @path /august/hanabi/chiba/omigawa
 * @description omigawa完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { hanabiDetailData } from '@/data/level5-august-omigawa-hanabi';

export default function OmigawaHanabiPage() {
 return <HanabiDetailTemplate data={hanabiDetailData} regionKey="chiba" />;
}

export async function generateMetadata() {
 return {
 title: `${hanabiDetailData.name} | 2025年花火大会`,
 description: `${hanabiDetailData.name}：${hanabiDetailData.history.significance}。${hanabiDetailData.expectedVisitors}，${hanabiDetailData.fireworksCount}`,
 keywords: ['花火大会', '千叶', '小见川', '利根川', '全国尺玉大赛', '2025年'],
 };
} 