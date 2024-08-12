import connectToDatabase from '../../database';
import Guest from '../../database/schemas/Guest';
import Pagamentos from '../../database/schemas/Pagamentos';

export default async function handler(request, response) {

  if (request.method === 'POST') {
    try {
      await connectToDatabase();

      if (!request.body) {
        return response.status(400).json({ message: 'Corpo da requisição está vazio' });
      }

      const guest = request.body;

      if (guest.name) {
        const guestExists = await Guest.findOne({ name: guest.name });

        if (guestExists) {
          // Guest exists - UPDATE (you can add update logic here if needed)
          return response.status(200).json({ message: 'Convidado já existe.' });
        } else {
          // Guest does not exist - INSERT
          const newGuest = new Guest({
            name: guest.name,
            owner: guest.owner,
            referency: guest.referency,
            email: guest.email,
            age: guest.age,
            phone: guest.phone,
            confirmed: guest.confirmed,
            dueDate: guest.dueDate,
            escorts: guest.escorts.map(escort => ({
              name: escort.name,
              age: escort.age,
              confirmed: escort.confirmed,
              present: escort.present,
            })),
          });

          await newGuest.save();
          return response.status(201).json('Convidado inserido com sucesso');
        }
      } else {
        return response.status(400).json({ message: 'Nome é obrigatório' });
      }
    } catch (err) {
      console.error(err);
      return response.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  if (request.method === 'GET' && !request.params) {
    try {
      await connectToDatabase();

      const { query } = request.query;

      let guests = {};
      if (!query || query == "All")
        guests = await Guest.find().exec();
      else {
        let regex = new RegExp(query, 'i');
        console.log('anselmo', regex);
        guests = await Guest.find({ 'name': regex }).exec();
      }

      const payments = await Pagamentos.find({ "request_Status": "Aprovado e será enviado ao noivos" }).exec();

      const serializedGuests = await Promise.all(guests.map(async guest => {
        return {
          ...guest,
          gifts: payments.find(f => f.guest == guest._id),
          invitation_url: `${process.env.NEXT_PUBLIC_APP_URL}/guestInvitationv3/${guest.id}`
        };
      }));

      return response.json(serializedGuests);

    } catch (err) {
      return response.status(500).json(err);
    }
  }

  if (request.method === 'GET' && request.params) {
    try {
      console.log('Request: ', request);

      const {
        guest_id,
        escort_id
      } = JSON.parse(request.params);

      await connectToDatabase();

      const guests = await Guest.find({ _id: guest_id }).exec();
      if (guests) {
        guests.map((guest) => {
          if (guest._id == escort_id) {
            guest.present = true;
          }
        });
      }
      guests.save();

      return response.json(guest);
    } catch (err) {
      return response.status(500).json(err);
    }
  }


  return response.status(405).json({ message: 'Method not allowed' });
}