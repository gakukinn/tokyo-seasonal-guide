/**
 * 第四层页面 - 7月千叶花火大会
 * @layer 四层 (Regional Layer)
 * @month 7月
 * @region 千叶
 * @type 地区花火页面
 * @path /july/hanabi/chiba
 * @description 展示7月千叶地区所有花火大会列表，包含查看详情链接
 */
'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { chibaHanabiEvents, regionInfo, monthInfo } from '@/data/level4-july-chiba-hanabi';

export default function ChibaJulyHanabiPage() {
 return (
 <RegionalHanabiTemplate 
 events={chibaHanabiEvents}
 regionInfo={regionInfo}
 monthInfo={monthInfo}
 />
 );
} 