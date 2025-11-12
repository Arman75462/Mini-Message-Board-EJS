import { messages } from "../routes/indexRouter.js";

export default function getIndex(req, res) {
  res.render("index", { title: "Mini Message Board", messages: messages });
}

export function getMessageDetails(req, res) {
  const { id } = req.params;

  const message = messages.find((msg) => msg.id === id);

  res.render("messageDetails", { message: message, id: id });
}
