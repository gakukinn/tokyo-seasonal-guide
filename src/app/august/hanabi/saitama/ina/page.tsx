/**
 * 第五层页面 - ina完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 8月
 * @region 埼玉
 * @event ina
 * @type 花火详情页面
 * @path /august/hanabi/saitama/ina
 * @description ina完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { inaHanabiData } from '@/data/level5-august-ina-hanabi';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: '2025伊奈祭 | 2025年8月23日 | 关东花火攻略',
 description: '"玫瑰小镇"伊奈町的夏日风物诗，从模拟店到盆踊再到压轴花火，充满昔日夏祭风情。2025年8月23日20:10开始，约4万人参加。',
 keywords: '伊奈祭,伊奈町,花火,烟花,2025,8月,埼玉,关东,夏祭,玫瑰小镇',
};

export default function InaHanabiPage() {
 return <HanabiDetailTemplate data={inaHanabiData} regionKey="saitama" />;
} 