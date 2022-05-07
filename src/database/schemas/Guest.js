import { Schema, model, models } from 'mongoose';

import Escort from './Escort';

const Guest = new Schema({
  owner: { type: String, required: true }, 
  name: { type: String, required: true },
  email: { type: String, required: false, unique: false },
  age: { type: Number, required: false },
  phone: { type: 'String', required: false },
  confirmed: { type: Boolean, required: false, default: null  },
  escorts: [Escort],
});

export default models.Guest || model('Guest', Guest);