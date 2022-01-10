# testing-with-sequelize

An example repository for how to test with the Sequelize ORM.

## Development

A quick guide to get a new development environment setup

### Setup

**Node**

1. Install [nvm][] with:
    ```bash
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.7/install.sh | bash`.
2. Install Node `8.11.2` with:
    ```bash
    nvm install 8.11.2
    ```
3. From the root directory of this project, run
    ```bash
    nvm use 8.11.2
    ```
4. Install NPM packages:
    ```bash
    npm install
    ```
    
[nvm]: https://github.com/nvm-sh/nvm

**Database**

1. Install PostgreSQL on your local machine. Use Homebrew as below or go to the [Postgres Downloads](https://www.postgresql.org/download/) page.

    ```bash
    $ brew install postgresql
    ```

2. Start PostgreSQL and run on startup.

    ```bash
    $ brew services start postgresql
    ```

3. Ensure a `root` user exists on PostgreSQL with no password:

    ```console
    $ psql --dbname=postgres
    postgres=# CREATE USER root;
    postgres=# ALTER USER root WITH SUPERUSER;
    ```

4. Create the database by running:

    ```bash
    $ NODE_ENV=test npm run db:create
    ```

### Testing

Run the test suite:

```bash
$ npm run test
```
