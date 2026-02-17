import connectDB from '../../../lib/mongodb';
import Member from '../../../models/Member';

export default async function handler(req, res) {
  const { id } = req.query;

  await connectDB();

  switch (req.method) {
    case 'GET':
      try {
        const member = await Member.findById(id);
        if (!member) {
          return res.status(404).json({ success: false, message: 'Member not found' });
        }
        res.status(200).json({ success: true, data: member });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const member = await Member.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!member) {
          return res.status(404).json({ success: false, message: 'Member not found' });
        }
        res.status(200).json({ success: true, data: member });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const member = await Member.findByIdAndDelete(id);
        if (!member) {
          return res.status(404).json({ success: false, message: 'Member not found' });
        }
        res.status(200).json({ success: true, message: 'Member deleted successfully' });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
