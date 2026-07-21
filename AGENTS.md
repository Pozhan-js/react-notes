# Repository Guidelines

## Project Structure & Module Organization

This repository is a small Next.js 16 application using the App Router. Application code lives in `app/`: `layout.js` defines the shared document shell, `page.js` is the home route, and `globals.css` contains global styles and Tailwind imports. Static files belong in `public/` and are referenced from the site root, for example `/next.svg`. Root configuration includes `next.config.mjs`, `eslint.config.mjs`, `postcss.config.mjs`, and `jsconfig.json`. Use the configured `@/*` alias for root-relative imports when it improves readability.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies from `package-lock.json`.
- `npm run dev` starts the local development server at `http://localhost:3000`.
- `npm run lint` runs ESLint with Next.js Core Web Vitals rules.
- `npm run build` creates a production build and catches compilation errors.
- `npm start` serves the production build after `npm run build`.

Before submitting a change, run `npm run lint` and `npm run build`.

## Coding Style & Naming Conventions

Follow the existing JavaScript style: two-space indentation, double quotes, semicolons, and named default React components in PascalCase. Use lowercase route-directory names and Next.js conventions such as `page.js` and `layout.js`. Keep components focused; colocate route-specific code under its route and place only genuinely shared assets or utilities at the repository root. Prefer Tailwind utility classes for component styling and reserve `app/globals.css` for global tokens and base rules.

## Testing Guidelines

No automated test framework or coverage threshold is configured yet. For current changes, lint and build are the required checks, followed by a manual browser check of affected routes at common viewport sizes. If non-trivial behavior is added, introduce the smallest suitable test setup and name tests `*.test.js` near the code they verify.

## Commit & Pull Request Guidelines

The Git history currently contains only the Create Next App initialization, so no project-specific commit convention exists. Use short, imperative subjects such as `Add note editor validation`. Pull requests should explain the user-visible change, list verification performed, link related issues, and include screenshots for visual changes. Keep each PR narrowly scoped and avoid unrelated formatting or refactors.

## Agent-Specific Instructions

This repository uses a newer Next.js version with potentially breaking conventions. Before changing framework behavior, read the relevant local guide under `node_modules/next/dist/docs/` and follow its deprecation notices rather than relying on remembered APIs.
