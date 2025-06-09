'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRegionConfig } from '../../config/hanabi-detail-template';

interface HanabiBreadcrumbProps {
 regionKey: string;
 hanabiName: string;
}

export default function HanabiBreadcrumb({ regionKey, hanabiName }: HanabiBreadcrumbProps) {
 const regionConfig = getRegionConfig(regionKey);
 const pathname = usePathname();
 
 // 从路径中动态检测月份
 const getMonthInfo = () => {
 if (pathname.includes('/january/')) {
 return { monthPath: '/january', monthName: '一月 · 正月' };
 } else if (pathname.includes('/february/')) {
 return { monthPath: '/february', monthName: '二月 · 如月' };
 } else if (pathname.includes('/march/')) {
 return { monthPath: '/march', monthName: '三月 · 弥生' };
 } else if (pathname.includes('/april/')) {
 return { monthPath: '/april', monthName: '四月 · 卯月' };
 } else if (pathname.includes('/may/')) {
 return { monthPath: '/may', monthName: '五月 · 皋月' };
 } else if (pathname.includes('/june/')) {
 return { monthPath: '/june', monthName: '六月 · 水无月' };
 } else if (pathname.includes('/july/')) {
 return { monthPath: '/july', monthName: '七月 · 文月' };
 } else if (pathname.includes('/august/')) {
 return { monthPath: '/august', monthName: '八月 · 叶月' };
 } else if (pathname.includes('/september/')) {
 return { monthPath: '/september', monthName: '九月 · 长月' };
 } else if (pathname.includes('/october/')) {
 return { monthPath: '/october', monthName: '十月 · 神无月' };
 } else if (pathname.includes('/november/')) {
 return { monthPath: '/november', monthName: '十一月 · 霜月' };
 } else if (pathname.includes('/december/')) {
 return { monthPath: '/december', monthName: '十二月 · 师走' };
 }
 // 默认返回七月
 return { monthPath: '/july', monthName: '七月 · 文月' };
 };

 const monthInfo = getMonthInfo();

 return (
 <div className="relative z-10 bg-gray-200 border-b border-gray-300">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
 <nav className="flex items-center space-x-2 text-sm text-gray-700">
 <Link href="/" className="hover:text-gray-900 transition-colors font-medium">首页</Link>
 <span className="text-gray-600">›</span>
 <Link href={monthInfo.monthPath} className="hover:text-gray-900 transition-colors font-medium">{monthInfo.monthName}</Link>
 <span className="text-gray-600">›</span>
 <Link href={`${monthInfo.monthPath}/hanabi`} className="hover:text-gray-900 transition-colors font-medium">花火大会</Link>
 <span className="text-gray-600">›</span>
 <Link href={`${monthInfo.monthPath}/hanabi/${regionKey}`} className="hover:text-gray-900 transition-colors font-medium">
 {regionConfig.name}
 </Link>
 <span className="text-gray-600">›</span>
 <span className="text-gray-900 font-bold">{hanabiName}</span>
 </nav>
 </div>
 </div>
 );
} 