import connectToDatabase from '../../database';
import Guest from '../../database/schemas/Guest';
import Escort from '../../database/schemas/Escort';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    try {
      await connectToDatabase();

      if (!request.body) {
        return response.status(400).json({ message: 'Corpo da requisição está vazio' });
      }

      const {
        name,
        email,
        age,
        phone,
        escorts
       } = request.body;

       // Para verficar se o email já está cadastro
       if (email) {
        const guestExists = await Guest.findOne({
          email,
        });

         if (guestExists) {
           return response.status(400).json({ message: 'E-mail já esta sendo usado' });
         }
       }

       if (!Array.isArray(escorts)) {
          return response.status(400).json({ message: 'Escorts precisa ser uma array'});
       }

       const guest = new Guest({ name, email, age, phone });

       guest.escorts = escorts.map(escort => ({
         name: escort.name,
         age: escort.age,
       }));

       guest.save(function (err) {
         if (err) console.error(err);
       });
  
      return response.status(201).json(guest);
    } catch (err) {
      console.error(err);

      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  if (request.method === 'GET' && !request.params) {
    try {
      await connectToDatabase();

      const guests = await Guest.find();


      const serializedGuests = guests.map(guest => {
        return {
          name: guest.name,
          invitation_url: `${process.env.APP_URL}/guestInvitation/${guest.id}`, 
        };
      });
  
      return response.json(serializedGuests);
    } catch (err) {
      console.log(err);

      return response.status(500).json(err);
    }
  }

  if (request.method === 'GET' && request.params.id) {
    try {
      await connectToDatabase();

      const guest = await Guest.findOne(request.params.id);

      return response.json(guest);
    } catch (err) {
      console.log(err);

      return response.status(500).json(err);
    }
  }

  
  return response.status(405).json({ message: 'Method not allowed' });
}