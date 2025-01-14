import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      minLength: 3,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    }
  });
  
  userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.passwordHash
    }
  })
  
  const User = mongoose.model("User", userSchema);
  export const UserSchema = User.schema;
  export default User;