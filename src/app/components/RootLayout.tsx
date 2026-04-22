import { Outlet, Link, useLocation } from "react-router";
import { Activity, MessageSquare, GitBranch, AlertTriangle, Users, FileText, Home } from "lucide-react";

export function RootLayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/monitoring", icon: Activity, label: "Monitoring" },
    { path: "/chat", icon: MessageSquare, label: "Check-in" },
    { path: "/triage", icon: GitBranch, label: "Triage Engine" },
    { path: "/emergency", icon: AlertTriangle, label: "Emergency" },
    { path: "/coordinator", icon: Users, label: "Coordinator" },
    { path: "/audit", icon: FileText, label: "Audit Logs" },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-slate-900">After Discharge</h1>
              <p className="text-xs text-slate-500">Agentic Care</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 transition-colors ${
                  active
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>AI Agent Active</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
