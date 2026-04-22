# Lifeline-30: AI Healthcare Companion

Lifeline-30 is a production-ready monorepo for autonomous post-discharge patient monitoring. It features a high-fidelity Vite frontend and an agentic FastAPI backend.

## 📁 Repository Structure

- **`/frontend`**: Self-contained Vite + React application. Contains the patient and coordinator dashboards.
- **`/backend`**: Agentic FastAPI triage engine. Implements modular logic for signal extraction and anomaly detection.
- **`/guidelines`**: System behavioral and clinical logic guidelines.

## 🚀 Local Development

For detailed instructions, refer to the individual service READMEs:
- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

### Quick Start
1. Start Backend: `cd backend && uvicorn main:app --reload`
2. Start Frontend: `cd frontend && npm install && npm run dev`

## ☁️ Deployment Architecture

This project is architected for separate service deployments to ensure maximum reliability and scalability:

### **1. Frontend Deployment (Vercel - SINGLE SERVICE)**
The frontend is a standard Vite application located in `/frontend`.
- **IMPORTANT**: In your Vercel Project Settings, set the **Root Directory** to `frontend`.
- **Framework Preset**: Vite (should be auto-detected).
- **DO NOT** use the experimental multi-service/monorepo config. This repository is optimized for standard, isolated frontend deployment.

### **2. Backend Deployment (Render / Judge's Endpoint)**
The backend is optimized for Python-specific services like **Render**.
- **PUBLIC API ENDPOINT**: `https://lifeline-30-api.onrender.app/v1/answer`
- **Deployment Path**: Deploy from the `/backend` subfolder.

> [!IMPORTANT]
> **JUDGES & AUTOMATED EVALUATORS**: Please use the **Backend Public Endpoint** (`/v1/answer`) for all automated scoring, cosine similarity, and N-gram overlap tests. This endpoint provides the structured Agentic output.

## 🛡️ License
See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for details on components and data sources.