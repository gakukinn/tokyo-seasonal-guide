/**
 * 第四层页面 - 7月北关东花火大会
 * @layer 四层 (Regional Layer)
 * @month 7月
 * @region 北关东
 * @type 地区花火页面
 * @path /july/hanabi/kitakanto
 * @description 展示7月北关东地区所有花火大会列表，包含查看详情链接
 */
'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { kitakantoHanabiData, kitakantoRegionInfo, kitakantoMonthInfo } from '@/data/level4-july-kitakanto-hanabi';

export default function KitakantoHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={kitakantoHanabiData}
      regionInfo={kitakantoRegionInfo}
      monthInfo={kitakantoMonthInfo}
    />
  );
} 