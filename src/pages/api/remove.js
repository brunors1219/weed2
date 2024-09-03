import connectToDatabase from '../../database';
import Guest from '../../database/schemas/Guest';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      await connectToDatabase();

      // Parse o corpo da requisição para obter o ID
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ message: 'ID do convidado é obrigatório' });
      }

      // Remover o convidado do banco de dados
      const result = await Guest.findByIdAndDelete(id);

      if (result) {
        return res.status(200).json({ success: true, message: 'Convidado removido com sucesso' });
      } else {
        return res.status(404).json({ success: false, message: 'Convidado não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao remover convidado:', error);
      return res.status(500).json({ success: false, message: 'Erro interno do servidor' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}