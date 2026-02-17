# Urvashi Choubey - Portfolio Website

A professional portfolio website built with Astro, Tailwind CSS, and DaisyUI, showcasing cloud infrastructure, automation, and open source projects.

## 🚀 Live Demo

Visit the live site: [Your deployment URL]

## ✨ Features

- **Modern Tech Stack**: Built with Astro 5.x, Tailwind CSS, and DaisyUI
- **Enhanced Project Cards**: Detailed project showcases with highlights, tech stacks, and descriptions
- **Category-Based Portfolio**: Projects organized by Cloud Infrastructure, Automation & DevOps, and Personal Projects
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Dark Mode Support**: Custom DevOps-themed light and dark modes
- **Blog Ready**: Minimal blog structure for future technical articles
- **SEO Optimized**: Meta tags, sitemap, and RSS feed included
- **Fast Performance**: Static site generation for lightning-fast load times

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.7.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4.10
- **UI Components**: [DaisyUI](https://daisyui.com/) 5.5.18
- **Language**: TypeScript 5.5.4
- **Content**: JSON-based project data + MDX for blog posts

## 📁 Project Structure

```
portfolio1/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   └── Project/     # Enhanced project card component
│   ├── content/
│   │   ├── blog/        # Blog posts (MDX)
│   │   └── portfolio/   # Project data (JSON)
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utility functions
│   │   └── portfolio.ts # Portfolio data management
│   ├── pages/           # Route pages
│   │   ├── index.astro  # Homepage
│   │   ├── about.astro  # About page
│   │   ├── projects/    # Portfolio pages
│   │   └── posts/       # Blog pages
│   ├── styles/          # Global styles
│   └── consts.ts        # Site configuration
├── tailwind.config.mjs  # Tailwind + DaisyUI config
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 📝 Customization Guide

### 1. Update Personal Information

Edit [`src/consts.ts`](src/consts.ts):

```typescript
export const SITE_TITLE = 'Your Name';
export const SITE_TAGLINE = 'Your Title';
export const SITE_EMAIL = 'your.email@example.com';
// ... update other constants
```

### 2. Add/Edit Projects

Projects are stored as JSON files in [`src/content/portfolio/`](src/content/portfolio/):

```json
{
  "title": "Project Name",
  "category": "cloud-infra", // or "automation" or "personal"
  "desc": "Detailed description...",
  "highlights": [
    "Key achievement 1",
    "Key achievement 2"
  ],
  "tech": ["AWS", "Kubernetes", "Terraform"],
  "order": 1,
  "demoLink": "https://example.com",
  "githubLink": "https://github.com/username/repo"
}
```

**Categories**:
- `cloud-infra`: Cloud Infrastructure projects
- `automation`: Automation & DevOps projects
- `personal`: Personal Projects & Open Source

### 3. Update Profile Image

Replace [`src/assets/img/ava.jpg`](src/assets/img/ava.jpg) with your photo.

### 4. Customize Theme Colors

Edit [`tailwind.config.mjs`](tailwind.config.mjs) to change the color scheme:

```javascript
daisyui: {
  themes: [
    {
      devops: {
        "primary": "#3b82f6",    // Your primary color
        "secondary": "#10b981",  // Your secondary color
        // ... other colors
      }
    }
  ]
}
```

### 5. Add Blog Posts

Create markdown files in [`src/content/blog/`](src/content/blog/):

```markdown
---
title: "Your Post Title"
description: "Post description"
pubDate: 2024-01-01
tags: ["kubernetes", "devops"]
---

Your content here...
```

## 🎨 Design Philosophy

This portfolio combines three design approaches:

1. **Devolio Base**: Clean, minimalist structure with excellent performance
2. **Erland.me Inspiration**: Enhanced project cards with detailed information
3. **DaisyUI Components**: Professional, accessible UI components

### Key Design Features

- **Hero Section**: Eye-catching introduction with gradient background
- **Skills Grid**: Organized technical skills with color-coded badges
- **Enhanced Project Cards**: 
  - Multi-paragraph descriptions
  - Bullet-point highlights
  - Technology badges
  - Action buttons (View Project, GitHub)
- **Category Navigation**: Tab-based filtering for easy project browsing
- **Breadcrumbs**: Clear navigation hierarchy

## 📦 Available Scripts

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Vercel will auto-detect Astro and configure settings
4. Deploy!

### Deploy to Cloudflare Pages

1. Push your code to GitHub
2. Connect repository to [Cloudflare Pages](https://pages.cloudflare.com)
3. Configure:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy!

## 🎯 Performance

- ✅ 100/100 Lighthouse Performance
- ✅ SEO Optimized
- ✅ Accessibility Compliant
- ✅ Fast Page Load Times
- ✅ Optimized Images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Devolio](https://github.com/devaradise/devolio) - Base template
- [Erland.me](https://github.com/erlandv/erland.me) - Project card inspiration
- [DaisyUI](https://daisyui.com/) - UI component library
- [Astro](https://astro.build/) - Static site generator

## 📧 Contact

- **Email**: urvashichoubey0121@gmail.com
- **LinkedIn**: [linkedin.com/in/urvashi-choubey](https://www.linkedin.com/in/urvashi-choubey/)
- **GitHub**: [github.com/Urvashi0109](https://github.com/Urvashi0109)

---

Built with ❤️ by Urvashi Choubey
