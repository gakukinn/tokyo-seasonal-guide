/**
 * 第四层页面 - 7月东京花火大会
 * @layer 四层 (Regional Layer)
 * @month 7月
 * @region 东京
 * @type 地区花火页面
 * @path /july/hanabi/tokyo
 * @description 展示7月东京地区所有花火大会列表，包含查看详情链接
 */
'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { tokyoHanabiEvents, regionInfo, monthInfo } from '@/data/level4-july-tokyo-hanabi';

export default function TokyoHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={tokyoHanabiEvents}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  );
} 