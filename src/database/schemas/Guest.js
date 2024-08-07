import mongoose from 'mongoose';
import Escort from './Escort.js';
const { Schema, model, models } = mongoose;

const Guest = new Schema({
  owner: { type: String, required: true }, 
  name: { type: String, required: true },
  referency: { type: String, required: false },
  email: { type: String, required: false, unique: false },
  age: { type: Number, required: false },
  phone: { type: 'String', required: false },
  confirmed: { type: Boolean, required: false, default: null  },
  dueDate:  { type: Date, required: false, default: null  },
  escorts: [Escort],
});

export default models.Guest || model('Guest', Guest);