'use client';

import Link from 'next/link';
import { useState } from 'react';

interface AffiliateLinkProps {
  type: 'hotel' | 'transport' | 'insurance' | 'tickets';
  eventName?: string;
  location?: string;
}

export default function AffiliateLinks({ type, eventName, location }: AffiliateLinkProps) {
  const [clickedLink, setClickedLink] = useState<string>('');

  const handleLinkClick = (linkName: string) => {
    setClickedLink(linkName);
    // 这里可以添加Google Analytics事件追踪
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        event_category: 'monetization',
        event_label: linkName,
        value: 1
      });
    }
  };

  if (type === 'hotel') {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 shadow-lg mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          🏨 推荐住宿 {location && `- ${location}周边`}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            href="https://www.booking.com/searchresults.zh-cn.html?ss=东京&checkin=2025-07-25&checkout=2025-07-27&aid=304142"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            onClick={() => handleLinkClick('booking.com')}
          >
            <span className="mr-2">🏢</span>
            Booking.com 查看酒店
          </Link>
          <Link 
            href="https://www.agoda.com/zh-cn/city/tokyo-jp.html?checkin=2025-07-25&checkout=2025-07-27&cid=1844104"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            onClick={() => handleLinkClick('agoda')}
          >
            <span className="mr-2">🌟</span>
            Agoda 特价优惠
          </Link>
        </div>
        <p className="text-sm text-gray-600 mt-3 text-center">
          💡 提示：花火大会期间酒店需求量大，建议提前预订
        </p>
      </div>
    );
  }

  if (type === 'transport') {
    return (
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 shadow-lg mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          🚄 交通优惠券
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            href="https://www.klook.com/zh-CN/activity/126-jr-pass-japan-rail-pass/?aid=3817"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            onClick={() => handleLinkClick('jr-pass')}
          >
            <span className="mr-2">🎫</span>
            JR Pass 全国版
          </Link>
          <Link 
            href="https://www.klook.com/zh-CN/activity/3664-tokyo-metro-pass/?aid=3817"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            onClick={() => handleLinkClick('tokyo-metro')}
          >
            <span className="mr-2">🚇</span>
            东京地铁通票
          </Link>
        </div>
        <p className="text-sm text-gray-600 mt-3 text-center">
          🎯 节省交通费用，多次往返更划算
        </p>
      </div>
    );
  }

  if (type === 'tickets') {
    return (
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-lg mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          🎆 花火大会体验
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <Link 
            href="https://www.klook.com/zh-CN/activity/18602-tokyo-fireworks-festival-boat-cruise/?aid=3817"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            onClick={() => handleLinkClick('boat-cruise')}
          >
            <span className="mr-2">🚢</span>
            隅田川花火游船观赏
          </Link>
          <Link 
            href="https://www.klook.com/zh-CN/activity/1827-tokyo-bay-cruise/?aid=3817"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            onClick={() => handleLinkClick('bay-cruise')}
          >
            <span className="mr-2">📸</span>
            东京湾观光游船
          </Link>
        </div>
        <p className="text-sm text-gray-600 mt-3 text-center">
          ✨ 专业导游带你发现最佳观赏位置
        </p>
      </div>
    );
  }

  if (type === 'insurance') {
    return (
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 shadow-lg mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          🛡️ 旅游保险
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <Link 
            href="https://www.allianz-travel.com.cn/travel-insurance/single-trip?utm_source=affiliate&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            onClick={() => handleLinkClick('travel-insurance')}
          >
            <span className="mr-2">🏥</span>
            日本旅游保险
          </Link>
        </div>
        <p className="text-sm text-gray-600 mt-3 text-center">
          💪 人身意外、医疗费用、航班延误全覆盖
        </p>
      </div>
    );
  }

  return null;
} 