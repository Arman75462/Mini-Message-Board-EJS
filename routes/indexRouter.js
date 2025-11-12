import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import getIndex from "../controllers/indexController.js";
import { getMessageDetails } from "../controllers/indexController.js";
export const indexRouter = Router();

export const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: uuidv4(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: uuidv4(),
  },
];

indexRouter.get("/", getIndex);

indexRouter.get("/index/:id", getMessageDetails);
