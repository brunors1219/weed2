import { Schema, model, models } from 'mongoose';

const Pagamentos = new Schema({
  item: { type: Map, required: true }
});

export default models.Pagamentos || model('Pagamentos', Pagamentos);