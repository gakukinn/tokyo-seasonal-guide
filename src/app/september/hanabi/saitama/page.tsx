/**
 * 第四层页面 - 9月埼玉花火大会
 * @layer 四层 (Regional Layer)
 * @month 9月
 * @region 埼玉
 * @type 地区花火页面
 * @description 展示9月埼玉地区所有花火大会列表，包含查看详情链接
 */
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate'
import { saitamaHanabiEvents, regionInfo, monthInfo } from '@/data/level4-september-saitama-hanabi'

export default function SeptemberSaitamaHanabiPage() {
  return (
    <RegionalHanabiTemplate
      events={saitamaHanabiEvents}
      regionInfo={regionInfo}
      monthInfo={monthInfo}
    />
  )
} 