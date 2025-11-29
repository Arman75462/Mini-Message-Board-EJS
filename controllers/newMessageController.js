import { insertUsernameAndMessage } from "../db/queries.js";
import { validationResult, matchedData } from "express-validator";

export function getForm(req, res) {
  res.render("form", {
    errors: [],
  });
}

export async function createNewMessage(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("form", {
      errors: errors.array(),
    });
  }

  // Only extract the validated fields
  const { username, message } = matchedData(req);
  await insertUsernameAndMessage(username, message);

  res.redirect("/");
}
