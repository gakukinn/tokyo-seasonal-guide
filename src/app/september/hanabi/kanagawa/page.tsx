/**
 * 第四层页面 - 9月神奈川花火大会
 * @layer 四层 (Regional Layer)
 * @month 9月
 * @region 神奈川
 * @type 地区花火页面
 * @description 展示9月神奈川地区所有花火大会列表，包含查看详情链接
 */
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate'
import { kanagawaHanabiEvents, regionInfo, monthInfo } from '@/data/level4-september-kanagawa-hanabi'

export default function SeptemberKanagawaHanabiPage() {
 return (
 <RegionalHanabiTemplate
 events={kanagawaHanabiEvents}
 regionInfo={regionInfo}
 monthInfo={monthInfo}
 />
 )
} 