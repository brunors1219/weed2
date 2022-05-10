import connectToDatabase from '../../database';
import Pagamentos from '../../database/schemas/Pagamentos';
  
export default async function confirmacaopagamento(request, response) {
  try {
    await connectToDatabase();
    
    const { body } = request;

    console.log({ body });

    const record = new Pagamentos({
      item: query
    });
    
    record.save();

    return response.json({ record, query });
    
  } catch(err) {
    return response.status(500).json({ message: 'Internal server error' });
  }
}

