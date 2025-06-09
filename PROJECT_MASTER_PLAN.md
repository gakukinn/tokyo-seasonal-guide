# 🎆 日本花火大会旅游网站 - 项目总规划书

## 📋 项目概述

### 🎯 项目目标
构建一个专业的日本花火大会旅游信息网站，为中文用户提供全面、准确、实时的花火大会信息，包含详细的观赏指南、交通信息、会场详情等。

### 🌟 核心特色
- **多层级信息架构**：月份 → 地区 → 具体花火大会的层级导航
- **中文本地化**：所有显示内容必须为中文简体/繁体，严禁日文显示
- **Walker Plus数据源**：基于官方权威数据确保信息准确性
- **响应式设计**：支持PC、平板、手机等多设备访问
- **实时更新能力**：支持动态数据同步和内容更新

## 🏗️ 技术架构

### 核心技术栈
```typescript
技术栈配置:
- Framework: Next.js 15.3.3 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Development: Node.js + npm
- Deployment: Vercel (推荐)
```

### 项目结构
```
src/
├── app/                    # Next.js App Router页面
│   ├── july/hanabi/       # 7月花火页面
│   ├── august/hanabi/     # 8月花火页面
│   └── [其他月份]/
├── components/            # React组件
│   ├── RegionalHanabiTemplate.tsx    # 第4层地区模板(唯一标准)
│   ├── HanabiDetailTemplate.tsx      # 第5层详情模板
│   ├── MediaDisplay.tsx              # 媒体展示组件
│   └── shared/                       # 共享组件
├── data/                  # 数据文件
│   ├── level4-*.ts       # 第4层地区花火数据
│   ├── level5-*.ts       # 第5层详情页数据
│   └── configs/          # 配置文件
├── types/                 # TypeScript类型定义
├── utils/                 # 工具函数
└── config/               # 项目配置
```

## 📊 数据架构体系

### 层级结构说明
```
第1层: 首页
第2层: 月份页面 (july, august, september, october)
第3层: 活动类型页面 (hanabi花火, matsuri祭典, momiji红叶等)
第4层: 地区页面 (tokyo, saitama, chiba, kanagawa, kitakanto, koshinetsu)
第5层: 具体花火大会详情页
```

