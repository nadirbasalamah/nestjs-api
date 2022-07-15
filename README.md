# nestjs-api

A simple REST API application written using NestJS with Postgres database.

## How To Use

1. Make sure the Postgres database is online.

2. Copy the `.env.example` file for development purpose.

```
cp .env.example .env
```

3. Copy the `.env.example` file for testing purpose.

```
cp .env.example .env.test
```

4. Specify the database configuration in `.env` and `.env.test` files.

5. Install the libraries.

```
npm install
```

6. Run the database migration.

```
npx prisma migrate dev
```

7. Run the application.

- For development.

```
npm run start
```

- For development with hot-reload mechanism.

```
npm run start:dev
```

- For production mode.

```
npm run start:prod
```

8. Run the end-to-end test.

```
npm run test:e2e
```
