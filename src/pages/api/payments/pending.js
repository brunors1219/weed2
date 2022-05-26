import connectToDatabase from '/src/database';
import Pagamentos from '/src/database/schemas/Pagamentos';

export default async function handler(request, response) {
  await connectToDatabase();
  const Pagamento = await Pagamentos.findOne({ request_id : request.query.preference_id }).exec();

  if (Pagamento){

    Pagamento.delete();

    return response.status(200).json({ message: 'Pagamento pendente de aprovação,  selecione novamente o produto no site do casamento.' });
  }else{
    return response.status(500).json({ message: 'Registro não encontrado para atualização' });
  }

}