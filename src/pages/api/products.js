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
        name,
        img,
        url
       } = request.body;

       // Para verficar se o email já está cadastro
       if (name) {
        const productExists = await Product.findOne({name});

         if (productExists) {
           return response.status(400).json({ message: 'Produto já cadastrado' });
         }
       }

       const product = new Product({ name, img, url });

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

      const products = await Product.find().exec();

      return response.json(products);
    } catch (err) {
      console.log(err);

      return response.status(500).json(err);
    }
  }

  return response.status(405).json({ message: 'Method not allowed' });
}