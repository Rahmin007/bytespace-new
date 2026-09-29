# ByteSpace New

A pixel-accurate build of the **ByteSpace New** Figma design: the full landing page, plus the bonus **Sign In** and **Sign Up** pages, and the design's **404** page.

- **Live site:** _add your Vercel URL here_
- **Design:** [ByteSpace New (Figma)](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website)

| Page      | URL                              |
| --------- | -------------------------------- |
| Landing   | `/`                              |
| Sign In   | `/signin`                        |
| Sign Up   | `/signup`                        |
| Not found | any other URL, e.g. `/something` |

## Tech stack

| Tool                               | Why                                                    |
| ---------------------------------- | ------------------------------------------------------ |
| React 18 + Vite 8                  | Fast dev server and a small production build           |
| React Router 7                     | Client-side pages (`/`, `/signin`, `/signup`, 404)     |
| Tailwind CSS 3                     | Design tokens from Figma live in `tailwind.config.js`  |
| Vitest 5 + Testing Library         | Unit and component tests                               |
| Playwright                         | End-to-end tests in a real browser, desktop and mobile |
| ESLint (incl. jsx-a11y) + Prettier | Consistent, accessible code                            |

## Getting started

Requires **Node.js 20.19+ or 22.12+** (the current LTS is fine).

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command                 | What it does                                                                |
| ----------------------- | --------------------------------------------------------------------------- |
| `npm run dev`           | Start the dev server                                                        |
| `npm run build`         | Production build into `dist/`                                               |
| `npm run preview`       | Serve the production build locally                                          |
| `npm run lint`          | ESLint (React, hooks and accessibility rules)                               |
| `npm run format`        | Format everything with Prettier                                             |
| `npm test`              | Run the unit/component tests once                                           |
| `npm run test:coverage` | Tests with a coverage report                                                |
| `npm run test:e2e`      | Playwright browser tests (run `npx playwright install chromium` once first) |
| `npm run check`         | Lint + format check + tests + build (run before a PR)                       |

## Project structure

```
src/
├── App.jsx                 # Routes
├── main.jsx                # Entry point (router, fonts, global CSS)
├── pages/                  # One file per page: Home, SignIn, SignUp, NotFound
├── components/
│   ├── ui/                 # Reusable building blocks (Button, CourseCard, Logo, icons, ScaledStage…)
│   ├── layout/             # Navbar, Footer, NewsletterForm, PageShell, ScrollToTop, SkipLink
│   ├── sections/           # Landing page sections (Hero, DiscoverCourses, Testimonials…)
│   └── auth/               # Sign in / sign up building blocks (AuthLayout, TextField…)
├── data/                   # Page content: courses, topics, testimonials, footer links
├── hooks/                  # useForm, useElementWidth, useFakeSubmit, useDocumentTitle
├── utils/                  # Validation rules, course filtering, routes, cn()
├── assets/                 # Images, icons and logos exported from the Figma file
└── styles/index.css        # Tailwind layers + a few global utilities
e2e/                        # Playwright tests
docs/HOW-IT-WORKS.md        # Walkthrough of the main decisions
```

## Features

- **Faithful to the design:** colours, sizes, radii and positions were measured from the Figma file. The logo, icons, partner logos, photos and 3D shapes are exported from the design itself, not approximated.
- **Responsive:** tested from 320px to 1920px. The layered illustrations scale proportionally (see `ScaledStage`), grids collapse, the topic chips become a swipeable row, and the navbar turns into a menu on smaller screens.
- **Working interactions:**
  - Topic chips filter the course grid.
  - Category tiles open the matching topic.
  - The hero search filters courses by title or creator.
  - Filters and searches are stored in the URL, e.g. `/?topic=Marketing#courses`, so they can be shared.
- **Forms with validation:** sign up, sign in and the newsletter. Errors show when you leave a field or submit. On submit, focus moves to the first invalid field. There's a show/hide password toggle and a loading state.
- **Accessibility:**
  - Semantic landmarks and one `h1` per page.
  - Labelled inputs, with errors linked through `aria-describedby`.
  - A skip link and visible focus rings.
  - `aria-pressed` and `aria-expanded` on toggles.
  - Respects `prefers-reduced-motion`.
- **Performance:** photos are compressed (JPEG and WebP), images below the fold are lazy-loaded, and Vite hashes every asset for long-term caching.

## Testing

`npm audit` reports **0 vulnerabilities**: all dependencies are on current, patched versions.

- **62 unit and component tests** (`npm test`, about 99% line coverage) cover:
  - the validation rules and course filtering
  - `CourseCard`, the navbar and its mobile menu, and the newsletter form
  - both auth pages, including the success flows
  - routing and the 404 page
- **Playwright tests** (`npm run test:e2e`) run on desktop (1440px) and mobile (Pixel 7). They check that:
  - every page loads with no errors and every image loads
  - there is no horizontal scrolling at 8 screen widths
  - the filters, search, forms and navigation work in a real browser

## Notes for the reviewer

- **No backend was provided.** The sign in and sign up forms validate input and then simulate a short request (`useFakeSubmit`) before showing a success message. Replacing that one hook with an API call is all that's needed.
- **Pages outside the brief:** the navbar's _Courses_ and _Creators_ links scroll to the matching landing page sections, since those pages weren't part of the task.
- **Copy is kept exactly as in the design,** including the footer newsletter button labelled "Search". That button has an accessible name of "Subscribe to newsletter" so screen readers announce what it does.
- **The 3D shapes** are grey renders in the Figma file that Figma recolours. I exported them and produced lime and white versions to match the design.
- **Fonts:** Poppins (headings) is self-hosted with `@fontsource`. Satoshi (body) loads from Fontshare with a system font fallback.

## Deployment

Deployed on **Vercel**. `vercel.json` rewrites every path to `index.html`, so `/signin`, `/signup` and the 404 page also work when opened directly or refreshed.
