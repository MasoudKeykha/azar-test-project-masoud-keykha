<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Target

Build [Figma Test Exam → Home](https://www.figma.com/design/CeRORMTj0asqhsdQAah6TL/Test-Exam?node-id=0-1&p=f&t=AbpRxbK085l2Xc2q-0) at `/`. Match section order, layout, dimensions, spacing, typography, colors, assets, copy, direction, and prototype states. Use Figma tokens in the MUI theme. Confirm missing specs that affect fidelity. Keep project communication in English.

## Working context

- Start with the approved step, `git status --short`, and the relevant files. Use `rg` and targeted reads. Inspect the current Figma section, its responsive variants, and the shared tokens or interactions it uses. Reuse confirmed measurements and decisions. Summarize verification failures with the relevant errors.
- Starting versions are Next.js 16.4.6, React 19.3.0, and MUI 9.5.0. Use the installed versions and lockfile as the source of truth. Read the relevant bundled Next.js App Router guide before coding. Check [MUI’s Next.js integration guide](https://mui.com/material-ui/integrations/nextjs/) and the specific MUI APIs in use for compatibility and deprecations.

## Implementation sequence

1. Finalize this guide.
2. Confirm Figma access, assets, viewport references, and interaction requirements. Record decisions once for reuse.
3. Organize approved font files, images, vectors, and icons. Use `next/font/local` for supplied fonts, expose a CSS variable to MUI, and use `next/image` where appropriate.
4. Map design tokens to MUI palette, typography, spacing, and breakpoints. Verify the installed stack against the `@mui/material-nextjs` peer dependencies and App Router export. Put `ThemeProvider` inside `AppRouterCacheProvider` under the root body. Verify initial styles and hydration.
5. Build the shared header and footer in `app/layout.tsx`. Keep the header sticky at the top while scrolling. Animate its scroll state without shifting layout, and respect reduced motion.
6. In `app/page.tsx`, compose Home one Figma section per review. Keep section components near the route and place components reused across sections in a shared directory. Use MUI for UI and responsive styling. Prefer Server Components with focused client boundaries.

## Verification and handoff

Run lint, TypeScript, and build checks as relevant. Compare the affected UI against Figma at reference widths and check intermediate widths for overflow. Verify interactions, accessible names, keyboard focus, and reduced motion where applicable.

After each step, including each section, summarize changes and checks. Ask the owner to review, commit, merge into `main`, and share recommendations. Wait for their go-ahead before starting the next step.
