import mongoose from "mongoose";

const {Schema} = mongoose

const productSchema = new Schema({
id:String,
image:String,
name:String,
description:String,
price:Number,
})

export default mongoose.model("Products",productSchema)