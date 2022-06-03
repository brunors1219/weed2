import { Schema, model, models } from 'mongoose';

const Setup = new Schema({
  showCamera: { type: Boolean, required: false},
});

export default models.Setup || model('Setup', Setup);