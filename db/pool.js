const { Pool } = require('pg');

module.exports = new Pool({
  user: process.env.DB_USER || 'whimsy',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'top_users',
  password: process.env.DB_PASSWORD || 'chaopostgres',
  port: process.env.DB_PORT || 5432
});