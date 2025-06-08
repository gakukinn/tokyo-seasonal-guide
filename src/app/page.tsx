'use client';

import Link from 'next/link';

// 月份数据 - 日本传统月名设计
const months = [
 { id: 1, chinese: '一月', traditional: '睦月', meaning: '新年团聚', season: 'winter', hasContent: true },
 { id: 2, chinese: '二月', traditional: '如月', meaning: '严寒渐去', season: 'winter', hasContent: true },
 { id: 3, chinese: '三月', traditional: '弥生', meaning: '万物复苏', season: 'spring', hasContent: true },
 { id: 4, chinese: '四月', traditional: '卯月', meaning: '樱花盛开', season: 'spring', hasContent: true },
 { id: 5, chinese: '五月', traditional: '皐月', meaning: '新绿映眼', season: 'spring', hasContent: true },
 { id: 6, chinese: '六月', traditional: '水無月', meaning: '梅雨时节', season: 'summer', hasContent: true },
 { id: 7, chinese: '七月', traditional: '文月', meaning: '七夕文学', season: 'summer', hasContent: true },
 { id: 8, chinese: '八月', traditional: '葉月', meaning: '绿叶茂盛', season: 'summer', hasContent: true },
 { id: 9, chinese: '九月', traditional: '長月', meaning: '夜长昼短', season: 'autumn', hasContent: true },
 { id: 10, chinese: '十月', traditional: '神無月', meaning: '神明聚会', season: 'autumn', hasContent: true },
 { id: 11, chinese: '十一月', traditional: '霜月', meaning: '霜降时节', season: 'autumn', hasContent: true },
 { id: 12, chinese: '十二月', traditional: '師走', meaning: '年末奔忙', season: 'winter', hasContent: true },
];

// 获取当前月份（7月）
const getCurrentMonth = () => {
 return 7; // 当前是7月花火季
};

// 月份路径映射
const getMonthPath = (monthId: number) => {
 const monthPaths: Record<number, string> = {
 1: 'january',
 2: 'february', 
 3: 'march',
 4: 'april',
 5: 'may',
 6: 'june',
 7: 'july',
 8: 'august',
 9: 'september',
 10: 'october',
 11: 'november',
 12: 'december'
 };
 return monthPaths[monthId] || `month-${monthId}`;
};

// 季节色彩配置 - 优雅粉红白蓝渐变主题
const seasonColors: Record<string, string> = {
 spring: 'from-rose-100 to-white border-rose-300/60',
 summer: 'from-white to-blue-100 border-blue-300/60', 
 autumn: 'from-blue-100 to-blue-200 border-blue-300/60',
 winter: 'from-rose-50 to-white border-rose-200/60'
};

