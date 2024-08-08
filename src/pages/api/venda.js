import mercadopago from "mercadopago";
import connectToDatabase from '../../database';
import Pagamentos from '../../database/schemas/Pagamentos';

export default async function venda(request, response) {

  if (request.method === 'GET') {

    mercadopago.configure({
      access_token: process.env.MERCADOPAGO_KEY
    });

    var preference = {
      items: [
        {
          title: request.query.title,
          quantity: Number(request.query.quantity) ,
          currency_id: 'BRL',
          unit_price: Number(request.query.price)
        }
      ],
      payer : {
        email: 'ichihara7l@gmail.com'
      },
      payment_methods :{
        installments : 12,
        default_installments: 3,
      },
      auto_return : "all",
      external_reference : request.query.guest + "-" + request.query.guest_name,
      back_urls : {
        success : `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/success`,
        pending : `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/pending`,
        failure : `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/failure`,
      }
    };

    const result = await mercadopago.preferences.create(preference);

    if (!result) return response.status(500).json({ message: 'Ocorreu um erro inesperado' });

    console.log(result);

    await connectToDatabase();

    const record = new Pagamentos({
      guest           : request.query.guest,
      guest_name      : request.query.guest_name,
      product_name    : request.query.product_name,
      product_url     : request.query.product_url,
      request_id      : result.body.id,
      request_Status  : "Aguardando aprovação",
      request_url_buy : result.body.init_point,
      excluded        : false
    });
    
    record.save(function (err) {
      if (err) console.log(err);
    });

    return response.json(result.body.init_point);
  }
}