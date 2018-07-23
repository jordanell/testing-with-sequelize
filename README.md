# testing-with-sequelize

An example repository for how to test with the Sequelize ORM.

## Development

A quick guide to get a new development environment setup

### Setup

**Node**

1. Install `nvm` with `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.7/install.sh | bash`.
2. Install `node 8.11.2` with `nvm install 8.11.2`.
3. From the root directory of this project, run `nvm use 8.11.2`.
4. Run `npm install`

**Database**

1. Install PostgreSQL on your local machine. The instructions for this very from operating system to operating system.

```bash
$ brew install postgresql
```

2. Start PostgreSQL and run on startup.

```bash
$ brew services start postgresql
```

3. Ensure a `root` user exists on PostgreSQL with no password:

```bash
$ psql --dbname=postgres
postgres=# CREATE USER root;
postgres=# ALTER USER root WITH SUPERUSER;
```

4. Create the database by running:

```bash
$ NODE_ENV=test npm run db:create
```

### Testing

To run the test suite, simply run

```bash
$ npm run test
```
