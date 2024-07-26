import { Router } from "express";
import { ShorturlsController } from "../controllers/shorturls.js";

export const shorturlsRouter = Router();

shorturlsRouter.get("/", ShorturlsController.getAllShorturls);
shorturlsRouter.get("/:id", ShorturlsController.getShortUrlById);
shorturlsRouter.post("/", ShorturlsController.createNewshorturl);
shorturlsRouter.put("/:id", ShorturlsController.updateShorturl)
//TODO: moviesRouter.delete("/:id", MovieController.deleteMovie)