import mongoose from 'mongoose';
const { Schema } = mongoose;

const Escort = new Schema({
  name: { type: String, required: true },
  age: { type: Number},
  confirmed: { type: Boolean , default: null},
  present: { type: Boolean , default: null},
});

export default Escort;