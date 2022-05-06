import { Schema, model, models } from 'mongoose';

const Products = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  url: { type: String, required: false, unique: true }
});

export default models.Product || model('Product', Products);