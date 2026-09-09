# Peter Dani — Senior Frontend Developer CV & Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-danipeti.github.io%2Fcv-2563eb?style=for-the-badge&logo=githubpages&logoColor=white)](https://danipeti.github.io/cv/)
[![Build & Deploy](https://img.shields.io/github/actions/workflow/status/danipeti/cv/deploy.yml?branch=master&style=for-the-badge&label=Deploy)](https://github.com/danipeti/cv/actions)

> 🌐 **Live Web Version:** [https://danipeti.github.io/cv/](https://danipeti.github.io/cv/)  
> 📄 **Direct PDF Download:** Available directly on the web app via the top download button.

A modern, responsive web curriculum vitae and portfolio built with **React 19**, **TypeScript**, and **CSS Modules**. Designed as a fast, accessible web experience featuring container queries, native CSS `light-dark()` color tokens matching system appearance, and clean 1-page PDF export.

## Key Features

- **Direct PDF Download:** Visitors can immediately download a clean, pre-generated 1-page PDF version directly from the floating download button without dealing with printer dialog configurations.
- **Modern CSS Architecture:**
  - Zero-runtime CSS Modules with component-scoped styles.
  - CSS Container Queries (`@container`) for component-level responsiveness.
  - Semantic CSS custom properties and native `light-dark()` color tokens.
  - Typography optimization using `text-box: trim-both cap alphabetic`.
- **Accessibility & Semantics:**
  - Landmark elements (`<header>`, `<main>`, `<footer>`).
  - Screen reader friendly controls and high-contrast focus rings.
- **Decoupled Data Architecture:** Resume content is completely separated into strongly typed data models under `src/data/` (`personal.ts`, `summary.ts`, `skills.ts`, `experience.ts`, `education.ts`), keeping presentation components purely declarative.
- **Fast Developer Tooling:**
  - **Vite 8** for instant HMR and optimized builds.
  - **React 19 & TypeScript 6** in strict mode with erasable syntax.
  - **Oxlint** for ultra-fast static analysis.
  - **Prettier + Husky + lint-staged** for automated pre-commit formatting and linting.

## Project Structure

```text
src/
├── assets/                  # SVG icons and profile images
├── components/              # Reusable UI primitives
│   ├── DownloadButton/      # Direct PDF download action
│   ├── Footer/              # Web version & repository links
│   ├── Organization/        # Company / school entry container
│   ├── Paper/               # Document canvas container
│   ├── Project/             # Project details with skill tags
│   ├── Section/             # Section layout with title banner
│   └── Tag/                 # Technical skill badge
├── data/                    # Strongly typed resume content
│   ├── education.ts         # Academic background
│   ├── experience.ts        # Employment history & projects
│   ├── personal.ts          # Contact & profile details
│   ├── skills.ts            # Categorized technical skills
│   └── summary.ts           # Professional summary
├── features/                # Page sections consuming data
│   ├── Education/
│   ├── Experience/
│   ├── Header/
│   ├── Skills/
│   └── Summary/
├── App.module.css           # Main layout styling
├── App.tsx                  # Root layout composition
├── index.css                # Global tokens, typography scale & print setup
└── main.tsx                 # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the local Vite development server:

```bash
npm run dev
```

### Build

Run TypeScript type-checking and build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Code Quality & Formatting

```bash
# Run Rust-based Oxlint linter
npm run lint

# Check formatting with Prettier
npm run format:check

# Auto-format all files
npm run format
```

## PDF Export

The repository provides a pre-rendered PDF in `public/Peter Dani - Senior Frontend Developer CV.pdf` for visitors to download directly. To generate a fresh 1-page PDF snapshot:

1. Open the web app in Chrome / Chromium.
2. Open Print (`Ctrl+P` / `Cmd+P`).
3. Set **Destination** to "Save as PDF", **Paper size** to A4, **Margins** to Default, and enable **Background graphics**.
4. Save the generated file to `public/Peter Dani - Senior Frontend Developer CV.pdf` and commit.

## Deployment

This project is configured for continuous deployment to **GitHub Pages** via GitHub Actions:

- **Live URL:** [https://danipeti.github.io/cv/](https://danipeti.github.io/cv/)
- Every push to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which runs:
  1. `npm run format:check` (Prettier verification)
  2. `npm run lint` (Oxlint static analysis)
  3. `npm run build` (TypeScript check + Vite production bundle)
  4. Deploys the `./dist` artifact to GitHub Pages.

### Enabling GitHub Pages in Repository Settings

1. On GitHub, go to your repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push to `master` (or run manually via the **Actions** tab) to deploy.
