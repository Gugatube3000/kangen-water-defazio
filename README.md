# Dr. David De Fazio — Educational Water Wellness

A guided, single-page educational site walking visitors through body water, water quality, molecular hydrogen research, and Dr. David De Fazio's personal water solution — built as a slow-paced, source-linked alternative to typical sales pages.

Live: [water-lake.vercel.app](https://water-lake.vercel.app)

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) / Three.js for the water and electrolysis scenes
- [Framer Motion](https://www.framer.com/motion/) and GSAP for scroll and section transitions
- Vercel for hosting, with a small serverless function backing the on-page Q&A assistant

## Project layout

```
src/
  components/   shared UI primitives (nav, cards, reveal/scroll helpers)
  sections/     page sections (hero, science explainers, machines, testimonials, ...)
  pages/        routed pages that compose sections
  three/        WebGL scenes and shaders used across sections
  lib/          citations, cost math, small utilities
api/            serverless endpoints (Q&A assistant, water report)
public/         static assets, video, and presentation images
scripts/        build and content-processing scripts
```

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run test     # run the water-cost calculator tests
```

Copy `.env.example` to `.env` and fill in the required keys before running the Q&A assistant locally.
