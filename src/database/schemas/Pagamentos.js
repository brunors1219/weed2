import { Schema, model, models } from 'mongoose';

const Pagamentos = new Schema({
  guest           : {type: String, required: true},
  guest_name      : {type: String, required: true},
  product_name    : {type: String, required: true},
  product_url     : {type: String, required: true},
  request_id      : {type: String, required: false },
  request_Status  : {type: String, required: false }
});

export default models.Pagamentos || model('Pagamentos', Pagamentos);