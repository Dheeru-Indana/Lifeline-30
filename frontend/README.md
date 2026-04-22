# Lifeline-30 Frontend

A high-performance Vite + React application for real-time post-discharge patient monitoring.

## 🚀 Setup & Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   Copy `.env.example` to `.env` and set your API base URL:
   ```bash
   VITE_API_BASE_URL=http://localhost:8000
   ```

3. **Run Dev Server**
   ```bash
   npm run dev
   ```

## 🏗️ Build

To generate the production bundle:
```bash
npm run build
```

## ☁️ Deployment (Vercel)

1. **Import to Vercel**: Connect your GitHub repository.
2. **Root Directory**: Set the root directory to `frontend`.
3. **Environment Variables**: Add `VITE_API_BASE_URL` pointing to your deployed Backend API.
4. **Deploy**: Vercel will automatically detect the Vite framework and handle the build.
