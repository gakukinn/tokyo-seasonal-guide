# 动态月份模板系统使用指南

## 概述

本系统将七月页面重构为动态模板，可以基于外部数据源（如 https://www.gotokyo.org ）自动生成十二个月的旅游指南内容。

## 系统架构

### 1. 核心组件

- **MonthTemplate**: 通用月份页面模板组件
- **monthsConfig**: 十二个月的配置数据
- **DataUpdater**: 外部数据获取和更新工具
- **AutoUpdater**: 自动更新任务管理器

### 2. 文件结构

```
src/
├── components/
│   └── MonthTemplate.tsx          # 通用月份模板组件
├── config/
│   └── monthsConfig.ts           # 十二个月的配置数据
├── utils/
│   └── dataUpdater.ts           # 数据更新工具类
├── app/
│   └── july/
│       └── page.tsx             # 七月页面（使用模板）
└── docs/
    └── month-template-guide.md  # 本文档
```

## 使用方法

### 1. 创建新月份页面

为任意月份创建页面，只需要：

```typescript
// src/app/august/page.tsx
'use client';

import MonthTemplate from '@/components/MonthTemplate';

export default function AugustPage() {
  return <MonthTemplate monthId={8} />;
}
```

### 2. 自定义月份配置

可以为特定月份提供自定义配置：

```typescript
// src/app/august/page.tsx
'use client';

import MonthTemplate from '@/components/MonthTemplate';

export default function AugustPage() {
  const customConfig = {
    weather: {
      temperature: '30.5°C',
      high_temp: '超过38°C',
      conditions: '酷热难当',
      tip: '强烈建议室内活动，注意防暑'
    }
  };

  return <MonthTemplate monthId={8} customConfig={customConfig} />;
}
```

### 3. 基于外部数据更新配置

```typescript
import { DataUpdater } from '@/utils/dataUpdater';

// 更新单个月份
const updatedConfig = await DataUpdater.updateMonthConfig(8);

// 更新所有月份
const allConfigs = await DataUpdater.updateAllMonthConfigs();

// 检查数据状态
const status = DataUpdater.getUpdateStatus(8);
console.log(status.isStale); // 数据是否过期
```

## 配置数据结构

### MonthConfig 接口

```typescript
interface MonthConfig {
  id: number;                    // 月份ID (1-12)
  chinese: string;               // 中文名称 "七月"
  traditional: string;           // 传统名称 "文月"
  meaning: string;               // 含义 "七夕文学"
  season: string;                // 季节 "summer"
  emoji: string;                 // 表情符号 "🌙"
  theme_color: string;           // 主题色 "blue"
  
  weather: {                     // 天气信息
    temperature: string;         // 平均气温
    high_temp: string;          // 最高气温
    conditions: string;         // 天气条件
    tip: string;               // 天气提示
  };
  
  activities: Array<{           // 活动列表
    id: string;                // 活动ID
    name: string;              // 活动名称
    description: string;       // 活动描述
    icon: string;             // 图标
    color: string;            // 渐变色
  }>;
  
  travel_info: {               // 旅游信息
    transport: string;         // 交通状况
    accommodation: string;     // 住宿建议
    business_hours: string;    // 营业时间
    tip: string;              // 旅游贴士
  };
  
  external_sources?: {         // 外部数据源
    gotokyo_url?: string;     // 官方网站URL
    last_updated?: string;    // 最后更新时间
  };
}
```

## 外部数据源集成

### 1. 支持的数据源

目前支持以下外部数据源：

- **Go Tokyo官网**: https://www.gotokyo.org/en/story/guide/{month}/index.html
- 可扩展支持其他旅游官网

### 2. 数据解析器

系统会自动解析外部网站的HTML内容，提取以下信息：

- 天气数据（温度、条件、建议）
- 活动信息（节日、庆典、特色活动）
- 旅游提示（交通、住宿、注意事项）

### 3. 自动更新机制

```typescript
import { AutoUpdater } from '@/utils/dataUpdater';

// 启动自动更新（每天执行一次）
AutoUpdater.startAutoUpdate();

// 手动触发更新
await AutoUpdater.triggerUpdate(8); // 更新八月
await AutoUpdater.triggerUpdate();  // 更新所有月份

// 停止自动更新
AutoUpdater.stopAutoUpdate();
```

