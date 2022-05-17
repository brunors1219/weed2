import mercadopago from "mercadopago";
import connectToDatabase from '../../database';
import Pagamentos from '../../database/schemas/Pagamentos';

export default async function venda(request, response) {

  if (request.method === 'GET') {
      mercadopago.configure({
        access_token: 'TEST-6425645332822099-050921-a85c191823760d81e651b4c679fbff2f-6120575'
      });

    var preference = {
      items: [
        {
          title: request.query.title,
          quantity: Number(request.query.quantity) ,
          currency_id: 'BRL',
          unit_price: Number(request.query.price)
        }
      ]
    };

   const result = await mercadopago.preferences.create(preference);

    if (!result) return response.status(500).json({ message: 'Ocorreu um erro inesperado' });

    await connectToDatabase();

    const record = new Pagamentos({
      guest      : request.query.guest,
      product    : request.query.product,
      request_id : result.body.id,
    });
    
    record.save(function (err) {
      if (err) console.log(err);
    });

    return response.json(result.body.init_point);
  }
}