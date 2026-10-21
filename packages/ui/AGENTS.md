# Package: @repo/ui

Shared React components. Each file in `src/` is exported as `@repo/ui/<name>` (see `exports` in `package.json`). Consumers transpile it via `transpilePackages`.

- Verify: `pnpm turbo run check-types --filter=@repo/ui`
- Keep components framework-agnostic (no `next/*` imports).
- Biome `useBlockStatements` is enforced.
