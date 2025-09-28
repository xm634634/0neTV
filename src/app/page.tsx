export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl font-bold mb-6">0neTV</h1>
        <p className="text-2xl mb-8 opacity-90">
          基于 LunaTV 的高性能影视播放平台
        </p>
        <p className="text-lg mb-12 opacity-80">
          采用 Cloudflare 边缘计算架构，全球加速观影体验
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">多源聚合搜索</h3>
            <p className="opacity-80">整合多个视频源，提供丰富的内容选择</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-4">▶️</div>
            <h3 className="text-xl font-semibold mb-2">高清在线播放</h3>
            <p className="opacity-80">基于 ArtPlayer 和 HLS.js 的流畅播放体验</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">收藏同步</h3>
            <p className="opacity-80">跨设备同步收藏和观看记录</p>
          </div>
        </div>

        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-3 rounded-lg text-lg font-semibold transition-all">
          开始使用
        </button>
      </div>
    </div>
  );
}