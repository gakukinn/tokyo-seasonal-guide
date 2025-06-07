# AI文件标识规范

## 🎯 目的
为所有花火网站文件建立统一的标识系统，让AI能快速识别文件层级、月份、地区和类型。

## 📋 标识规范

### 页面文件标识 (page.tsx)

#### 第三层页面（活动总览）
```typescript
/**
 * 第三层页面 - [月份]花火大会总览
 * @layer 三层 (Activity Layer)
 * @month [月份]
 * @type 花火活动总览页面
 * @path /[month]/hanabi
 * @description 展示[月份]所有地区的花火大会分类导航
 */
```

#### 第四层页面（地区页面）
```typescript
/**
 * 第四层页面 - [月份][地区]花火大会
 * @layer 四层 (Regional Layer)
 * @month [月份]
 * @region [地区]
 * @type 地区花火页面
 * @path /[month]/hanabi/[region]
 * @description 展示[月份][地区]所有花火大会列表，包含查看详情链接
 */
```

#### 第五层页面（花火详情）
```typescript
/**
 * 第五层页面 - [花火名称]详情
 * @layer 五层 (Detail Layer)
 * @month [月份]
 * @region [地区]
 * @event [花火名称]
 * @type 花火详情页面
 * @path /[month]/hanabi/[region]/[event]
 * @description [花火名称]完整详情信息，包含交通、观赏、历史等
 */
```

### 数据文件标识

#### 第四层数据文件
```typescript
/**
 * 第四层数据文件 - [月份][地区]花火大会数据
 * @layer 四层 (Regional Data)
 * @month [月份]
 * @region [地区]
 * @type 地区花火数据文件
 * @contains [数量]个[地区]花火大会事件数据 + 地区信息 + 月份信息
 * @usage 供 /[month]/hanabi/[region] 页面使用
 */
```

#### 第五层数据文件
```typescript
/**
 * 第五层数据文件 - [花火名称]详情数据
 * @layer 五层 (Detail Data)
 * @month [月份]
 * @region [地区]
 * @event [花火名称]
 * @type 花火详情数据文件
 * @contains 完整的花火大会信息：基本信息、会场、交通、观赏攻略、历史背景等
 * @usage 供 /[month]/hanabi/[region]/[event] 页面使用
 */
```

## 🏷️ 标准标签字段

### tags字段规范
```typescript
tags: {
  timeTag: '[月份]',      // 如：'7月'
  regionTag: '[地区]',    // 如：'东京都'
  typeTag: '花火',        // 固定值
  layerTag: 'Layer [X]详情页'  // 如：'Layer 5详情页'
}
```

## 📂 文件命名规范

### 页面文件
- 第三层：`/[month]/hanabi/page.tsx`
- 第四层：`/[month]/hanabi/[region]/page.tsx`
- 第五层：`/[month]/hanabi/[region]/[event]/page.tsx`

### 数据文件
- 第四层：`level4-[month]-[region]-hanabi.ts`
- 第五层：`level5-[month]-hanabi-[region]-[event].ts`

## 🔍 AI识别关键字

AI可通过以下关键字快速识别文件：

- **@layer**: 确定文件层级
- **@month**: 确定月份分类
- **@region**: 确定地区分类
- **@type**: 确定文件类型
- **@path**: 确定URL路径
- **@usage**: 确定使用场景

## ✅ 示例应用

通过这套标识系统，AI能够：
1. 快速识别文件所属层级
2. 准确定位月份和地区
3. 理解文件功能和用途
4. 找到相关联的文件
5. 执行正确的操作和修改

## 🚀 强制执行

所有新创建的文件都必须按照此规范添加标识注释，确保项目的可维护性和AI协作效率。 