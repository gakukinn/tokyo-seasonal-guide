# 图片占位符说明

当前所有花火大会数据都已配置媒体展示功能，但对应的图片文件还不存在。

## 当前需要的文件（按优先级排序）

### 主要花火大会（建议优先添加）
1. `sumida-hanabi-main.jpg` - 隅田川花火大会（7月，最重要）
2. `jingu-hanabi-main.jpg` - 神宫外苑花火大会（8月，市中心）
3. `itabashi-hanabi-main.jpg` - 板桥花火大会（8月，大规模）

### 其他花火大会
4. `setagaya-hanabi-main.jpg` - 世田谷花火大会（10月）
5. `chofu-hanabi-main.jpg` - 调布花火大会（8月）
6. `tachikawa-hanabi-main.jpg` - 立川花火大会（7月）
7. `tokyo-racecourse-hanabi-main.jpg` - 东京竞马场花火大会（10月）
8. `katsushika-hanabi-main.jpg` - 葛饰花火大会（7月）
9. `edogawa-hanabi-main.jpg` - 江户川花火大会（8月）

## 如何添加图片
1. 准备1080x1080像素的花火大会图片
2. 按上述命名保存在此目录中
3. 刷新网页即可看到效果

## 如果使用视频（推荐）
在对应的数据文件中修改：
```typescript
media: [
  {
    type: 'video',  // 改为 'video'
    url: '/videos/[地区名]-hanabi-2024.mp4',
    thumbnail: '/images/[地区名]-hanabi-thumbnail.jpg', // 可选
    title: '花火大会精彩瞬间',
    description: '现场实拍视频',
    duration: '0:10'
  }
]
```

## 功能特点
- 1:1比例，适配所有设备
- 视频自动静音播放
- 优雅的占位符显示
- 统一的设计风格 