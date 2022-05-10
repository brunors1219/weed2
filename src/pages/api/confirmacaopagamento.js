import connectToDatabase from '../../database';
import Pagamentos from '../../database/schemas/Pagamentos';
  
export default async function confirmacaopagamento(request, response) {
  try {
    await connectToDatabase();
    
    const { body } = request;

    const record = new Pagamentos({
      item: body
    });
    
    record.save();

    return response.json();
    
  } catch(err) {
    return response.status(500).json({ message: 'Internal server error' });
  }
}

