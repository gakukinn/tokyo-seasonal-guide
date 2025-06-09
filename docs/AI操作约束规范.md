# AI操作约束规范

## 🚫 **绝对禁止操作**

### **1. 核心系统文件禁止修改**
```
scripts/accuracy-enforcer.js
scripts/data-validator.js  
scripts/health-check.js
src/components/HanabiDetailTemplate.tsx
src/components/RegionalHanabiTemplate.tsx
```

**⚠️ 修改这些文件需要用户明确授权：**
```bash
npm run ai-authorize <文件路径> "<修改原因>"
```

### **2. 数据完整性要求**
- ✅ **必须包含media字段** - 防止图片区域显示占位符
- ✅ **必须包含mapEmbedUrl** - 确保地图正常显示  
- ✅ **严禁日文假名字符** - 只允许汉字和中文
- ✅ **必须验证第四层链接** - 确保"查看详情"按钮工作

### **3. 操作流程强制要求**
1. **修改前备份** - 使用AI守护系统
2. **数据验证** - 运行完整性检查
3. **用户确认** - 获得明确授权
4. **测试验证** - 确保功能正常

---

## ✅ **AI安全操作流程**

### **第一步：初始化保护**
```bash
npm run ai-guard-init
```

### **第二步：验证系统完整性**  
```bash
npm run ai-guard-validate
```

### **第三步：如需修改核心文件**
```bash
npm run ai-authorize "scripts/accuracy-enforcer.js" "修复验证逻辑错误"
```

### **第四步：新建页面完整性验证**
```bash
npm run validate-integrity src/data/level5-august-koga-hanabi.ts src/app/august/hanabi/kitakanto/koga/page.tsx
```

---

## 🛡️ **安全检查清单**

### **制作新页面前：**
- [ ] 运行 `npm run ai-guard-validate`
- [ ] 确认有官方数据源
- [ ] 准备完整的media配置

### **制作新页面时：**
- [ ] 创建数据文件（包含所有必填字段）
- [ ] 创建页面文件（正确导入和regionKey）
- [ ] 更新第四层detailLink
- [ ] 运行完整性验证

### **制作新页面后：**
- [ ] 验证图片区域正常显示
- [ ] 验证地图标签页工作
- [ ] 验证"查看详情"按钮
- [ ] 运行 `npm run check-all`

---

## 🚨 **错误恢复流程**

### **检测到未授权修改：**
```bash
# 1. 查看被破坏的文件
npm run ai-guard-validate

# 2. 恢复文件
npm run ai-guard restore <文件路径>

# 3. 重新验证
npm run ai-guard-validate
```

### **数据完整性问题：**
```bash
# 1. 运行诊断
npm run validate-integrity <数据文件> <页面文件>

# 2. 根据报告修复问题
# 3. 重新验证
```

---

## 📋 **AI协作准则**

### **🔍 只检查，不修改**
- 遇到问题时，先报告，再询问
- 绝不自作主张修改关键文件
- 提供解决方案，但等待用户确认

### **📝 透明化操作**  
- 说明每个操作的目的
- 展示修改前后的差异
- 提供撤销操作的方法

### **🎯 专注问题解决**
- 理解用户真正需要什么
- 提供最小化的修改方案
- 确保解决方案的可维护性

---

## 🔧 **技术实现细节**

### **AI守护系统原理：**
1. **文件校验码** - MD5哈希检测文件变化
2. **自动备份** - 修改前创建时间戳备份
3. **授权机制** - 只有明确授权才能修改
4. **恢复功能** - 一键恢复到安全状态

### **数据完整性验证：**
1. **必填字段检查** - 确保所有HanabiData字段完整
2. **格式验证** - 检查日文字符、URL格式等
3. **链接验证** - 确保第四层detailLink正确
4. **功能验证** - 检查图片、地图等功能组件

---

**📞 紧急情况联系：**
如果AI系统出现不可控行为，立即运行：
```bash
npm run ai-guard restore <所有被破坏的文件>
```

**💡 最后提醒：**
AI是助手，不是主导者。所有重要决策都应该由用户做出。 