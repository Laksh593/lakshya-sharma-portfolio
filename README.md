# Lakshya Sharma | Dual-Role Engineering Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

A modern, responsive personal engineering portfolio presenting my software development and artificial intelligence / machine learning engineering work in a unified platform. Visitors can seamlessly explore dedicated, deep-dive portfolio tracks for either career specialization.

---

## Table of Contents

- [Live Website](#live-website)
- [Portfolio Sections](#portfolio-sections)
  - [1. Homepage (`/`)](#1-homepage-)
  - [2. Full Stack Software Engineer (`/full-stack`)](#2-full-stack-software-engineer-full-stack)
  - [3. AI/ML Engineer (`/ai-ml`)](#3-aiml-engineer-ai-ml)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Local Run](#installation--local-run)
- [Production Build & Validation](#production-build--validation)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Live Website

The production website is deployed on Vercel:

- **Main Landing Page:** [https://lakshya-ai-ml-portfolio.vercel.app/](https://lakshya-ai-ml-portfolio.vercel.app/)
- **Full Stack Portfolio:** [https://lakshya-ai-ml-portfolio.vercel.app/full-stack](https://lakshya-ai-ml-portfolio.vercel.app/full-stack)
- **AI/ML Portfolio:** [https://lakshya-ai-ml-portfolio.vercel.app/ai-ml](https://lakshya-ai-ml-portfolio.vercel.app/ai-ml)

---

## Portfolio Sections

### 1. Homepage (`/`)
- **Hero & Availability:** Headline introducing dual competencies across Full Stack Engineering and AI/ML, accompanied by a live availability badge for engineering roles.
- **Interactive Social & Contact Suite:** Direct email action pill with one-click compose links for Gmail and Outlook, clipboard address copy, and verified LinkedIn and GitHub profile links.
- **Dedicated Role Cards:** High-impact pathway cards allowing recruiters and engineering managers to enter either the **Full Stack Software Engineer** or **AI/ML Engineer** portfolio.

### 2. Full Stack Software Engineer (`/full-stack`)
- **Professional Introduction:** Overview of full-stack engineering principles, software design patterns, and clean code philosophy.
- **Technical Skills:** Categorized breakdown covering programming languages (Python, Java, JavaScript, TypeScript, SQL), frontend development (React, Next.js, HTML5/CSS3), backend architectures (Node.js, Express, FastAPI, REST APIs, microservices), database systems (PostgreSQL, MySQL, MongoDB), testing (PyTest, Postman), core computer science fundamentals (DSA, OOP, OS, DBMS), and cloud/DevOps tooling (AWS, GCP, Docker, CI/CD).
- **Featured Projects:**
  - *Project Management Dashboard:* Interactive Kanban board with drag-and-drop workflows, multi-criteria filtering, and localStorage persistence.
  - *SmartDesk:* Support Ticket & SLA resolution platform featuring role-based access control, FastAPI REST services, PostgreSQL, and Docker containerization.
  - *QuizForge AI:* MERN-stack timed assessment platform with automated scoring and analytics.
- **Academic Internships:** Supervised MCA academic project internships conducted at Vellore Institute of Technology (VIT), Chennai.
- **Education:** MCA from Vellore Institute of Technology (VIT Chennai, CGPA: 8.19) and BCA from Aryan College (67.57%).
- **Achievements & Certifications:** AppForge Hackathon 2025 (3rd Prize) and Tesseract Data Matrix 2025 awards, displayed alongside certifications in Python (HackerRank), Relational Databases (freeCodeCamp), Meta Front-End & Back-End Developer, and Cloud Architecture (CDAC).
- **Resume:** Direct download link for the Full Stack Software Engineer resume.

### 3. AI/ML Engineer (`/ai-ml`)
- **Professional Introduction:** Focus on machine learning pipelines, deep learning models, Generative AI applications, Retrieval-Augmented Generation (RAG), and intelligent systems.
- **AI/ML Technical Skills:** Machine Learning algorithms, Deep Learning frameworks (PyTorch, TensorFlow), Generative AI (LLMs, LangChain, LlamaIndex, RAG), Computer Vision (OpenCV), Natural Language Processing, and MLOps deployment tools.
- **Featured Projects:**
  - *Contextual RAG Assistant:* Semantic document question-answering system using vector search and retrieval-augmented generation.
  - *Automated Vision Inspection System:* Deep learning computer vision pipeline for automated defect detection.
  - *Predictive Analytics & Forecasting Engine:* Time-series analysis and forecasting models for demand estimation.
- **Academic Internships:** Supervised academic internships and MCA dissertation work at VIT Chennai.
- **Education:** Comprehensive academic history with MCA and BCA degrees.
- **Achievements:** 3rd Prize at AppForge Hackathon 2025 and participation at Tesseract Data Matrix 2025.
- **Resume:** Direct download link for the AI/ML Engineer resume.

---

## Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build & Tooling** | [Vite 8](https://vitejs.dev/) with `@vitejs/plugin-react` |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS & Autoprefixer |
| **Motion & Interaction** | [Framer Motion](https://www.framer.com/motion/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Client Routing** | Custom HTML5 History API Single Page Application (SPA) routing context |
| **Code Quality** | ESLint 10 (`@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) |
| **Hosting & Deployment** | [Vercel](https://vercel.com/) with custom rewrite rules for client routing |

---

## Project Structure

```
lakshya-sharma-portfolio/
├── public/
│   ├── Full_Stack_SDE_Resume.pdf          # Full Stack Resume PDF
│   ├── Lakshya_Sharma_Full_Stack_Resume.pdf # Primary Full Stack Resume PDF
│   ├── Lakshya_Sharma_Resume.pdf          # AI/ML Resume PDF
│   ├── favicon.svg                        # Site favicon
│   ├── robots.txt                         # Search crawler directives
│   └── sitemap.xml                        # Production sitemap
├── src/
│   ├── components/                        # Modular UI components
│   │   ├── About.jsx                      # About section with metrics
│   │   ├── Achievements.jsx               # Two-column achievements & certifications
│   │   ├── Certifications.jsx             # Dedicated certifications display
│   │   ├── Contact.jsx                    # Contact section & form trigger
│   │   ├── Education.jsx                  # Education history timeline
│   │   ├── EmailActionPill.jsx            # Email dropdown & clipboard utility
│   │   ├── Experience.jsx                 # Academic internships
│   │   ├── Footer.jsx                     # Site footer
│   │   ├── FullStackHero.jsx              # Hero section for Full Stack portfolio
│   │   ├── Hero.jsx                       # Hero section for AI/ML portfolio
│   │   ├── Navbar.jsx                     # Top navigation bar
│   │   ├── Projects.jsx                   # Project showcase cards
│   │   └── Skills.jsx                     # Technical skill clusters
│   ├── data/
│   │   ├── fullstack.js                   # Full Stack portfolio content & metadata
│   │   └── portfolio.js                   # AI/ML portfolio content & metadata
│   ├── pages/                             # Route page components
│   │   ├── AiMlPortfolio.jsx              # /ai-ml route page
│   │   ├── FullStackPortfolio.jsx         # /full-stack route page
│   │   └── LandingPage.jsx                # / homepage route page
│   ├── router/
│   │   ├── RouterContext.jsx              # Client SPA Router and Link component
│   │   └── context.js                     # Router context definition & hooks
│   ├── utils/
│   │   └── seo.js                         # Dynamic document title & meta tags
│   ├── App.jsx                            # Root application component
│   ├── index.css                          # Global design system & Tailwind styles
│   └── main.jsx                           # Application entry point
├── package.json                           # Dependencies and build scripts
├── vercel.json                            # Vercel SPA routing rewrite rules
├── vite.config.js                         # Vite build configuration
└── README.md                              # Repository documentation
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or later recommended) and `npm` installed.

### Installation & Local Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Laksh593/lakshya-sharma-portfolio.git
   cd lakshya-sharma-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## Production Build & Validation

Execute the following commands to validate code quality and generate the production bundle:

```bash
# Run ESLint validation
npm run lint

# Build production bundle (outputs to /dist)
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

This project is configured for continuous deployment on [Vercel](https://vercel.com/):

- **Build Command:** `npm run build` (or `vite build`)
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **SPA Routing:** Configured in [`vercel.json`](vercel.json) to rewrite all route paths to `/index.html`, ensuring clean direct navigation and page reloads on `/`, `/full-stack`, and `/ai-ml`.

---

## Contact

**Lakshya Sharma**

- **Email:** [lakshyasharma593@gmail.com](mailto:lakshyasharma593@gmail.com)
- **LinkedIn:** [https://linkedin.com/in/lakshya-01-sharma](https://linkedin.com/in/lakshya-01-sharma)
- **GitHub:** [https://github.com/Laksh593](https://github.com/Laksh593)
