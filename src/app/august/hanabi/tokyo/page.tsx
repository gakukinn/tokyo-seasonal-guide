/**
 * 第四层页面 - 8月东京花火大会
 * @layer 四层 (Regional Layer)
 * @month 8月
 * @region 东京
 * @type 地区花火页面
 * @path /august/hanabi/tokyo
 * @description 展示8月东京地区所有花火大会列表，包含查看详情链接
 */
import { Metadata } from 'next';
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { tokyoHanabiEvents, regionInfo, monthInfo } from '@/data/level4-august-tokyo-hanabi';

export const metadata: Metadata = {
  title: '东京花火大会 - 8月 | 关东地区花火指南',
  description: '首都圈的花火盛典。从板桥到神宫外苑，体验东京都市夜空的绚烂花火。',
};

export default function TokyoAugustHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={tokyoHanabiEvents}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  );
} 