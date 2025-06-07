/**
 * 第四层页面 - 8月甲信越花火大会
 * @layer 四层 (Regional Layer)
 * @month 8月
 * @region 甲信越
 * @type 地区花火页面
 * @description 展示8月甲信越地区所有花火大会列表，包含查看详情链接
 */
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { events, regionInfo, monthInfo } from '@/data/level4-august-koshinetsu-hanabi';

export default function AugustKoshinetsuHanabiPage() {
  return (
    <RegionalHanabiTemplate 
      events={events}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  );
} 