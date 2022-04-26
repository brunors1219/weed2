const mongodb = {
  host: process.env.MONGO_HOST,
  database: process.env.MONGO_DATABASE,
  user: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
};

export default mongodb;