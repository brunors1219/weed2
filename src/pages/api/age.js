import connectToDatabase from '../../database';
import Guest from '../../database/schemas/Guest';

export default async function handler(request, response) {
    if (request.method === 'POST') {
      try {
        await connectToDatabase();
  
        if (!request.body) {
          return response.status(400).json({ message: 'Corpo da requisição está vazio' });
        }
  
        const {guest_id, escort_id, age } = JSON.parse(request.body);

        const guest = await Guest.findOne({_id : guest_id}).exec();
        if (guest){
            guest.escorts.map(escort=>{
                if (escort._id == escort_id){
                    escort.age = age;
                }
            });
            guest.save();
        }
                           
        return response.status(201).json('Idade acertada com sucesso');
      } catch (err) {
        console.error(err);
  
        return response.status(500).json({ message: 'Internal server error' });
      }
    }
   
    return response.status(405).json({ message: 'Method not allowed' });
  }