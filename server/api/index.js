import connectDB from '../configs/mongodb.js';

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === 'GET') {
      res.status(200).json({ message: 'API Working' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
