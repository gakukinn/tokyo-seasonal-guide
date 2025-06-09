# 🤖 AI协作快速上手指南

## ⚡ 5分钟快速诊断

### 第一步：项目状态检查
```bash
# 1. 启动开发服务器
npm run dev

# 2. 观察控制台输出，重点关注：
# - ❌ 404错误 (高优先级)
# - ⚠️ 数据格式警告 (中优先级)  
# - 📸 图片加载错误 (中优先级)
# - 🔄 频繁编译 (低优先级，开发环境正常)
```

### 第二步：关键页面测试
打开浏览器测试以下URL（替换localhost:3000为实际端口）：

```
✅ 必测页面：
http://localhost:3000/july/hanabi/kitakanto
http://localhost:3000/july/hanabi/kitakanto/tamura-hanabi
http://localhost:3000/july/hanabi/kitakanto/mito-hanabi
http://localhost:3000/july/hanabi/kitakanto/moka-hanabi
http://localhost:3000/july/hanabi/kitakanto/tatebayashi-hanabi

🔍 检查项目：
- [ ] 页面能正常打开（不是404）
- [ ] 中文显示正确（无日文内容）
- [ ] 页面间链接可以正常跳转
- [ ] 图片或占位符正常显示
- [ ] 响应式布局正常（手机/电脑切换）
```

### 第三步：问题优先级判断
```typescript
interface ProblemPriority {
  🔴 CRITICAL: [
    "404页面错误",
    "网站无法访问", 
    "数据显示错误"
  ],
  
  🟡 HIGH: [
    "数据格式警告",
    "图片加载失败",
    "链接跳转错误"
  ],
  
  🟢 MEDIUM: [
    "性能优化",
    "UI美化",
    "新功能开发"
  ]
}
```

## 🛠️ 常见问题快速修复

### 问题1: 404错误
```bash
# 症状：GET /july/hanabi/kitakanto/kitakanto-july-01 404

# 解决步骤：
1. 检查第4层数据文件中的detailLink是否正确
2. 确认第5层页面文件是否存在
3. 检查第5层数据文件中的related链接

# 实际修复示例：
# 文件：src/data/level5-tamura-hanabi.ts
related: {
  regionRecommendations: [
    {
      id: 'kitakanto-july-02',
      link: '/july/hanabi/kitakanto/mito-hanabi'  // ✅ 正确
      // link: '/july/hanabi/kitakanto'          // ❌ 错误
    }
  ]
}
```

### 问题2: 数据格式警告
```typescript
// 症状：数据格式警告: [ '日期格式不正确: 7月26日' ]

// 修复方法：
// 文件：src/data/level5-*.ts
export const hanabiData: HanabiData = {
  date: '2025年7月26日',  // ✅ 正确格式
  // date: '7月26日',     // ❌ 错误格式
}
```

### 问题3: 图片加载错误
```typescript
// 症状：GET /images/hanabi/xxx.jpg 404

// 解决方案：
// MediaDisplay组件已处理图片错误，会显示占位符
// 建议：使用现有的SVG文件或添加对应图片

// 检查图片文件：
ls public/images/hanabi/
// 应该看到：*.svg文件
```

## 📋 标准操作清单

### 新增花火大会完整流程
```bash
# 1. 数据收集（Walker Plus官方数据）
# 访问：https://hanabi.walkerplus.com/calendar/07/ar03xx/
# 记录：名称、日期、时间、访客数、花火数量、红心数

# 2. 创建第5层数据文件
touch src/data/level5-[花火名称]-hanabi.ts

# 3. 创建页面文件  
mkdir -p src/app/july/hanabi/[地区]/[花火名称]
touch src/app/july/hanabi/[地区]/[花火名称]/page.tsx

# 4. 更新第4层数据
# 编辑：src/app/july/hanabi/[地区]/page.tsx
# 添加新的事件对象到events数组

# 5. 验证和测试
npm run dev
# 访问新创建的页面确认功能正常
```

### 修改现有数据流程
```bash
# 1. 确定要修改的文件
# 第4层：src/app/july/hanabi/[地区]/page.tsx
# 第5层：src/data/level5-[花火名称]-hanabi.ts

# 2. 备份重要数据
cp src/data/level5-[花火名称]-hanabi.ts src/data/level5-[花火名称]-hanabi.ts.backup

# 3. 进行修改
# 遵循数据格式规范

# 4. 测试修改结果
npm run dev
# 确认页面正常显示

# 5. 清理备份文件（如果测试通过）
rm src/data/level5-[花火名称]-hanabi.ts.backup
```

## 🔍 调试技巧

### 查看数据验证日志
```bash
# 开发服务器会显示数据格式警告
# 示例输出：
# 数据格式警告: [ '日期格式不正确: 7月26日' ]

# 查找具体文件：
grep -r "7月26日" src/data/level5-*.ts
```

### 检查页面链接完整性
```bash
# 检查所有第5层页面文件
find src/app/july/hanabi -name "page.tsx" -type f

# 检查所有第5层数据文件
find src/data -name "level5-*.ts" -type f
```

### 验证数据格式
```bash
# 如果有验证脚本
npm run validate-data

# 手动检查关键字段
grep -r "date:" src/data/level5-*.ts | grep -v "2025年"
```

## 💡 最佳实践

### DO ✅
- 每次修改后立即测试
- 遵循现有的命名规范
- 保持数据格式一致性
- 优先使用现有组件和模板
- 修改前备份重要文件

### DON'T ❌
- 不要修改RegionalHanabiTemplate.tsx核心模板
- 不要破坏现有的文件结构
- 不要使用日文内容显示给用户
- 不要忽略TypeScript类型错误
- 不要跳过测试步骤

## 🚨 紧急处理程序

### 如果网站完全无法访问
```bash
# 1. 检查开发服务器状态
ps aux | grep "next dev"

# 2. 重启服务器
pkill -f "next dev"
npm run dev

# 3. 检查端口冲突
lsof -i :3000
```

### 如果出现大量错误
```bash
# 1. 回滚到最近的稳定版本
git log --oneline -5
git reset --hard [stable-commit-hash]

# 2. 重新安装依赖
rm -rf node_modules package-lock.json
npm install

# 3. 重启开发服务器
npm run dev
```

## 📞 需要人工介入的情况

以下情况建议暂停自动修复，等待人工确认：

- 🔴 数据丢失或损坏
- 🔴 核心模板文件需要修改
- 🔴 新增页面层级结构
- 🟡 大批量数据更新
- 🟡 性能问题需要架构调整

## ✅ 完成任务检查清单

每次任务完成后，确认以下项目：

- [ ] 所有测试页面可正常访问
- [ ] 控制台无严重错误或警告
- [ ] 数据格式符合规范
- [ ] 页面间导航功能正常
- [ ] 中文显示内容正确
- [ ] 响应式布局正常
- [ ] 图片/媒体正常显示或有占位符
- [ ] 修改内容已记录在相关文档中

---

**记住：这个指南的目标是让您在5-10分钟内快速理解项目状态并开始有效工作！**

*最后更新: 2025年1月14日* 