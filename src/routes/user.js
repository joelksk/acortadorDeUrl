import { Router } from "express";
import { UserController } from "../controllers/user.js";
import { Middleware } from "../middlewares/middleware.js";

export const userRouter = Router();

userRouter.get("/", UserController.getAllUsers);
userRouter.post("/", UserController.createNewUser);
userRouter.get("/:id", Middleware.tokenExtractor, UserController.getUserById);
//TODO: userRouter.patch("/:id", MovieController.updateMovie)
//TODO: userRouter.delete("/:id", MovieController.deleteMovie)