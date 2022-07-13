import connectToDatabase from '../../database';
import Guest from '../../database/schemas/Guest';
import Pagamentos from '../../database/schemas/Pagamentos';
import Produtos from '../../database/schemas/Product';

export default async function handler(request, response) {

    console.log('teste');
    const guest = await Guest.find().exec();
    console.log(guest);
    // const payment = await Pagamentos.find().exec();
    // console.log(payment);
    // const product = await Produtos.find().exec();
    // console.log(product);
    return response.status(200).json({ guest, payment, product });

  }