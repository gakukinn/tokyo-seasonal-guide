# 🎯 Stagewise插件使用指南

## ✅ **安装完成状态**

- ✅ Stagewise VS Code扩展已安装
- ✅ Stagewise工具栏包已安装 (`@stagewise/toolbar`)
- ✅ StagewiseProvider组件已配置
- ✅ 开发服务器运行在 http://localhost:3001

## 🚀 **如何使用Stagewise**

### **1. 基本使用流程**

1. **确保Cursor插件已激活**
   - 在Cursor中按 `Ctrl + Shift + P`
   - 输入 "Stagewise" 查看可用命令
   - 确认插件已正确加载

2. **访问网站**
   - 打开浏览器，访问 http://localhost:3000
   - 在浏览器控制台中查看是否有 "✅ Stagewise工具栏已初始化" 消息

3. **激活工具栏**
   - 在网页上，Stagewise工具栏应该自动出现
   - 如果没有出现，检查浏览器控制台是否有错误信息

### **2. 页面元素编辑**

1. **选择元素**
   - 在网页上点击任意元素
   - Stagewise会高亮显示可编辑的元素

2. **添加评论**
   - 右键点击选中的元素
   - 选择 "添加Stagewise评论"
   - 描述您想要的修改

3. **发送到AI**
   - 评论会自动发送到Cursor中的AI助手
   - AI将分析您的需求并提供代码修改建议

### **3. 高级功能**

#### **DOM元素分析**
- Stagewise会捕获元素的DOM结构
- 包含CSS类名、ID、文本内容等信息
- 提供给AI完整的上下文信息

#### **截图功能**
- 自动捕获选中元素的截图
- 帮助AI理解视觉上下文
- 提供更精确的修改建议

#### **代码定位**
- Stagewise会尝试定位元素对应的代码文件
- 直接在Cursor中打开相关文件
- 高亮显示需要修改的代码段

## 🛠️ **故障排除**

### **工具栏未出现**
1. 检查浏览器控制台错误
2. 确认开发模式（NODE_ENV=development）
3. 刷新页面重新加载工具栏

### **无法连接到Cursor**
1. 确保只打开一个Cursor窗口
2. 检查Stagewise插件是否已激活
3. 重启Cursor并重新加载项目

### **评论无法发送**
1. 检查网络连接
2. 确认AI服务可用
3. 查看Cursor中的AI面板状态

## 📝 **配置选项**

当前配置位于 `src/components/StagewiseProvider.tsx`：

```typescript
const stagewiseConfig = {
  plugins: [] // 基础配置，可根据需要扩展
};
```

可以添加自定义插件来增强功能：
- 自定义操作按钮
- 特殊元素处理器
- MCP服务器连接

## 🎨 **与花火大会网站集成**

Stagewise特别适合编辑：
- **文本内容**：标题、描述、时间信息
- **布局样式**：颜色、间距、字体
- **图片元素**：alt文本、尺寸调整
- **链接导航**：URL修改、新页面添加

## 🚦 **下一步**

1. 在浏览器中测试工具栏
2. 尝试选择页面元素
3. 添加修改评论
4. 查看Cursor中的AI响应
5. 应用建议的代码修改

## 📞 **支持**

如遇问题：
1. 查看浏览器开发者工具控制台
2. 检查Cursor的输出面板
3. 重新安装插件如果必要

---

**注意**：Stagewise只在开发模式下工作，不会影响生产环境。 