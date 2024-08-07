import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const Setup = new Schema({
  showCamera: { type: Boolean, required: false},
});

export default models.Setup || model('Setup', Setup);