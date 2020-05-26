# Node/Express/Knex/Postgres/JWT Boilerplate

This repo provides a template to quickly setup a basic CRUD backend using:

- [Node](https://www.nodejs.org)/[Express](https://www.expressjs.com)
- [PostgreSQL](https://www.postgresql.org) relational database
- [Knex](https://www.knexjs.org) SQL query builder
- [JWT](https://jwt.io) for authentication
- [Jest](https://jestjs.io)/[Supertest](https://github.com/visionmedia/supertest) for testing

## Setup

To use this boilerplate, please follow the steps below:

NOTE: Skip steps 5 and 6 for now. Migrations and seeds have not been run yet and are on my todo list

1. [Fork and clone](https://guides.github.com/activities/forking/) the repository
2. Install dependencies: `npm install`
3. [Setup postgres database](#postgres)
4. [Modify `.env` file](#env)
5. Run database migrations: `npx knex migrate:latest`
6. Run seeds: `npx knex seed:run`
7. Run server: `npm run server`

## Run Tests

```
npm run tests
```

Tests are set up to run continously. If you want to run them manually, remove the `--watch` flag from the `test` script in `package.json`

## <a id="postgres"></a>Setup PostgreSQL (Mac)

To install postgres, follow [these instructions.](https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)

### Create development and testing databases

Start the Postgres CLI:

```
psql
```

If you have not previously done so, create a user with permission to create a database with the following command:

```
createuser {username} --createdb
```

Switch to your username:

```
psql postgres -U {username}
```

Create development database:

```
CREATE DATABASE {db-name};
```

Create testing database:

```
CREATE DATABASE {db-name-test};
```

Exit

```
\q
```

## <a id="env"></a>`.env` Variables

Create a `.env` file at the root of your project and add the following for development and testing databases:

```

POSTGRES_DEV_HOST=localhost
POSTGRES_DEV_PORT=5432
POSTGRES_DEV_USER={postgres username}
POSTGRES_DEV_PASSWORD={postgres password, if you set one}
POSTGRES_DEV_DATABASE={db-name}

```

```

POSTGRES_TEST_HOST=localhost
POSTGRES_TEST_PORT=5432
POSTGRES_TEST_USER={postgres username}
POSTGRES_TEST_PASSWORD={postgres password, if you set one}
POSTGRES_TEST_DATABASE={db-name-test}

```

## TO DO

- Add migrations and seeds
- Add tests
