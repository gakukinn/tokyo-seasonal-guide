/**
 * 第四层页面 - 8月埼玉花火大会
 * @layer 四层 (Regional Layer)
 * @month 8月
 * @region 埼玉
 * @type 地区花火页面
 * @path /august/hanabi/saitama
 * @description 展示8月埼玉地区所有花火大会列表，包含查看详情链接
 */
import { Metadata } from 'next';
import RegionalHanabiTemplate from '@/components/RegionalHanabiTemplate';
import { saitamaHanabiEvents, regionInfo, monthInfo } from '@/data/level4-august-saitama-hanabi';

export const metadata: Metadata = {
 title: '埼玉花火大会 - 8月 | 关东地区花火指南',
 description: '关东内陆的花火传统。从荒川河畔到都市公园，体验埼玉独特的田园花火魅力。',
};

export default function SaitamaAugustHanabiPage() {
 return (
 <RegionalHanabiTemplate 
 events={saitamaHanabiEvents}
 regionInfo={regionInfo}
 monthInfo={monthInfo}
 />
 );
} 