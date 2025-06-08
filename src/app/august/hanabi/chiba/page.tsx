/**
 * 第四层页面 - 8月千叶花火大会
 * @layer 四层 (Regional Layer)
 * @month 8月
 * @region 千叶
 * @type 地区花火页面
 * @description 展示8月千叶地区所有花火大会列表，包含查看详情链接
 */
'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { events, regionInfo, monthInfo } from '@/data/level4-august-chiba-hanabi';

export default function AugustChibaHanabiPage() {
 return (
 <RegionalHanabiTemplate
 events={events}
 regionInfo={regionInfo}
 monthInfo={monthInfo}
 />
 );
} 