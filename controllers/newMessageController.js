import { insertUsernameAndMessage } from "../db/queries.js";

export function getForm(req, res) {
  res.render("form");
}

export async function createNewMessage(req, res) {
  const { username, message } = req.body;

  await insertUsernameAndMessage(username, message);

  res.redirect("/");
}
