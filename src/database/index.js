// import mongoose from 'mongoose';
// import mongodbConfig from '../config/mongodb';

// export default async function connectToDatabase() {
//   return mongoose.connect(`mongodb+srv://${mongodbConfig.user}:${mongodbConfig.password}@${mongodbConfig.host}/${mongodbConfig.database}?retryWrites=true&w=majority`);
// }

import mongoose from 'mongoose';
import mongodb from '../config/mongodb.js';

// console.log('MongoDB Config:', mongodb);

export default async function connectToDatabase() {
  const uri = `mongodb+srv://${mongodb.user}:${mongodb.password}@${mongodb.host}/${mongodb.database}?retryWrites=true&w=majority`;
  // const uri = `mongodb+srv://freitas-kamily:B8hjNZDPI5NbWNeR@wedding-project.lkk3d1j.mongodb.net/wedding-project?retryWrites=true&w=majority`;
  // console.log('MongoDB URI:', uri);
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

