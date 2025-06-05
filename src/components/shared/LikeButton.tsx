'use client';

import { useState, useEffect } from 'react';
import { REGIONAL_CONFIG } from '@/config/regional-template';

interface LikeButtonProps {
  eventId: string;
  initialLikes?: number;
  onLike?: (eventId: string, newCount: number) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LikeButton({ 
  eventId, 
  initialLikes = 0, 
  onLike,
  className = '',
  size = 'md'
}: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isAnimating, setIsAnimating] = useState(false);

  // 从localStorage读取点赞数据
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`likes_${eventId}`);
      if (stored) {
        setLikes(parseInt(stored, 10));
      }
    } catch (error) {
      console.warn('Failed to load likes from localStorage:', error);
    }
  }, [eventId]);

  // 处理点赞
  const handleLike = () => {
    const newCount = likes + 1;
    setLikes(newCount);
    setIsAnimating(true);

    // 保存到localStorage
    try {
      localStorage.setItem(`likes_${eventId}`, newCount.toString());
    } catch (error) {
      console.warn('Failed to save likes to localStorage:', error);
    }

    // 回调通知父组件
    onLike?.(eventId, newCount);

    // 动画结束后重置状态
    setTimeout(() => setIsAnimating(false), 200);
  };

  // 尺寸配置
  const sizeConfig = {
    sm: {
      container: 'px-2 py-2 min-w-[36px] min-h-[36px]',
      icon: 'text-base',
      text: 'text-xs'
    },
    md: {
      container: 'px-3 py-3 min-w-[44px] min-h-[44px]',
      icon: 'text-lg', 
      text: 'text-sm'
    },
    lg: {
      container: 'px-4 py-4 min-w-[52px] min-h-[52px]',
      icon: 'text-xl',
      text: 'text-base'
    }
  };

  const config = sizeConfig[size];

  return (
    <button 
      className={`
        ${config.container}
        bg-red-50 border border-red-200 text-gray-600 rounded-lg 
        ${REGIONAL_CONFIG.animations.like}
        ${isAnimating ? 'scale-110' : ''}
        flex items-center justify-center space-x-1
        ${className}
      `}
      title={`点赞 ${likes} 次 (点击增加)`}
      onClick={handleLike}
      aria-label={`点赞，当前 ${likes} 次`}
    >
      <span className={`text-red-500 ${config.icon} ${isAnimating ? 'animate-pulse' : ''}`}>
        ❤️
      </span>
      <span className={`${config.text} font-bold text-red-600`}>
        {likes}
      </span>
    </button>
  );
} 