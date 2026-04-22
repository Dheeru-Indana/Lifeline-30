import { motion } from "motion/react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, Smartphone, Watch, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

export function MonitoringPanel() {
  const heartRateData = [
    { time: "00:00", bpm: 68, baseline: 72 },
    { time: "04:00", bpm: 65, baseline: 72 },
    { time: "08:00", bpm: 72, baseline: 72 },
    { time: "12:00", bpm: 78, baseline: 72 },
    { time: "16:00", bpm: 75, baseline: 72 },
    { time: "20:00", bpm: 70, baseline: 72 },
    { time: "Now", bpm: 72, baseline: 72 },
  ];

  const activityData = [
    { day: "Mon", steps: 4200, baseline: 5000 },
    { day: "Tue", steps: 5100, baseline: 5000 },
    { day: "Wed", steps: 4800, baseline: 5000 },
    { day: "Thu", steps: 5400, baseline: 5000 },
    { day: "Fri", steps: 5247, baseline: 5000 },
  ];

  const signals = [
    {
      category: "Typing Activity",
      status: "normal",
      value: "Normal",
      detail: "Consistent with baseline patterns",
      trend: "stable",
    },
    {
      category: "Phone Usage",
      status: "normal",
      value: "3.2 hrs/day",
      detail: "Within expected range",
      trend: "stable",
    },
    {
      category: "Wearable Vitals",
      status: "normal",
      value: "Synced 5 min ago",
      detail: "All vitals within range",
      trend: "stable",
    },
    {
      category: "Movement Patterns",
      status: "attention",
      value: "Below baseline",
      detail: "15% decrease from yesterday",
      trend: "down",
    },
    {
      category: "Sleep Quality",
      status: "normal",
      value: "7.5 hours",
      detail: "Deep sleep: 2.1 hrs",
      trend: "up",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Passive Monitoring</h1>
          <p className="text-slate-600 mt-1">Real-time health signals and behavioral patterns</p>
        </div>

        {/* AI Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-4 text-white flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-medium">AI Agent is actively monitoring all signals</span>
          </div>
          <span className="text-sm text-blue-100">Last analysis: 2 minutes ago</span>
        </motion.div>

        {/* Signal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white rounded-xl p-6 border-2 transition-all ${
                signal.status === "normal"
                  ? "border-slate-200 hover:border-green-300"
                  : signal.status === "attention"
                  ? "border-amber-300 hover:border-amber-400"
                  : "border-red-300 hover:border-red-400"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-900">{signal.category}</h3>
                {signal.status === "normal" ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                )}
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-1">{signal.value}</p>
              <p className="text-sm text-slate-600">{signal.detail}</p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  {signal.trend === "up" && <TrendingUp className="w-4 h-4 text-green-500" />}
                  {signal.trend === "stable" && <Activity className="w-4 h-4 text-blue-500" />}
                  {signal.trend === "down" && <TrendingUp className="w-4 h-4 text-amber-500 rotate-180" />}
                  <span className="text-xs text-slate-500">
                    {signal.trend === "up" ? "Improving" : signal.trend === "stable" ? "Stable" : "Needs attention"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Heart Rate Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Heart Rate Trend</h2>
                <p className="text-sm text-slate-500">Last 24 hours</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700 font-medium">Normal</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={heartRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} domain={[60, 85]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="baseline"
                  stroke="#94a3b8"
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="bpm"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={{ fill: "#22c55e", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-slate-500">Current: </span>
                  <span className="font-semibold text-slate-900">72 bpm</span>
                </div>
                <div>
                  <span className="text-slate-500">Baseline: </span>
                  <span className="font-semibold text-slate-900">72 bpm</span>
                </div>
                <div>
                  <span className="text-slate-500">Deviation: </span>
                  <span className="font-semibold text-green-600">0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Daily Activity</h2>
                <p className="text-sm text-slate-500">Last 5 days</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                <Activity className="w-3 h-3 text-blue-600" />
                <span className="text-sm text-blue-700 font-medium">Active</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="baseline"
                  stroke="#94a3b8"
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                />
                <Area
                  type="monotone"
                  dataKey="steps"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorSteps)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-slate-500">Today: </span>
                  <span className="font-semibold text-slate-900">5,247 steps</span>
                </div>
                <div>
                  <span className="text-slate-500">Goal: </span>
                  <span className="font-semibold text-slate-900">5,000 steps</span>
                </div>
                <div>
                  <span className="text-slate-500">Progress: </span>
                  <span className="font-semibold text-blue-600">105%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sources */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Connected Data Sources</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-medium text-slate-900">Mobile Device</p>
                <p className="text-xs text-slate-500">Last sync: 1 min ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
              <Watch className="w-8 h-8 text-purple-600" />
              <div>
                <p className="font-medium text-slate-900">Smart Watch</p>
                <p className="text-xs text-slate-500">Last sync: 5 min ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
              <Activity className="w-8 h-8 text-green-600" />
              <div>
                <p className="font-medium text-slate-900">Fitness Tracker</p>
                <p className="text-xs text-slate-500">Last sync: 3 min ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-2">AI Detection Summary</h3>
              <p className="text-slate-700 mb-3">
                Movement patterns show a slight decrease compared to baseline. The system has flagged this for
                follow-up and will initiate an automated check-in within the next 2 hours to assess if intervention is
                needed.
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Autonomous monitoring active - no action required from you</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
