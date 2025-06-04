'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Users, Sparkles } from 'lucide-react';

export default function TokyoRegion() {
  const tokyoFireworks = [
    {
      id: 'sumida',
      name: '隅田川花火大会',
      date: '7月26日',
      location: '隅田川',
      visitors: '91万人',
      description: '东京最具代表性的花火大会，拥有悠久历史',
      image: '/api/placeholder/400/250',
      status: 'highlight'
    },
    {
      id: 'edogawa',
      name: '江戸川花火大会',
      date: '7月27日',
      location: '江戸川河川敷',
      visitors: '90万人',
      description: '第50回纪念大会，音乐配合的精彩演出',
      image: '/api/placeholder/400/250',
      status: 'highlight'
    },
    {
      id: 'katsushika',
      name: '第59回 葛飾納涼花火大会',
      date: '7月22日',
      location: '葛飾柴又',
      visitors: '32万人',
      description: '下町风情传统花火大会，观赏距离极近',
      image: '/api/placeholder/400/250',
      status: 'normal'
    },
    {
      id: 'tachikawa',
      name: '立川昭和纪念公园花火节庆',
      date: '7月12日',
      location: '昭和纪念公园',
      visitors: '25万人',
      description: '都内罕见的尺玉花火，广阔公园内悠闲观赏',
      image: '/api/placeholder/400/250',
      status: 'normal'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>返回主页</span>
            </Link>
            <div className="h-6 border-l border-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">东京地区</h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            7月东京花火大会
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            七月夏日夜空中的璀璨烟花盛宴
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>7月期间</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>东京都内</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>累计观众超过240万人</span>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Sparkles className="text-yellow-500" size={20} />
            重点推荐
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tokyoFireworks.filter(event => event.status === 'highlight').map((event) => (
              <Link 
                key={event.id}
                href={`/hanabi/detail/${event.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm opacity-90">{event.date}</div>
                      <div className="text-xl font-bold">{event.name}</div>
                    </div>
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      推荐
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{event.visitors}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Events */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            其他花火大会
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tokyoFireworks.filter(event => event.status === 'normal').map((event) => (
              <Link 
                key={event.id}
                href={`/hanabi/detail/${event.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 group-hover:shadow-md group-hover:scale-102">
                  <div className="h-32 bg-gradient-to-r from-gray-400 to-gray-500 relative">
                    <div className="absolute bottom-3 left-4 text-white">
                      <div className="text-sm opacity-90">{event.date}</div>
                      <div className="text-lg font-semibold">{event.name}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        <span>{event.visitors}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/hanabi/july"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              查看7月所有花火
            </Link>
            <Link 
              href="/hanabi/tokyo"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              东京花火专题
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 