import connectToDatabase from '../../database';
import Pagamentos from '../../database/schemas/Pagamentos';

export default async function handler(request, response) {

  if (request.method === 'GET') {
    try {
      
      await connectToDatabase();

      const productBuied = await Pagamentos.find({guest :request.query.guest}).exec();
      
      return response.json(productBuied);
      
    } catch (err) {

      return response.status(500).json(err);
    }
  }

  return response.status(405).json({ message: 'Method not allowed' });
}