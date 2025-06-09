# AI代码修改经验总结

## 🚨 常见错误模式及解决方案

### **错误1：删除代码时不够彻底**

**问题描述**：
删除功能时只删除了部分代码，遗漏了相关引用，导致运行时错误。

**典型场景**：
```javascript
// 删除了这些：
const tokyoAreas = [...]
const [selectedArea, setSelectedArea] = useState('all')

// 但遗漏了这些引用：
selectedArea === area.id  // ← 还在使用
filteredEvents.map(...)   // ← 变量已不存在
setSelectedArea(area.id)  // ← 函数已删除
```

**正确做法**：
```bash
# 1. 先搜索所有相关引用
grep -r "selectedArea" src/
grep -r "filteredEvents" src/
grep -r "tokyoAreas" src/

# 2. 列出所有需要修改的文件
# 3. 逐个文件仔细修改
# 4. 修改完成后立即构建测试
```

---

### **错误2：忽略Next.js构建缓存机制**

**问题描述**：
修改代码后直接测试，没有清理构建缓存，导致webpack模块依赖错误。

**典型错误**：
```
Error: Cannot find module './447.js'
[Error: ENOENT: no such file or directory, stat '...webpack...3.pack.gz']
```

**正确流程**：
```bash
# 每次大幅修改代码后：
1. Remove-Item -Recurse -Force .next
2. npx next build
3. npx next dev -p 3002
```

---

### **错误3：缺乏影响范围评估**

**问题描述**：
修改一个功能时没有全面评估影响范围，导致连锁反应。

**改进方案**：
```markdown
修改前必须检查：
□ 该变量/函数在哪些文件中被引用？
□ 删除后会影响哪些组件？
□ UI布局是否需要调整？
□ 是否需要更新类型定义？
```

---

## ✅ 最佳实践指南

### **1. 修改代码的标准流程**

```markdown
🔍 **分析阶段**
1. 完整阅读要修改的功能代码
2. 使用grep搜索所有相关引用
3. 列出影响的文件清单
4. 制定详细修改计划

🛠️ **修改阶段**  
1. 创建备份（git commit 或复制文件）
2. 按计划逐步修改，不要跳跃
3. 每个小步骤后立即验证
4. 出错时立即回滚，重新规划

🧪 **测试阶段**
1. 清理构建缓存：rm -rf .next
2. 重新构建：npx next build  
3. 启动服务器：npx next dev
4. 验证功能是否正常
```

### **2. 删除功能的检查清单**

```markdown
删除React组件功能时必须检查：
□ State变量及其setter函数
□ useEffect依赖数组
□ 事件处理函数
□ 条件渲染逻辑
□ 循环中的引用
□ 类型定义文件
□ CSS类名（如果有的话）
```

### **3. Next.js特定注意事项**

```markdown
□ 大幅修改后务必清理.next缓存
□ 注意webpack模块依赖关系
□ 开发服务器可能需要完全重启
□ 构建错误比运行时错误更可靠
□ 优先相信build结果，而非dev server
```

---

## 🔧 常用命令速查

### **搜索代码引用**
```bash
# Windows PowerShell
Select-String -Pattern "变量名" -Path "src\*" -Recurse
findstr /s /i "变量名" src\*.*

# Linux/Mac
grep -r "变量名" src/
rg "变量名" src/  # 如果安装了ripgrep
```

### **清理和重建**
```bash
# 清理缓存
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules\.cache

# 重新构建
npx next build
npx next dev -p 3002
```

### **检查端口占用**
```bash
# Windows
netstat -ano | findstr :3002
taskkill /F /PID [进程ID]

# 强制关闭所有node进程（谨慎使用）
taskkill /F /IM node.exe
```

---

## 📚 特定项目注意事项

### **hanabi-guide项目**
- 使用自定义数据结构（HanabiData）
- 文件命名规范：level5-july-hanabi-tokyo-[area].ts
- 页面路由结构：/july/hanabi/tokyo/[area]
- 组件使用HanabiDetailTemplate模板

### **备份策略**
```bash
# 创建项目外部备份
Copy-Item -Recurse -Force src ../project-backup-safe/
Copy-Item -Recurse -Force backup ../project-backup-safe/
```

---

## 🎯 核心原则

1. **先理解，再修改** - 不要急于动手
2. **小步快跑** - 每次只改一个小功能
3. **立即验证** - 修改后立即测试
4. **彻底清理** - 删除功能要删除所有相关代码
5. **缓存意识** - 修改后清理构建缓存
6. **备份先行** - 大改前必须备份

**记住：慢即是快，仔细即是效率！**

---

*本文档基于实际开发中的错误总结，持续更新中...* 