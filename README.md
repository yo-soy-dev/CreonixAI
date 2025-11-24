# 🤖 CreonixAI — AI-Powered SaaS Platform

A production-ready **AI SaaS platform** built on the **PERN stack (PostgreSQL, Express, React, Node.js)**, delivering modern AI-powered tools, secure authentication, subscription billing, and automated email workflows.

---

## 🚀 Overview

This repository contains a full-stack, enterprise-grade **AI Software-as-a-Service application**. Users can authenticate, subscribe to premium plans, and access a suite of AI-driven tools for content generation, image processing, and resume analysis.

The platform integrates:

* **Clerk** for authentication and subscription billing
* **Neon (Serverless PostgreSQL)** for database hosting
* **Google AI Studio + ClipDrop API** for AI content and image processing
* **Cloudinary** for secure media storage
* **Nodemailer + Brevo (Sendinblue)** for automated email notifications

---

## 🧩 Tech Stack

### 🖥️ Frontend

* **React.js** – component‑based UI
* **Tailwind CSS** – modern, utility‑first styling
* **Clerk** – authentication and billing
* **Axios** – API communication
* **React Router DOM** – routing and navigation

### ⚙️ Backend

* **Node.js** – runtime environment
* **Express.js** – REST API framework
* **PostgreSQL (Neon)** – scalable serverless database
* **Nodemailer + Brevo** – transactional and marketing emails
* **Google AI Studio** – text and content generation
* **ClipDrop API** – image background & object removal
* **Multer** – file uploads
* **Cloudinary** – cloud storage for media files

---

## 🔐 Authentication & User Management

* Secure **sign up / sign in / sign out** workflow
* Managed fully via **Clerk**
* JWT-protected backend routes
* User dashboard showing subscription status

---

## 💳 Subscription Billing

* Powered by **Clerk Billing**
* **Free plan** with core tools
* **Premium plan** unlocking full AI features
* Real-time billing and subscription syncing

---

## 🧠 AI Features

### 📝 Article Generator

* Input: Title & desired length
* Output: Fully AI-generated, structured article

### 🏷️ Blog Title Generator

* Input: Keyword & category
* Output: SEO-optimized content ideas

### 🖼️ Image Generator

* Input: Descriptive prompt
* Output: High-quality AI-generated image

### 🧹 Background Remover

* Upload an image → returns a transparent-background version
* Useful for creative or professional applications

### 🎯 Object Remover

* Upload an image + target object description
* AI removes unwanted elements automatically

### 📄 Resume Analyzer

* Upload PDF/Doc resume
* AI evaluates formatting, readability, and skills
* Provides actionable feedback for improvement

---

## 📁 File Uploads & Media Storage

* **Multer** handles file uploads from the client
* **Cloudinary** stores and secures images and documents
* Integrated directly with AI processing tools

---

## ✉️ Email Notification System

* **Nodemailer** handles system & transactional emails
* **Brevo (Sendinblue)** manages marketing and subscription-based communication
* Custom HTML templates included for branding consistency

---

## 🧰 Project Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yo-soy-dev/AI-Saas-App.git
cd ai-saas-platform
```

### 2️⃣ Install Dependencies

```bash
npm install          # Backend
cd client
npm install          # Frontend
cd ..
```

### 3️⃣ Configure Environment Variables

Create `server/.env`:

```bash
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL=your_neon_postgres_connection_string

# Clerk
CLERK_API_KEY=your_clerk_api_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Google AI
GOOGLE_AI_API_KEY=your_google_ai_studio_api_key

# ClipDrop
CLIPDROP_API_KEY=your_clipdrop_api_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

# Brevo
BREVO_API_KEY=your_brevo_api_key
```

### 4️⃣ Start the Backend

```bash
cd server
npm run server
```

Ensure `package.json` contains:

```json
"scripts": {
  "server": "nodemon index.js"
}
```

### 5️⃣ Start the Frontend

```bash
cd client
npm start
```

---

## 📌 Summary

This AI SaaS platform provides a complete, scalable foundation for building subscription-based AI tools. With integrated authentication, billing, media management, and a robust set of AI-driven utilities, it is ready for production deployment and further expansion.
