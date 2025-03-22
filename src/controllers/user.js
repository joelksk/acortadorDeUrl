import { UserServices } from "../services/userServices.js";
import { ShorturlsServices } from "../services/urlServices.js";
import bcrypt from "bcrypt";

export class UserController {

    static async getAllUsers(req, res) {
        const users = await UserServices.getAll()
        res.json(users)
    }

    static async createNewUser(req, res) {
        const {username, password, email} = req.body;
            if (password === undefined) {
            return res.status(400).json({ error: 'content missing' })
            }
            if(password.length <= 3) {
                return res.status(400).json({ error: 'La contraseña debe tener mas de 3 caracteres.' })
            }
        
        const users = await UserServices.getAll()
        let userFilter = users.filter(u => u.username === username)
        if(userFilter.length > 0) return res.status(400).json({ error: 'Username en uso, elija otro.'})
        userFilter = users.filter(u => u.email === email)
        if(userFilter.length > 0) return res.status(400).json({ error: 'Email en uso, elija otro.'})
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const user = {
                username,
                email,
                passwordHash
            }

        const savedUser = await UserServices.createNewUser(user)
        res.status(201).json(savedUser);
    }

    static async getUserById(req, res) {
        const {id} = req.params;
        const user = await UserServices.getUserById(id);
        if(user) return res.json(user)
            res.status(404).json({message: "Usuario no encontrado"})
    }

    static async getUserByUsername(username) {
        const user = await UserServices.getUserByUsername(username)
        return user
    }

    static async deleteUserById(req, res){
        const {id} = req.params;
        const userToDelete = await UserServices.getUserById(id)
        if(!userToDelete) return res.status(404).json({ message: "Usuario no encontrado"})
            const response = await UserServices.deleteUser(id)
            if(response.deletedCount == 1){
                ShorturlsServices.deleteAllUrlsByUserId(id)
                res.status(200).json({ message: 'Usuario eliminado correctamente'})
            } else{
                res.status(500).json({message: 'Internal Server Error'})
            }
    }
}