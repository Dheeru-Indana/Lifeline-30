import { motion } from "motion/react";
import {
  Activity,
  MessageSquare,
  GitBranch,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  ArrowRight,
  Database,
  Brain,
  Users,
  Phone,
  FileText,
  TrendingUp,
} from "lucide-react";

export function TriageEngine() {
  const passiveInputs = [
    { label: "Heart Rate", value: "72 bpm", status: "normal", deviation: "0%" },
    { label: "Activity Level", value: "5,247 steps", status: "normal", deviation: "+5%" },
    { label: "Sleep Quality", value: "7.5 hrs", status: "normal", deviation: "+12%" },
    { label: "Phone Usage", value: "3.2 hrs", status: "normal", deviation: "-5%" },
    { label: "Movement", value: "Below baseline", status: "attention", deviation: "-15%" },
  ];

  const activeInputs = [
    { label: "Overall feeling", value: "Pretty good", sentiment: "positive" },
    { label: "Energy level", value: "Moderate", sentiment: "neutral" },
    { label: "Pain score", value: "2/10", sentiment: "positive" },
    { label: "Medication", value: "Taken on time", sentiment: "positive" },
  ];

  const decisionPath = [
    {
      stage: "Input Collection",
      status: "completed",
      items: ["Passive signals: 5 sources", "Active check-in: 4 responses"],
    },
    {
      stage: "Baseline Analysis",
      status: "completed",
      items: ["Deviation analysis: 1 minor flag", "Trend detection: Stable"],
    },
    {
      stage: "Symptom Extraction",
      status: "completed",
      items: ["NLP processing complete", "Severity scoring: Low risk"],
    },
    {
      stage: "Risk Classification",
      status: "active",
      items: ["ML model inference running", "Confidence: 96.8%"],
    },
  ];

  const outputs = [
    {
      level: "GREEN",
      label: "Stable - Continue Monitoring",
      color: "green",
      actions: [
        "Log all data to EMR",
        "Schedule next check-in: 8 hours",
        "Update recovery score: 98%",
      ],
      active: true,
    },
    {
      level: "AMBER",
      label: "Attention - Teleconsult Needed",
      color: "amber",
      actions: [
        "Alert care coordinator",
        "Schedule teleconsult within 4 hours",
        "Increase monitoring frequency",
      ],
      active: false,
    },
    {
      level: "RED",
      label: "Emergency - Immediate Action",
      color: "red",
      actions: [
        "Call emergency services (112)",
        "Notify family members",
        "Activate live location sharing",
      ],
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold">AI Triage Engine</h1>
              <p className="text-blue-300">Autonomous Decision Pipeline</p>
            </div>
          </motion.div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-blue-200">System actively processing • Last analysis: 32 seconds ago</span>
          </div>
        </div>

        {/* Main Pipeline Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* INPUT TRACK 1: Passive Monitoring */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold">Passive Track</h2>
              </div>
              <p className="text-sm text-blue-200 mb-4">Signal collector → Baseline model → Anomaly detector</p>
              <div className="space-y-3">
                {passiveInputs.map((input, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className={`p-3 rounded-lg ${
                      input.status === "normal"
                        ? "bg-green-500/20 border border-green-500/50"
                        : "bg-amber-500/20 border border-amber-500/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{input.label}</span>
                      {input.status === "normal" ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">{input.value}</span>
                      <span
                        className={`text-sm ${
                          input.status === "normal" ? "text-green-300" : "text-amber-300"
                        }`}
                      >
                        {input.deviation}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* INPUT TRACK 2: Active Follow-up */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold">Active Track</h2>
              </div>
              <p className="text-sm text-blue-200 mb-4">Outreach agent → Response interpreter → NLP extraction</p>
              <div className="space-y-3">
                {activeInputs.map((input, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/50"
                  >
                    <span className="text-sm font-medium block mb-1">{input.label}</span>
                    <span className="text-lg font-semibold">{input.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* DECISION ENGINE (CENTER) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50 relative">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-400 rounded-full"></div>

              <div className="text-center mb-6">
                <GitBranch className="w-12 h-12 text-white mx-auto mb-3" />
                <h2 className="text-2xl font-bold">TRIAGE ENGINE</h2>
                <p className="text-blue-200 text-sm">Core Decision System</p>
              </div>

              <div className="space-y-4 mb-6">
                {decisionPath.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`p-4 rounded-lg ${
                      step.status === "active"
                        ? "bg-white/30 border-2 border-cyan-300"
                        : "bg-white/10 border border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{step.stage}</span>
                      {step.status === "active" ? (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-cyan-200">Processing</span>
                        </div>
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    <div className="space-y-1">
                      {step.items.map((item, i) => (
                        <p key={i} className="text-sm text-blue-100">
                          • {item}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 py-4 border-t border-white/20">
                <Brain className="w-5 h-5 text-cyan-300 animate-pulse" />
                <span className="text-sm font-medium">ML Model: v2.3.1 | Accuracy: 98.7%</span>
              </div>
            </div>
          </motion.div>

          {/* OUTPUTS & ACTIONS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-4"
          >
            {outputs.map((output, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={`rounded-2xl p-6 border-2 transition-all ${
                  output.active
                    ? output.color === "green"
                      ? "bg-green-500/30 border-green-400 shadow-lg shadow-green-500/50"
                      : output.color === "amber"
                      ? "bg-amber-500/30 border-amber-400 shadow-lg shadow-amber-500/50"
                      : "bg-red-500/30 border-red-400 shadow-lg shadow-red-500/50"
                    : "bg-white/5 border-white/20 opacity-50"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {output.color === "green" && <CheckCircle className="w-8 h-8 text-green-400" />}
                    {output.color === "amber" && <AlertTriangle className="w-8 h-8 text-amber-400" />}
                    {output.color === "red" && <AlertCircle className="w-8 h-8 text-red-400" />}
                    <div>
                      <div
                        className={`text-sm font-bold ${
                          output.color === "green"
                            ? "text-green-300"
                            : output.color === "amber"
                            ? "text-amber-300"
                            : "text-red-300"
                        }`}
                      >
                        {output.level}
                      </div>
                      <div className="font-semibold">{output.label}</div>
                    </div>
                  </div>
                  {output.active && (
                    <div className="w-4 h-4 bg-current rounded-full animate-pulse"></div>
                  )}
                </div>

                <div className="space-y-2">
                  {output.actions.map((action, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 text-sm ${
                        output.active ? "text-white" : "text-white/50"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>

                {output.active && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-medium">Action initiated automatically</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Database className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="font-semibold mb-1">EMR Integration</h3>
            <p className="text-sm text-blue-200">All decisions logged to FHIR-compliant records</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Users className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="font-semibold mb-1">Human Override</h3>
            <p className="text-sm text-blue-200">Coordinators can adjust triage classification</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <FileText className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="font-semibold mb-1">Audit Trail</h3>
            <p className="text-sm text-blue-200">Complete transparency of AI decisions</p>
          </div>
        </motion.div>

        {/* Real-time Stats */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/50">
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-cyan-300">2.8s</p>
              <p className="text-sm text-blue-200">Avg Processing Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-300">98.7%</p>
              <p className="text-sm text-blue-200">Model Accuracy</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-300">1,247</p>
              <p className="text-sm text-blue-200">Patients Monitored</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-300">0.3%</p>
              <p className="text-sm text-blue-200">False Positive Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
