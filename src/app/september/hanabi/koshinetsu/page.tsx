/**
 * 第四层页面 - 9月甲信越花火大会
 * @layer 四层 (Regional Layer)
 * @month 9月
 * @region 甲信越
 * @type 地区花火页面
 * @description 展示9月甲信越地区所有花火大会列表，包含查看详情链接
 */
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate'
import { koshinetsuHanabiEvents, regionInfo, monthInfo } from '@/data/level4-september-koshinetsu-hanabi'

export default function SeptemberKoshinetsuHanabiPage() {
 return (
 <RegionalHanabiTemplate
 events={koshinetsuHanabiEvents}
 regionInfo={regionInfo}
 monthInfo={monthInfo}
 />
 )
} 