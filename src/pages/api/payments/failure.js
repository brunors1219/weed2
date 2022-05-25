import connectToDatabase from '/src/database';
import Pagamentos from '/src/Pagamentos';

export default async function handler(request, response) {
  console.log("MPSucess", request.query);

  await connectToDatabase();
  const Pagamento = await Pagamentos.findOne({ request_id : request.query.preference_id }).exec();

  Pagamento.status = "Pagamento recusado pela operadora";

  Pagamento.save();

  return response.status(200).json({ message: 'OK' });

}