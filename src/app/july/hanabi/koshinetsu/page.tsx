/**
 * 第四层页面 - 7月甲信越花火大会
 * @layer 四层 (Regional Layer)
 * @month 7月
 * @region 甲信越
 * @type 地区花火页面
 * @path /july/hanabi/koshinetsu
 * @description 展示7月甲信越地区所有花火大会列表，包含查看详情链接
 */
'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { koshinetsuHanabiEvents, regionInfo, monthInfo } from '@/data/level4-july-koshinetsu-hanabi';

export default function KoshinetsuHanabiPage() {
 return (
 <RegionalHanabiTemplate 
 events={koshinetsuHanabiEvents}
 regionInfo={regionInfo}
 monthInfo={monthInfo}
 />
 );
} 