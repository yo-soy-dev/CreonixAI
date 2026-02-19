<!--
  ██████╗██████╗ ███████╗ ██████╗ ███╗   ██╗██╗██╗  ██╗ █████╗ ██╗
 ██╔════╝██╔══██╗██╔════╝██╔═══██╗████╗  ██║██║╚██╗██╔╝██╔══██╗██║
 ██║     ██████╔╝█████╗  ██║   ██║██╔██╗ ██║██║ ╚███╔╝ ███████║██║
 ██║     ██╔══██╗██╔══╝  ██║   ██║██║╚██╗██║██║ ██╔██╗ ██╔══██║██║
 ╚██████╗██║  ██║███████╗╚██████╔╝██║ ╚████║██║██╔╝ ██╗██║  ██║██║
  ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝
-->

<div align="center">

```
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓                                                            ▓
 ▓   🤖  C R E O N I X A I                                   ▓
 ▓        ══════════════════════════════                      ▓
 ▓        Build. Generate. Ship.                              ▓
 ▓        Six AI tools. One platform. Zero limits.           ▓
 ▓                                                            ▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

[![Node.js](https://img.shields.io/badge/Node.js-18+-000000?style=for-the-badge&logo=node.js&logoColor=339933)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-000000?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-000000?style=for-the-badge&logo=postgresql&logoColor=4169E1)](https://neon.tech)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Clerk](https://img.shields.io/badge/Clerk-000000?style=for-the-badge&logo=clerk&logoColor=6C47FF)](https://clerk.com)
![MIT](https://img.shields.io/badge/License_MIT-000000?style=for-the-badge)

**[What It Is](#-what-it-is) · [The Tools](#-the-tools) · [Stack](#-stack) · [Spin It Up](#-spin-it-up) · [Env Vars](#-environment-variables) · [Roadmap](#-roadmap)**

</div>

---

## ❯ What It Is

CreonixAI is a **production-ready AI SaaS** on the PERN stack. Give users an account, charge them a subscription, and hand them six AI-powered tools — articles, images, resumes, and more — all backed by Google AI Studio, ClipDrop, and Cloudinary.

```
┌─────────────────────────────────────────────────────────────────┐
│  User signs up                                                  │
│     → Clerk handles auth + billing                              │
│     → Free tools unlock immediately                             │
│     → Premium subscription → all 6 AI tools active             │
│     → Files uploaded via Multer → stored in Cloudinary          │
│     → Confirmation + alerts sent via Nodemailer + Brevo         │
└─────────────────────────────────────────────────────────────────┘
```

---

## ◈ The Tools

```
CREONIXAI  /  6 AI TOOLS
│
├── 📝  ARTICLE GENERATOR
│   ├── Input  → title + desired length
│   └── Output → fully structured, AI-written article
│
├── 🏷️  BLOG TITLE GENERATOR
│   ├── Input  → keyword + category
│   └── Output → SEO-optimized title ideas
│
├── 🖼️  IMAGE GENERATOR
│   ├── Input  → descriptive text prompt
│   └── Output → high-quality AI-generated image
│
├── 🧹  BACKGROUND REMOVER
│   ├── Input  → image upload
│   └── Output → transparent-background version
│
├── 🎯  OBJECT REMOVER
│   ├── Input  → image + target object description
│   └── Output → clean image, object gone
│
└── 📄  RESUME ANALYZER
    ├── Input  → PDF or .doc resume
    └── Output → formatting, readability & skills feedback
```

---

## ◈ Stack

### System Map

```
                   ╔══════════════════════╗
                   ║      Browser         ║
                   ║   React 18           ║
                   ║   Tailwind CSS       ║
                   ║   Clerk UI           ║
                   ║   React Router DOM   ║
                   ╚══════════╤═══════════╝
                              │  Axios
                   ╔══════════▼═══════════╗
                   ║    Express Server    ║
                   ║    Node.js 18+       ║
                   ║    JWT Middleware    ║
                   ╚══╤═══════╤══════╤═══╝
                      │       │      │
          ┌───────────┘   ┌───┘   ┌──┘
          ▼               ▼       ▼
   ╔════════════╗  ╔════════════╗  ╔══════════════╗
   ║  Neon DB   ║  ║  Clerk     ║  ║  Cloudinary  ║
   ║  Postgres  ║  ║  Auth +    ║  ║  Media Store ║
   ║  Serverless║  ║  Billing   ║  ╚══════════════╝
   ╚════════════╝  ╚════════════╝
          │
   ┌──────┴──────────────┐
   ▼                     ▼
╔══════════════╗   ╔════════════╗
║ Google AI    ║   ║  ClipDrop  ║
║ Studio       ║   ║  API       ║
║ (text/content║   ║ (image     ║
║  generation) ║   ║  editing)  ║
╚══════════════╝   ╚════════════╝
          │
   ╔══════▼══════╗
   ║    Email    ║
   ║  ─────────  ║
   ║  Nodemailer ║
   ║  Brevo      ║
   ╚═════════════╝
