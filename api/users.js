//./api/users.js

import connectToDatabase from '../db';
import { register, login } from '../controllers/userController';

export default async function handler(req, res) {
  // Conectando ao banco
  await connectToDatabase();

  if (req.method === 'POST') {
    if (req.url === '/register') {
      return register(req, res);
    } else if (req.url === '/login') {
      return login(req, res);
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
