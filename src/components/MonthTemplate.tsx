'use client';

import Link from 'next/link';
import { monthsConfig, getMonthPath, getNavigationMonths, type MonthConfig } from '@/config/monthsConfig';

interface MonthTemplateProps {
 monthId: number;
 customConfig?: Partial<MonthConfig>;
}

export default function MonthTemplate({ monthId, customConfig }: MonthTemplateProps) {
 // 获取基础配置，如果有自定义配置则合并
 const baseConfig = monthsConfig[monthId];
 const monthConfig = customConfig ? { ...baseConfig, ...customConfig } : baseConfig;
 
 if (!monthConfig) {
 return (
 <div className="min-h-screen flex items-center justify-center">
 <div className="text-center">
 <h1 className="text-2xl font-bold text-gray-800 mb-4">页面不存在</h1>
 <p className="text-gray-600 mb-8">找不到指定的月份页面</p>
 <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
 返回首页
 </Link>
 </div>
 </div>
 );
 }

 const navigation = getNavigationMonths(monthConfig.id);

 return (
 <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100">
 
 {/* 面包屑导航 */}
 <nav className="relative z-10 bg-blue-200 border-b border-blue-300 shadow-sm">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
 <div className="flex items-center space-x-2 text-sm">
 <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
 首页
 </Link>
 <span className="text-gray-600">›</span>
 <span className="text-gray-900 font-medium">{monthConfig.chinese} · {monthConfig.traditional}</span>
 </div>
 </div>
 </nav>

 {/* 主要内容 */}
 <main className="relative z-10">
 {/* 标题区域 */}
 <section className="pt-12 pb-12 text-center bg-gradient-to-b from-rose-100/60 to-white/50 backdrop-blur-sm">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-center space-x-8 mb-8">
 <div className="text-7xl drop-shadow-lg">{monthConfig.emoji}</div>
 <div>
 <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-3 drop-shadow-sm">
 {monthConfig.chinese} <span className="text-blue-600">{monthConfig.traditional}</span>
 </h1>
 <p className="text-xl text-gray-700 font-medium">
 {monthConfig.meaning} · {monthConfig.season === 'summer' ? '夏夜花火的黄金时节' : 
 monthConfig.season === 'spring' ? '春花烂漫的美好时光' :
 monthConfig.season === 'autumn' ? '秋高气爽的旅游佳期' :
 '冬日暖阳的温馨季节'}
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* 活动类型选择 */}
 <section className="py-16 bg-white/30 backdrop-blur-sm">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">{monthConfig.chinese}精彩活动分类</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {monthConfig.activities.slice(0, 3).map((activity) => (
 <Link
 key={activity.id}
 href={`/${getMonthPath(monthConfig.id)}/${activity.id}`}
 className={`group relative block p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-br ${activity.color} cursor-pointer hover:shadow-2xl border border-white/60 shadow-xl backdrop-blur-sm hover:border-white/80`}
 >
 <div className="text-center">
 <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
 {activity.icon}
 </div>
 <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
 {activity.name}
 </h3>
 <p className="text-sm mb-3 text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
 {activity.description}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* 旅游实用信息 */}
 <section className="py-16 bg-gradient-to-b from-white/40 to-blue-100/60 border-t border-white/50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">{monthConfig.chinese}旅游实用信息</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
 {/* 天气信息 */}
 <div className="group bg-gradient-to-br from-rose-100 to-white border border-rose-300/60 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-105 hover:-translate-y-1">
 <div className="text-center mb-6">
 <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🌡️</div>
 <h3 className="text-xl font-bold text-gray-800">天气状况</h3>
 </div>
 <div className="text-left space-y-2">
 <p className="text-gray-700 text-sm">🌡️ 平均{monthConfig.weather.temperature} 最高{monthConfig.weather.high_temp}</p>
 {monthConfig.weather.tip.split(/[，,]/).map((tip, index) => (
 <p key={index} className="text-gray-700 text-sm">💡 {tip.trim()}</p>
 ))}
 </div>
 </div>

 {/* 交通信息 */}
 <div className="group bg-gradient-to-br from-white to-blue-100 border border-blue-300/60 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-105 hover:-translate-y-1">
 <div className="text-center mb-6">
 <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🚇</div>
 <h3 className="text-xl font-bold text-gray-800">交通指南</h3>
 </div>
 <div className="text-left space-y-2">
 <p className="text-gray-700 text-sm">💡 {monthConfig.travel_info.transport}</p>
 <p className="text-gray-700 text-sm">💡 大型活动日建议查询最新时刻表</p>
 </div>
 </div>

 {/* 旅游贴士 */}
 <div className="group bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300/60 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-105 hover:-translate-y-1">
 <div className="text-center mb-6">
 <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">💡</div>
 <h3 className="text-xl font-bold text-gray-800">旅游贴士</h3>
 </div>
 <div className="text-left space-y-2">
 {monthConfig.travel_info.tip.split(/[，,]/).map((tip, index) => (
 <p key={index} className="text-gray-700 text-sm">💡 {tip.trim()}</p>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 快速导航 */}
 <section className="py-16 bg-white/50 backdrop-blur-sm border-t border-white/50">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h3 className="text-2xl font-bold text-gray-800 mb-10">快速导航</h3>
 <div className="flex flex-wrap justify-center gap-8">
 {/* 上一个月活动 */}
 <Link
 href={`/${getMonthPath(navigation.prev.id)}`}
 className="bg-white/80 border-2 border-blue-300/60 text-gray-700 font-semibold px-12 py-5 rounded-2xl hover:bg-white hover:border-blue-400/80 hover:text-gray-800 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg backdrop-blur-sm hover:shadow-2xl"
 >
 ← {navigation.prev.name}活动
 </Link>
 
 {/* 返回首页 */}
 <Link
 href="/"
 className="bg-gradient-to-r from-blue-300/90 to-purple-300/90 text-white font-semibold px-12 py-5 rounded-2xl hover:from-blue-400 hover:to-purple-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xl backdrop-blur-sm hover:shadow-2xl"
 >
 返回首页
 </Link>
 
 {/* 下一个月活动 */}
 <Link
 href={`/${getMonthPath(navigation.next.id)}`}
 className="bg-gradient-to-r from-pink-300/90 to-blue-300/90 text-white font-semibold px-12 py-5 rounded-2xl hover:from-pink-400 hover:to-blue-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xl backdrop-blur-sm hover:shadow-2xl"
 >
 {navigation.next.name}活动 →
 </Link>
 </div>
 
 {/* 返回顶部按钮 */}
 <div className="mt-12">
 <button
 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
 className="bg-white/70 hover:bg-white/90 text-blue-600 font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg border border-white/60 backdrop-blur-sm hover:scale-105 hover:-translate-y-1"
 >
 ↑ 返回顶部
 </button>
 </div>
 </div>
 </section>
 </main>

 {/* 页脚 */}
 <footer className="relative z-10 bg-gray-800 border-t border-gray-700 mt-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
 <div className="text-center">
 <p className="text-gray-300 text-sm">
 {monthConfig.chinese} · {monthConfig.traditional} | 关东地区旅游指南
 </p>
 </div>
 </div>
 </footer>
 </div>
 );
} 