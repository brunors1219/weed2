import connectToDatabase from '../../database';
import Product from '../../database/schemas/Product';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    try {
      await connectToDatabase();

      if (!request.body) {
        return response.status(400).json({ message: 'Corpo da requisição está vazio' });
      }

      const {
        category,
        name,
        value,
        url
      } = JSON.parse(request.body);

      const date = Date.now();

       const product = new Product({ category, name, value, url, date });

       product.save(function (err) {
         if (err) console.error(err);
       });
  
      return response.status(201).json(product);
    } catch (err) {
      console.error(err);

      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  if (request.method === 'GET' && !request.params) {
    try {
      
      await connectToDatabase();

      if (request.query){
        const products = await Product.find({category :request.query.category}).sort([['date', -1]]).exec();
        return response.json(products);
      } else {
        const products = await Product.find().sort([['date', -1]]).exec();
        return response.json(products);
      }
      
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  return response.status(405).json({ message: 'Method not allowed' });
}