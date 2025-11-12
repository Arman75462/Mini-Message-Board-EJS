import { Router } from "express";
import {
  getMessages,
  createNewMessage,
} from "../controllers/newMessageController.js";
export const newMessageRouter = Router();

newMessageRouter.get("/", getMessages);

newMessageRouter.post("/", createNewMessage);
