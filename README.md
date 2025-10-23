# 🤖 SOY-YO DEV AI SaaS Platform (PERN Stack)

A **fully functional AI SaaS application** built with the **PERN stack (PostgreSQL, Express, React, Node.js)** — featuring AI-powered tools, user authentication, subscription billing, and email notifications.

---

## 🚀 Overview

This project is a full-stack **AI SaaS platform** where users can sign up, subscribe to premium plans, and access powerful AI tools like article generation, image editing, and resume analysis.

It integrates **Clerk** for authentication & billing, **Neon (Serverless PostgreSQL)** for database, and **Google AI Studio + ClipDrop API** for AI models, and Cloudinary for secure media storage.  
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
- **ClipDrop API** — background removal & object removal in images
- **Multer** — file uploads (images, resumes)
- **Cloudinary** — cloud storage for uploaded files

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
- Output: AI-generated image

#### 🧹 Background Remover
- Upload an image → Get transparent background version
- Perfect for social media, presentations, and graphics

#### 🎯 Image Object Remover
- Upload image → Describe object → AI removes it automatically
- Ideal for editing product images or removing unwanted elements

#### 📄 Resume Analyzer
- Upload your resume → AI provides detailed analysis and feedback
- Insights include formatting, readability, and skill optimization

---

## 📁 File Uploads & Media Storage

- **Multer** handles file uploads from frontend (images, resumes)
- **Cloudinary** stores uploaded files securely in the cloud
- Works seamlessly with AI tools for background/object removal and resume analysis

## ✉️ Email Notifications

- **Nodemailer** used for transactional emails (verification, alerts)
- **Brevo (Sendinblue)** used for marketing and subscription emails
- Emails include custom HTML templates and branding

---

## 🧰 Project Setup

### 1️⃣ Clone Repository
```bash
# 1. Clone the repository
git clone https://github.com/yo-soy-dev/AI-Saas-App.git
cd ai-saas-platform

# 2. Install dependencies
npm install          # Backend
cd client
npm install          # Frontend
cd ..

# 3. Create a .env file in the backend (server/.env)
touch server/.env

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

# ClipDrop API
CLIPDROP_API_KEY=your_clipdrop_api_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

# Brevo (Sendinblue)
BREVO_API_KEY=your_brevo_api_key

cd server
npm run server
(Make sure server/package.json has a script like "server": "nodemon index.js")

cd client
npm start
