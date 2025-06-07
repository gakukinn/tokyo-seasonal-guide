/**
 * 第四层页面 - 7月神奈川花火大会
 * @layer 四层 (Regional Layer)
 * @month 7月
 * @region 神奈川
 * @type 地区花火页面
 * @path /july/hanabi/kanagawa
 * @description 展示7月神奈川地区所有花火大会列表，包含查看详情链接
 */
'use client';

import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { kanagawaHanabiEvents, regionInfo, monthInfo } from '@/data/level4-july-kanagawa-hanabi';

export default function KanagawaHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={kanagawaHanabiEvents}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  );
} 