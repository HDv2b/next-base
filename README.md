# Next Base

A minimal Next.js starter containing the setup I want in every project.

Built on `create-next-app`, it adds only the shared baseline I repeatedly reach for: pnpm, TypeScript, Tailwind, Biome, Husky, sensible Git/editor defaults, and a small set of useful metadata files.

Project-specific choices are intentionally left out.

## Quick start

Recommended prerequisite:

```bash
pnpm self-update
```

Create a new project from this starter:

```bash
pnpm create next-app --example "https://github.com/HDv2b/next-base" your-project-name
```

Then review the project-specific TODOs listed below.


## What it includes

The aim is to keep this starter small: only setup that is common to essentially all of my Next.js projects belongs here.

It is based on:

```bash
pnpm dlx create-next-app@latest . \
  --ts \
  --use-pnpm \
  --tailwind \
  --src-dir \
  --app \
  --biome \
  --yes
```

On top of the default Next.js scaffold, it adds the common baseline:

- `.editorconfig` and `.gitattributes` defaults
- LF line endings for text and shell files
- `.idea/` in `.gitignore` for JetBrains IDEs
- `main` as the default branch
- a Conventional Commit-compatible initial commit
- Husky hooks for local quality checks
- `getBaseUrl()` for environment-aware canonical URLs
- `robots.txt`, `sitemap.xml`, `llms.txt`, `humans.txt`, and `security.txt`
- placeholders for project-specific metadata that should not be guessed up front

## Git hooks

This setup is aimed at solo projects, so the goal is to keep local development disciplined without adding process for its own sake.

### Pre-commit

- Format and lint staged files
- Validate commit messages against [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Pre-push

- Run tests
- When pushing from `main`, run a production build before Vercel gets the chance to deploy it

The emphasis is on:

- keeping changes clean and consistent
- catching broken code before it reaches `main`
- keeping hooks lightweight enough that they do not get in the way

It deliberately does **not** enforce pull requests or second-person review.

## Search and crawler metadata

The starter includes some common search, crawler, and discoverability files so they do not need to be remembered later.

`src/lib/url.ts` exposes a small `getBaseUrl()` helper used by `robots.ts` and `sitemap.ts` so generated URLs work across local development and deployed environments.

Included files:

- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `public/llms.txt`
- `public/humans.txt`
- `public/.well-known/security.txt`
- `public/ads.txt`

The root layout also links to `humans.txt` and `llms.txt`.

## Project-specific TODOs

Some values cannot sensibly be known when the starter itself is created.

After generating a project, review the TODOs in:

- `public/ads.txt`
- `public/humans.txt`
- `public/llms.txt`
- `public/.well-known/security.txt`


## Replace this README

Once you have acknowledged the project-specific TODOs above, replace this starter README with the included project README template:

```bash
rm README.md
mv README.example.md README.md
```

Then customise the new README so it documents the actual project rather than Next Base.

## Notes

This is deliberately a baseline rather than a kitchen-sink starter. Authentication, databases, component libraries, state management, testing strategy, analytics, and other project-specific decisions should be added only when a project actually needs them.

This starter is primarily designed around:

- pnpm
- JetBrains IDEs
- solo development
- Vercel deployment

It does not include extra VS Code-specific setup.

If you use the repository only as a reference rather than through `create-next-app --example`, you may need to repeat some of the repository-normalisation steps manually.
