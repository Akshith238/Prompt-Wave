import { Schema,model,models } from "mongoose";

const UserSchema=new Schema({
      email:{
        type:String ,
        required:[true,"Email is required"],
        unique : [true,"User already exists"],
      },
      username:{
        type:String,
        required:[true,'Username is Required'],
      },
      image:{
        type:String,
      }
});

const User=models.User||model("User",UserSchema);

export default User;