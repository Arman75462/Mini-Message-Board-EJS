import pool from "./pool.js";

export async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
}

export async function getSingleMessageDetails(id) {
  const { rows } = await pool.query(
    "SELECT username, message, date FROM messages WHERE id = $1",
    [id]
  );

  return rows[0];
}

export async function insertUsernameAndMessage(username, message) {
  await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [
    username,
    message,
  ]);
}
