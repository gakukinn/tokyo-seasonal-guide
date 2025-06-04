'use client';

import Link from 'next/link';

// 7月活动类型数据
const activityTypes = [
  {
    id: 'hanabi',
    name: '花火大会',
    description: '夏夜最美的烟花盛典',
    count: 6,
    icon: '🎆',
    color: 'from-yellow-400 to-orange-500',
    available: true
  },
  {
    id: 'matsuri',
    name: '传统祭祀',
    description: '体验日本传统文化',
    count: 4,
    icon: '🏮',
    color: 'from-red-500 to-pink-600',
    available: false
  },
  {
    id: 'events',
    name: '特色活动',
    description: '音乐节、展览等',
    count: 3,
    icon: '🎪',
    color: 'from-purple-500 to-indigo-600',
    available: false
  }
];

// 7月重点活动时间线
const timelineEvents = [
  {
    date: '7月第三个周六',
    name: '板橋花火大会',
    location: '东京·荒川河岸',
    type: 'hanabi',
    importance: 'secondary'
  },
  {
    date: '7月第四个周六',
    name: '立川まつり国営昭和記念公園花火大会',
    location: '东京·国営昭和記念公園',
    type: 'hanabi',
    importance: 'primary'
  },
  {
    date: '7月最后一个周六',
    name: '隅田川花火大会',
    location: '东京·隅田川',
    type: 'hanabi',
    importance: 'primary'
  },
  {
    date: '7月最后一个周六',
    name: '葛飾納涼花火大会',
    location: '东京·江戸川河川敷',
    type: 'hanabi',
    importance: 'primary'
  }
];

export default function JulyPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/fireworks-pattern.svg')] opacity-5"></div>
      
      {/* 面包屑导航 */}
      <nav className="relative z-10 bg-red-600 border-b border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              首页
            </Link>
            <span className="text-white/60">›</span>
            <span className="text-white font-medium">七月 · 文月</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 标题区域 */}
        <section className="pt-16 pb-12 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-6xl">🌙</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  七月 <span className="text-red-600">文月</span>
                </h1>
                <p className="text-xl text-gray-700">
                  七夕文学 · 夏夜花火的黄金时节
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              七月是关东地区花火大会的核心月份，隅田川、立川等顶级花火大会轮番上演，为夏夜增添绚烂色彩
            </p>
          </div>
        </section>

        {/* 活动类型选择 */}
        <section className="py-12 bg-white/80 backdrop-blur-sm border-t border-red-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">七月活动分类</h2>
            <p className="text-gray-600 text-center mb-12">
              选择感兴趣的活动类型，探索七月的精彩内容
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activityTypes.map((activity) => (
                activity.available ? (
                  <Link
                    key={activity.id}
                    href={`/july/${activity.id}`}
                    className={`relative block p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${activity.color} cursor-pointer hover:shadow-2xl`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">
                        {activity.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {activity.name}
                      </h3>
                      <p className="text-lg mb-4 text-white/90">
                        {activity.description}
                      </p>
                      <div className="text-sm text-white/80">
                        {activity.count} 个活动
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={activity.id}
                    className="relative p-8 rounded-2xl bg-gray-700/30 cursor-not-allowed"
                  >
                    {/* 即将推出标识 */}
                    <div className="absolute top-4 right-4 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                      即将推出
                    </div>
                    
                    <div className="text-center">
                      <div className="text-4xl mb-4 grayscale">
                        {activity.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-500">
                        {activity.name}
                      </h3>
                      <p className="text-lg mb-4 text-gray-600">
                        {activity.description}
                      </p>
                      <div className="text-sm text-gray-700">
                        {activity.count} 个活动
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>



        {/* 七月旅游实用信息 */}
        <section className="py-16 bg-white/80 backdrop-blur-sm border-t border-red-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">七月旅游实用信息</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 天气信息 */}
              <div className="bg-white border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🌡️</div>
                  <h3 className="text-xl font-bold text-gray-800">天气状况</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>平均气温：</span>
                    <span className="text-gray-800 font-medium">25-30°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>湿度：</span>
                    <span className="text-gray-800 font-medium">75-85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>降雨：</span>
                    <span className="text-gray-800 font-medium">梅雨季末期</span>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-xs">
                      💡 建议携带轻便雨具和防晒用品
                    </p>
                  </div>
                </div>
              </div>

              {/* 交通信息 */}
              <div className="bg-white border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🚇</div>
                  <h3 className="text-xl font-bold text-gray-800">交通指南</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>JR山手线：</span>
                    <span className="text-gray-800 font-medium">运行正常</span>
                  </div>
                  <div className="flex justify-between">
                    <span>地下铁：</span>
                    <span className="text-gray-800 font-medium">正常运营</span>
                  </div>
                  <div className="flex justify-between">
                    <span>夏季活动：</span>
                    <span className="text-gray-800 font-medium">部分加班</span>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-xs">
                      💡 大型活动日建议查询最新时刻表
                    </p>
                  </div>
                </div>
              </div>

              {/* 旅游贴士 */}
              <div className="bg-white border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">💡</div>
                  <h3 className="text-xl font-bold text-gray-800">旅游贴士</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>住宿预订：</span>
                    <span className="text-gray-800 font-medium">提前1-2周</span>
                  </div>
                  <div className="flex justify-between">
                    <span>热门活动：</span>
                    <span className="text-gray-800 font-medium">需提前规划</span>
                  </div>
                  <div className="flex justify-between">
                    <span>营业时间：</span>
                    <span className="text-gray-800 font-medium">夏季延长</span>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-xs">
                      💡 建议制定备选方案应对天气变化
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 快速导航 */}
        <section className="py-12 bg-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">快速导航</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/august"
                className="bg-white border-2 border-red-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-red-50 hover:border-red-300 transition-all"
              >
                八月活动 →
              </Link>
              <Link
                href="/july/hanabi"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-6 py-3 rounded-full hover:from-red-600 hover:to-red-700 transition-all"
              >
                七月花火大会 →
              </Link>
              <Link
                href="/"
                className="bg-white border-2 border-red-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-red-50 hover:border-red-300 transition-all"
              >
                ← 返回首页
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
              七月 · 文月 | 关东地区旅游指南
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 