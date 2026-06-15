# AI & Robotics Summer Workshop Landing Page

A responsive landing page and registration system for the Kidrove AI & Robotics Summer Workshop. This repository is structured as a monorepo containing a React frontend built with Vite and a Node.js/Express backend that handles registration enquiries and stores them in MongoDB.

---

## Project Structure

```text
/ai-robotics-summer-workshop
  ├── frontend/       # Vite + React + TypeScript + Tailwind CSS application
  └── backend/        # Node.js + Express + TypeScript + Mongoose server
```

---

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express
- TypeScript
- Mongoose (MongoDB ODM)

---

## Local Development Setup

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- MongoDB (optional, server will automatically run in local fallback JSON file storage mode if MongoDB is not running locally)

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory based on the `.env.example` file:
   ```env
   PORT=5001
   MONGODB_URI=mongodb://127.0.0.1:27017/robotics-workshop
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The backend server will run on `http://localhost:5001`.

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend application will run on `http://localhost:5173` (or the next available port).

---

## Production Deployment Guide

To deploy this application to production, you must host the frontend and backend services separately.

### Part 1: Database Setup (MongoDB Atlas)
1. Sign up for a free account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new project and deploy a free **M0 Shared Cluster**.
3. Under **Database Access**, create a database user and record the username and password.
4. Under **Network Access**, click **Add IP Address** and select **Allow Access From Anywhere** (`0.0.0.0/0`). This is necessary to allow cloud-hosted backend services (like Render) to connect.
5. Click **Connect** on your cluster dashboard, select **Drivers**, and copy the connection string. Make sure to toggle **Show Password** or manually replace `<db_password>` in the connection string with your database user's password.

### Part 2: Backend Deployment (Render)
1. Log in to your [Render Dashboard](https://render.com/).
2. Create a new **Web Service** and link your GitHub repository.
3. Configure the following service settings:
   - **Name**: `ai-robotics-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
4. Expand the **Environment Variables** section and add:
   - `MONGODB_URI`: The connection string copied from MongoDB Atlas.
   - `PORT`: `5001`
5. Click **Create Web Service**. Once the deploy finishes and is active, copy the live service URL (e.g., `https://ai-robotics-backend.onrender.com`).

### Part 3: Frontend Deployment (Vercel)
1. Log in to your Vercel Dashboard and import the repository.
2. In the project configuration screen:
   - Edit the **Root Directory** and select the `frontend` folder.
   - Vercel will automatically detect **Vite** as the framework preset.
3. Expand the **Environment Variables** section and add:
   - `VITE_API_URL`: The live backend URL copied from Render (e.g., `https://ai-robotics-backend.onrender.com`). Ensure there is no trailing slash at the end of the URL.
4. Click **Deploy**.
