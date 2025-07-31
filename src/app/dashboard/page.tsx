export default function Dashboard() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-slate-800 mb-4 tracking-tight">Dashboard</h1>
          <p className="text-xl text-slate-700">
            Performance tracking for predictions and investment analyses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-200 border-2 border-slate-300 p-8 rounded-2xl hover:border-slate-400 transition-colors duration-200">
            <div className="text-4xl font-semibold text-slate-800 mb-2">0</div>
            <div className="text-sm font-medium text-slate-700 uppercase tracking-wide">Total Predictions</div>
          </div>
          <div className="bg-slate-200 border-2 border-slate-300 p-8 rounded-2xl hover:border-emerald-400 transition-colors duration-200">
            <div className="text-4xl font-semibold text-emerald-700 mb-2">0</div>
            <div className="text-sm font-medium text-slate-700 uppercase tracking-wide">Correct</div>
          </div>
          <div className="bg-slate-200 border-2 border-slate-300 p-8 rounded-2xl hover:border-amber-400 transition-colors duration-200">
            <div className="text-4xl font-semibold text-amber-700 mb-2">0</div>
            <div className="text-sm font-medium text-slate-700 uppercase tracking-wide">Pending</div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Recent Predictions</h2>
            <div className="bg-slate-200 border-2 border-slate-300 rounded-2xl">
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl">📊</div>
                </div>
                <p className="text-xl font-semibold text-slate-800 mb-2">No predictions yet</p>
                <p className="text-slate-700">
                  Predictions will appear here as you create articles with trackable analysis
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Performance Over Time</h2>
            <div className="bg-slate-200 border-2 border-slate-300 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl">📈</div>
                </div>
                <p className="text-xl font-semibold text-slate-800 mb-2">Chart Coming Soon</p>
                <p className="text-slate-700">Performance visualization will appear when data is available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}