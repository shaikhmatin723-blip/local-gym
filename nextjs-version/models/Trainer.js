import mongoose from 'mongoose';

const TrainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide trainer name'],
  },
  initials: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: [true, 'Please provide trainer role'],
  },
  experience: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specialties: [{
    type: String,
  }],
  image: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Trainer || mongoose.model('Trainer', TrainerSchema);
