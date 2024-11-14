import { createReading, getAllReadings, getReadingById, updateReading, deleteReading, getMostRecentReading } from '../controllers/controller';

export default function handler(req, res) {
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
