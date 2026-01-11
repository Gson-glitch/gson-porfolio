# Gloryson Ondanje - Portfolio Website

A high-performance personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases my work as a Machine Learning Engineer, featuring optimized animations and a responsive design.

![Portfolio Preview](https://portfolio.gson.io/opengraph-image)

## 🚀 Key Features

* **High Performance:** Optimized for speed with a Largest Contentful Paint (LCP) of **< 1s** and perfect Cumulative Layout Shift (CLS) of **0**.
* **Modern Tech Stack:** Built with the latest Next.js 14 App Router and strict TypeScript.
* **Interactive UI:** Custom mouse follower and smooth page transitions using **Framer Motion**.
* **Responsive Design:** Fully adaptive layout that works seamlessly on mobile, tablet, and desktop.
* **GitHub Integration:** Fetches pinned repositories dynamically using the GitHub GraphQL API.
* **Certificate Viewer:** Interactive PDF certificate viewer with thumbnail previews.
* **SEO Optimized:** Semantic HTML and optimized metadata for search engines.

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** [Vercel](https://vercel.com/)

## ⚡ Getting Started

First, clone the repository:

```bash
git clone https://github.com/Gson-glitch/gson-portfolio.git
cd gson-portfolio
```

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔒 Environment Variables

To run this project locally, you will need to create a `.env.local` file in the root directory with the following variables:

```bash
GITHUB_TOKEN=your_github_personal_access_token
```

*Required for fetching pinned repositories on the Projects page.*

Get your GitHub token at [github.com/settings/tokens](https://github.com/settings/tokens) with `public_repo` scope.

## 📁 Project Structure

```
gson-portfolio/
├── app/
│   ├── components/       # React components (UI, Layout)
│   ├── data/            # Static data (projects, skills, experience)
│   ├── api/             # API routes (GitHub integration)
│   └── (pages)/         # Next.js pages
├── public/
│   ├── certificates/    # PDF certificates
│   ├── thumbnails/      # Certificate thumbnails
│   └── resume/          # Resume PDF
└── scripts/             # Build scripts
```

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript compiler
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

© 2026 Gloryson Ondanje. All Rights Reserved.