import { Schema } from 'mongoose';

const Escort = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: false },
  confirmed: { type: Boolean, default: false },
});

export default Escort;