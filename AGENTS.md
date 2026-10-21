# Agent guide

Turborepo + pnpm monorepo. Node >= 24, pnpm only.

## Layout

- `apps/web` – Next.js app (see `apps/web/AGENTS.md`; read its Next.js docs note before writing Next code)
- `packages/ui` – shared React components, imported as `@repo/ui/<file>` (source exports, no build step)
- `packages/config` – shared tsconfigs (`@repo/config/tsconfig.*.json`)
- Root: `turbo.json`, single `biome.json` for the whole repo, Husky/commitlint

## Commands (run from the repo root)

- `pnpm verify` – type-check + build + lint; run before finishing a task
- `pnpm check-types` / `pnpm build` / `pnpm lint` / `pnpm format`
- Scope work: `pnpm turbo run check-types --filter=web`, `--filter=@repo/ui`, or `--affected`
- Keep output short: add `--output-logs=errors-only`
- Add a dependency to one package: `pnpm --filter <pkg> add <dep>`
- Do not run `pnpm dev` (long-running) unless asked

## Conventions

- Conventional Commits are enforced by commitlint.
- Biome (not ESLint/Prettier) formats and lints; run `pnpm exec biome check --write` to fix.
- Shared code belongs in `packages/*`; apps never import from other apps.
- Each new package needs `package.json` with a `check-types` script so Turbo picks it up.
- Internal deps use `workspace:*`.
