import mongoose from "mongoose";

const {Schema} = mongoose

const userSchema = new Schema({
    id:String,
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean
    }
})

export default mongoose.model("Users",userSchema);