export default function Home() {
 const currentMonth = getCurrentMonth();

 return (
 <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100">
 {/* 背景装饰 */}
 <div className="absolute inset-0 bg-[url('/japanese-pattern.svg')] opacity-5"></div>
 
 {/* 头部导航 */}
 <header className="relative z-10 bg-blue-200 border-b border-blue-300 shadow-sm">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-20">
 <div className="flex items-center space-x-4">
 <div className="text-4xl drop-shadow-lg">🎌</div>
 <h1 className="text-2xl font-bold text-gray-800">关东地区旅游指南</h1>
 </div>
 <nav className="hidden md:flex space-x-8 items-center">
 <span className="text-gray-700 text-sm font-medium">
 当前：{months[currentMonth - 1].chinese} · {months[currentMonth - 1].traditional}
 </span>
 <Link 
 href="/admin"
 className="bg-gradient-to-r from-rose-200/80 to-blue-200/80 hover:from-rose-300/80 hover:to-blue-300/80 text-gray-800 text-sm px-4 py-2 rounded-xl transition-all duration-300 font-medium backdrop-blur-sm"
 >
 🛠️ 内容管理
 </Link>
 </nav>
 </div>
 </div>
 </header>

 {/* 主要内容 */}
 <main className="relative z-10">
 {/* 英雄区域 */}
 <section className="pt-24 pb-20 text-center bg-gradient-to-b from-rose-100/60 to-white/50 backdrop-blur-sm">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-relaxed md:leading-relaxed drop-shadow-sm">
 关东地区月度旅游指南
 </h1>
 <p className="text-xl text-gray-700 font-medium mb-8">
 按照日本传统月份探索关东地区的旅游亮点
 </p>
 </div>
 </section>

 {/* 月份选择区域 */}
 <section className="py-20 bg-white/30 backdrop-blur-sm border-t border-white/50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">选择旅行月份</h2>
 <p className="text-gray-700 text-center mb-16 text-lg">
 点击月份了解该月的活动、节庆和旅游亮点
 </p>
 
 {/* 月份网格 */}
 <div className="grid grid-cols-3 gap-8">
 {months.map((month) => {
 const isCurrentMonth = month.id === currentMonth;
 
 return (
 <Link
 key={month.id}
 href={month.hasContent ? `/${getMonthPath(month.id)}` : '#'}
 className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 transform ${
 month.hasContent 
 ? `bg-gradient-to-br ${seasonColors[month.season]} hover:shadow-2xl cursor-pointer hover:scale-110 hover:-translate-y-2 shadow-xl backdrop-blur-sm hover:border-white/80`
 : 'bg-gray-100/80 border-gray-300/60 cursor-not-allowed backdrop-blur-sm shadow-md'
 } ${isCurrentMonth ? 'ring-4 ring-rose-200/50' : ''}`}

 onClick={(e) => {
 if (!month.hasContent) {
 e.preventDefault();
 }
 }}
 >

 
 {/* 月份内容 */}
 <div className="text-center">
 {/* 中文数字月份 */}
 <div className={`text-3xl font-bold mb-3 transition-colors ${
 month.hasContent ? 'text-gray-800 group-hover:text-gray-900' : 'text-gray-400'
 }`}>
 {month.chinese}
 </div>
 
 {/* 日本传统月名 */}
 <div className={`text-xl font-medium mb-4 transition-colors ${
 month.hasContent ? 'text-gray-700 group-hover:text-gray-800' : 'text-gray-500'
 }`}>
 {month.traditional}
 </div>
 
 {/* 含义描述 */}
 <div className={`text-base transition-colors ${
 month.hasContent ? 'text-gray-600 group-hover:text-gray-700' : 'text-gray-500'
 }`}>
 {month.meaning}
 </div>
 
 {/* 状态提示 */}
 <div className="mt-6">
 {!month.hasContent && (
 <div className="bg-gray-200/80 text-gray-500 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
 即将推出
 </div>
 )}
 </div>
 </div>
 </Link>
 );
 })}
 </div>
 
 {/* 季节说明 */}
 <div className="mt-16 text-center">
 <p className="text-gray-700 text-base mb-8 font-medium">
 按日本传统历法划分的十二个月，每月都有独特的自然景观和文化活动
 </p>
 <div className="flex justify-center space-x-10 text-sm">
 <div className="group flex items-center space-x-3 transition-transform hover:scale-110">
 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-100 to-white flex items-center justify-center shadow-lg">
 <span className="text-lg">🌸</span>
 </div>
 <span className="text-gray-800 font-medium">春季</span>
 </div>
 <div className="group flex items-center space-x-3 transition-transform hover:scale-110">
 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-blue-100 flex items-center justify-center shadow-lg">
 <span className="text-lg">🌿</span>
 </div>
 <span className="text-gray-800 font-medium">夏季</span>
 </div>
 <div className="group flex items-center space-x-3 transition-transform hover:scale-110">
 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-lg">
 <span className="text-lg">🍂</span>
 </div>
 <span className="text-gray-800 font-medium">秋季</span>
 </div>
 <div className="group flex items-center space-x-3 transition-transform hover:scale-110">
 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-50 to-white flex items-center justify-center shadow-lg">
 <span className="text-lg">❄️</span>
 </div>
 <span className="text-gray-800 font-medium">冬季</span>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 夏季花火特别推荐 */}
 <section className="py-20 bg-gradient-to-b from-white/40 to-blue-100/60 border-t border-white/50">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="group bg-gradient-to-br from-white to-blue-50 border-2 border-blue-300/60 p-12 rounded-3xl shadow-xl relative overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
 {/* 富士山装饰背景 */}
 <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-200/50 to-transparent rounded-bl-full opacity-60"></div>
 
 <div className="relative z-10">
 <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎆🗻</div>
 <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-gray-900 transition-colors">
 夏季花火大会正在进行中！
 </h3>
 <p className="text-xl text-gray-700 mb-10 group-hover:text-gray-800 transition-colors">
 七月和八月是关东地区花火大会的黄金时期
 </p>
 <div className="flex justify-center space-x-6">
 <Link
 href="/july"
 className="bg-gradient-to-r from-rose-300/90 to-blue-300/90 text-white font-semibold px-10 py-4 rounded-2xl hover:from-rose-400 hover:to-blue-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg backdrop-blur-sm hover:shadow-2xl"
 >
 七月花火 →
 </Link>
 <Link
 href="/august"
 className="bg-white/80 border-2 border-blue-300/60 text-gray-700 font-semibold px-10 py-4 rounded-2xl hover:bg-white hover:border-blue-400/80 hover:text-gray-800 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg backdrop-blur-sm hover:shadow-2xl"
 >
 八月花火 →
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>

 {/* 页脚 */}
 <footer className="relative z-10 bg-gray-800 border-t border-gray-700 mt-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
 <div>
 <div className="flex items-center space-x-4 mb-6">
 <div className="text-3xl">🎌</div>
 <h3 className="text-xl font-bold text-white">关东地区旅游指南</h3>
 </div>
 <p className="text-gray-300 text-base">
 按照日本传统月份探索关东地区的旅游亮点
 </p>
 </div>
 <div>
 </div>
 </div>
 <div className="border-t border-gray-700 mt-12 pt-12 text-center">
 <p className="text-gray-400 text-sm">
 © 2024 关东地区旅游指南. 专为日本旅游爱好者打造.
 </p>
 </div>
 </div>
 </footer>
 </div>
 );
} 