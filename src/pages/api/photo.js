import connectToDatabase from '../../database';
import Photo from '../../database/schemas/Photo';

export default async function handler(request, response) {
  if (request.method === 'GET' ) {
    try {
      
      await connectToDatabase();

      const photos = await Photo.find().sort([['date', -1]]).limit(10).exec();
     
      return response.status(201).json(photos);

    } catch (err) {
      return response.status(500).json(err);
    }
  }

  if (request.method === 'POST') {
    try {
      await connectToDatabase();

      if (!request.body) {
        return response.status(400).json({ message: 'Corpo da requisição está vazio' });
      }

      const {
        url,
        Guest
      } = JSON.parse(request.body);

      const date = Date.now();

      const photo = new Photo({ url, date, guest_name : Guest.name, owner : Guest.owner });
      
      console.log(photo);

      photo.save(function (err) {
         if (err) console.error(err);
       });
  
      return response.status(201).json(Photo);
    } catch (err) {
      console.error(err);

      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  if (request.method === 'DELETE') {
    try {
      await connectToDatabase();

      if (request.query){
        const photo = await Photo.findOneAndDelete({_id :request.query._id}).exec();
        console.log(photo);
        return response.json(photo);
      }
    } catch (err) {
      console.error(err);

      return response.status(500).json({ message: 'Internal server error' });
    }
  }


  return response.status(405).json({ message: 'Method not allowed' });
}