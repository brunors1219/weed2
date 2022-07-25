import connectToDatabase from '../../database';
import Product from '../../database/schemas/Product';
import Pagamentos from '../../database/schemas/Pagamentos';

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

  if (request.method === 'DELETE') {
    try {
      await connectToDatabase();

      if (request.query){
        const products = await Product.findOneAndDelete({_id :request.query._id}).exec();
        return response.json(products);
      }
    } catch (err) {
      console.error(err);

      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  if (request.method === 'GET') {
    try {
            
      await connectToDatabase();

      let products

      if (request.query.category!=""){
        products = await Product.find({category :request.query.category}).sort([['date', -1]]).exec();
      } else {
        products = await Product.find().sort([['date', -1]]).exec();
      }

      const payments = await Pagamentos.find().exec();
      
      const serializedProducts = products.map(product => {
        
        let payment = payments.filter((f)=>{return f.request_Status === "Aprovado e será enviado ao noivos" && f.product_name===product.name});
        let gifted = payment.length>0;

        
        let views = payments.filter((f)=>{return f.product_name==product.name});

        return {
          ...product, 
          gifted,
          views
        };
      });
      
      return response.json(serializedProducts);
      
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }
  }

  return response.status(405).json({ message: 'Method not allowed' });
}