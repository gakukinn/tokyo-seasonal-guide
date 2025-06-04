import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Users, Sparkles } from 'lucide-react';

export default function JulyHanabiPage() {
  // 7月花火数据（按日期排序）
  const julyHanabi = [
    // 重点花火
    {
      id: 'tokyo-keiba',
      name: '东京竞马场花火2025',
      englishName: 'Tokyo Racecourse Fireworks 2025',
      date: '7月2日(水)',
      location: 'JRA东京竞马场',
      area: '府中市',
      visitors: '非公表',
      fireworks: '1万4000发',
      isMain: true,
      hasDetail: false,
      theme: 'J-POP音乐同步',
      specialty: '日本最高峰花火娱乐',
      image: '/images/tokyo-keiba-placeholder.jpg'
    },
    {
      id: 'katsushika',
      name: '第59回葛飾納涼花火大会',
      englishName: 'Katsushika Noryo Fireworks Festival',
      date: '7月22日(火)',
      location: '葛飾区柴又野球场',
      area: '葛飾区',
      visitors: '77万人',
      fireworks: '1万5000发',
      isMain: true,
      hasDetail: true,
      theme: '下町传统风情',
      specialty: '五感体验臨场感',
      image: '/images/katsushika-hanabi.jpg'
    },
    {
      id: 'sumida',
      name: '第48回隅田川花火大会',
      englishName: 'Sumida River Fireworks Festival',
      date: '7月26日(土)',
      location: '隅田川两岸双会场',
      area: '墨田区',
      visitors: '91万人',
      fireworks: '2万发',
      isMain: true,
      hasDetail: true,
      theme: '江戸传统文化',
      specialty: '关东最权威花火大会',
      image: '/images/sumida-hanabi.jpg'
    },
    {
      id: 'tachikawa',
      name: '立川昭和纪念公园花火',
      englishName: 'Tachikawa Showa Kinen Park Fireworks',
      date: '7月26日(土)',
      location: '国营昭和纪念公园',
      area: '立川市',
      visitors: '32万人',
      fireworks: '5000发',
      isMain: true,
      hasDetail: true,
      theme: '自然公园环境',
      specialty: '芸协玉等趣向花火',
      image: '/images/tachikawa-hanabi.jpg'
    },
    // 次要花火
    {
      id: 'hachioji',
      name: '八王子花火大会',
      englishName: 'Hachioji Fireworks Festival',
      date: '7月26日(土)',
      location: '富士森公园',
      area: '八王子市',
      visitors: '9万人',
      fireworks: '4000发',
      isMain: false,
      hasDetail: false,
      theme: '地域传统祭典',
      specialty: '迫力满点近距离观赏',
      image: '/images/hachioji-placeholder.jpg'
    },
    {
      id: 'mikurajima',
      name: '御蔵島花火大会',
      englishName: 'Mikurajima Fireworks Festival',
      date: '7月31日(木)',
      location: '御蔵島港',
      area: '御蔵島村',
      visitors: '500人',
      fireworks: '802发',
      isMain: false,
      hasDetail: false,
      theme: '离岛自然环境',
      specialty: '大自然环绕开放感',
      image: '/images/mikurajima-placeholder.jpg'
    }
  ];

  const mainHanabi = julyHanabi.filter(h => h.isMain);
  const subHanabi = julyHanabi.filter(h => !h.isMain);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部导航 */}
      <header className="bg-white shadow-sm border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="text-3xl">🎆</div>
                <h1 className="text-xl font-bold text-gray-900">关东地区旅游指南</h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">首页</Link>
              <Link href="/hanabi/july" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">7月活动</Link>
              <Link href="/region/tokyo" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">东京地区</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 面包屑导航 */}
      <div className="bg-gray-200 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-700">
            <Link href="/" className="hover:text-gray-900 transition-colors font-medium">首页</Link>
            <span className="text-gray-600">›</span>
            <Link href="/hanabi/july" className="hover:text-gray-900 transition-colors font-medium">7月活动</Link>
            <span className="text-gray-600">›</span>
            <span className="text-gray-900 font-bold">7月花火专题</span>
          </nav>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 返回按钮 */}
        <div className="mb-6">
          <Link 
            href="/hanabi/july" 
            className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回7月活动页
          </Link>
        </div>

        {/* 页面标题 */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">7月花火大会专题</h1>
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            探索东京7月最精彩的花火大会！从传统的隅田川到现代的竞马场，
            每一场都是夏日夜空中最璀璨的艺术盛宴。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
              📅 全月6场花火大会
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
              👥 超过200万观众参与
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">
              🎆 累计6万余发花火
            </span>
          </div>
        </section>

        {/* 重点花火大会 */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="text-3xl">🔥</div>
            <h2 className="text-3xl font-bold text-gray-900">重点花火大会</h2>
            <div className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
              规模最大・人气最高
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainHanabi.map((hanabi, index) => (
              <div key={hanabi.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* 花火图片区域 */}
                <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                      {hanabi.date}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{hanabi.name}</h3>
                    <p className="text-sm opacity-90">{hanabi.englishName}</p>
                  </div>
                </div>

                {/* 花火信息 */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{hanabi.area}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{hanabi.visitors}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Sparkles className="w-4 h-4" />
                      <span>{hanabi.fireworks}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">{hanabi.location}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                        {hanabi.theme}
                      </span>
                      <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded">
                        {hanabi.specialty}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    {hanabi.hasDetail ? (
                      <Link 
                        href={`/hanabi/detail/${hanabi.id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        查看详情 →
                      </Link>
                    ) : (
                      <span className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg font-semibold">
                        敬请期待
                      </span>
                    )}
                    <span className="text-xs text-gray-500">
                      第{index + 1}推荐
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 次要花火大会 */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="text-3xl">🎇</div>
            <h2 className="text-3xl font-bold text-gray-900">更多花火选择</h2>
            <div className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
              特色体验
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subHanabi.map((hanabi) => (
              <div key={hanabi.id} className="bg-white rounded-lg shadow border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{hanabi.name}</h3>
                    <p className="text-sm text-gray-600">{hanabi.englishName}</p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded font-semibold">
                    {hanabi.date}
                  </span>
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{hanabi.location} ({hanabi.area})</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span>{hanabi.visitors}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Sparkles className="w-4 h-4 text-gray-500" />
                      <span>{hanabi.fireworks}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded">
                    {hanabi.theme}
                  </span>
                  <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded">
                    {hanabi.specialty}
                  </span>
                </div>

                <button className="w-full bg-gray-100 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed">
                  详情准备中
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 7月花火时间线 */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7月花火时间线</h2>
            <p className="text-gray-700">按时间顺序规划您的花火观赏之旅</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-6">
              {julyHanabi.map((hanabi, index) => (
                <div key={hanabi.id} className="relative flex items-center">
                  <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                  <div className="ml-12 bg-white p-4 rounded-lg shadow border border-gray-200 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{hanabi.name}</h3>
                      <span className="text-blue-600 font-semibold">{hanabi.date}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>📍 {hanabi.area}</span>
                      <span>👥 {hanabi.visitors}</span>
                      <span>🎆 {hanabi.fireworks}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 行动召唤 */}
        <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">探索更多花火体验</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            不同地区有不同的花火特色，不同时间有不同的精彩体验。
            继续探索关东地区的花火世界！
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/hanabi/region/tokyo"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              🏙️ 查看东京所有花火
            </Link>
            <Link 
              href="/hanabi/august"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              📅 查看8月花火
            </Link>
            <Link 
              href="/hanabi/all"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              🎆 查看所有花火
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 