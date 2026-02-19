<div align="center">

# 🤖 CreonixAI

**Production-ready AI SaaS Platform built on the PERN Stack**

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://neon.tech)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Environment Variables](#-environment-variables) · [Contributing](#-contributing)

</div>

---

## 📖 Overview

CreonixAI is an enterprise-grade, subscription-based AI platform that gives users access to a suite of intelligent tools — from content generation to image processing and resume analysis. Built on the PERN stack with Clerk for auth and billing, it's designed to scale from MVP to production.

**What makes it ready to ship:**
- 🔐 Secure, managed authentication via Clerk (JWT-protected routes)
- 💳 Subscription billing with free and premium tiers
- 🧠 6 AI-powered tools backed by Google AI Studio & ClipDrop
- ☁️ Cloud media storage with Cloudinary
- 📧 Transactional + marketing email automation

---

## ✨ Features

### 🧠 AI Tools

| Tool | Input | Output |
|------|-------|--------|
| **Article Generator** | Title + desired length | Fully structured, AI-written article |
| **Blog Title Generator** | Keyword + category | SEO-optimized title ideas |
| **Image Generator** | Text prompt | High-quality AI-generated image |
| **Background Remover** | Image upload | Transparent-background version |
| **Object Remover** | Image + object description | Clean image with object removed |
| **Resume Analyzer** | PDF/Doc resume | Formatting, readability & skills feedback |

### 🔐 Authentication & Billing
- Sign up / sign in / sign out managed by **Clerk**
- JWT-protected API routes
- **Free plan** — access to core tools
- **Premium plan** — full AI feature suite
- Real-time subscription syncing via Clerk Billing

### 📁 File Management
- **Multer** handles multi-part file uploads
- **Cloudinary** stores and serves images & documents securely

### ✉️ Email Notifications
- **Nodemailer** — transactional system emails
- **Brevo (Sendinblue)** — subscription & marketing emails
- Custom branded HTML templates

---

## 🧩 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React.js | Component-based UI |
| Tailwind CSS | Utility-first styling |
| Clerk | Auth UI & billing |
| React Router DOM | Client-side routing |
| Axios | HTTP client |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js + Express | REST API server |
| PostgreSQL (Neon) | Serverless database |
| Google AI Studio | Text & content generation |
| ClipDrop API | Image background & object removal |
| Multer | File upload handling |
| Cloudinary | Cloud media storage |
| Nodemailer + Brevo | Email delivery |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- Accounts for: [Neon](https://neon.tech), [Clerk](https://clerk.com), [Google AI Studio](https://aistudio.google.com), [ClipDrop](https://clipdrop.co), [Cloudinary](https://cloudinary.com), [Brevo](https://brevo.com)

### 1. Clone the Repository

```bash
git clone https://github.com/yo-soy-dev/AI-Saas-App.git
cd AI-Saas-App
```

### 2. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client && npm install && cd ..
```

### 3. Configure Environment Variables

Create a `.env` file inside the `server/` directory:

```bash
cp server/.env.example server/.env
```

Then fill in your values (see [Environment Variables](#-environment-variables) below).

### 4. Start the Development Servers

```bash
# Terminal 1 — Start the backend
cd server && npm run server

# Terminal 2 — Start the frontend
cd client && npm start
```

The API will be running at `http://localhost:5000` and the frontend at `http://localhost:3000`.

---

## 🔑 Environment Variables

Create `server/.env` with the following:

```env
# Server
PORT=5000
NODE_ENV=development

# Database (Neon PostgreSQL)
DATABASE_URL=your_neon_postgres_connection_string

# Clerk (Authentication & Billing)
CLERK_API_KEY=your_clerk_api_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Google AI Studio
GOOGLE_AI_API_KEY=your_google_ai_studio_api_key

# ClipDrop (Image Processing)
CLIPDROP_API_KEY=your_clipdrop_api_key

# Cloudinary (Media Storage)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# Brevo / Sendinblue (Marketing Emails)
BREVO_API_KEY=your_brevo_api_key
```

> ⚠️ Never commit your `.env` file. It's already in `.gitignore`.

---

## 📂 Project Structure

```
AI-Saas-App/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route-level pages
│   │   └── App.jsx
│   └── package.json
├── server/                  # Express backend
│   ├── routes/              # API route handlers
│   ├── controllers/         # Business logic
│   ├── middleware/          # Auth & file upload middleware
│   ├── config/              # Database connection & queries
│   ├── server.js             # Entry point
│   └── .env                 # Environment config (not committed)
└── README.md
```

---

## 🛣️ Roadmap

- [ ] Add usage analytics dashboard
- [ ] Support multi-language content generation
- [ ] Rate limiting per subscription tier
- [ ] Admin panel for user management
- [ ] Docker + CI/CD deployment guide

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please open an issue first to discuss major changes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ using the PERN Stack · [Report a Bug](https://github.com/yo-soy-dev/CreonixAI/issues) · [Request a Feature](https://github.com/yo-soy-dev/CreonixAI/issues)

</div>
