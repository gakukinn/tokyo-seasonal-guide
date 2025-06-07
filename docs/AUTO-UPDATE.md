# 🤖 花火数据自动更新系统

## 📋 系统概述

这是一个专业级的花火大会数据自动更新系统，能够从Walker Plus等官方网站自动获取最新数据，并自动更新网站内容。

## 🏗️ 架构设计

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   官方数据源     │────│   数据获取层      │────│   数据处理层     │
│  Walker Plus    │    │  HTTP请求/解析   │    │  验证/格式化     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                ↓
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   文件系统      │────│   存储层         │────│   版本控制      │
│  TypeScript     │    │  数据文件更新    │    │  Git自动提交    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🚀 快速开始

### 本地手动更新
```bash
# 安装依赖
npm install

# 运行数据更新
npm run update-data

# 强制更新所有数据
npm run update-data:force

# 监控模式（开发时使用）
npm run update-data:watch
```

### 自动化部署
1. 推送代码到GitHub
2. GitHub Actions自动运行
3. 每天6点和18点自动更新
4. 也可以手动触发

## ⚙️ 配置说明

### 基础配置 (`config/update-config.json`)
```json
{
  "updateSettings": {
    "frequency": {
      "daily": "06:00",     // 每日更新时间
      "interval": 12,       // 更新间隔（小时）
      "maxRetries": 3       // 最大重试次数
    },
    "validation": {
      "required": ["name", "date"],  // 必需字段
      "patterns": {
        "date": "^\\d{1,2}月\\d{1,2}日"  // 验证规则
      }
    }
  }
}
```

### 安全设置
- **请求限制**: 每2秒最多1个请求
- **用户代理**: 模拟真实浏览器
- **错误处理**: 自动重试和失败通知

## 🔍 功能特性

### ✅ 数据获取
- [x] Walker Plus官方数据同步
- [x] 多地区并行获取
- [x] 智能请求频率控制
- [x] 反爬虫机制应对

### ✅ 数据处理
- [x] HTML解析和数据提取
- [x] 数据格式验证
- [x] 重复数据去除
- [x] 中文本地化处理

### ✅ 文件管理
- [x] TypeScript文件自动生成
- [x] 增量更新检测
- [x] 备份和版本控制
- [x] 构建验证

### ✅ 监控日志
- [x] 详细操作日志
- [x] 错误追踪
- [x] 性能统计
- [x] 更新报告

## 📊 数据源配置

### Walker Plus API映射
| 地区代码 | 地区名称 | 数据URL |
|---------|----------|---------|
| ar0313  | 东京     | `/calendar/07/ar0313/` |
| ar0311  | 埼玉     | `/calendar/07/ar0311/` |
| ar0312  | 千叶     | `/calendar/07/ar0312/` |
| ar0314  | 神奈川   | `/calendar/07/ar0314/` |
| ar0300  | 北关东   | `/calendar/07/ar0300/` |
| ar0400  | 甲信越   | `/calendar/07/ar0400/` |

### 数据字段映射
```javascript
{
  name: "花火大会名称",
  date: "开催日期", 
  location: "开催场所",
  visitors: "来场者数",
  fireworks: "打上数",
  likes: "行ってみたい数"
}
```

## 🛠️ 高级用法

### 自定义数据源
```javascript
// 添加新的数据源
const customSource = {
  name: 'CustomSource',
  baseUrl: 'https://example.com',
  parser: (html) => {
    // 自定义解析逻辑
    return parsedData;
  }
};
```

### 数据验证规则
```javascript
// 自定义验证规则
const customValidation = {
  required: ['name', 'date', 'location'],
  patterns: {
    date: /^\d{1,2}月\d{1,2}日/,
    visitors: /約?\d+万?人?/
  },
  transform: {
    name: (name) => name.replace(/第\d+回\s*/, '')
  }
};
```

## 📈 监控和调试

### 查看日志
```bash
# 实时查看日志
tail -f logs/update.log

# 查看错误日志
grep "ERROR" logs/update.log

# 统计更新次数
grep "更新完成" logs/update.log | wc -l
```

### 调试模式
```bash
# 开启详细日志
DEBUG=hanabi:* npm run update-data

# 单独测试某个地区
node -e "
const updater = require('./scripts/update-hanabi-data.js');
updater.fetchRegionData('ar0313').then(console.log);
"
```

## 🚨 故障排除

### 常见问题

**Q: 更新失败，显示403错误**
A: 可能被反爬虫系统拦截，建议：
- 增加请求间隔时间
- 更换User-Agent
- 使用代理服务器

**Q: 数据格式解析错误**
A: 官方网站可能改版，需要：
- 检查HTML结构变化
- 更新解析规则
- 验证CSS选择器

**Q: GitHub Actions执行失败**
A: 检查以下项目：
- 权限设置是否正确
- 依赖是否安装成功
- 环境变量是否配置

### 紧急修复
```bash
# 回滚到上一个版本
git revert HEAD

# 手动修复数据
npm run update-data:force

# 重新构建
npm run build
```

## 🔐 安全考虑

1. **请求频率**: 严格控制爬取频率，避免对目标网站造成压力
2. **错误处理**: 完善的异常捕获和处理机制
3. **数据验证**: 多层验证确保数据质量
4. **访问控制**: 合理的权限管理和访问限制

## 📞 技术支持

- **问题反馈**: 通过GitHub Issues提交
- **功能建议**: 通过Pull Request贡献
- **紧急联系**: 查看项目维护者信息

---

## 🎯 未来规划

### 短期目标
- [ ] 支持更多数据源
- [ ] 增加实时通知功能
- [ ] 优化性能和稳定性

### 长期目标
- [ ] AI驱动的智能数据分析
- [ ] 多语言支持
- [ ] 移动端数据同步

---

*本系统遵循专业的网站开发最佳实践，确保数据的准确性和系统的稳定性。* 