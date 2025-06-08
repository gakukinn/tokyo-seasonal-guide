/**
 * 第五层页面 - moka-hanabi详情
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 北关东
 * @event moka-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/kitakanto/moka-hanabi
 * @description moka-hanabi完整详情信息，包含交通、观赏、历史等
 */
'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { mokaHanabiData } from '@/data/level5-moka-hanabi';

export default function MokaHanabiPage() {
 return (
 <HanabiDetailTemplate 
 data={mokaHanabiData}
 regionKey="kitakanto"
 />
 );
} 