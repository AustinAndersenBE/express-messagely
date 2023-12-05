/** Common config for message.ly */

// read .env files and make environmental variables

require("dotenv").config();

const { NODE_ENV, DB_USER, DB_PASSWORD } = process.env;

// Constructing the database URI based on the environment
const DB_URI = (NODE_ENV === "test")
  ? `postgresql://${DB_USER}:${DB_PASSWORD}@localhost/messagely_test`
  : `postgresql://${DB_USER}:${DB_PASSWORD}@localhost/messagely`;

const SECRET_KEY = process.env.SECRET_KEY || "secret";
const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};
