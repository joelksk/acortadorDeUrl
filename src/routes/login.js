import { Router } from "express";
import {LoginController } from "../controllers/login.js"

export const loginRouter = Router();

//PUBLICS ROUTES
loginRouter.post("/", LoginController.login)