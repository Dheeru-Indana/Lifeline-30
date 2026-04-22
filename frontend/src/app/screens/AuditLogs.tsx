import { motion } from "motion/react";
import {
  FileText,
  Activity,
  Brain,
  User,
  Clock,
  Download,
  Filter,
  Search,
  ChevronDown,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  MessageSquare,
  Phone,
  Database,
} from "lucide-react";

export function AuditLogs() {
  const logs = [
    {
      id: "LOG-2847",
      timestamp: "2026-04-22 14:32:15 UTC",
      event: "Triage Decision",
      actor: "AI Agent",
      action: "Classification: GREEN",
      details: "Passive signals normal, active check-in positive",
      category: "ai",
      severity: "info",
      fhirCompliant: true,
    },
    {
      id: "LOG-2846",
      timestamp: "2026-04-22 14:30:08 UTC",
      event: "Active Check-in",
      actor: "AI Agent",
      action: "Conversational assessment completed",
      details: "Pain level: 2/10, Energy: Moderate, Feeling: Good",
      category: "ai",
      severity: "info",
      fhirCompliant: true,
    },
    {
      id: "LOG-2845",
      timestamp: "2026-04-22 14:25:42 UTC",
      event: "Signal Collection",
      actor: "System",
      action: "Passive monitoring data aggregated",
      details: "Heart rate: 72 bpm, Steps: 5247, Sleep: 7.5 hrs",
      category: "system",
      severity: "info",
      fhirCompliant: true,
    },
    {
      id: "LOG-2844",
      timestamp: "2026-04-22 12:18:33 UTC",
      event: "Human Override",
      actor: "Dr. Emily Chen",
      action: "Downgraded triage from AMBER to GREEN",
      details: "Reason: Patient condition improved after teleconsult",
      category: "human",
      severity: "warning",
      fhirCompliant: true,
    },
    {
      id: "LOG-2843",
      timestamp: "2026-04-22 11:45:19 UTC",
      event: "Teleconsult Initiated",
      actor: "AI Agent",
      action: "Care coordinator alerted",
      details: "Movement patterns below baseline (-15%)",
      category: "ai",
      severity: "warning",
      fhirCompliant: true,
    },
    {
      id: "LOG-2842",
      timestamp: "2026-04-22 09:12:05 UTC",
      event: "Emergency Escalation",
      actor: "AI Agent",
      action: "Emergency services contacted (112)",
      details: "Severe symptoms detected, location shared",
      category: "ai",
      severity: "critical",
      fhirCompliant: true,
    },
    {
      id: "LOG-2841",
      timestamp: "2026-04-22 08:00:00 UTC",
      event: "Medication Reminder",
      actor: "AI Agent",
      action: "Reminder sent and acknowledged",
      details: "Morning medications taken on schedule",
      category: "ai",
      severity: "info",
      fhirCompliant: true,
    },
    {
      id: "LOG-2840",
      timestamp: "2026-04-22 06:30:22 UTC",
      event: "Baseline Analysis",
      actor: "AI Agent",
      action: "Nightly baseline model updated",
      details: "7 days of data analyzed, patterns stable",
      category: "ai",
      severity: "info",
      fhirCompliant: true,
    },
    {
      id: "LOG-2839",
      timestamp: "2026-04-21 22:15:47 UTC",
      event: "Data Export",
      actor: "Coordinator Sarah Miller",
      action: "FHIR data package exported",
      details: "Weekly report for hospital EMR integration",
      category: "human",
      severity: "info",
      fhirCompliant: true,
    },
    {
      id: "LOG-2838",
      timestamp: "2026-04-21 18:45:33 UTC",
      event: "Triage Rule Update",
      actor: "Dr. Michael Zhang",
      action: "Modified heart rate threshold",
      details: "Changed from ±10% to ±12% for patient P001",
      category: "human",
      severity: "warning",
      fhirCompliant: true,
    },
  ];

  const stats = [
    { label: "Total Events", value: "2,847", icon: FileText, color: "blue" },
    { label: "AI Decisions", value: "2,134", icon: Brain, color: "purple" },
    { label: "Human Actions", value: "178", icon: User, color: "green" },
    { label: "System Events", value: "535", icon: Activity, color: "cyan" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">EMR Audit Logs</h1>
            <p className="text-slate-600 mt-1">Complete transparency and FHIR-compliant logging</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Export FHIR</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      stat.color === "blue"
                        ? "bg-blue-100"
                        : stat.color === "purple"
                        ? "bg-purple-100"
                        : stat.color === "green"
                        ? "bg-green-100"
                        : "bg-cyan-100"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        stat.color === "blue"
                          ? "text-blue-600"
                          : stat.color === "purple"
                          ? "text-purple-600"
                          : stat.color === "green"
                          ? "text-green-600"
                          : "text-cyan-600"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FHIR Compliance Banner */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-900">FHIR R4 Compliant</h3>
                <p className="text-sm text-green-700">All logs structured for EMR integration</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>100% Compliant</span>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search logs by ID, event, actor, or details..."
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-4 py-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Last 24 hours</span>
              <ChevronDown className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Log ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Event</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Actor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Details</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {logs.map((log, index) => (
                  <motion.tr
                    key={log.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm text-blue-600">{log.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-700 font-mono">{log.timestamp}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-900">{log.event}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {log.category === "ai" && <Brain className="w-4 h-4 text-purple-600" />}
                        {log.category === "human" && <User className="w-4 h-4 text-green-600" />}
                        {log.category === "system" && <Activity className="w-4 h-4 text-blue-600" />}
                        <span className="text-sm text-slate-700">{log.actor}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-700">{log.action}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{log.details}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {log.severity === "info" && (
                          <div className="flex items-center gap-2 px-2 py-1 bg-blue-50 rounded-full">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs font-medium text-blue-700">Info</span>
                          </div>
                        )}
                        {log.severity === "warning" && (
                          <div className="flex items-center gap-2 px-2 py-1 bg-amber-50 rounded-full">
                            <AlertTriangle className="w-3 h-3 text-amber-600" />
                            <span className="text-xs font-medium text-amber-700">Warning</span>
                          </div>
                        )}
                        {log.severity === "critical" && (
                          <div className="flex items-center gap-2 px-2 py-1 bg-red-50 rounded-full">
                            <AlertCircle className="w-3 h-3 text-red-600" />
                            <span className="text-xs font-medium text-red-700">Critical</span>
                          </div>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
            <p className="text-sm text-slate-600">Showing 10 of 2,847 entries</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">1</button>
              <button className="px-3 py-1 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                2
              </button>
              <button className="px-3 py-1 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                3
              </button>
              <span className="px-2 text-slate-500">...</span>
              <button className="px-3 py-1 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                285
              </button>
              <button className="px-3 py-1 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Decision Trail Example */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <h3 className="font-semibold text-slate-900 mb-4">Example: Complete Decision Trail</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1 bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-slate-900 mb-1">Passive Signal Collection</p>
                <p className="text-xs text-slate-600">AI gathered data from 5 sources</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1 bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-slate-900 mb-1">Active Check-in Conducted</p>
                <p className="text-xs text-slate-600">Conversational assessment completed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1 bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-slate-900 mb-1">Triage Engine Classification</p>
                <p className="text-xs text-slate-600">ML model determined: GREEN (96.8% confidence)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1 bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-slate-900 mb-1">Actions Executed</p>
                <p className="text-xs text-slate-600">Data logged to EMR, next check-in scheduled</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-blue-700">
            <CheckCircle className="w-4 h-4" />
            <span className="font-medium">Full audit trail maintained for compliance</span>
          </div>
        </div>
      </div>
    </div>
  );
}
