/**
 * 第四层页面 - 7月埼玉花火大会
 * @layer 四层 (Regional Layer)
 * @month 7月
 * @region 埼玉
 * @type 地区花火页面
 * @path /july/hanabi/saitama
 * @description 展示7月埼玉地区所有花火大会列表，包含查看详情链接
 */
'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { events, regionInfo, monthInfo } from '@/data/level4-july-saitama-hanabi';

export default function SaitamaHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={events} 
      regionInfo={regionInfo} 
      monthInfo={monthInfo}
    />
  );
} 