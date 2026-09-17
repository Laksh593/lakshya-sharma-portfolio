# Lakshya Sharma — AI/ML Engineer Portfolio

A modern, responsive personal portfolio website showcasing my work in Machine Learning, Deep Learning, Generative AI, and backend API development.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** JavaScript (JSX)

## Features

- Dark theme with glassmorphism design
- Animated hero section with typewriter effect
- Custom cursor glow effect (desktop)
- Responsive navigation with mobile hamburger menu
- Skills grid, project cards, education timeline
- Smooth scroll navigation
- SEO-optimised metadata

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Lint the project
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for **Vercel** deployment:

1. Push the repository to GitHub
2. Import the project in the [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel will auto-detect Vite and configure the build
4. Build command: `vite build`
5. Output directory: `dist`

No environment variables are required.

## Project Structure

```
src/
├── components/        # React components (Navbar, Hero, About, Skills, etc.)
├── data/
│   └── portfolio.js   # Centralised portfolio content — edit this to update content
├── App.jsx            # Root component
├── index.css          # Global styles and Tailwind theme
└── main.jsx           # React entry point
```

## Updating Content

All portfolio content (personal info, projects, skills, education, etc.) is centralised in [`src/data/portfolio.js`](src/data/portfolio.js). Edit this single file to update any content.

## Author

**Lakshya Sharma**

- GitHub: [github.com/Laksh593](https://github.com/Laksh593)
- LinkedIn: [linkedin.com/in/lakshya-01-sharma](https://linkedin.com/in/lakshya-01-sharma)
- Email: lakshyasharma593@gmail.com
