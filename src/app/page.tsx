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

// 季节色彩配置 - 蓝白粉清新主题
const seasonColors: Record<string, string> = {
  spring: 'from-blue-50 to-blue-100 border-blue-200',
  summer: 'from-pink-50 to-pink-100 border-pink-200', 
  autumn: 'from-yellow-50 to-yellow-100 border-yellow-200',
  winter: 'from-pink-50 to-white border-pink-200'
};

export default function Home() {
  const currentMonth = getCurrentMonth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/japanese-pattern.svg')] opacity-5"></div>
      
      {/* 头部导航 */}
      <header className="relative z-10 bg-blue-300 border-b border-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🎌</div>
              <h1 className="text-xl font-bold text-white">关东地区旅游指南</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <span className="text-white/80 text-sm">
                当前：{months[currentMonth - 1].chinese} · {months[currentMonth - 1].traditional}
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 英雄区域 */}
        <section className="pt-20 pb-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-300 mb-6 leading-relaxed md:leading-relaxed">
              关东地区月度旅游指南
            </h1>

          </div>
        </section>

        {/* 月份选择区域 */}
        <section className="py-16 bg-white/80 backdrop-blur-sm border-t border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">选择旅行月份</h2>
            <p className="text-gray-600 text-center mb-12">
              点击月份了解该月的活动、节庆和旅游亮点
            </p>
            
            {/* 月份网格 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {months.map((month) => {
                const isCurrentMonth = month.id === currentMonth;
                
                return (
                  <Link
                    key={month.id}
                    href={month.hasContent ? `/${getMonthPath(month.id)}` : '#'}
                    className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      month.hasContent 
                        ? `bg-gradient-to-br ${seasonColors[month.season]} hover:shadow-xl cursor-pointer`
                        : 'bg-gray-100 border-gray-300 cursor-not-allowed'
                    }`}

                    onClick={(e) => {
                      if (!month.hasContent) {
                        e.preventDefault();
                      }
                    }}
                  >

                    
                    {/* 月份内容 */}
                    <div className="text-center">
                      {/* 中文数字月份 */}
                      <div className={`text-2xl font-bold mb-2 ${
                        month.hasContent ? 'text-gray-800' : 'text-gray-400'
                      }`}>
                        {month.chinese}
                      </div>
                      
                      {/* 日本传统月名 */}
                      <div className={`text-lg font-medium mb-3 ${
                        month.hasContent ? 'text-gray-700' : 'text-gray-500'
                      }`}>
                        {month.traditional}
                      </div>
                      
                      {/* 含义描述 */}
                      <div className={`text-sm ${
                        month.hasContent ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {month.meaning}
                      </div>
                      
                      {/* 状态提示 */}
                      <div className="mt-4">
                        {!month.hasContent && (
                          <div className="text-gray-500 text-xs">
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
            <div className="mt-12 text-center">
              <p className="text-gray-600 text-sm mb-4">
                按日本传统历法划分的十二个月，每月都有独特的自然景观和文化活动
              </p>
              <div className="flex justify-center space-x-6 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                    <span className="text-sm">🌸</span>
                  </div>
                  <span className="text-gray-600">春季</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-sm">🌿</span>
                  </div>
                  <span className="text-gray-600">夏季</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <span className="text-sm">🍂</span>
                  </div>
                  <span className="text-gray-600">秋季</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm">❄️</span>
                  </div>
                  <span className="text-gray-600">冬季</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 夏季花火特别推荐 - 富士山蓝白主题 */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white border-2 border-blue-200 p-8 rounded-2xl shadow-lg relative overflow-hidden">
              {/* 富士山装饰背景 */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">🎆🗻</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  夏季花火大会正在进行中！
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  七月和八月是关东地区花火大会的黄金时期
                </p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="/july"
                    className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition-all"
                  >
                    七月花火 →
                  </Link>
                  <Link
                    href="/august"
                    className="bg-pink-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-500 transition-all"
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
      <footer className="relative z-10 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl">🎌</div>
                <h3 className="text-lg font-bold text-white">关东地区旅游指南</h3>
              </div>
              <p className="text-gray-300 text-sm">
                按照日本传统月份探索关东地区的旅游亮点
              </p>
            </div>
            <div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 关东地区旅游指南. 专为日本旅游爱好者打造.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 