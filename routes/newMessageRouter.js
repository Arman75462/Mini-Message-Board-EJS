import { Router } from "express";
import {
  getForm,
  createNewMessage,
} from "../controllers/newMessageController.js";
export const newMessageRouter = Router();

newMessageRouter.get("/", getForm);
newMessageRouter.post("/", createNewMessage);
