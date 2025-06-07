# 图片资源管理完整指南

## 🚨 必读：防止404错误

### 核心原则
**配置前必须验证，配置后必须测试**

## 🔧 工具和流程

### 1. 配置图片前的检查清单
```bash
# 1. 检查现有资源
ls public/images/hanabi/

# 2. 运行验证脚本
npm run validate-images

# 3. 选择已存在的图片或创建新图片
```

### 2. 配置media字段的标准流程

#### ✅ 正确流程
1. **查看现有资源**
   ```bash
   ls public/images/hanabi/
   ```

2. **选择合适的图片**
   - 优先使用`*-main.svg`（详细版本）
   - 其次使用标准`*-fireworks.svg`

3. **配置数据**
   ```typescript
   media: [
     {
       type: 'image' as const,
       url: '/images/hanabi/existing-file.svg', // 必须是真实存在的文件
       title: '活动标题',
       description: '活动描述'
     }
   ]
   ```

4. **验证配置**
   ```bash
   npm run validate-images
   npm run dev
   # 检查浏览器控制台无404错误
   ```

#### ❌ 错误做法
```typescript
// 不要这样做！
media: [
  {
    url: '/images/hanabi/random-name.svg', // 文件不存在 = 404错误
    // ...
  }
]
```

### 3. 图片资源映射表

#### 主要详细图片（推荐优先使用）
- `tamura-fireworks-main.svg` - 玉村花火（群马）
- `moka-fireworks-main.svg` - 真冈花火（栃木）
- `tatebayashi-fireworks-main.svg` - 馆林花火（群马）
- `mito-fireworks-main.svg` - 水户花火（茨城）

#### 标准图片（通用替代）
- `akishima-fireworks.svg` - 昭岛花火
- `itabashi-fireworks.svg` - 板桥花火
- `edogawa-fireworks.svg` - 江户川花火
- `jingu-gaien-fireworks.svg` - 神宫外苑花火
- 等等...

### 4. 地区匹配建议

| 地区 | 推荐图片 | 备选图片 |
|------|----------|----------|
| 埼玉 | `tamura-fireworks-main.svg` | `itabashi-fireworks.svg` |
| 东京 | `jingu-gaien-fireworks.svg` | `edogawa-fireworks.svg` |
| 千叶 | `edogawa-fireworks.svg` | `marines-fireworks.svg` |
| 神奈川 | `kamakura-fireworks.svg` | `yokohama-night-flowers.svg` |
| 北关东 | `mito-fireworks-main.svg` | `moka-fireworks-main.svg` |
| 甲信越 | `kawaguchi-lake-fireworks.svg` | `anime-classics-fireworks.svg` |

## 🔍 验证和测试

### 自动验证
```bash
# 验证所有图片配置
npm run validate-images

# 预构建检查（包含图片验证）
npm run pre-build
```

### 手动测试
1. 启动开发服务器：`npm run dev`
2. 访问页面
3. 检查图片正常显示
4. 检查浏览器控制台无404错误

### 错误诊断
如果看到404错误：
1. 检查文件是否真实存在：`ls public/images/hanabi/`
2. 检查路径是否正确：验证斜杠、文件名拼写
3. 运行验证脚本：`npm run validate-images`

## 📋 完整工作检查清单

创建或修改第五层页面时：

- [ ] 查看现有图片资源：`ls public/images/hanabi/`
- [ ] 选择合适的已存在图片
- [ ] 配置media字段使用真实路径
- [ ] 运行验证脚本：`npm run validate-images`
- [ ] 启动开发服务器测试
- [ ] 检查浏览器控制台无404错误
- [ ] 验证图片正常显示

## 🚨 紧急修复流程

发现404错误时：
1. 立即运行：`npm run validate-images`
2. 根据建议修复配置
3. 重新测试验证
4. 记录问题避免再犯

## 📞 遇到问题时

1. 首先运行验证脚本诊断
2. 查看本指南的解决方案
3. 检查图片资源映射表
4. 严格按照检查清单执行 