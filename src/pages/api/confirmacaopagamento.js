import connectToDatabase from '../../database';
import Pagamentos from '../../database/schemas/Pagamentos';
  
export default async function confirmacaopagamento(request, response) {
  try {
    await connectToDatabase();
    
    const { body } = request;


    console.log({ body });
    console.log({ request });

    const record = new Pagamentos({
      item: body
    });
    
    record.save(function (err) {
      if (err) console.log(err);
    });

    console.log({ record });

    return response.send();
    
  } catch(err) {
    return response.status(500).json({ message: 'Internal server error' });
  }
}

