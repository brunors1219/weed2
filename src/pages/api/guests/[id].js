import connectToDatabase from '../../../database';
import Guest from '../../../database/schemas/Guest';

export default async function handler(request, response) {
  
  if (request.method === 'POST') {
    try {
      
      const _body = JSON.parse(request.body);
      const { _id } = _body.guest._doc;

      await connectToDatabase();
      const guest = await Guest.findOne({ _id : _id }).exec();
      const today = new Date()
      guest.dueDate = today.setDate(today.getDate() + 15);
      guest.save();
      return response.json(guest);
    } catch (err) {

      return response.status(500).json(err);
    }
  }

  if (request.method === 'GET') {
    try {
      const { id } = request.query;

      await connectToDatabase();
      const guest = await Guest.findOne({ _id : id }).exec();

      return response.json(guest);
    } catch (err) {

      return response.status(500).json(err);
    }
  }

  if (request.method === 'PATCH') {
    try {
      const { id } = request.query;
      const { confirmed, Escort } = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;

      await connectToDatabase();
      
      const guest = await Guest.findOne({ _id : id }).exec();

      if (!guest) {
        return response.status(400).json({ message: 'Guest not found' });
      }

      if (!Escort) {
        guest.confirmed = confirmed;
      } else {
        guest.escorts.map((escort)=>{
          if (escort._id == Escort._id)
            escort.confirmed = confirmed;
        });
      }

      guest.confirmed = false;
      guest.escorts.map((escort)=>{
        if (escort.confirmed) {
          guest.confirmed = true;
        }
      })

      guest.save();

      return response.json({
        ...guest,
        confirmed,
      });
    } catch (err) {
      return response.status(500).json(err);
    }
  } 
  
  return response.status(405).json({ message: 'Method not allowed' });
}