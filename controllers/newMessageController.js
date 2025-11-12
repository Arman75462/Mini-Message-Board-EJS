import { messages } from "../routes/indexRouter.js";
import { v4 as uuidv4 } from "uuid";

export function getMessages(req, res) {
  res.render("form");
}

export function createNewMessage(req, res) {
  const { message, author } = req.body;

  messages.push({
    text: message,
    user: author,
    added: new Date(),
    id: uuidv4(),
  });

  res.redirect("/");
}
