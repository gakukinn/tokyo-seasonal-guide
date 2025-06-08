/**
 * 第四层页面 - 8月北关东花火大会
 * @layer 四层 (Regional Layer)
 * @month 8月
 * @region 北关东
 * @type 地区花火页面
 * @description 展示8月北关东地区所有花火大会列表，包含查看详情链接
 */
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { kitakantoHanabiEvents, regionInfo, monthInfo } from '@/data/level4-august-kitakanto-hanabi';

export default function AugustKitakantoHanabiPage() {
 return (
 <RegionalHanabiTemplate 
 events={kitakantoHanabiEvents}
 regionInfo={regionInfo}
 monthInfo={monthInfo}
 />
 );
} 