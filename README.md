# Pooja Chawan — Senior Portfolio Application
### Built with React.js & Material UI (MUI v5) · Component-Based Architecture

A production-ready, accessible, high-performance portfolio application built for **Pooja Chawan** (Senior MERN Stack Developer & Playwright Automation Test Engineer).

---

## 🌟 Key Engineering Highlights

1. **Component-Based Architecture**:
   - Organized into clean, single-responsibility components under `src/components/` (`common`, `layout`, `sections`).
   - Clean data decoupling in `src/data/portfolioData.js` — updating any content, project, metric, or skill requires zero JSX restructuring.
2. **Zero Flickery / Distracting Animations**:
   - Replaced heavy rotating conic gradients, CPU-straining 100px blur shifting blobs, and flickering chip animations with calm, elegant Material UI micro-interactions.
   - Smooth typewriter effect with static height protection to prevent layout shifting.
   - Full support for `prefers-reduced-motion`.
3. **Platina Flagship Edition Styling**:
   - Luxury emerald/forest theme (`#174d3b`, `#2d7a5e`, `#c9ed75`) built with custom Material UI `theme.js`.
   - Comprehensive showcase of the **Platina** women-powered food entrepreneurship platform (target January 2027), its system architecture, and 6 core engineering principles.
   - Dedicated showcase for **Scribble** (published Flutter app on Google Play).
4. **Responsive Across All Screen Sizes**:
   - Mobile navigation drawer with direct contact buttons.
   - Fluid typography using CSS `clamp()`.
   - Responsive MUI Grid layouts adapting smoothly between mobile, tablet, and widescreen.

---

## 📁 Project Structure

```
pooja-chawan-portfolio/
├── index.html                   # HTML entry point with Inter & JetBrains Mono fonts
├── package.json                 # Dependencies and scripts (React, MUI, Vite)
├── vite.config.js               # Optimized Vite configuration
├── README.md                    # Project documentation & deployment guides
├── public/
│   └── favicon.svg              # Brand SVG favicon
└── src/
    ├── main.jsx                 # React DOM root entry
    ├── App.jsx                  # Top-level application layout & scroll progress
    ├── theme/
    │   └── theme.js             # Material UI palette, typography & component overrides
    ├── data/
    │   └── portfolioData.js     # Single source of truth for all portfolio data
    └── components/
        ├── common/
        │   └── SectionHeader.jsx    # Reusable eyebrow, title, and lead component
        ├── layout/
        │   ├── Navbar.jsx           # Sticky glassmorphism header & mobile drawer
        │   └── Footer.jsx           # Responsive footer with social links & back-to-top
        └── sections/
            ├── HeroSection.jsx        # Dual-track intro, stats, photo card
            ├── AboutSection.jsx       # 4 engineering pillars
            ├── ExpertiseSection.jsx   # MERN & Playwright comparison tracks
            ├── PlatinaSection.jsx     # Flagship SaaS deep-dive & roadmap
            ├── EngineeringSection.jsx # 6 architectural principles & code signatures
            ├── AchievementSection.jsx # Scribble Flutter Google Play showcase
            ├── SkillsSection.jsx      # Categorized skill badges with filter tabs
            ├── ExperienceSection.jsx  # Interactive career timeline (TYSS, Metropolis)
            ├── ProjectsSection.jsx    # Production EdTech & testing projects
            ├── TeachingSection.jsx    # Corporate training & educational channel
            └── ContactSection.jsx     # Direct channels, click-to-copy, & feedback
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Steps
1. Navigate to the project folder:
   ```bash
   cd pooja-chawan-portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   The production-optimized static files will be generated in the `dist/` directory.

---

## 🌐 How to Host on the Web (Free & Fast)

### Option 1: Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your site will be live on an SSL URL in seconds!

*Alternatively via Vercel CLI:*
```bash
npm install -g vercel
vercel
```

---

### Option 2: Netlify
1. Log in to [netlify.com](https://www.netlify.com).
2. Drag and drop your `dist/` folder directly into the Netlify dashboard, or connect your GitHub repository.
3. If connecting via Git:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **"Deploy site"**.

---

### Option 3: GitHub Pages
1. In `vite.config.js`, set `base: '/<your-repo-name>/'`.
2. Install the `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

### Option 4: Render / Cloudflare Pages / AWS S3
- **Render**: Create a "Static Site", set build command to `npm run build`, and publish directory to `dist`.
- **Cloudflare Pages**: Connect Git repo, choose Vite preset, output directory `dist`.
