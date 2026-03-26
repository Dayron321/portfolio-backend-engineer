# Backend & QA Automation Engineer Portfolio

A production-ready, full-stack portfolio demonstrating senior-level expertise in Backend Development, System Design, and QA Automation. Built with a modern, high-performance tech stack and a clean cyberpunk aesthetic.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Variables (Glassmorphism & Neon)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Testing:** Playwright (End-to-End Testing)
- **Deployment:** Vercel (Edge CDN) / Dockerized for GCP Cloud Run

## 📐 Architecture Highlights

- **Component-Driven UI:** Highly reusable primitive UI components (`CyberCard`, `NeonButton`, `GradientTitle`) isolated in `src/components/ui`.
- **SSR Optimization:** Hydration-safe rendering and optimized font loading via `next/font`.
- **System Design:** Custom JSX-based architecture diagrams demonstrating real-world cloud infrastructure (GCP, Load Balancer, Redis, Cloud SQL).

## 💻 Local Development

1. Clone the repository:
```bash
git clone https://github.com/Dayron321/portfolio-backend-engineer.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server (Turbopack enabled):
```bash
npm run dev
```
Navigate to `http://localhost:3000` to view the application.

## 🧪 Testing

This project utilizes Playwright for automated End-to-End (E2E) testing.

```bash
# Run tests headlessly
npx playwright test

# View HTML test report
npx playwright show-report
```

## 🐋 Docker (Production Build)

A `Dockerfile` is included to build and run the Next.js application in a lightweight Node.js Alpine container.

```bash
docker build -t dayron-portfolio .
docker run -p 3000:3000 dayron-portfolio
```
