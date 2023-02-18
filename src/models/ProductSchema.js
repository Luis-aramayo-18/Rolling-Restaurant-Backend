import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
 // category: String,
  name: String,
  price: Number,
  image: String,
  description: String,
  //isActive: Boolean,
});

export default mongoose.model('Products', productSchema);
