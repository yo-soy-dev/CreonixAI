# 🤖 SOY-YO DEV AI SaaS Platform (PERN Stack)

A **fully functional AI SaaS application** built with the **PERN stack (PostgreSQL, Express, React, Node.js)** — featuring AI-powered tools, user authentication, subscription billing, and email notifications.

---

## 🚀 Overview

This project is a full-stack **AI SaaS platform** where users can sign up, subscribe to premium plans, and access powerful AI tools like article generation, image editing, and resume analysis.

It integrates **Clerk** for authentication & billing, **Neon (Serverless PostgreSQL)** for database, and **Google AI Studio** for AI models.  
Emails are sent via **Nodemailer** and **Brevo (Sendinblue)** for notifications and confirmations.

---

## 🧩 Tech Stack

### 🖥️ Frontend
- **React.js** — UI framework
- **Tailwind CSS** — modern utility-first styling
- **Clerk** — authentication & subscription management
- **Axios** — API communication
- **React Router DOM** — page routing

### ⚙️ Backend
- **Node.js** — server environment
- **Express.js** — REST API framework
- **PostgreSQL (Neon)** — serverless database
- **Nodemailer** + **Brevo (Sendinblue)** — email notifications
- **Google AI Studio API** — AI content & image generation

---

## 🔐 Features

### 👤 Authentication & User Management
- Secure **Sign up / Sign in / Sign out**
- Managed with **Clerk**
- JWT-protected routes
- User profile with subscription details

### 💳 Subscription Billing
- Integrated with **Clerk Billing**
- Free tier for basic AI tools
- Premium subscription unlocks all AI tools
- Real-time subscription status updates

### 🧠 AI Tools

#### 📝 Article Generator
- Input: Title & length  
- Output: AI-generated article

#### 🏷️ Blog Title Generator
- Input: Keyword & Category  
- Output: List of catchy blog titles

#### 🖼️ Image Generator
- Input: Text prompt  
- Output: AI-generated image using Google AI Studio

#### 🧹 Background Remover
- Upload an image → Get transparent background version

#### 🎯 Image Object Remover
- Upload image → Describe object → AI removes it automatically

#### 📄 Resume Analyzer
- Upload your resume → AI provides detailed analysis and feedback

---

## ✉️ Email Notifications

- **Nodemailer** used for transactional emails (verification, alerts)
- **Brevo (Sendinblue)** used for marketing and subscription emails
- Emails include custom HTML templates and branding

---

## 🧰 Project Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yo-soy-dev/ai-saas-platform.git
cd ai-saas-platform

# Install both frontend and backend dependencies
npm install
cd client && npm install

# Server
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL=your_neon_postgres_connection_string

# Clerk
CLERK_API_KEY=your_clerk_api_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Google AI
GOOGLE_AI_API_KEY=your_google_ai_studio_api_key

# Email
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
BREVO_API_KEY=your_brevo_api_key

# Start backend
npm run server

# Start frontend
cd client
npm start
