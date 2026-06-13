<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Next.js 16 Breaking Changes

- **`middleware.ts` is gone** — renamed to `proxy.ts`. The exported function must be a default export or named `proxy` (not `middleware`). The `config` export and matcher syntax are unchanged.
- Read `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md` for the full proxy API reference.
