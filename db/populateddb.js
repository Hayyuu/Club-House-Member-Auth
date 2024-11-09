require("dotenv").config();

const { Client } = require("pg");
const user=process.env.USER;
const password=process.env.PASSWORD;
const database=process.env.DATABASE;
const port=process.env.PORT;
const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name VARCHAR ( 255 ),
  last_name VARCHAR ( 255 ),
  email VARCHAR ( 255 ),
  password VARCHAR ( 255 ),
  member_status VARCHAR ( 255 )
);
CREATE TABLE IF NOT EXISTS post (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content VARCHAR ( 255 ),
  user_id INTEGER,
  FOREIGN KEY (user_id) references users(id)
);
`;


async function main() {
  console.log("seeding...");
  const client = new Client({
    host: "localhost", // or wherever the db is hosted
    user:user,
    database: database,
    password: password,
    port: port // The default port
});
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();