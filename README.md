# tobythomson.co.uk

Source for the site, built with Eleventy (11ty).

## Structure

- `src/` — source files (edit these)
  - `_includes/base.njk` — shared layout (header + content shell), used by every page
  - `_includes/project.njk` — layout used by individual project pages
  - `_includes/style.css` — all styling
  - `fonts/` — self-hosted Inter variable font
  - `images/` — site images (e.g. banner photo)
  - `static/` — files copied as-is to the site root (CNAME, CV PDF, etc.)
  - `about.njk`, `projects.njk`, `contact.njk` — the main pages
  - `projects/` — one markdown file per project; `projects.json` sets the shared layout/permalink/tag for all of them
    - `projects/draft/` — in-progress projects. Anything in this folder is excluded from the build entirely (not built, not listed, not in any collection). Move a project's `.md` file out of `draft/` into `projects/` to publish it.
- `docs/` — built output (generated, do not edit by hand). GitHub Pages serves from here.
- `.eleventy.js` — Eleventy config (input `src/`, output `docs/`, ignores `src/projects/draft/**`)

## Setup (first time)

```
npm install
```

## Local preview

```
npx eleventy --serve
```

Visit `http://localhost:8080`. Rebuilds and reloads automatically as you edit files in `src/`.

## Build for deploy

```
npm run build
```

This clears `docs/` and rebuilds it from scratch, so pages removed or drafted in `src/` don't linger as stale files in the output. (Plain `npx eleventy` rebuilds without clearing first — fine for quick checks, but can leave stale output behind, e.g. when a project is moved into `draft/`.)

## Deploying

1. Run `npm run build` to rebuild `docs/`.
2. Commit both `src/` and `docs/`.
3. Push to `main`.
4. In the GitHub repo settings → Pages, set source to "Deploy from branch", branch `main`, folder `/docs`.

GitHub Pages will serve straight from the committed `docs/` folder — no CI build step involved.

## Editing content

Each page (`src/about.njk`, `src/projects.njk`, `src/contact.njk`) has YAML frontmatter at the top (`title`, `permalink`) followed by plain HTML content. Edit the HTML directly.

Project pages live in `src/projects/*.md` and use Markdown instead, with frontmatter for `title`, `year`, and `description`. The projects listing page (`src/projects.njk`) groups them by year automatically.

The header/nav is defined once in `src/_includes/base.njk` and shared across all pages — edit it there if you need to change the nav links or name.
