# Node/Express/Knex/Postgres/JWT Boilerplate

Boilerplate code for quick backend setup using: 
- Node/express
- knex/postgres for database
- jwt for authentication
- jest/supertest for testing

## Setup

1. Fork and clone repo
2. npm install
3. Setup postgres database
4. Modify `.env` file
5. Migrate tables: `npx knex migrate:latest`
6. Run seeds: `npx knex seed:run`
7. Run server: `npm run server`
8. Run tests: `npm run test`

## Setup PostgreSQL (Mac)

### MacOS

To install postgres, follow [these instructions.](https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)

Download [pgAdmin](https://www.pgadmin.org/)

#### Create development and testing databases

Run the following commands in the terminal: 1. `psql` -- to get into the postgreSQL cli 2. `CREATE DATABASE db-name;` -- creates development database 3. `CREATE DATABASE db-name-test;` -- creates testing database 4. `\q`

## `.env` Variables

Create a `.env` file at the root of your project and add the following for development and testing databases

```
POSTGRES_DEV_HOST=localhost
POSTGRES_DEV_PORT=5432
POSTGRES_DEV_USER=postgres
POSTGRES_DEV_PASSWORD= \_Insert your postgres password here*
POSTGRES_DEV_DATABASE=db-name
```

```
POSTGRES_TEST_HOST=localhost
POSTGRES_TEST_PORT=5432
POSTGRES_TEST_USER=postgres
POSTGRES_TEST_PASSWORD= \_Insert your postgres password here*
POSTGRES_TEST_DATABASE=db-name-test
```

## TO DO

Add tests
