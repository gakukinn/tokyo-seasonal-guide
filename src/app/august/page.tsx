'use client';

import Link from 'next/link';

export default function AugustPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/fireworks-pattern.svg')] opacity-10"></div>
      
      {/* 面包屑导航 */}
      <nav className="relative z-10 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              首页
            </Link>
            <span className="text-white/40">›</span>
            <span className="text-white font-medium">八月 · 葉月</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 标题区域 */}
        <section className="pt-20 pb-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-6xl">🍃</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  八月 <span className="text-yellow-400">葉月</span>
                </h1>
                <p className="text-xl text-white/70">
                  叶落秋意 · 夏末花火的绚烂尾声
                </p>
              </div>
            </div>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              八月延续了七月的花火热潮，江戸川、神宮等大型花火大会为夏天划下完美句号
            </p>
          </div>
        </section>

        {/* 内容建设中 */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
              <div className="text-6xl mb-6">🚧</div>
              <h2 className="text-3xl font-bold text-white mb-4">
                八月内容正在建设中
              </h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                我们正在努力完善八月的花火大会和活动信息，敬请期待！
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  href="/july"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-3 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all"
                >
                  ← 探索七月
                </Link>
                <Link
                  href="/"
                  className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all"
                >
                  返回首页
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-white/60 text-sm">
              八月 · 葉月 | 关东地区旅游指南
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 