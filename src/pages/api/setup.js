import mercadopago from "mercadopago";
import connectToDatabase from '../../database';
import Setup from '../../database/schemas/Setup';

export default async function setup(request, response) {

  if (request.method === 'GET' ) {
    await connectToDatabase();

    var record = await Setup.findOne().exec();
    
    if (request.query.teste){
      record.showCamera = !record.showCamera;
      record.save();
      console.log(record)
    }

    if (record.length==0){
      
      const newRecord = new Setup({showCamera:false});
      
      await newRecord.save();

      record=newRecord;
      
    }
    return response.json(record);
  }

}