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

  static async optionalTokenExtractor(req, res, next) {
    const token = req.get("authorization")?.split(' ')[1];
    if (!token) {
        req.user = null;
        return next();
    }
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const username = decodedToken.username;
        const user = await UserController.getUserByUsername(username);
        if (user) {
          req.user = user;
        }
    } catch (error) {
        req.user = null;
    }

    next();
  }

  static async userExtractor(req, res, next) {
    try {
      if (req.token) {
        const decodedToken = jwt.verify(req.token, process.env.SECRET);
        const username = decodedToken.username;
        const user = await UserController.getUserByUsername(username);
        if (user) {
          req.user = user;
        }
      }
      next()
    } catch (error) {
      if (error.name ===  'JsonWebTokenError') {
        return res.status(401).json({ error: 'token invalid' })
      }else{
        res.status(500).json({error: "Server error..."})
      }
    }
  }
}
