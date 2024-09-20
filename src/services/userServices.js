import User from '../models/mongodb/userModel.js';

export class UserServices {

    static async getAll() {
        try {
            const users = await User.find();
            return users
        } catch (error) {
            console.log("Error al traer a todos los usuarios", error);
        }
    }

    static async createNewUser({username, email, passwordHash}) {
        try {
            const newUser = new User({
                username,
                email,
                passwordHash
            })
            await newUser.save()
            return newUser
        } catch (error) {
            console.log("Error al intentar crear un usuario", error)
        }
    }

    static async getUserById(id) {
        try {
            const user = await User.findById(id);
            return user;
          } catch (error) {
            console.log("error al tratar de traer al usuario desde la bd");
          }
    }

    static async getUserByUsername(username){
        try {
            const user = await User.findOne({username})
            return user
        } catch (error) {
            console.log("Error al tratar de traer un usuario por medio del username");
        }
    }

    static async deleteUser(userId){
        try {
          const res = await User.deleteOne({_id: userId})
          return res
        } catch (error) {
          console.log('Error al tratar de eliminar el Usuario por id')
        }
      }
}