## 快速开始

### 1. 创建十二个月页面

使用以下脚本快速创建所有月份页面：

```bash
# 创建所有月份目录和页面
for month in january february march april may june july august september october november december; do
  mkdir -p "src/app/${month}"
  cat > "src/app/${month}/page.tsx" << EOF
'use client';

import MonthTemplate from '@/components/MonthTemplate';

export default function ${month^}Page() {
  return <MonthTemplate monthId={$(date -d "${month} 1" +%m | sed 's/^0//')} />;
}
EOF
done
```

### 2. 配置路由

确保你的 `next.config.js` 支持动态路由：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
```

### 3. 添加TypeScript路径别名

在 `tsconfig.json` 中确保路径别名配置正确：

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 自定义和扩展

### 1. 添加新的数据源

```typescript
// 在 DataUpdater 类中添加新的解析器
class CustomSiteParser {
  static parseMonthData(html: string): Partial<MonthConfig> {
    // 自定义解析逻辑
    return {
      weather: {
        // 从新网站提取天气数据
      }
    };
  }
}

// 添加到数据源列表
private static sources: Record<number, ExternalDataSource> = {
  // 现有数据源...
  13: { 
    url: 'https://custom-site.com/month-13', 
    parser: CustomSiteParser.parseMonthData 
  }
};
```

### 2. 自定义UI样式

根据季节自动调整主题色：

```typescript
// 在 MonthTemplate 中添加季节主题
const getSeasonTheme = (season: string) => {
  switch (season) {
    case 'spring': return 'from-green-50 to-pink-50';
    case 'summer': return 'from-blue-50 to-yellow-50';
    case 'autumn': return 'from-orange-50 to-red-50';
    case 'winter': return 'from-blue-50 to-gray-50';
    default: return 'from-blue-50 to-blue-100';
  }
};
```

### 3. 添加多语言支持

```typescript
// 扩展配置支持多语言
interface MultiLangMonthConfig extends MonthConfig {
  translations: {
    en: Partial<MonthConfig>;
    ja: Partial<MonthConfig>;
    // 其他语言...
  };
}
```

## 最佳实践

### 1. 数据验证

在更新配置前，始终验证数据完整性：

```typescript
const updatedConfig = await DataUpdater.updateMonthConfig(8);
if (updatedConfig && DataUpdater.validateConfig(updatedConfig)) {
  // 使用更新后的配置
} else {
  // 使用默认配置或显示错误
}
```

### 2. 错误处理

```typescript
try {
  await AutoUpdater.triggerUpdate();
} catch (error) {
  console.error('数据更新失败:', error);
  // 实现降级策略
}
```

### 3. 性能优化

- 使用缓存避免频繁的网络请求
- 实现增量更新，只更新变化的部分
- 考虑使用CDN缓存外部数据

## 故障排除

### 常见问题

1. **TypeScript路径错误**
   - 确保 `tsconfig.json` 中的路径别名配置正确
   - 检查导入路径是否使用了正确的别名

2. **外部数据获取失败**
   - 检查网络连接
   - 验证外部网站URL是否有效
   - 查看控制台错误日志

3. **配置数据格式错误**
   - 使用 `DataUpdater.validateConfig()` 验证数据
   - 检查必填字段是否完整

### 调试模式

启用详细日志：

```typescript
// 在开发环境中启用详细日志
if (process.env.NODE_ENV === 'development') {
  console.log('Month config:', monthConfig);
  console.log('Update status:', DataUpdater.getUpdateStatus(monthId));
}
```

## 总结

这个动态月份模板系统提供了：

1. **统一的UI设计**: 所有月份页面保持一致的视觉风格
2. **配置化管理**: 通过配置文件轻松管理十二个月的内容
3. **外部数据集成**: 自动从官方网站获取最新信息
4. **高度可扩展**: 支持自定义配置和新数据源
5. **自动化更新**: 定期更新确保信息准确性

通过这个系统，你可以快速创建和维护十二个月的旅游指南页面，同时确保内容的准确性和一致性。 