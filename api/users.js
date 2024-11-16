import connectToDatabase from '../db';
import { register, login } from '../controller/userController';

export default async function handler(req, res) {
  // Conectando ao banco
  await connectToDatabase();

  // Extrair a subrota
  const subRoute = req.url.split('?')[0]; // Ignora query strings, se existirem.

  if (req.method === 'POST') {
    if (subRoute === '/register') {
      return register(req, res);
    } else if (subRoute === '/login') {
      return login(req, res);
    } else {
      return res.status(404).json({ message: 'Endpoint não encontrado!' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
