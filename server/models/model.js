const { Pool } = require('pg');

let connectionString = '';
if (process.env.NODE_ENV === 'test') {
  // make .env available to this file when not using node start script
  require('dotenv').config();
  connectionString = process.env.TEST_DB;
} else {
  connectionString = process.env.DB_URI;
}

const pool = new Pool({
  connectionString,
  max: 3,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000,
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('Executing query ', text);
    return pool.query(text, params, callback);
  },
};
