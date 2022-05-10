import connectToDatabase from '../../database';
import Pagamentos from '../../database/schemas/Pagamentos';
  
export default async function confirmacaopagamento(request, response) {
  try {
    await connectToDatabase();
    
    const { query } = request;

    const record = new Pagamentos({
      item: query
    });
    
    record.save();

    console.log(request.params);
    console
    
    return response.json({ record, query });
    
  } catch(err) {
    return response.status(500).json({ message: 'Internal server error' });
  }
}

