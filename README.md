Hussein Duvigneau's
# Next Base

My common next-js set-up for my own personal projects.

## Background

Made with JetBrains IDEs in mind, so doesn't cover extra set-up for VSCode - .idea/ added to gitignore.

Built up from `pnpm dlx create-next-app@latest . --ts --use-pnpm --tailwind --src-dir --app --biome --yes`

Adds common `.editorconfig` and `.gitattributes` settings.

Renames default branch to "main" and amends next's initial commit to conventional commit format.

### Husky

As this is for personal projects, the emphasis is on:
✔️ Keeping code and changes clean and consistent
✔️ Not pushing broken code to `main`
and I don't care about:
❌ Forcing merges to go through 2nd-person review. 

pre-commit:
* Format and lint staged files.
* Commit message must be a [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)

* pre-push:
* Run tests.
* If on main, check the app successfully builds.

### Search + crawler metadata files

SEO and AI crawlers, as well as human lurkers taken care of.

Helper function `getBaseUrl()` to keep robots.txt and sitemap.xml correct across all deployments - maybe useful elsewhere too.

## Getting Started

Recommended prerequisite: `pnpm self-update`

Run `pnpm create next-app --example "https://github.com/HDv2b/next-base" [your-project-name]`

## Follow-up

See TODOs in:
* public/ads.txt
* public/humans.txt
* public/llms.txt
* public/.well-known/security.txt
