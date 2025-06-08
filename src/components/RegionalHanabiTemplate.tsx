'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { REGIONAL_CONFIG } from '@/config/regional-template';
import LikeButton from '@/components/shared/LikeButton';
import ViewModeToggle from '@/components/shared/ViewModeToggle';

/**
 * 🎆 四层花火模板 (RegionalHanabiTemplate) 🎆
 * 
 * ⚠️ 项目唯一第四层标准模板 - 禁止修改或替换 ⚠️
 * 
 * 模板功能：展示特定地区的花火大会列表
 * 颜色系统：与第三层ActivityTemplate保持一致的3色循环
 * 文件位置：src/components/RegionalHanabiTemplate.tsx
 * 
 * 🚨 数据格式规范 (必须遵守):
 * 
 * 1. 标题格式 (name字段):
 * ✅ 使用中文标题，简洁明了，不换行
 * ✅ 示例: "越谷花火大会"、"入间基地纳凉祭"、"西武园大火祭"
 * ❌ 避免: 日文原文、冗长副标题、换行符
 * 
 * 2. 访客数据格式 (visitors字段):
 * ✅ 按照信息来源原始格式填写，但必须使用汉字显示（简体繁体均可）
 * ✅ 示例: "约17万人"、"16万人"、"3万5000人"、"非公开"、"未公布"
 * ❌ 避免: 日文格式
 * 
 * 3. 花火数据格式 (fireworks字段):
 * ✅ 按照信息来源原始格式填写，但必须使用汉字显示（简体繁体均可）
 * ✅ 示例: "约1万6000发"、"2500发"、"900发"、"非公开"、"未定"
 * ❌ 避免: 日文格式（如"発"等）
 * 
 * 4. 地区图标 (regionInfo.icon):
 * ✅ 选择最具代表性的地区特色图标
 * ✅ 埼玉: 🌽 (农业特色)、东京: 🗼 (都市特色)
 * 
 * 5. 色调规范:
 * ✅ 与第3层ActivityTemplate保持一致的蓝色渐变系统
 * ✅ 卡片循环: rose-100→white→blue-100→blue-200
 */

interface HanabiEvent {
 id: string;
 name: string;
 date: string;
 location: string;
 visitors: string;
 fireworks: string;
 likes: number;
 // 以下字段都是可选的，根据实际官网信息填写
 englishName?: string;
 specificDate?: string;
 time?: string;
 area?: string;
 highlights?: string[];
 level?: 'primary' | 'secondary';
 crowdLevel?: 'high' | 'medium' | 'low';
 station?: string;
 walkingTime?: string;
 mapUrl?: string;
 image?: string;
 category?: string;
 slug?: string;
 imageUrl?: string;
 detailLink?: string; // 第五层详细页面链接
}

interface MonthInfo {
 month: string;
 monthName: string;
 urlPath: string;
}

interface RegionInfo {
 name: string;
 englishName?: string;
 icon: string;
 description: string;
 urlSlug?: string;
 totalEvents?: number;
 nextRegion?: string;
 previousRegion?: string;
 features?: {
 icon: string;
 title: string;
 description: string;
 }[];
 navigationLinks?: {
 label: string;
 href: string;
 isPrimary?: boolean;
 }[];
}

interface RegionalHanabiTemplateProps {
 events: HanabiEvent[];
 regionInfo: RegionInfo;
 monthInfo?: MonthInfo; // 可选参数，如果没有提供会自动推断
}

