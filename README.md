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

All components are implemented using [TypeScript](https://www.typescriptlang.org/).

### Setup

This project uses MongoDB to store transaction data. Before running the backend service, ensure that a `.env` file exists in the root of the `api` folder with the following environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
API_KEY=your_api_key
API_URL=your_api_url
PORT=your_port_number (Optional; 8000 is recommended as the frontend is configured for this)
```

 **Note:** For the purposes of this recruitment project, the backend URL used by the frontend is currently hardcoded. This was done to simplify local development and setup during evaluation. However, in a production or collaborative environment, this value should be managed through environment variables to ensure better flexibility, configurability, and maintainability

### How to run a project

Start with
`npm install`

You can run both the backend and frontend simultaneously with
`npm run dev`

### Development

Install dependencies in the root folder, as they are shared between the nest-api and web folders
