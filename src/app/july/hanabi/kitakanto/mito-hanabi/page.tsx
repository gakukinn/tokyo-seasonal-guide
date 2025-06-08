/**
 * 第五层页面 - mito-hanabi完整详情信息，包含交通、观赏、历史等
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 北关东
 * @event mito-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/kitakanto/mito-hanabi
 * @description mito-hanabi完整详情信息，包含交通、观赏、历史等
 */
'use client';

import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { mitoHanabiData } from '@/data/level5-mito-hanabi';

export default function MitoHanabiPage() {
 return (
 <HanabiDetailTemplate 
 data={mitoHanabiData}
 regionKey="kitakanto"
 />
 );
} 