export default function RegionalHanabiTemplate({ 
 events, 
 regionInfo,
 monthInfo
}: RegionalHanabiTemplateProps) {
 // 所有Hooks必须在组件顶层调用
 const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
 const [likes, setLikes] = useState<Record<string, number>>({});
 
 // 时间排序函数 - 按日期先后顺序排列
 const sortEventsByDate = (events: HanabiEvent[]) => {
 if (!events || events.length === 0) {
 return [];
 }
 return [...events].sort((a, b) => {
 // 提取日期数字进行排序
 const getDateNumber = (event: HanabiEvent) => {
 // 优先使用 specificDate，如果没有则使用 date
 const dateStr = event.specificDate || event.date;
 
 // 如果没有日期信息，返回默认值
 if (!dateStr) {
 return 999;
 }
 
 // 处理各种日期格式
 if (dateStr.includes('月')) {
 const match = dateStr.match(/(\d+)月(\d+)日/);
 if (match) {
 const month = parseInt(match[1]);
 const day = parseInt(match[2]);
 return month * 100 + day; // 7月26日 -> 726
 }
 }
 // 处理范围日期，取第一个日期
 if (dateStr.includes('-') || dateStr.includes('、')) {
 const firstDate = dateStr.split(/[-、]/)[0];
 return getDateNumber({ specificDate: firstDate } as HanabiEvent);
 }
 // 特殊情况处理
 if (dateStr.includes('特定日') || dateStr.includes('连日')) {
 return 700; // 放在最前面
 }
 return 999; // 无法解析的日期放在最后
 };

 return getDateNumber(a) - getDateNumber(b);
 });
 };

 // 使用时间排序的活动列表
 const sortedEvents = sortEventsByDate(events);

 // 使用useEffect初始化点赞数据
 useEffect(() => {
 // 初始点赞数据：优先使用事件自身的 likes 值
 const getInitialLikes = () => {
 const eventLikes: Record<string, number> = {};
 events.forEach(event => {
 eventLikes[event.id] = event.likes || 0;
 });
 return eventLikes;
 };

 const initialEventLikes = getInitialLikes();

 if (typeof window !== 'undefined') {
 const saved = localStorage.getItem('hanabi-likes');
 if (saved) {
 const savedLikes = JSON.parse(saved);
 // 合并初始数据和保存的数据，保存的数据优先
 setLikes({ ...initialEventLikes, ...savedLikes });
 } else {
 setLikes(initialEventLikes);
 }
 } else {
 setLikes(initialEventLikes);
 }
 }, [events]);
 
 // 早期防护：确保基本数据存在
 if (!regionInfo) {
 return (
 <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 flex items-center justify-center">
 <div className="text-center">
 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
 <p className="text-gray-600">正在加载花火数据...</p>
 </div>
 </div>
 );
 }
 
 // 如果没有提供monthInfo，根据URL路径自动推断月份
 const getMonthInfoFromUrl = () => {
 // 服务端渲染默认值
 const defaultInfo = { month: '7月', monthName: '七月', urlPath: 'july' };
 
 if (typeof window === 'undefined') return defaultInfo;
 
 const path = window.location.pathname;
 const monthPathMap: Record<string, { month: string; monthName: string; urlPath: string }> = {
 'july': { month: '7月', monthName: '七月', urlPath: 'july' },
 'august': { month: '8月', monthName: '八月', urlPath: 'august' },
 'september': { month: '9月', monthName: '九月', urlPath: 'september' },
 'october': { month: '10月', monthName: '十月', urlPath: 'october' },
 'november': { month: '11月', monthName: '十一月', urlPath: 'november' },
 'december': { month: '12月', monthName: '十二月', urlPath: 'december' }
 };
 
 for (const [monthPath, info] of Object.entries(monthPathMap)) {
 if (path.includes(`/${monthPath}/`)) {
 return info;
 }
 }
 
 // 默认返回七月
 return defaultInfo;
 };

 const defaultMonthInfo = monthInfo || getMonthInfoFromUrl();

 // 容错处理：确保urlPath格式正确（去除开头的/和结尾的路径段）
 const safeUrlPath = defaultMonthInfo.urlPath
 ? defaultMonthInfo.urlPath.replace(/^\/+/, '').split('/')[0] // 去除开头的斜杠，只取第一段路径
 : 'july'; // 默认值

 // 开发环境下简单的数据检查，不使用严格验证
 if (process.env.NODE_ENV === 'development') {
 const regionName = regionInfo?.name || '未知地区';
 console.log(`✅ RegionalHanabiTemplate(${regionName}) 数据加载: ${sortedEvents.length}个活动`);
 }

 // 使用配置文件的颜色系统
 const getCardColor = (index: number) => {
 return REGIONAL_CONFIG.cardColors[index % REGIONAL_CONFIG.cardColors.length];
 };

 const getCrowdLevelInfo = (level?: string) => {
 if (!level) return { text: '适中', color: 'bg-gray-200', icon: '⚪' };
 
 // 处理英文格式的人群等级
 if (level === 'high') return REGIONAL_CONFIG.crowdLevels.high;
 if (level === 'medium') return REGIONAL_CONFIG.crowdLevels.medium;
 if (level === 'low') return REGIONAL_CONFIG.crowdLevels.low;
 
 // 处理中文格式的人群等级
 if (level.includes('拥挤') || level.includes('Very High') || level.includes('非常高')) {
 return REGIONAL_CONFIG.crowdLevels.high;
 }
 if (level.includes('适中') || level.includes('中等') || level.includes('Medium') || level.includes('普通')) {
 return REGIONAL_CONFIG.crowdLevels.medium;
 }
 if (level.includes('宽松') || level.includes('较少') || level.includes('Low')) {
 return REGIONAL_CONFIG.crowdLevels.low;
 }
 
 // 默认返回适中
 return REGIONAL_CONFIG.crowdLevels.medium;
 };

 // 点赞处理函数
 const handleLike = (eventId: string) => {
 const newLikes = {
 ...likes,
 [eventId]: (likes[eventId] || 0) + 1
 };
 setLikes(newLikes);
 
 // 保存到localStorage
 if (typeof window !== 'undefined') {
 localStorage.setItem('hanabi-likes', JSON.stringify(newLikes));
 }
 };

 return (
 <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100">
 {/* 背景装饰 */}
 <div className="absolute inset-0 bg-[url('/fireworks-pattern.svg')] opacity-5"></div>
 
 {/* 面包屑导航 - 第1段：蓝色 */}
 <nav className="relative z-10 bg-blue-200 border-b border-blue-300">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
 {/* 桌面端完整面包屑 */}
 <div className="hidden md:flex items-center space-x-2 text-sm">
 <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
 首页
 </Link>
 <span className="text-gray-600">›</span>
 <Link href={`/${defaultMonthInfo.urlPath}`} className="text-gray-700 hover:text-gray-900 transition-colors">
 {defaultMonthInfo.monthName}
 </Link>
 <span className="text-gray-600">›</span>
 <Link href={`/${defaultMonthInfo.urlPath}/hanabi`} className="text-gray-700 hover:text-gray-900 transition-colors">
 花火大会
 </Link>
 <span className="text-gray-600">›</span>
 <span className="text-gray-900 font-medium">{regionInfo?.name || '花火'}</span>
 </div>
 
 {/* 移动端简化导航 */}
 <div className="md:hidden flex items-center justify-between">
 <Link 
 href={`/${defaultMonthInfo.urlPath}/hanabi`}
 className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
 >
 <span>←</span>
 <span className="text-sm">返回花火大会</span>
 </Link>
 <span className="text-gray-900 font-medium text-sm">{regionInfo?.name || '地区'}花火</span>
 </div>
 </div>
 </nav>

 {/* 主要内容 */}
 <main className="relative z-10">
 {/* 标题区域 - 第2段：蓝色 */}
 <section className="pt-12 pb-16 text-center bg-gradient-to-b from-rose-100/60 to-white/50 backdrop-blur-sm">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 mb-6">
 <div>
 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
 <span className="text-4xl md:text-6xl mr-2">{regionInfo?.icon || '🎆'}</span>
 <span className="block md:inline">{defaultMonthInfo.monthName} <span className="text-blue-400">{regionInfo?.name || '地区'}花火</span></span>
 </h1>
 <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
 {regionInfo?.description || '精彩的花火大会即将开始'}
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* 花火大会列表 - 主要内容区：蓝色 */}
 <section className="py-12 bg-white/30 backdrop-blur-sm">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* 简洁视图切换 */}
 <div className="flex justify-end mb-6">
 <ViewModeToggle 
 viewMode={viewMode} 
 onViewModeChange={setViewMode}
 />
 </div>
 <div className={`${
 viewMode === 'grid' 
 ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-fr' 
 : 'space-y-4 md:space-y-5'
 }`}>
 {sortedEvents.map((event, index) => {
 const crowdInfo = getCrowdLevelInfo(event.crowdLevel);
 
 if (viewMode === 'list') {
 return (
 <div
 key={event.id}
 className="bg-white border border-blue-100 rounded-xl p-4 md:p-6 hover:shadow-md transition-all"
 >
 <div className="flex items-center justify-between">
 <div className="flex-1">
 <div className="flex items-center space-x-4">
 <div className={`w-3 h-3 rounded-full ${crowdInfo.color}`}></div>
 <div className="flex-1 min-w-0">
 <h3 className="text-2xl md:text-xl font-bold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis" title={event.name}>{event.name}</h3>
 <p className="text-gray-600 text-sm">{event.area || event.location} · {event.specificDate || event.date}</p>
 </div>
 {event.station && (
 <div className="flex items-center space-x-4 text-sm text-gray-500">
 <span>🚇 {event.station} ({event.walkingTime})</span>
 </div>
 )}
 </div>
 </div>
 <div className="flex items-center space-x-4 text-sm text-gray-600">
 <span>👥 {event.visitors}</span>
 <span>🎆 {event.fireworks}</span>
 <LikeButton 
 eventId={event.id}
 initialLikes={likes[event.id] || 0}
 onLike={handleLike}
 size="md"
 />
 {event.detailLink && (
 <Link
 href={event.detailLink}
 className="bg-blue-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-400 active:scale-95 transition-all"
 >
 查看详情
 </Link>
 )}
 </div>
 </div>
 </div>
 );
 }

 return (
 <div
 key={event.id}
 className="bg-white border border-blue-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-pink-200 transition-all duration-300 group cursor-pointer flex flex-col h-full"
 >
 {/* 图片和标签 */}
 <div className={`relative h-48 bg-gradient-to-br ${getCardColor(index)} flex items-center justify-center flex-shrink-0`}>
 <div className="text-6xl">🎆</div>
 
 {/* 标签叠加 */}
 {event.level && (
 <div className="absolute top-4 left-4">
 <span className={`text-xs px-2 py-1 rounded-full ${
 event.level === 'primary' 
 ? 'bg-white/90 text-gray-700' 
 : 'bg-white/70 text-gray-600'
 }`}>
 {event.level === 'primary' ? '重点推荐' : '值得关注'}
 </span>
 </div>
 )}
 
 <div className="absolute top-4 right-4 flex items-center space-x-1">
 <span className="text-xs">{crowdInfo.icon}</span>
 <span className="text-xs bg-white/80 text-gray-600 px-2 py-1 rounded-full">
 {crowdInfo.text}
 </span>
 </div>
 </div>

 {/* 内容区域 - 使用 flex-1 占据剩余空间 */}
 <div className="p-4 md:p-6 flex flex-col flex-1">
 {/* 标题 - 单行不换行 */}
 <div className="mb-3">
 <h3 className="text-lg md:text-base font-bold text-gray-800 leading-tight whitespace-nowrap overflow-hidden text-ellipsis" title={event.name}>
 {event.name}
 </h3>
 </div>

 {/* 基本信息 - 紧凑布局 */}
 <div className="space-y-2 mb-4">
 {/* 第一行：日期和地点 */}
 <div className="flex items-center justify-between">
 <div className="flex items-center space-x-2">
 <span className="text-sm flex-shrink-0">📅</span>
 <span className="text-xs text-gray-700 font-semibold">{event.date}</span>
 </div>
 <div className="flex items-center space-x-2">
 <span className="text-sm flex-shrink-0">📍</span>
 <span className="text-xs text-gray-600">{event.area || event.location}</span>
 </div>
 </div>
 
 {/* 第二行：人数和花火数 */}
 <div className="flex items-center justify-between">
 <div className="flex items-center space-x-2 min-w-0">
 <span className="text-sm flex-shrink-0">👥</span>
 <span className="text-xs text-blue-600 font-semibold">{event.visitors}</span>
 </div>
 <div className="flex items-center space-x-2 min-w-0">
 <span className="text-sm flex-shrink-0">🎆</span>
 <span className="text-xs text-rose-600 font-semibold">{event.fireworks}</span>
 </div>
 </div>
 </div>

 {/* 交通信息 - 固定高度 */}
 {event.station && (
 <div className="mb-5 p-3 bg-blue-50 rounded-lg border border-blue-100 h-12 flex items-center">
 <div className="flex items-center space-x-2 text-xs min-w-0 w-full">
 <span className="text-sm flex-shrink-0">🚇</span>
 <span className="text-gray-500 flex-shrink-0">最近车站：</span>
 <span className="text-gray-700 font-medium truncate">{event.station}</span>
 <span className="text-gray-500 flex-shrink-0 hidden md:inline">({event.walkingTime})</span>
 </div>
 </div>
 )}

 {/* 行动按钮 - 固定在底部 */}
 <div className="flex space-x-2 mt-auto">
 <LikeButton 
 eventId={event.id}
 initialLikes={likes[event.id] || 0}
 onLike={handleLike}
 size="md"
 />
 {event.detailLink ? (
 <Link
 href={event.detailLink}
 className="flex-1 bg-gradient-to-r from-pink-200 to-blue-200 text-gray-700 font-medium text-center py-3 rounded-lg hover:from-pink-300 hover:to-blue-300 active:scale-95 transition-all flex items-center justify-center"
 >
 查看详情
 </Link>
 ) : (
 <div className="flex-1 bg-gradient-to-r from-pink-200 to-blue-200 text-gray-700 font-medium text-center py-3 rounded-lg cursor-pointer hover:from-pink-300 hover:to-blue-300 active:scale-95 transition-all flex items-center justify-center">
 查看详情
 </div>
 )}
 </div>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </section>

 {/* 快速导航 - 地区花火循环导航 */}
 <section className="py-12 bg-blue-100">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* 地区特色展示 */}
 {regionInfo.features && regionInfo.features.length > 0 && (
 <>
 <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">{regionInfo.name}花火大会特色</h2>
 
 <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
 {regionInfo.features.map((feature, index) => (
 <div key={index} className="flex-1 min-w-0 max-w-xs bg-white rounded-lg p-4 md:p-6 shadow-sm">
 <div className="text-3xl mb-3 text-center">{feature.icon}</div>
 <h3 className="text-base font-bold text-gray-800 mb-2 text-center">{feature.title}</h3>
 <p className="text-gray-600 text-sm text-center">
 {feature.description}
 </p>
 </div>
 ))}
 </div>
 </>
 )}

 {/* 地区花火循环导航 */}
 <div className="max-w-4xl mx-auto text-center">
 <h3 className="text-xl font-bold text-gray-800 mb-6">快速导航</h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
 {(() => {
 // 地区循环顺序配置
 const regionOrder = [
 { name: '东京', urlSlug: 'tokyo', displayName: '东京花火' },
 { name: '埼玉', urlSlug: 'saitama', displayName: '埼玉花火' },
 { name: '千叶', urlSlug: 'chiba', displayName: '千叶花火' },
 { name: '神奈川', urlSlug: 'kanagawa', displayName: '神奈川花火' },
 { name: '北关东', urlSlug: 'kitakanto', displayName: '北关东花火' },
 { name: '甲信越', urlSlug: 'koshinetsu', displayName: '甲信越花火' }
 ];

 // 找到当前地区的索引 - 智能匹配带"花火"后缀的地区名称
 const currentIndex = regionOrder.findIndex(region => {
 // 精确匹配
 if (region.name === regionInfo.name) return true;
 
 // 匹配带"花火"后缀的情况：如 "千叶" 匹配 "千叶花火"
 if (regionInfo.name === region.name + '花火') return true;
 
 // 匹配去掉"花火"后缀的情况：如 "千叶花火" 匹配 "千叶" 
 if (regionInfo.name.endsWith('花火') && regionInfo.name.slice(0, -2) === region.name) return true;
 
 // 调试信息：在开发环境下输出匹配信息
 if (process.env.NODE_ENV === 'development') {
 console.log(`🔍 地区匹配检查: "${regionInfo.name}" vs "${region.name}"`);
 }
 
 return false;
 });
 
 // 调试信息：显示匹配结果
 if (process.env.NODE_ENV === 'development') {
 console.log(`🎯 地区匹配结果: currentIndex=${currentIndex}, regionInfo.name="${regionInfo.name}"`);
 }
 
 if (currentIndex === -1) {
 // 如果找不到当前地区，默认显示返回链接
 console.warn(`⚠️ 未找到地区匹配: "${regionInfo.name}"`);
 return (
 <Link
 href={`/${safeUrlPath}/hanabi`}
 className="col-span-1 md:col-span-3 bg-gradient-to-r from-gray-50 to-white text-gray-700 font-medium px-4 md:px-5 py-3 rounded-lg hover:from-white hover:to-gray-100 active:scale-95 transition-all"
 >
 返回{defaultMonthInfo.monthName}花火
 </Link>
 );
 }

 // 计算上一个和下一个地区（循环）
 const prevIndex = (currentIndex - 1 + regionOrder.length) % regionOrder.length;
 const nextIndex = (currentIndex + 1) % regionOrder.length;
 const prevRegion = regionOrder[prevIndex];
 const nextRegion = regionOrder[nextIndex];

 return (
 <>
 {/* 左按钮：上一个地区 - 粉色系 */}
 <Link
 href={`/${safeUrlPath}/hanabi/${prevRegion.urlSlug}`}
 className="bg-gradient-to-r from-pink-300 to-pink-100 text-gray-700 font-medium px-4 md:px-5 py-3 rounded-lg hover:from-pink-400 hover:to-pink-200 active:scale-95 transition-all flex items-center justify-center"
 >
 ← {prevRegion.displayName}
 </Link>

 {/* 中间按钮：返回月份花火 - 白色系 */}
 <Link
 href={`/${safeUrlPath}/hanabi`}
 className="bg-gradient-to-r from-gray-50 to-white text-gray-700 font-medium px-4 md:px-5 py-3 rounded-lg hover:from-white hover:to-gray-100 active:scale-95 transition-all flex items-center justify-center"
 >
 返回{defaultMonthInfo.monthName}花火
 </Link>

 {/* 右按钮：下一个地区 - 蓝色系 */}
 <Link
 href={`/${safeUrlPath}/hanabi/${nextRegion.urlSlug}`}
 className="bg-gradient-to-r from-blue-100 to-blue-300 text-gray-700 font-medium px-4 md:px-5 py-3 rounded-lg hover:from-blue-200 hover:to-blue-400 active:scale-95 transition-all flex items-center justify-center"
 >
 {nextRegion.displayName} →
 </Link>
 </>
 );
 })()}
 </div>
 </div>
 </div>
 </section>
 </main>

 {/* 页脚 */}
 <footer className="relative z-10 bg-gray-800 border-t border-gray-700 mt-16">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
 <div className="text-center">
 <p className="text-gray-300 text-sm">
 {defaultMonthInfo.monthName}{regionInfo.name}花火大会 | 关东地区旅游指南
 </p>
 </div>
 </div>
 </footer>
 </div>
 );
} 