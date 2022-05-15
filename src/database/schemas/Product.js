import { Schema, model, models } from 'mongoose';

const Product = new Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  value: { type: Number, required: true},
  url: { type: String, required: true},
  date: { type: Date, required: false}
});

export default models.Product || model('Product', Product);