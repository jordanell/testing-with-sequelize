/**
 * This file simple imports all Sequelize models and configures
 * their associations.
 *
 * Import this file to gain access to all Sequelize models
 * in other files.
 */

import fs from 'fs';
import path from 'path';

import autoParse from 'auto-parse';
import {
  includes,
  omit,
  assign,
} from 'lodash';
import queryString from 'query-string';
import Sequelize from 'sequelize';
import { parseURL } from 'whatwg-url';

// Convert postgres "bigint" columns to integers
require('pg').defaults.parseInt8 = true;

const urlParts = parseURL(process.env.POSTGRES_SERVICE_URL);
const query = queryString.parse(urlParts.query || ''); urlParts.query = null;
const pathname = urlParts.path[0]; urlParts.path = [];
const username = urlParts.username;
const password = urlParts.password;

const options = omit(urlParts, 'query', 'path', 'username', 'password');
assign(options, query);

['logging'].forEach(x => { if (options[x]) options[x] = autoParse(options[x]); });

options.dialect = 'postgres';
options.pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};
options.dialectOptions = {};
options.operatorsAliases = Sequelize.Op;
const sequelize = new Sequelize(pathname, username, password, options);
const db = {};

const IGNORE_FILES = [
  '.DS_Store',
  'index.js',
];

fs
  .readdirSync(__dirname)
  .filter((file) => !includes(IGNORE_FILES, file))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));

    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
