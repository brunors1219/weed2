import connectToDatabase from '../../database';
import Pagamentos from '../../database/schemas/Pagamentos';
  
export default async function confirmacaopagamento(request, response) {
  try {
    await connectToDatabase();
    
    const { query } = request;

    const record = new Pagamentos({
      item: query
    });
    
    return response.json({ record, query });
    
  } catch(err) {
    return response.status(500).json({ message: 'Internal server error' });
  }
}

