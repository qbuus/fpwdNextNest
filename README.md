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

### Setup

App uses mongodb to store transaction data. Make sure to create `.env` in the root api folder with the following variables

```env
MONGODB_URI=your_mongodb_connection_string
API_KEY=your_api_key
API_URL=your_api_url
PORT=your_port_number Optional
```

### How to run a project

Start with
`npm install`

You can run both the backend and frontend simultaneously with
`npm run dev`

### Development

Install dependencies in the root folder, as they are shared between the nest-api and web folders
