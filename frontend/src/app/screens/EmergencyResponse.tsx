import { motion } from "motion/react";
import { AlertTriangle, Phone, MapPin, Users, Heart, Clock, Navigation, Volume2 } from "lucide-react";
import { useState } from "react";

export function EmergencyResponse() {
  const [emergencyActive, setEmergencyActive] = useState(false);

  const emergencySteps = [
    { step: 1, title: "Emergency Detected", status: "completed", time: "0:00" },
    { step: 2, title: "Calling 112", status: "active", time: "0:03" },
    { step: 3, title: "Location Shared", status: "pending", time: "-" },
    { step: 4, title: "Family Notified", status: "pending", time: "-" },
    { step: 5, title: "First Aid Guidance", status: "pending", time: "-" },
  ];

  const firstAidInstructions = [
    "Stay calm and remain seated or lying down",
    "Keep your phone nearby and volume turned up",
    "If you're able, unlock your front door",
    "Emergency services have been notified and are on their way",
    "Someone will call you within 60 seconds",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-rose-800 to-red-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {!emergencyActive ? (
          /* Emergency Standby Mode */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-32 h-32 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-red-400">
              <AlertTriangle className="w-16 h-16 text-red-200" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Emergency Assistance</h1>
            <p className="text-xl text-red-200 mb-8 max-w-2xl mx-auto">
              If you need immediate medical help, press the button below. Emergency services will be contacted
              automatically, and your location will be shared with responders and your emergency contacts.
            </p>

            <button
              onClick={() => setEmergencyActive(true)}
              className="w-64 h-64 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 border-8 border-red-400 shadow-2xl shadow-red-500/50 transition-all hover:scale-105 active:scale-95"
            >
              <div className="text-center">
                <Phone className="w-20 h-20 text-white mx-auto mb-3" />
                <span className="text-2xl font-bold">CALL 112</span>
              </div>
            </button>

            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Phone className="w-8 h-8 text-red-300 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Instant Connection</h3>
                <p className="text-sm text-red-200">Direct line to emergency services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-red-300 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Location Sharing</h3>
                <p className="text-sm text-red-200">GPS coordinates sent automatically</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-red-300 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Family Alert</h3>
                <p className="text-sm text-red-200">Emergency contacts notified instantly</p>
              </div>
            </div>

            <div className="mt-12 p-4 bg-red-500/20 rounded-xl border border-red-400/50 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Heart className="w-5 h-5 text-red-300 animate-pulse" />
                <p className="text-sm text-red-100">
                  AI monitoring active 24/7. Automatic emergency detection enabled.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Emergency Active Mode */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Alert Banner */}
            <motion.div
              animate={{
                backgroundColor: ["rgba(220, 38, 38, 0.3)", "rgba(220, 38, 38, 0.6)", "rgba(220, 38, 38, 0.3)"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-red-600/50 backdrop-blur-lg rounded-2xl p-8 border-4 border-red-400"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <AlertTriangle className="w-16 h-16 text-white" />
                  </motion.div>
                  <div>
                    <h1 className="text-3xl font-bold">EMERGENCY PROTOCOL ACTIVE</h1>
                    <p className="text-red-100 text-lg">Help is on the way</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold">0:23</div>
                  <div className="text-red-200">Elapsed</div>
                </div>
              </div>
            </motion.div>

            {/* Emergency Progress */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6">Emergency Response Progress</h2>
              <div className="space-y-4">
                {emergencySteps.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      item.status === "completed"
                        ? "bg-green-500/30 border border-green-400"
                        : item.status === "active"
                        ? "bg-amber-500/30 border-2 border-amber-400"
                        : "bg-white/5 border border-white/20"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                        item.status === "completed"
                          ? "bg-green-500"
                          : item.status === "active"
                          ? "bg-amber-500"
                          : "bg-white/20"
                      }`}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      {item.status === "active" && (
                        <p className="text-sm text-amber-200">In progress...</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-lg">{item.time}</div>
                    </div>
                    {item.status === "active" && (
                      <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Live Location */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-red-300" />
                  <h2 className="text-xl font-bold">Live Location</h2>
                </div>
                <div className="bg-red-950/50 rounded-lg p-4 mb-4 border border-red-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Navigation className="w-4 h-4 text-red-300 animate-pulse" />
                    <span className="text-sm text-red-200">GPS Active</span>
                  </div>
                  <p className="font-mono text-sm text-white">52.5200° N, 13.4050° E</p>
                  <p className="text-sm text-red-200 mt-1">Apartment 4B, 123 Hauptstraße, Berlin</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Location shared with emergency services</span>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-red-300" />
                  <h2 className="text-xl font-bold">Emergency Contacts</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <p className="font-semibold">Michael Johnson</p>
                      <p className="text-sm text-red-200">Spouse</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-300">Notified</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <p className="font-semibold">Dr. Emily Chen</p>
                      <p className="text-sm text-red-200">Primary Care</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-300">Notified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* First Aid Instructions */}
            <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/50">
              <div className="flex items-center gap-3 mb-6">
                <Volume2 className="w-8 h-8 text-blue-300 animate-pulse" />
                <h2 className="text-2xl font-bold">Voice-Guided First Aid</h2>
              </div>
              <div className="space-y-3">
                {firstAidInstructions.map((instruction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.3 }}
                    className="flex items-start gap-3 p-4 bg-white/10 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-lg">{instruction}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cancel Button */}
            <div className="text-center pt-6">
              <button
                onClick={() => setEmergencyActive(false)}
                className="px-8 py-4 bg-white/20 hover:bg-white/30 rounded-xl border border-white/40 transition-colors"
              >
                <span className="font-semibold">Cancel Emergency (False Alarm)</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
