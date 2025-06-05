'use client';

import Link from 'next/link';
import { useState } from 'react';

// 神奈川7月花火大会数据（基于Walker Plus 2025年最新信息）
const kanagawaHanabi = [
  {
    id: 'kamakura',
    name: '第77回 镰仓花火大会',
    englishName: 'The 77th Kamakura Fireworks Festival',
    date: '2025年7月18日(金)',
    time: '19:20～20:10',
    location: '神奈川县镰仓市由比滨海岸、材木座海岸',
    fireworksCount: '约2500发',
    expectedVisitors: '约16万人',
    nearestStation: '镰仓站',
    walkTime: '徒步约10分钟',
    wantToGo: 147,
    wentAndGood: 37,
    status: '海上花火',
    themeColor: 'from-blue-400 to-cyan-500',
    tags: ['海上花火', '历史悠久', '避暑']
  },
  {
    id: 'yokohama-night',
    name: '横滨夜花火2025',
    englishName: 'Yokohama Night Flowers 2025',
    date: '7月5日、12日等（毎月开催）',
    time: '20:00～20:05',
    location: '神奈川县横滨市中区山下公园周边',
    fireworksCount: '约150发',
    expectedVisitors: '非公开',
    nearestStation: '日本大通站',
    walkTime: '徒步约3分钟',
    wantToGo: 151,
    wentAndGood: 130,
    status: '月例花火',
    themeColor: 'from-pink-400 to-blue-500',
    tags: ['定期开催', '港町夜景', '轻松']
  },
  {
    id: 'hakkeijima',
    name: '横滨·八景岛海洋天堂"花火交响乐"',
    englishName: 'Yokohama Hakkeijima SeaParadise "Fireworks Symphony"',
    date: '7月19、20、26日等',
    time: '20:30～20:45',
    location: '神奈川县横滨市金泽区八景岛',
    fireworksCount: '约2500发',
    expectedVisitors: '非公开',
    nearestStation: '八景岛站',
    walkTime: '徒步约5分钟',
    wantToGo: 22,
    wentAndGood: 9,
    status: '主题乐园花火',
    themeColor: 'from-purple-400 to-blue-600',
    tags: ['音乐同步', '海洋主题', '家庭']
  }
];

export default function KanagawaHanabiPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
            <Link href="/july/hanabi" className="text-gray-700 hover:text-gray-900 transition-colors">
              花火大会
            </Link>
            <span className="text-gray-600">›</span>
            <span className="text-gray-900 font-medium">神奈川</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="relative z-10">
        {/* 标题区域 */}
        <section className="pt-16 pb-12 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-6xl">🌊</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  神奈川 <span className="text-blue-400">花火大会</span>
                </h1>
                <p className="text-xl text-gray-700">
                  湘南海岸与横滨港的夏夜烟花
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              神奈川县拥有独特的海上花火魅力，镰仓古都与横滨港的现代美景交织
            </p>
          </div>
        </section>

        {/* 视图切换和统计 */}
        <section className="py-8 bg-white/80 backdrop-blur-sm border-t border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* 统计信息 */}
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{kanagawaHanabi.length}</div>
                  <div className="text-sm text-gray-600">花火大会</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">
                    {kanagawaHanabi.reduce((sum, h) => sum + h.wantToGo, 0)}
                  </div>
                  <div className="text-sm text-gray-600">想去人数</div>
                </div>
              </div>

              {/* 视图切换 */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'grid'
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  网格视图
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'list'
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  列表视图
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 花火大会列表 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {kanagawaHanabi.map((hanabi) => (
                  <div
                    key={hanabi.id}
                    className={`bg-gradient-to-br ${hanabi.themeColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="p-6 text-white">
                      {/* 标题和收藏 */}
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold leading-tight">
                          {hanabi.name}
                        </h3>
                        <button
                          onClick={() => toggleFavorite(hanabi.id)}
                          className={`text-2xl transition-all duration-200 hover:scale-110 ${
                            favorites.has(hanabi.id) ? 'text-red-300' : 'text-white/70'
                          }`}
                        >
                          ❤️
                        </button>
                      </div>

                      {/* 基本信息 */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm">
                          <span className="mr-2">📅</span>
                          <span>{hanabi.date}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="mr-2">⏰</span>
                          <span>{hanabi.time}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="mr-2">🚉</span>
                          <span className="truncate">{hanabi.nearestStation} {hanabi.walkTime}</span>
                        </div>
                      </div>

                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hanabi.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-white/20 backdrop-blur-sm text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* 底部按钮 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <span className="text-red-300">❤️</span>
                            <span className="text-sm font-medium">{hanabi.wantToGo}</span>
                          </div>
                        </div>
                        <Link
                          href={`/july/hanabi/kanagawa/${hanabi.id}`}
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
                        >
                          查看详情
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {kanagawaHanabi.map((hanabi) => (
                  <div
                    key={hanabi.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        {/* 左侧信息 */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {hanabi.name}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <span className="mr-2">📅</span>
                              <span>{hanabi.date}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">⏰</span>
                              <span>{hanabi.time}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">🎆</span>
                              <span>{hanabi.fireworksCount}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">🚉</span>
                              <span>{hanabi.nearestStation}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {hanabi.tags.slice(0, 2).map((tag, index) => (
                              <span
                                key={index}
                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 右侧按钮 */}
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => toggleFavorite(hanabi.id)}
                              className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors"
                            >
                              <span className={`text-xl ${favorites.has(hanabi.id) ? 'text-red-500' : ''}`}>
                                ❤️
                              </span>
                              <span className="text-sm font-medium">{hanabi.wantToGo}</span>
                            </button>
                          </div>
                          <Link
                            href={`/july/hanabi/kanagawa/${hanabi.id}`}
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full transition-all duration-200"
                          >
                            查看详情
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 快速导航 */}
        <section className="py-12 bg-white/80 backdrop-blur-sm border-t border-blue-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">快速导航</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/july/hanabi"
                className="bg-white border-2 border-blue-200 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all"
              >
                ← 返回花火大会
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
              神奈川花火大会 | 关东地区旅游指南
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 