'use client';

import Link from 'next/link';

// 10月活动类型数据 - 深秋特色：红叶观赏为主力
const activityTypes = [
  {
    id: 'autumn',
    name: '红叶观赏',
    description: '红叶满山的壮丽景色',
    count: 20,
    icon: '🍁',
    color: 'from-orange-400 to-red-500',
    available: true
  },
  {
    id: 'matsuri',
    name: '秋季祭典',
    description: '神社秋祭与文化祭',
    count: 10,
    icon: '🏮',
    color: 'from-pink-400 to-blue-500',
    available: true
  },
  {
    id: 'events',
    name: '秋季活动',
    description: '菊花展、艺术节等',
    count: 8,
    icon: '🎨',
    color: 'from-purple-500 to-indigo-600',
    available: false
  }
];

export default function OctoberPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 relative">
      {/* 多层背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/70 via-transparent to-red-50/70"></div>
      <div className="absolute inset-0 bg-[url('/autumn-pattern.svg')] opacity-10"></div>
      {/* 浮动装饰圆点 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/40 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-red-200/40 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-yellow-200/40 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-orange-300/40 rounded-full blur-xl"></div>
      
      {/* 面包屑导航 */}
      <nav className="relative z-10 bg-blue-300 border-b border-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              首页
            </Link>
            <span className="text-gray-600">›</span>
            <span className="text-gray-900 font-medium">十月 · 神無月</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 标题区域 */}
        <section className="pt-16 pb-12 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-6xl">🍁</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  十月 <span className="text-blue-400">神無月</span>
                </h1>
                <p className="text-xl text-gray-700">
                  神隐月份 · 红叶满山的绚烂季节
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 活动类型选择 */}
        <section className="py-12 bg-gradient-to-r from-white/90 via-orange-50/80 to-red-50/80 backdrop-blur-sm border-t border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">十月活动分类</h2>
            <p className="text-gray-600 text-center mb-12">
              选择感兴趣的活动类型，探索十月的精彩内容
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activityTypes.map((activity) => (
                activity.available ? (
                  <Link
                    key={activity.id}
                    href={`/october/${activity.id}`}
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
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* 十月旅游实用信息 */}
        <section className="py-16 bg-gradient-to-br from-orange-50/90 via-white/85 to-red-50/90 backdrop-blur-sm border-t border-red-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">十月旅游实用信息</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 天气信息 */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🌡️</div>
                  <h3 className="text-xl font-bold text-gray-800">天气状况</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>平均气温：</span>
                    <span className="text-gray-800 font-medium">15-20°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>湿度：</span>
                    <span className="text-gray-800 font-medium">60-70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>降雨：</span>
                    <span className="text-gray-800 font-medium">较少</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
                    <p className="text-blue-700 text-xs">
                      💡 建议携带保暖外套，早晚温差大
                    </p>
                  </div>
                </div>
              </div>

              {/* 交通信息 */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all">
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
                    <span>红叶季：</span>
                    <span className="text-gray-800 font-medium">部分线路拥堵</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
                    <p className="text-blue-700 text-xs">
                      💡 红叶名所周末人流集中
                    </p>
                  </div>
                </div>
              </div>

              {/* 旅游贴士 */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">💡</div>
                  <h3 className="text-xl font-bold text-gray-800">旅游贴士</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>住宿预订：</span>
                    <span className="text-gray-800 font-medium">提前2周</span>
                  </div>
                  <div className="flex justify-between">
                    <span>热门活动：</span>
                    <span className="text-gray-800 font-medium">红叶观赏</span>
                  </div>
                  <div className="flex justify-between">
                    <span>营业时间：</span>
                    <span className="text-gray-800 font-medium">冬季时间</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
                    <p className="text-blue-700 text-xs">
                      💡 十月下旬红叶最佳观赏期
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 快速导航 */}
        <section className="py-12 bg-white/80 backdrop-blur-sm border-t border-red-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">快速导航</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="bg-white border-2 border-red-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-red-50 hover:border-red-300 transition-all"
              >
                ← 返回首页
              </Link>
              <div className="bg-gray-300 text-gray-500 font-semibold px-6 py-3 rounded-full cursor-not-allowed">
                十月活动（即将推出）
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
              十月神無月 | 关东地区旅游指南
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 