import connectToDatabase from '/src/database';
import Pagamentos from '/src/database/schemas/Pagamentos';

export default async function handler(request, response) {
  await connectToDatabase();
  const Pagamento = await Pagamentos.findOne({ request_id : request.query.preference_id }).exec();

  if (Pagamento){
    return response.redirect(`${process.env.APP_URL}/guestInvitationv3/${Pagamento.guest}`);
  }else{
    return response.status(500).json({ message: 'Registro não encontrado para atualização' });
  }

}