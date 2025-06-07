# 花火图片资源管理规范

## 现有资源清单

### 主要花火图片 (5-6KB，详细设计)
- tamura-fireworks-main.svg - 玉村花火大会
- moka-fireworks-main.svg - 真冈花火大会  
- tatebayashi-fireworks-main.svg - 馆林花火大会
- mito-fireworks-main.svg - 水户花火大会

### 标准花火图片 (2.5KB，通用设计)
- 多个地区的标准花火SVG文件

## 配置media字段规范

### ✅ 正确做法
```typescript
media: [
  {
    type: 'image' as const,
    url: '/images/hanabi/已存在的文件名.svg',  // 必须是实际存在的文件
    title: '活动名称',
    description: '活动描述'
  }
]
```

### ❌ 错误做法  
```typescript
media: [
  {
    url: '/images/hanabi/不存在的文件.svg',  // 会导致404错误
    // ...
  }
]
```

## 工作流程
1. 配置前：检查`public/images/hanabi/`目录
2. 选择现有文件或创建新文件
3. 配置后：测试验证页面正常显示
4. 检查浏览器控制台无404错误

## 占位符策略
如需新图片但暂未制作，使用现有通用图片作为占位符，并在注释中说明。 