import { Schema } from 'mongoose';

const Escort = new Schema({
  name: { type: String, required: true },
  age: { type: Number},
  confirmed: { type: Boolean , default: null},
});

export default Escort;