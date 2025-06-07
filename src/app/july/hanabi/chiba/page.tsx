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

import { Metadata } from 'next';
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { chibaHanabiEvents, regionInfo, monthInfo } from '@/data/level4-july-chiba-hanabi';

export const metadata: Metadata = {
  title: '千叶花火大会 - 7月 | 关东地区花火指南',
  description: '房总半岛的海岸花火盛典。从东京湾到太平洋，体验千叶独特的海风花火之美。',
};

export default function ChibaJulyHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={chibaHanabiEvents}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  );
} 