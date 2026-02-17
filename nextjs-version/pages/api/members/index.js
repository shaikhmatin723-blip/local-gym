import connectDB from '../../../lib/mongodb';
import Member from '../../../models/Member';

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case 'GET':
      try {
        const members = await Member.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: members });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const { name, email, phone, membershipPlan } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !membershipPlan) {
          return res.status(400).json({
            success: false,
            message: 'Please provide all required fields',
          });
        }

        // Check if member already exists
        const existingMember = await Member.findOne({ email });
        if (existingMember) {
          return res.status(400).json({
            success: false,
            message: 'A member with this email already exists',
          });
        }

        // Calculate end date (30 days from now)
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 30);

        const member = await Member.create({
          name,
          email,
          phone,
          membershipPlan,
          endDate,
          status: 'pending',
        });

        res.status(201).json({
          success: true,
          message: 'Membership application submitted successfully!',
          data: member,
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
