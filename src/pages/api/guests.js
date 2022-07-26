import connectToDatabase from '../../database';
import Guest from '../../database/schemas/Guest';
import Product from '../../database/schemas/Product';
import Pagamentos from '../../database/schemas/Pagamentos';
import { ContactSupportOutlined } from '@material-ui/icons';

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

      const { query } = request.query;

      let guests = {};
      if (!query || query =="All")
        guests = await Guest.find().exec(); 
      else{
        let regex = new RegExp(query, 'i');
        console.log(regex);
        guests = await Guest.find({'name':regex}).exec();
      }
        
      const payments = await Pagamentos.find({"request_Status":"Aprovado e será enviado ao noivos"}).exec();

      const serializedGuests = await Promise.all(guests.map(async guest => {
        return {
          ...guest, 
          gifts: payments.find(f=>f.guest == guest._id),
          invitation_url: `${process.env.APP_URL}/guestInvitationv1/${guest.id}`
        };
      }));

      return response.json(serializedGuests);
      
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  if (request.method === 'GET' && request.params) {
    try {
      console.log(request);

      const {
        guest_id,
        escort_id
      } = JSON.parse(request.params);

      await connectToDatabase();

      const guests = await Guest.find({_id : guest_id}).exec();
      if (guests){
        guests.map((guest)=>{
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