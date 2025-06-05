'use client';

import { useEffect } from 'react';

// Stagewise配置
const stagewiseConfig = {
  plugins: [] as any[], // 简化配置以避免类型错误
};

export default function StagewiseProvider() {
  useEffect(() => {
    // Stagewise插件已禁用
    console.log('ℹ️ Stagewise插件已被禁用');
    // if (process.env.NODE_ENV === 'development') {
    //   // 动态导入以避免在生产环境中包含Stagewise
    //   import('@stagewise/toolbar').then(({ initToolbar }) => {
    //     try {
    //       initToolbar(stagewiseConfig);
    //       console.log('✅ Stagewise工具栏已初始化');
    //     } catch (error) {
    //       console.warn('⚠️ Stagewise初始化失败:', error);
    //     }
    //   }).catch(error => {
    //     console.warn('⚠️ 无法加载Stagewise工具栏:', error);
    //   });
    // }
  }, []);

  // 该组件不渲染任何UI
  return null;
} 