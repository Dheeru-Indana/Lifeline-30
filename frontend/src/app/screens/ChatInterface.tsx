import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mic, Image, Smile, Activity, AlertCircle } from "lucide-react";

export function ChatInterface() {
  const [message, setMessage] = useState("");
  const [messages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Good morning, Sarah! I'm your AI care companion. I noticed you're on day 8 of your recovery. How are you feeling today?",
      time: "9:00 AM",
      status: "delivered",
    },
    {
      id: 2,
      type: "user",
      content: "Feeling pretty good overall",
      time: "9:02 AM",
      status: "sent",
    },
    {
      id: 3,
      type: "ai",
      content: "That's great to hear! Can you tell me more about your energy levels and any discomfort you might be experiencing?",
      time: "9:02 AM",
      status: "delivered",
      quickReplies: [
        "High energy",
        "Moderate energy",
        "Low energy",
        "No discomfort",
        "Mild pain",
      ],
    },
    {
      id: 4,
      type: "user",
      content: "Moderate energy",
      time: "9:03 AM",
      status: "sent",
    },
    {
      id: 5,
      type: "ai",
      content: "Thank you for sharing. On a scale of 1-10, how would you rate any pain you're experiencing? (1 = no pain, 10 = severe pain)",
      time: "9:03 AM",
      status: "delivered",
    },
    {
      id: 6,
      type: "user",
      content: "About a 2",
      time: "9:04 AM",
      status: "sent",
    },
    {
      id: 7,
      type: "ai",
      content: "Perfect! Your pain level is well-controlled. I've logged this information. Based on your responses and the passive monitoring data, everything looks stable. 🟢\n\nI'll check in with you again this evening. Remember, if anything changes or you need help at any time, just message me here or press the emergency button.",
      time: "9:04 AM",
      status: "delivered",
      analysis: {
        symptomExtraction: ["Moderate energy", "Pain level 2/10", "Overall feeling good"],
        triageDecision: "GREEN - Stable, continue monitoring",
        nextAction: "Scheduled check-in in 8 hours",
      },
    },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900">AI Care Companion</h1>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-600">Active & monitoring</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg">
              <Activity className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700 font-medium">Encrypted & HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((msg, index) => (
            <AnimatePresence key={msg.id}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-2xl ${msg.type === "user" ? "text-right" : "text-left"}`}>
                  {msg.type === "ai" && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                        <Activity className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs text-slate-500 font-medium">AI Assistant</span>
                      <span className="text-xs text-slate-400">{msg.time}</span>
                    </div>
                  )}
                  {msg.type === "user" && (
                    <div className="flex items-center gap-2 mb-2 justify-end">
                      <span className="text-xs text-slate-400">{msg.time}</span>
                      <span className="text-xs text-slate-500 font-medium">You</span>
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-5 py-3 inline-block ${
                      msg.type === "ai"
                        ? "bg-white border border-slate-200 text-slate-900"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>

                  {/* Quick Replies */}
                  {msg.quickReplies && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.quickReplies.map((reply, i) => (
                        <button
                          key={i}
                          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm font-medium transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* AI Analysis */}
                  {msg.analysis && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-900">AI Analysis</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-slate-700">Symptoms extracted:</span>
                          <ul className="mt-1 ml-4 space-y-1">
                            {msg.analysis.symptomExtraction.map((symptom, i) => (
                              <li key={i} className="text-slate-600">
                                • {symptom}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="font-medium text-slate-700">Triage decision:</span>
                          <p className="text-green-700 font-semibold mt-1">{msg.analysis.triageDecision}</p>
                        </div>
                        <div>
                          <span className="font-medium text-slate-700">Next action:</span>
                          <p className="text-slate-600 mt-1">{msg.analysis.nextAction}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          ))}

          {/* AI Typing Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                  <Activity className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs text-slate-500 font-medium">AI is analyzing...</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <button className="p-3 hover:bg-slate-100 rounded-full transition-colors">
              <Image className="w-5 h-5 text-slate-500" />
            </button>
            <button className="p-3 hover:bg-slate-100 rounded-full transition-colors">
              <Smile className="w-5 h-5 text-slate-500" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message or speak to the AI..."
                className="w-full px-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="p-3 hover:bg-slate-100 rounded-full transition-colors">
              <Mic className="w-5 h-5 text-slate-500" />
            </button>
            <button
              onClick={handleSend}
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!message.trim()}
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span>AI actively monitoring • Responds 24/7 • Multi-modal input supported</span>
          </div>
        </div>
      </div>
    </div>
  );
}
