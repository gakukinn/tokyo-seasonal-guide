'use client';

import Link from 'next/link';



// 地区数据 - 重新排序：东京、周边在上，其他在下
const regions = [
  { id: 'tokyo', name: '东京', count: 4, available: true },
  { id: 'around', name: '周边', count: 1, available: true },
  { id: 'kanagawa', name: '神奈川', count: 2, available: true },
  { id: 'saitama', name: '埼玉', count: 1, available: true },
  { id: 'chiba', name: '千叶', count: 1, available: true }
];

export default function JulyHanabiPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/fireworks-pattern.svg')] opacity-5"></div>
      
      {/* 面包屑导航 */}
      <nav className="relative z-10 bg-blue-300 border-b border-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              首页
            </Link>
            <span className="text-gray-600">›</span>
            <Link href="/july" className="text-gray-700 hover:text-gray-900 transition-colors">
              七月 · 文月
            </Link>
            <span className="text-gray-600">›</span>
            <span className="text-gray-900 font-medium">花火大会</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 标题区域 */}
        <section className="pt-16 pb-12 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-6xl">🎆</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  七月 <span className="text-blue-400">花火大会</span>
                </h1>
                <p className="text-xl text-gray-700">
                  夏夜烟花的绚烂盛典
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              七月是关东地区花火大会的黄金月份，包含了隅田川、立川等顶级花火大会
            </p>
          </div>
        </section>

        {/* 地区选择 */}
        <section className="py-12 bg-white/80 backdrop-blur-sm border-t border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">选择地区</h2>
            <p className="text-gray-600 text-center mb-12">
              探索关东各地区的七月花火大会
            </p>
            
            {/* 上行：东京和周边 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              {regions.slice(0, 2).map((region) => (
                <Link
                  key={region.id}
                  href={region.available ? `/july/hanabi/${region.id}` : '#'}
                  className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    region.available 
                      ? 'bg-gradient-to-br from-pink-100 to-blue-200 border-blue-300 hover:shadow-xl cursor-pointer'
                      : 'bg-gray-100 border-gray-300 cursor-not-allowed'
                  }`}
                  onClick={(e) => {
                    if (!region.available) {
                      e.preventDefault();
                    }
                  }}
                >
                  {/* 即将推出标识 */}
                  {!region.available && (
                    <div className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      即将推出
                    </div>
                  )}
                  
                  <div className="text-center">
                    {/* 地区名称 */}
                    <div className={`text-xl font-bold mb-3 ${
                      region.available ? 'text-gray-800' : 'text-gray-500'
                    }`}>
                      {region.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* 下行：神奈川、埼玉、千叶 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {regions.slice(2).map((region) => (
                <Link
                  key={region.id}
                  href={region.available ? `/july/hanabi/${region.id}` : '#'}
                  className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    region.available 
                      ? 'bg-gradient-to-br from-pink-100 to-blue-200 border-blue-300 hover:shadow-xl cursor-pointer'
                      : 'bg-gray-100 border-gray-300 cursor-not-allowed'
                  }`}
                  onClick={(e) => {
                    if (!region.available) {
                      e.preventDefault();
                    }
                  }}
                >
                  {/* 即将推出标识 */}
                  {!region.available && (
                    <div className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      即将推出
                    </div>
                  )}
                  
                  <div className="text-center">
                    {/* 地区名称 */}
                    <div className={`text-xl font-bold mb-3 ${
                      region.available ? 'text-gray-800' : 'text-gray-500'
                    }`}>
                      {region.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>



        {/* 快速导航 */}
        <section className="py-12 bg-white/80 backdrop-blur-sm border-t border-red-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">快速导航</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/july"
                className="bg-white border-2 border-red-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-red-50 hover:border-red-300 transition-all"
              >
                ← 返回七月
              </Link>
              <Link
                href="/july/hanabi/tokyo"
                className="bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold px-6 py-3 rounded-full hover:from-pink-500 hover:to-blue-500 transition-all"
              >
                东京花火 →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 bg-gray-800 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              七月花火大会 | 关东地区旅游指南
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 