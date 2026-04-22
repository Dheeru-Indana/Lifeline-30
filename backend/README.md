# Lifeline-30 Backend API

Autonomous agentic triage engine for post-discharge monitoring. Built with FastAPI and modular agent logic.

## 🚀 Setup & Local Development

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Environment Configuration**
   Copy `.env.example` to `.env` and set your allowed origins:
   ```bash
   ALLOWED_ORIGINS=http://localhost:5173
   ```

3. **Run API Server**
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```

## 📡 API Specification (Judge's Endpoint)

### **Main Evaluation Route**
- **URL**: `POST /v1/answer`
- **Body**:
  ```json
  {
    "query": "Patient feels dizzy and has high heart rate",
    "assets": []
  }
  ```
- **Response**:
  ```json
  {
    "output": "TRIAGE: RED\nREASON: High heart rate combined with dizziness indicates acute risk\nACTION: Initiate emergency response, call 112, share live location, provide voice-guided first aid\nCONFIDENCE: HIGH"
  }
  ```

## ☁️ Deployment

### Render (Recommended)
1. **GitHub Connection**: Connect your repository to Render.
2. **Service Type**: Select "Web Service".
3. **Environment**: Python.
4. **Root Directory**: `backend`.
5. **Start Command**: `uvicorn main:app --host 0.0.0.0 --port 8000`.

### Other Services
The application is compatible with any service that supports Uvicorn/FastAPI (AWS App Runner, Fly.io, Railway, etc.). Ensure the `ROOT` directory for the deploy is set to `backend`.
