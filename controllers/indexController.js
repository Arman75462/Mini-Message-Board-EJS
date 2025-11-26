import { getAllMessages, getSingleMessageDetails } from "../db/queries.js";

export async function getMessages(req, res) {
  const messages = await getAllMessages();

  res.render("index", { title: "Mini Message Board", messages: messages });
}

export async function getMessageDetails(req, res) {
  const { id } = req.params;

  const messageDetails = await getSingleMessageDetails(id);

  res.render("messageDetails", { messageDetails: messageDetails });
}
