import { register, login } from '../controllers/userController';

export default function handler(req, res) {
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

