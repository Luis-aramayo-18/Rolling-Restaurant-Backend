import mongoose from 'mongoose';

const { Schema } = mongoose;

const pedidoSchema = new Schema({
  idpedido: Number,
  mesa: Number,
  categoria: String,
  name: String,
  description: String,
  cantidad: Number,
  price: Number,
  subtot: Number,
  estado: Boolean,
  username: String,
  idprod: Number,
  iduser:Number,
  isActive: Boolean,
  });

export default mongoose.model('Pedidos', pedidoSchema);
