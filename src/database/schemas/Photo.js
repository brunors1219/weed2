import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const Photo = new Schema({
  url           : { type: String, required: true},
  owner         : { type: String, required: false},
  guest_name    : { type: String, required: false},
  date          : { type: Date, required: false},
  download_date : { type: Date, required: false},
});

export default models.Photo || model('Photo', Photo);