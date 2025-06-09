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
          🚄 交通信息
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-2">🎫 JR Pass</h4>
            <p className="text-sm text-gray-600 mb-2">适合跨城市旅行，可在JR官网或授权代理商购买</p>
            <Link 
              href="https://www.jrpass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              JR Pass官方网站 →
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-2">🚇 东京地铁</h4>
            <p className="text-sm text-gray-600 mb-2">市内交通首选，可在地铁站购买一日券或多日券</p>
            <Link 
              href="https://www.tokyometro.jp/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              东京地铁官网 →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'tickets') {
    return (
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-lg mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          🎆 观光信息
        </h3>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">🗼 东京观光</h4>
          <p className="text-sm text-gray-600 mb-2">
            推荐提前在官方网站或现场购买景点门票，避免排队等候
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 东京晴空塔：可在官网预约时间段</li>
            <li>• 东京塔：现场购票或官网预订</li>
            <li>• 各大博物馆：建议官网查看开放时间</li>
          </ul>
        </div>
      </div>
    );
  }

  if (type === 'insurance') {
    return (
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 shadow-lg mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          🛡️ 旅游提醒
        </h3>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">💡 出行建议</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• 建议购买旅游保险，保障人身安全和财产安全</li>
            <li>• 随身携带护照复印件和紧急联系方式</li>
            <li>• 了解当地紧急电话：警察110，消防119</li>
            <li>• 保持手机电量充足，下载离线地图</li>
          </ul>
        </div>
      </div>
    );
  }

  return null;
} 