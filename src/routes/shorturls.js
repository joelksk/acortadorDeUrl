import { Router } from "express";
import { ShorturlsController } from "../controllers/shorturls.js";
import { Middleware } from "../middlewares/middleware.js";

export const shorturlsRouter = Router();


//PUBLIC ROUTES
shorturlsRouter.get("/api/shorturls", ShorturlsController.getAllShorturls);
shorturlsRouter.post("/api/shorturls",Middleware.optionalTokenExtractor, ShorturlsController.createNewShorturl);
shorturlsRouter.get("/:codeUrl", ShorturlsController.redirectToOriginalUrl);



//PRIVATE ROUTES
shorturlsRouter.put("/api/shorturls/:id", Middleware.tokenExtractor, Middleware.userExtractor, ShorturlsController.updateShorturl)
shorturlsRouter.get("/api/shorturls/:id", Middleware.tokenExtractor, Middleware.userExtractor, ShorturlsController.getShortUrlById);
shorturlsRouter.delete("/api/shorturls/:id", Middleware.tokenExtractor, Middleware.userExtractor, ShorturlsController.deleteUrlById);
