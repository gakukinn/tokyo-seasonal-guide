# 花火网站开发规范文档

## 📋 数据结构规范

### 第五层(Level 5)详情页必填字段

所有第五层数据文件必须包含以下字段：

#### 基础信息
- `id`: 唯一标识符
- `name`: 中文名称
- `japaneseName`: 日文原名（**必填，保持原文不翻译**）
- `englishName`: 英文名称
- `year`: 年份（2025）
- `date`: 日期（格式：2025年X月X日）
- `time`: 时间
- `month`: 月份数字

#### 活动详情
- `fireworksCount`: 花火数量
- `expectedVisitors`: 预期访客数
- `status`: 状态（scheduled/confirmed/cancelled/postponed/completed）
- `themeColor`: 主题色

#### 必需对象
- `tags`: 标签信息
- `venues`: 会场信息
- `access`: 交通信息
- `viewingSpots`: 观赏点信息
- `history`: 历史信息
- `tips`: 实用建议
- `contact`: 联系信息
- `mapInfo`: 地图信息
- `weatherInfo`: 天气信息
- `specialFeatures`: 特色功能
- `media`: 媒体内容

### 第四层(Level 4)地区页面必填字段

- `area`: 地区名称
- `events`: 活动列表（每个事件必须包含`detailLink`）
- `description`: 地区描述
- `totalEvents`: 活动总数
- `regionInfo`: 地区信息

## 🔍 质量检查清单

### 开发前检查
- [ ] 确认数据来源为Walker Plus官方
- [ ] 准备好所有必需的字段信息
- [ ] 确认图片资源已存在

### 开发中检查
- [ ] 所有中文内容使用简体中文
- [ ] japaneseName保持原文不翻译
- [ ] 日期格式统一为"2025年X月X日"
- [ ] 状态字段使用规定值

### 开发后验证
```bash
# 运行完整验证
npm run validate-all

# 单独验证各项
npm run validate-images    # 验证图片资源
npm run validate-links     # 验证链接完整性  
npm run validate-japanese  # 验证日文标题
```

## 🚀 GitHub工作流优化

### 提交前检查
```bash
# 必须执行的检查
npm run validate-all
npm run lint
npm run build
```

### 自动化流程
- 每次推送到main/develop分支自动运行验证
- PR合并前强制通过所有验证
- 构建成功才允许部署

## 🛠️ 开发工具使用

### 批量修复工具
```bash
# 批量添加缺失的japaneseName字段
npm run fix-japanese

# 修复图片资源问题
npm run validate-images
```

### 数据结构验证
```bash
# 全面数据结构检查
node scripts/validate-data-structure.js
```

## ⚠️ 常见错误预防

### 1. japaneseName字段缺失
**预防措施：**
- 创建新文件时使用模板
- 定期运行 `npm run validate-japanese`
- 提交前执行 `npm run validate-all`

### 2. 图片资源404
**预防措施：**
- 配置前确认图片文件存在
- 使用 `npm run validate-images` 检查
- 建立图片资源映射表

### 3. 链接断裂
**预防措施：**
- 第四层数据必须包含detailLink
- 确保第五层页面文件存在
- 运行 `npm run validate-links` 验证

### 4. 数据不一致
**预防措施：**
- 严格使用Walker Plus官方数据
- 统一日期时间格式
- 保持中文化标准

## 📈 效率提升建议

### 开发环境配置
1. 配置Git钩子自动运行验证
2. 使用VS Code扩展自动格式化
3. 建立本地数据验证习惯

### 协作流程
1. 分支保护规则
2. PR模板包含检查清单
3. 代码审查重点关注数据质量

### 监控和维护
1. 定期运行完整验证
2. 监控构建状态
3. 及时修复发现的问题

## 🎯 质量目标

- **数据准确率：100%**
- **链接完整性：100%**
- **图片资源可用性：100%**
- **中文化完成度：100%**
- **构建成功率：100%**

## 📞 问题反馈

发现问题时：
1. 运行对应验证脚本确认
2. 查看错误详情和建议
3. 按照修复建议执行
4. 重新验证确认修复
5. 提交修复结果

---

**记住：质量第一，预防胜于治疗！** 