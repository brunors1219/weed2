import connectToDatabase from '../../database';
import Guest from '../../database/schemas/Guest';

export default async function handler(request, response) {

  
  if (request.method === 'GET') {
    try {
      
      const {
        guest_id,
        escort_id
      } = request.query;
      
      await connectToDatabase();

      var TheGuest = await Guest.find({_id : guest_id}).exec();

      if (TheGuest.escorts){
        TheGuest.escorts.map((guest)=>{
          if (guest._id == escort_id) {
            guest.present = true;
          }
        });          
      }
      // guest.save(function (err) {
      //   if (err) erros.push({"erro": err, "owner": item.owner, "name": item.name});
      // });

      console.log(TheGuest);
      console.log(TheGuest.escorts);

      return response.json(guest);
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }
  }

  
  return response.status(405).json({ message: 'Method not allowed' });
}