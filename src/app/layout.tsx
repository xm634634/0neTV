import './globals.css';

export const metadata = {
  title: '0neTV - 高性能影视播放平台',
  description: '基于 LunaTV 的 Cloudflare 边缘计算版本',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}