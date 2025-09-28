# 0neTV

基于 LunaTV 的高性能影视播放平台，采用 Cloudflare 边缘计算架构。

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build
```

## 部署到 Cloudflare Pages

### 方法一：GitHub 连接部署

1. Fork 此仓库
2. 在 Cloudflare Pages 中连接 GitHub 仓库
3. 设置构建命令: `npm run build`
4. 设置输出目录: `out`
5. 部署完成

### 方法二：直接上传

1. 本地构建: `npm run build`
2. 上传 `out` 文件夹到 Cloudflare Pages

## 技术栈

- Next.js 13 + React 18
- Tailwind CSS + TypeScript
- 静态导出 (Static Export)

## 特性

- 🔍 多源聚合搜索
- ▶️ 高清在线播放
- ❤️ 收藏同步
- 🚀 全球边缘部署

## 许可证

MIT License