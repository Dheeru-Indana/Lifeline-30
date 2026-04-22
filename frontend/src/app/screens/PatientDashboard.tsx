import { motion } from "motion/react";
import { Activity, Heart, TrendingUp, Clock, Shield, Bell } from "lucide-react";
import { useNavigate } from "react-router";

export function PatientDashboard() {
  const navigate = useNavigate();

  const timeline = [
    {
      time: "2 hours ago",
      type: "signal",
      title: "Activity baseline stable",
      description: "Movement patterns within normal range",
      status: "green",
    },
    {
      time: "6 hours ago",
      type: "checkin",
      title: "Morning check-in completed",
      description: "Reported feeling well, pain level 2/10",
      status: "green",
    },
    {
      time: "Yesterday",
      type: "action",
      title: "Medication reminder sent",
      description: "Confirmed medication taken at 8:00 PM",
      status: "green",
    },
    {
      time: "2 days ago",
      type: "signal",
      title: "Heart rate variation detected",
      description: "Initiated automated check-in, resolved as normal",
      status: "amber",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Welcome back, Sarah</h1>
            <p className="text-slate-600 mt-1">Day 8 of 30-day monitoring period</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
            <Bell className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700">Notifications</span>
          </button>
        </div>

        {/* Health Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30"
              >
                <Shield className="w-12 h-12 text-white" />
              </motion.div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-2xl font-semibold text-slate-900">Stable</span>
                </div>
                <p className="text-slate-600">All vital signs within normal range</p>
                <p className="text-sm text-slate-500 mt-1">AI continuously monitoring your recovery</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <button
                onClick={() => navigate("/triage")}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                View Triage Details
              </button>
              <button
                onClick={() => navigate("/chat")}
                className="px-6 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
              >
                Talk to AI Assistant
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 text-rose-500" />
              </div>
              <p className="text-2xl font-semibold text-slate-900">72</p>
              <p className="text-xs text-slate-500">Heart Rate (bpm)</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Activity className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-2xl font-semibold text-slate-900">5,247</p>
              <p className="text-xs text-slate-500">Steps Today</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-2xl font-semibold text-slate-900">98%</p>
              <p className="text-xs text-slate-500">Recovery Score</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-2xl font-semibold text-slate-900">22</p>
              <p className="text-xs text-slate-500">Days Remaining</p>
            </div>
          </div>
        </motion.div>

        {/* AI System Status */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Activity className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div>
                <p className="font-semibold text-lg">AI Agent Actively Monitoring</p>
                <p className="text-blue-100 text-sm">Next automated check-in in 4 hours</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-100">24/7 Autonomous Care</p>
              <p className="text-xs text-blue-200 mt-1">No action needed from you</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900">Activity Timeline</h2>
            <button
              onClick={() => navigate("/audit")}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View Full History
            </button>
          </div>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.status === "green"
                      ? "bg-green-100"
                      : item.status === "amber"
                      ? "bg-amber-100"
                      : "bg-red-100"
                  }`}
                >
                  {item.type === "signal" && (
                    <Activity
                      className={`w-5 h-5 ${
                        item.status === "green"
                          ? "text-green-600"
                          : item.status === "amber"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    />
                  )}
                  {item.type === "checkin" && (
                    <Clock
                      className={`w-5 h-5 ${
                        item.status === "green"
                          ? "text-green-600"
                          : item.status === "amber"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    />
                  )}
                  {item.type === "action" && (
                    <Bell
                      className={`w-5 h-5 ${
                        item.status === "green"
                          ? "text-green-600"
                          : item.status === "amber"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-slate-900">{item.title}</h3>
                    <span className="text-xs text-slate-500">{item.time}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate("/monitoring")}
            className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group text-left"
          >
            <Activity className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-slate-900 mb-1">View Monitoring Insights</h3>
            <p className="text-sm text-slate-600">See detailed passive monitoring data</p>
          </button>
          <button
            onClick={() => navigate("/emergency")}
            className="bg-white rounded-xl p-6 border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group text-left"
          >
            <Shield className="w-8 h-8 text-red-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-slate-900 mb-1">Emergency Assistance</h3>
            <p className="text-sm text-slate-600">Immediate help if you need it</p>
          </button>
        </div>
      </div>
    </div>
  );
}
