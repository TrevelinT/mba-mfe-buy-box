# Buy Box MFE

Remote micro-frontend for pricing, quantity, and “add to cart” (publishes `cart:add-item`).

## Federation

Exposes `./BuyBox` → `src/components/buy-box-container.tsx` as `buyBox/BuyBox` when consumed by the shell.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Standalone dev server (port 5002) |
| `npm run build` | Type-check + production build |
| `npm run preview` | Serve built assets (port 5002) |
| `npm run test` | Unit tests (Vitest) |
| `npm run test-coverage` | Unit tests with coverage |
| `npm run type-check` | `tsc --noEmit` |
| `npm run format-and-lint` | Biome check |

## Local development

**Standalone:** `npm ci && npm run dev`

**With shell:** `npm run build && npm run preview`, then start the shell (see `../README.md`).

## CI

Push/PR to `main` runs lint, build, type-check, and `test-coverage`.
