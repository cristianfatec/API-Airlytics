//./api/readings.js

import connectToDatabase from '../db';
import { createReading, getAllReadings, getReadingById, updateReading, deleteReading } from '../controller/controller';

export default async function handler(req, res) {
  // Conectando ao banco
  await connectToDatabase();

  if (req.method === 'GET') {
    if (req.query.id) {
      return getReadingById(req, res);
    }
    return getAllReadings(req, res);
  } else if (req.method === 'POST') {
    return createReading(req, res);
  } else if (req.method === 'PUT') {
    return updateReading(req, res);
  } else if (req.method === 'DELETE') {
    return deleteReading(req, res);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
