import { Router } from "express";
import {
  getForm,
  createNewMessage,
} from "../controllers/newMessageController.js";
import { body } from "express-validator";
export const newMessageRouter = Router();

const createMessageValidators = [
  body("username")
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage("Username must be between 3 and 30 characters"),
  body("message")
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage(
      "Message cannot be empty and must not be over 500 characters."
    ),
];

newMessageRouter.get("/", getForm);
newMessageRouter.post("/", createMessageValidators, createNewMessage);