```

### At a Glance

| Layer | Technology | Role |
|-------|-----------|------|
| **Frontend** | React 18 + Tailwind CSS | Component UI + styling |
| **Routing** | React Router DOM | Client-side navigation |
| **HTTP** | Axios | API communication |
| **Auth & Billing** | Clerk | Sign up/in/out + subscription tiers |
| **Backend** | Node.js + Express | REST API server |
| **Database** | PostgreSQL via Neon | Serverless managed DB |
| **AI — Text** | Google AI Studio | Articles, titles, resume analysis |
| **AI — Image** | ClipDrop API | Background + object removal, image gen |
| **File Uploads** | Multer | Multipart form handling |
| **Media Storage** | Cloudinary | Cloud image & document storage |
| **Email** | Nodemailer + Brevo | Transactional + marketing emails |

---

## ◈ Spin It Up

### Prerequisites

Node.js v18+ and accounts for:
[Neon](https://neon.tech) · [Clerk](https://clerk.com) · [Google AI Studio](https://aistudio.google.com) · [ClipDrop](https://clipdrop.co) · [Cloudinary](https://cloudinary.com) · [Brevo](https://brevo.com)

### Steps

**1 — Clone**
```bash
git clone https://github.com/yo-soy-dev/AI-Saas-App.git
cd AI-Saas-App
```

**2 — Install**
```bash
# Backend
npm install

# Frontend
cd client && npm install && cd ..
```

**3 — Environment**
```bash
cp server/.env.example server/.env
# Fill in your keys — see Environment Variables below
```

**4 — Run**
```bash
# Terminal 1 — Backend
cd server && npm run server     # → http://localhost:5000

# Terminal 2 — Frontend
cd client && npm start          # → http://localhost:3000
```

---

## ◈ Environment Variables

```env
# ── Server ───────────────────────────────────────────────────────
PORT=5000
NODE_ENV=development

# ── Database (Neon PostgreSQL) ───────────────────────────────────
DATABASE_URL=your_neon_postgres_connection_string

# ── Clerk (Auth & Billing) ───────────────────────────────────────
CLERK_API_KEY=your_clerk_api_key
CLERK_SECRET_KEY=your_clerk_secret_key              # server-only

# ── Google AI Studio (Text Generation) ──────────────────────────
GOOGLE_AI_API_KEY=your_google_ai_studio_api_key     # server-only

# ── ClipDrop (Image Processing) ──────────────────────────────────
CLIPDROP_API_KEY=your_clipdrop_api_key              # server-only

# ── Cloudinary (Media Storage) ───────────────────────────────────
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret    # server-only

# ── Email (Nodemailer) ───────────────────────────────────────────
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password                  # server-only

# ── Brevo / Sendinblue (Marketing Emails) ────────────────────────
BREVO_API_KEY=your_brevo_api_key                    # server-only
```

> ⚠️ Never commit `.env`. It's in `.gitignore`. Keep all secret keys out of the client bundle.

---

## ◈ Project Structure

```
AI-Saas-App/
│
├── client/                        React frontend
│   └── src/
│       ├── components/            Reusable UI components
│       ├── pages/                 Route-level views
│       └── App.jsx                Root component + routing
│
├── server/                        Express backend
│   ├── routes/                    API route definitions
│   ├── controllers/               Business logic handlers
│   ├── middleware/                 Auth + file upload middleware
│   ├── config/                    DB connection + config
│   └── server.js                  Entry point
│
└── README.md
```

---

## ◈ Deployment

```
1.  Push to GitHub
       ↓
2.  Deploy backend → Railway / Render / Fly.io
       ↓
3.  Deploy frontend → Vercel / Netlify
       ↓
4.  Set env vars in each platform's dashboard
       ↓
5.  Update Clerk allowed origins + redirect URLs
       ↓
6.  Done — both services talk via CORS-configured API URL
```

---

## ◈ Roadmap

```diff
+ Usage analytics dashboard per user
+ Multi-language content generation
+ Rate limiting per subscription tier
+ Admin panel for user & content management
+ Docker + CI/CD deployment guide
+ Webhook support for Clerk billing events
```

---

## ◈ Contributing

```bash
# 1. Fork → clone
# 2. Branch off main
git checkout -b feat/your-feature

# 3. Code + test
# 4. Push and open a PR with context on what + why
```

Please open an issue first for large changes.

---

## ◈ License

```
MIT License

Copyright (c) 2025 yo-soy-dev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

```
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓      🤖  creonixai  ·  build. generate. ship.              ▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

[Report a Bug](https://github.com/yo-soy-dev/CreonixAI/issues) · [Request a Feature](https://github.com/yo-soy-dev/CreonixAI/issues) · [Discussions](https://github.com/yo-soy-dev/CreonixAI/discussions)

</div>
