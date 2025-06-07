/**
 * 第四层页面 - 8月神奈川花火大会
 * @layer 四层 (Regional Layer)
 * @month 8月
 * @region 神奈川
 * @type 地区花火页面
 * @description 展示8月神奈川地区所有花火大会列表，包含查看详情链接
 */
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { events, regionInfo, monthInfo } from '@/data/level4-august-kanagawa-hanabi';

export default function AugustKanagawaHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={events}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  );
} 