import connectToDatabase from '../../../database';
import Guest from '../../../database/schemas/Guest';

export default async function handler(request, response) {
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

      guest.save();

      return response.json({
        ...guest,
        confirmed,
      });
    } catch (err) {
      return response.status(500).json(err);
    }
  }
  // if (request.method === 'PATCH') {
  //   try {
  //     const { id } = request.query;
  //     const { confirmed, escortId, quantidade } = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;

  //     await connectToDatabase();
      
  //     const guest = await Guest.findOne({ _id : id }).exec();

  //     if (!guest) {
  //       return response.status(400).json({ message: 'Guest not found' });
  //     }

  //     if (quantidade > 1) {
  //       for (var x=0;x<quantidade-1;x++){
  //         guest.escorts[x].confirmed = confirmed;
  //         await guest.save();
  //       }      
  //     }

  //     await Guest.updateOne({ _id : id }, { confirmed });

  //     return response.json({
  //       ...guest,
  //       confirmed,
  //     });
  //   } catch (err) {

  //     return response.status(500).json(err);
  //   }
  // }

  
  return response.status(405).json({ message: 'Method not allowed' });
}