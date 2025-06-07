/**
 * 第四层页面 - 9月东京花火大会
 * @layer 四层 (Regional Layer)
 * @month 9月
 * @region 东京
 * @type 地区花火页面
 * @description 展示9月东京地区所有花火大会列表，包含查看详情链接
 */
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate'
import { tokyoHanabiEvents, regionInfo, monthInfo } from '@/data/level4-september-tokyo-hanabi'

export default function SeptemberTokyoHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={tokyoHanabiEvents}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  )
} 