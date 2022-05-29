import connectToDatabase from '../../database';
import Guest from '../../database/schemas/Guest';

export default async function handler(request, response) {

  
  if (request.method === 'GET') {
    try {
      
      const {
        guest_id,
        escort_id
      } = request.query;

      console.log(request.query);
      
      await connectToDatabase();

      const guest = await Guest.findOne({ _id : guest_id }).exec();

      if (!guest) {
        return response.status(400).json({ message: 'Guest not found' });
      }

      guest.escorts.map((escort)=>{
        if (escort._id == escort_id)
          escort.present = true;
      });

      guest.save();
      console.log(guest);

      return response.json(guest);
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }
  }

  
  return response.status(405).json({ message: 'Method not allowed' });
}