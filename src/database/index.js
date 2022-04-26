import mongoose from 'mongoose';
import mongodbConfig from '../config/mongodb';

export default async function connectToDatabase() {
  return mongoose.connect(`mongodb+srv://${mongodbConfig.user}:${mongodbConfig.password}@${mongodbConfig.host}/${mongodbConfig.database}?retryWrites=true&w=majority`);
}