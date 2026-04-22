import { motion } from "motion/react";
import {
  Users,
  AlertCircle,
  CheckCircle,
  Clock,
  Phone,
  TrendingUp,
  Filter,
  Search,
  MoreVertical,
  Brain,
} from "lucide-react";

export function CoordinatorDashboard() {
  const patients = [
    {
      id: "P001",
      name: "Sarah Johnson",
      age: 67,
      diagnosis: "Post-cardiac surgery",
      day: 8,
      status: "green",
      lastCheckIn: "2 hours ago",
      aiDecision: "Stable - Continue monitoring",
      trend: "improving",
      flags: 0,
    },
    {
      id: "P002",
      name: "Michael Chen",
      age: 54,
      diagnosis: "Hip replacement",
      day: 15,
      status: "amber",
      lastCheckIn: "45 min ago",
      aiDecision: "Attention - Teleconsult needed",
      trend: "stable",
      flags: 2,
    },
    {
      id: "P003",
      name: "Emma Williams",
      age: 72,
      diagnosis: "Pneumonia recovery",
      day: 3,
      status: "green",
      lastCheckIn: "4 hours ago",
      aiDecision: "Stable - Continue monitoring",
      trend: "improving",
      flags: 0,
    },
    {
      id: "P004",
      name: "James Martinez",
      age: 61,
      diagnosis: "Post-stroke care",
      day: 22,
      status: "red",
      lastCheckIn: "15 min ago",
      aiDecision: "Emergency - Immediate action",
      trend: "declining",
      flags: 5,
    },
    {
      id: "P005",
      name: "Lisa Anderson",
      age: 58,
      diagnosis: "Diabetes management",
      day: 12,
      status: "green",
      lastCheckIn: "1 hour ago",
      aiDecision: "Stable - Continue monitoring",
      trend: "improving",
      flags: 1,
    },
    {
      id: "P006",
      name: "Robert Taylor",
      age: 69,
      diagnosis: "COPD exacerbation",
      day: 6,
      status: "amber",
      lastCheckIn: "30 min ago",
      aiDecision: "Attention - Teleconsult needed",
      trend: "stable",
      flags: 3,
    },
  ];

  const stats = [
    { label: "Total Patients", value: "247", trend: "+12", color: "blue" },
    { label: "Green Status", value: "198", trend: "+8", color: "green" },
    { label: "Amber Status", value: "42", trend: "+3", color: "amber" },
    { label: "Red Status", value: "7", trend: "+1", color: "red" },
  ];

  const recentAlerts = [
    {
      time: "15 min ago",
      patient: "James Martinez",
      type: "Emergency",
      message: "AI detected severe symptoms - Emergency services contacted",
      severity: "high",
    },
    {
      time: "45 min ago",
      patient: "Michael Chen",
      type: "Teleconsult",
      message: "Movement patterns below baseline - Teleconsult scheduled",
      severity: "medium",
    },
    {
      time: "2 hours ago",
      patient: "Robert Taylor",
      type: "Follow-up",
      message: "Heart rate variation detected - Automated check-in completed",
      severity: "medium",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Care Coordinator Dashboard</h1>
            <p className="text-slate-600 mt-1">Managing 247 patients across 30-day monitoring periods</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Add Patient</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">{stat.label}</span>
                <span
                  className={`text-xs font-medium ${
                    stat.color === "green"
                      ? "text-green-600"
                      : stat.color === "amber"
                      ? "text-amber-600"
                      : stat.color === "red"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {stat.trend}
                </span>
              </div>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent AI Alerts</h2>
          <div className="space-y-3">
            {recentAlerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border ${
                  alert.severity === "high"
                    ? "bg-red-50 border-red-200"
                    : "bg-amber-50 border-amber-200"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <AlertCircle
                      className={`w-5 h-5 mt-0.5 ${
                        alert.severity === "high" ? "text-red-600" : "text-amber-600"
                      }`}
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-slate-900">{alert.patient}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            alert.severity === "high"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {alert.type}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700">{alert.message}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">{alert.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Patient List */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Patient List</h2>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Diagnosis</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Day</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">AI Decision</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Trend</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Last Check-in</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {patients.map((patient, index) => (
                  <motion.tr
                    key={patient.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-slate-900">{patient.name}</p>
                        <p className="text-sm text-slate-500">
                          {patient.id} • {patient.age} yrs
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">{patient.diagnosis}</td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      <span className="font-medium">{patient.day}</span>/30
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {patient.status === "green" && (
                          <>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-green-700">Green</span>
                          </>
                        )}
                        {patient.status === "amber" && (
                          <>
                            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                            <span className="text-sm font-medium text-amber-700">Amber</span>
                          </>
                        )}
                        {patient.status === "red" && (
                          <>
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-red-700">Red</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-slate-700">{patient.aiDecision}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {patient.trend === "improving" && (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        )}
                        {patient.trend === "stable" && (
                          <div className="w-4 h-0.5 bg-blue-600"></div>
                        )}
                        {patient.trend === "declining" && (
                          <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />
                        )}
                        <span className="text-sm text-slate-700 capitalize">{patient.trend}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-600">{patient.lastCheckIn}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                          <Phone className="w-4 h-4 text-slate-600" />
                        </button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4 text-slate-600" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Human Override Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-2">Human-in-the-Loop Controls</h3>
              <p className="text-slate-700 mb-3">
                You can override any AI triage decision. All overrides are logged and tracked for quality assurance.
                Use this power responsibly to ensure patient safety while allowing the AI to learn from your
                expertise.
              </p>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  Override RED to AMBER
                </button>
                <button className="px-4 py-2 bg-white border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors text-sm font-medium">
                  Adjust Triage Rules
                </button>
                <button className="px-4 py-2 bg-white border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors text-sm font-medium">
                  View Override History
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* System Performance */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">AI Accuracy</h3>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">98.7%</p>
            <p className="text-sm text-slate-600">Last 30 days</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Avg Response Time</h3>
              <Clock className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">2.8s</p>
            <p className="text-sm text-slate-600">Triage to action</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Patient Satisfaction</h3>
              <TrendingUp className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">4.8/5</p>
            <p className="text-sm text-slate-600">Based on 1,243 surveys</p>
          </div>
        </div>
      </div>
    </div>
  );
}
