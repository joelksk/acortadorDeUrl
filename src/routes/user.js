import { Router } from "express";
import { UserController } from "../controllers/user.js";
import { ShorturlsController } from "../controllers/shorturls.js";
import { Middleware } from "../middlewares/middleware.js";

export const userRouter = Router();

//PUBLICS ROUTES
userRouter.get("/", UserController.getAllUsers);
userRouter.post("/", UserController.createNewUser);

//PRIVATES ROUTES
userRouter.get("/:id", Middleware.tokenExtractor, Middleware.userExtractor, UserController.getUserById);
userRouter.get("/:userId/urls", Middleware.tokenExtractor, Middleware.userExtractor, ShorturlsController.getUrlsByUserId)
userRouter.delete("/:id", Middleware.tokenExtractor, Middleware.userExtractor, UserController.deleteUserById)