import connectToDatabase from '../../database';
import Guest from '../../database/schemas/Guest';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    try {
      await connectToDatabase();

      if (!request.body) {
        return response.status(400).json({ message: 'Corpo da requisição está vazio' });
      }

      const guests = request.body;

      if (!Array.isArray(guests)) {
        return response.status(400).json({ message: 'Guests precisa ser uma array'});
      }
      let erros = [];
      guests.map(async (item)=>{
        if (item.name) {
          const guestExists = await Guest.findOne({
            "name" : item.name,
          });
  
           if (guestExists) {
              //  Guest exist - UPDATE


           } else {
              //  Guest not exist - INSERT
              const record_guest = new Guest({
                name : item.name, 
                owner : item.owner,
                referency : item.referency
              });
              
              if (Array.isArray(item.escorts)) {
                record_guest.escorts = item.escorts.map(escort => ({
                  name: escort.name
                }));                
              };
                         
              record_guest.save(function (err) {
                if (err) erros.push({"erro": err, "owner": item.owner, "name": item.name});
              });
           }
         }
      })
      if (erros.length > 0)
        return response.status(200).json(erros);
      else
        return response.status(201).json('Dados incluídos com sucesso');
    } catch (err) {
      console.error(err);

      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  if (request.method === 'GET' && !request.params) {
    try {
      await connectToDatabase();

      const guests = await Guest.find().exec();
      const serializedGuests = guests.map(guest => {
        return {
          ...guest, 
          invitation_url: `${process.env.APP_URL}/guestInvitationv3/${guest.id}`, 
        };
      });
  
      return response.json(serializedGuests);
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  
  return response.status(405).json({ message: 'Method not allowed' });
}