### 标准数据源
- **官方数据源**: Walker Plus (https://hanabi.walkerplus.com/)
- **地区代码对照表**:
  ```
  ar0313: 东京都
  ar0311: 埼玉县  
  ar0312: 千叶县
  ar0314: 神奈川县
  ar0300: 北关东(群馬・栃木・茨城)
  ar0400: 甲信越(山梨・長野・新潟)
  ```

## 🎨 设计规范

### UI/UX标准
- **颜色系统**: 3色循环背景 (粉白蓝渐变)
- **响应式断点**: Mobile-first设计
- **图片规格**: 1:1正方形比例，SVG优先
- **交互反馈**: 统一的hover/loading状态

### 模板使用规定
- **第4层**: 必须使用`RegionalHanabiTemplate.tsx`(唯一标准，严禁修改)
- **第5层**: 使用`HanabiDetailTemplate.tsx`
- **媒体显示**: 使用`MediaDisplay.tsx`组件

## 📝 开发规范

### 数据格式要求
```typescript
// 必填字段验证
const requiredFields = [
  'id', 'name', 'date', 'time', 'venues', 
  'access', 'viewingSpots', 'tips', 'contact',
  'mapInfo', 'mapEmbedUrl'  // 地图URL必填
];

// 日期格式标准
date: '2025年7月26日'  // ✅ 正确
date: '7月26日'        // ❌ 错误

// 中文显示要求
name: '水戸偕楽園花火大会'     // ✅ 正确
fireworks: '约5000发'         // ✅ 正确  
fireworks: '約5000発'         // ❌ 错误(日文)
```

### ID命名规范
```typescript
// 第4层ID格式
id: 'regionName-month-number'
例: 'kitakanto-july-01', 'tokyo-august-02'

// 第5层ID格式  
id: 'hanabi-name-year'
例: 'mito-hanabi-2025', 'tamura-hanabi-2025'
```

## 🛠️ 常见问题诊断

### 问题类型及解决方案

#### 1. 404错误
**症状**: `GET /july/hanabi/kitakanto/kitakanto-july-01 404`
**原因**: ID冲突或路径不匹配
**解决**: 
```bash
# 检查第4层数据文件中的ID与detailLink是否匹配
# 确保第5层文件名与detailLink路径一致
```

#### 2. 数据格式警告
**症状**: `数据格式警告: [ '日期格式不正确: 7月26日' ]`
**原因**: 日期格式不符合标准
**解决**:
```typescript
// 修改数据文件中的date字段
date: '2025年7月26日'  // 标准格式
```

#### 3. 图片404错误
**症状**: `GET /images/hanabi/xxx.jpg 404`
**原因**: 图片文件不存在或路径错误
**解决**:
```typescript
// MediaDisplay组件已添加错误处理，会显示占位符
// 建议使用SVG格式: /images/hanabi/xxx.svg
```

#### 4. 频繁编译
**症状**: 每次访问都触发重新编译
**原因**: 开发模式的正常行为，生产环境不会有此问题
**解决**: 
```bash
# 生产环境构建
npm run build
npm run start
```

## 🚀 开发流程指南

### 新增花火大会步骤
1. **数据收集**: 从Walker Plus获取官方数据
2. **创建第5层数据文件**: `src/data/level5-[name]-hanabi.ts`
3. **创建页面文件**: `src/app/july/hanabi/[region]/[name]/page.tsx`
4. **更新第4层数据**: 在对应地区的第4层文件中添加条目
5. **数据验证**: 运行验证脚本检查格式
6. **测试验收**: 验证页面功能和链接

### 数据验证命令
```bash
# 运行数据验证
npm run validate-data

# 检查特定文件
node scripts/validate-level5-data.js [filename]
```

## 📈 性能优化建议

### 当前可优化项
1. **图片懒加载**: 实现图片延迟加载
2. **数据缓存**: 添加数据缓存机制
3. **代码分割**: 优化打包体积
4. **SEO优化**: 添加meta标签和结构化数据

### 监控指标
- **首屏加载时间**: < 3秒
- **页面间导航**: < 1秒
- **图片加载**: < 2秒
- **搜索引擎收录**: 90%以上页面

## 🔧 AI助手使用指南

### 快速诊断命令
当AI接手项目时，请按以下顺序执行：

```bash
# 1. 检查项目状态
npm run dev
# 观察控制台错误和警告

# 2. 验证数据完整性  
npm run validate-data

# 3. 检查文件结构
ls -la src/data/level5-*.ts | wc -l  # 统计第5层文件数量
ls -la src/app/july/hanabi/*/       # 检查页面文件

# 4. 测试关键页面
curl localhost:3000/july/hanabi/kitakanto
curl localhost:3000/july/hanabi/kitakanto/mito-hanabi
```

### 问题解决优先级
1. **🔴 高优先级**: 404错误、页面无法访问
2. **🟡 中优先级**: 数据格式警告、图片加载问题  
3. **🟢 低优先级**: 性能优化、UI美化

### AI执行清单
每次修改后必须检查：
- [ ] 所有页面可正常访问(无404)
- [ ] 数据格式验证通过
- [ ] 中文显示正确(无日文内容)
- [ ] 页面间链接工作正常
- [ ] 图片/媒体正常显示
- [ ] 响应式布局正常

## 📋 下一步规划

### 短期目标 (1-2周)
- [ ] 修复所有现存404错误
- [ ] 完善数据验证系统
- [ ] 统一图片格式为SVG
- [ ] 优化页面加载性能

### 中期目标 (1个月)
- [ ] 添加搜索功能
- [ ] 实现数据自动同步
- [ ] 创建管理后台
- [ ] 添加用户收藏功能

### 长期目标 (3个月)
- [ ] 多语言支持
- [ ] 移动端App
- [ ] 用户社区功能
- [ ] 商业化运营

## 🆘 紧急联系和备份

### 关键文件备份位置
- 数据文件: `src/data/`
- 配置文件: `src/config/`
- 类型定义: `src/types/hanabi.ts`

### 回滚方案
```bash
# 如果出现严重问题，回滚到稳定版本
git log --oneline -10  # 查看最近提交
git reset --hard [commit-hash]  # 回滚到指定提交
```

---

## 📞 AI协作提示

**当您是新接手此项目的AI时，请：**

1. **先阅读这个文档**，理解项目结构和规范
2. **检查当前状态**，运行诊断命令
3. **识别问题优先级**，按重要性处理
4. **遵循开发规范**，不要破坏现有架构
5. **及时更新文档**，记录重要修改

**记住：这是一个生产级项目，任何修改都要谨慎考虑影响范围！**

---
*最后更新: 2025年1月14日*
*项目版本: v1.0*
*维护者: Hanabi Guide Team* 