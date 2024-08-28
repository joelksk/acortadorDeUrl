import { Router } from "express";
import { ShorturlsController } from "../controllers/shorturls.js";
import { Middleware } from "../middlewares/middleware.js";

export const shorturlsRouter = Router();


//PUBLIC ROUTES
shorturlsRouter.get("/", ShorturlsController.getAllShorturls);
shorturlsRouter.post("/", ShorturlsController.createNewShorturl);
shorturlsRouter.get("/redirect/:codeUrl", ShorturlsController.redirectToOriginalUrl);


//PRIVATE ROUTES
shorturlsRouter.put("/:id", Middleware.tokenExtractor, Middleware.userExtractor, ShorturlsController.updateShorturl)
shorturlsRouter.get("/:id", Middleware.tokenExtractor, Middleware.userExtractor, ShorturlsController.getShortUrlById);
shorturlsRouter.delete("/:id", Middleware.tokenExtractor, Middleware.userExtractor, ShorturlsController.deleteUrlById);
