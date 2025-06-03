# FPWD Next Nest

Monorepo for nest next fullstack project

## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `web`: frontend [Next.js](https://nextjs.org/)
- `api` backend [Nest.js](https://docs.nestjs.com/)
- `ui`: tailwindcss [Tailwind CSS](https://tailwindcss.com/)
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### How to run a project

Start with
`npm install`

You can run both the backend and frontend simultaneously with
`npm run dev`

### Development

Install dependencies in the root folder, as they are shared between the nest-api and web folders
