import mongoose from 'mongoose';

const testimonialSchema = mongoose.Schema({
  name: { type: String, required: true },
  company: String,
  industry: String,
  feedback: { type: String, required: true },
  showOnWebsite: { type: Boolean, default: false }, // "Yes/No" from UI
  isApproved: { type: Boolean, default: false },   // Founder approval status
}, { timestamps: true });

export default mongoose.model('Testimonial', testimonialSchema);