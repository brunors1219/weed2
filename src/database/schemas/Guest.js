import { Schema, model, models } from 'mongoose';

import Escort from './Escort';

const Guest = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: false, unique: true },
  age: { type: Number, required: false },
  phone: { type: 'String', required: true },
  confirmed: { type: Boolean, default: false },
  escorts: [Escort],
});

export default models.Guest || model('Guest', Guest);