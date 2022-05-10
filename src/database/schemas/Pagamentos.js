import { Schema, model, models } from 'mongoose';

const Pagamentos = new Schema({
  item: { type: Mixed, required: true }
});

export default models.Pagamentos || model('Pagamentos', Pagamentos);