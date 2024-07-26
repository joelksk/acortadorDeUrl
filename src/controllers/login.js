import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserController } from "../controllers/user.js";

export class LoginController {
  static async login(req, res) {
    const { username, password } = req.body;

    const user = await UserController.getUserByUsername(username);
    const passCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passCorrect)) {
      return res.status(401).json({
        error: "invalid username or password",
      });
    }

    const userForToken = {
      username: user.username,
      id: user.id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    res.status(200).send({ token, username: user.username });
  }
}
