import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message) 
VALUES
  ('Bryan', 'Hey what''s up world'),
  ('Odin', 'Wow this is so cool!'),
  ('Damon', 'How about make this website prettier');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`,
    ssl: {
      rejectUnauthorized: true,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
