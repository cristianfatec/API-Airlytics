import connectToDatabase from '../db';
import { register, login } from '../controller/userController';

export default async function handler(req, res) {
  // Conectando ao banco
  await connectToDatabase();

  if (req.method === 'POST') {
    if (req.url === '/users/register') {
      return register(req, res);
    } else if (req.url === '/users/login') {
      return login(req, res);
    } else {
      return res.status(404).json({ message: 'Endpoint não encontrado!' });
    }
  } else {
    return res.status(405).json({ message: 'Método não permitido!' });
  }
}
