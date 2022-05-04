import connectToDatabase from '../../../database';
import Guest from '../../../database/schemas/Guest';
import Escort from '../../../database/schemas/Escort';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    try {
      const { id } = request.query;

      await connectToDatabase();

      const guest = await Guest.findOne({ id }).exec();

      return response.json(guest);
    } catch (err) {
      console.log(err);

      return response.status(500).json(err);
    }
  }

  if (request.method === 'PATCH') {
    try {
      const { id } = request.query;
      const { confirmed, escortId } = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;

      await connectToDatabase();

      const guest = await Guest.findOne({ id }).exec();

      if (!guest) {
        return response.status(400).json({ message: 'Guest not found' });
      }

      if (escortId) {
        const findEscortIndex = guest.escorts.findIndex(escort => escort._id == escortId);

        guest.escorts[findEscortIndex].confirmed = confirmed;
        
        await guest.save();

        return response.json(guest);
      }

      await Guest.updateOne({ id }, { confirmed });

      return response.json({
        ...guest,
        confirmed,
      });
    } catch (err) {
      console.log(err);

      return response.status(500).json(err);
    }
  }

  
  return response.status(405).json({ message: 'Method not allowed' });
}