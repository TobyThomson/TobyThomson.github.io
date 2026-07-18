# tobythomson.co.uk

Source for the site, built with Eleventy (11ty).

## Structure

- `src/` — source files (edit these)
  - `_includes/base.njk` — shared layout (header + content shell), used by every page
  - `css/style.css` — all styling
  - `fonts/` — self-hosted Inter variable font
  - `index.njk`, `about.njk`, `portfolio.njk`, `contact.njk` — the four pages
- `docs/` — built output (generated, do not edit by hand). GitHub Pages serves from here.
- `.eleventy.js` — Eleventy config (input `src/`, output `docs/`)

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
npx eleventy
```

This writes the final static site into `docs/`.

## Deploying

1. Run `npx eleventy` to rebuild `docs/`.
2. Commit both `src/` and `docs/`.
3. Push to `main`.
4. In the GitHub repo settings → Pages, set source to "Deploy from branch", branch `main`, folder `/docs`.

GitHub Pages will serve straight from the committed `docs/` folder — no CI build step involved.

## Editing content

Each page (`src/index.njk`, `src/about.njk`, `src/portfolio.njk`, `src/contact.njk`) has YAML frontmatter at the top (`title`, `permalink`) followed by plain HTML content. Edit the HTML directly.

The header/nav is defined once in `src/_includes/base.njk` and shared across all pages — edit it there if you need to change the nav links or name.
