import { Router } from "express";
import { UserController } from "../controllers/user.js";

export const userRouter = Router();

userRouter.get("/", UserController.getAllUsers);
userRouter.post("/", UserController.createNewUser);
userRouter.get("/:id", UserController.getUserById);
//TODO: userRouter.patch("/:id", MovieController.updateMovie)
//TODO: userRouter.delete("/:id", MovieController.deleteMovie)