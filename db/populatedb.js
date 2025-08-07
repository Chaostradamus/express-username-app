const { Client } = require('pg');

const config = {
  user: 'whimsy',
  password: 'chaopostgres',
  host: 'localhost',
  database: 'top_users',
  port: 5432
};

const SQL = `
  CREATE TABLE IF NOT EXISTS usernames (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL
  );

  INSERT INTO usernames (username) VALUES 
    ('Bryan'),
    ('Odin'),
    ('Damon');
`;

async function main() {
  const client = new Client(config);
  
  try {
    await client.connect();
    await client.query(SQL);
    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    await client.end();
  }
}

main();