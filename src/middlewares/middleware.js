import { UserController } from "../controllers/user.js";
import jwt from "jsonwebtoken";

export class Middleware {
  static tokenExtractor(req, res, next) {
    const authorization = req.get("authorization");
    if (authorization && authorization.startsWith("Bearer ")) {
      req.token = authorization.replace("Bearer ", "");
    } else {
      return res.status(401).json({ message: "Invalid authorization" });
    }
    next()
  }

  static async userExtractor(req, res) {
    const token = req.token;
    if (token) {
      const decodedToken = jwt.verify(req.token, process.env.SECRET);
      const username = decodedToken.username;
      const user = await UserController.getUserByUsername(username);
      if (user) {
        req.user = user;
      }
    }
    next()
  }
}
