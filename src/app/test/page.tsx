export default function TestPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          测试页面
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          如果您能看到这个页面，说明Next.js正在正常工作
        </p>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✅ 服务器运行正常
        </div>
      </div>
    </div>
  );
} 