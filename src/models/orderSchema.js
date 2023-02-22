import mongoose from "mongoose";

const {Schema} = mongoose

const orderSchema = new Schema({
    id: String,
    mesa: Number,
    categoria: String,
    name: String,
    description: String,
    cantidad: Number,
    price: Number,
    subtot: Number,
    estado: Boolean,
    email: String,
    isActive: Boolean,
    });
  
  export default mongoose.model('Order', orderSchema);