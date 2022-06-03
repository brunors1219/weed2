import { Schema, model, models } from 'mongoose';

const Photo = new Schema({
  url: { type: String, required: true},
  date: { type: Date, required: false}
});

export default models.Photo || model('Photo', Photo);