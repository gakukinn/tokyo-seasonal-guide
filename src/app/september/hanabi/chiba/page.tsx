/**
 * 第四层页面 - 9月千叶花火大会
 * @layer 四层 (Regional Layer)
 * @month 9月
 * @region 千叶
 * @type 地区花火页面
 * @description 展示9月千叶地区所有花火大会列表，包含查看详情链接
 */
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate'
import { chibaHanabiEvents, regionInfo, monthInfo } from '@/data/level4-september-chiba-hanabi'

export default function SeptemberChibaHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={chibaHanabiEvents}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  )
} 