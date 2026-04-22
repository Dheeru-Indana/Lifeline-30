import { createBrowserRouter } from "react-router";
import { PatientDashboard } from "./screens/PatientDashboard";
import { MonitoringPanel } from "./screens/MonitoringPanel";
import { ChatInterface } from "./screens/ChatInterface";
import { TriageEngine } from "./screens/TriageEngine";
import { EmergencyResponse } from "./screens/EmergencyResponse";
import { CoordinatorDashboard } from "./screens/CoordinatorDashboard";
import { AuditLogs } from "./screens/AuditLogs";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: PatientDashboard },
      { path: "monitoring", Component: MonitoringPanel },
      { path: "chat", Component: ChatInterface },
      { path: "triage", Component: TriageEngine },
      { path: "emergency", Component: EmergencyResponse },
      { path: "coordinator", Component: CoordinatorDashboard },
      { path: "audit", Component: AuditLogs },
    ],
  },
]);
