import connectDB from '../../../lib/mongodb';
import Trainer from '../../../models/Trainer';

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case 'GET':
      try {
        const trainers = await Trainer.find({ active: true }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: trainers });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const trainer = await Trainer.create(req.body);
        res.status(201).json({ success: true, data: trainer });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
