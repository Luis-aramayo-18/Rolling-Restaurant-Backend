import mongoose from "mongoose";

const {Schema} = mongoose

const productSchema = new Schema({
id:String,    
image:String,
name:String,
description:String,
price:Number,
categoria:String,
isActive:Boolean
})

export default mongoose.model("Products",productSchema)