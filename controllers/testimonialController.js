import Testimonial from '../models/testimonial.js';
import { founderTestimonialTemplate } from '../utils/emailTemplates.js';
import { sendEmail } from '../utils/sendEmail.js';

// NEW: For fetching data to the frontend UI
export const getApprovedTestimonials = async (req, res) => {
  try {
    // Only fetch what's approved, sorted by newest first
    const testimonials = await Testimonial.find({ isApproved: true }).sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const submitTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    const URL = process.env.BASE_URL || "http://localhost:5000";
    const approveUrl = `${URL}/api/testimonials/approve/${testimonial._id}`;

    await sendEmail({
      email: process.env.FOUNDER_EMAIL,
      subject: 'New Testimonial for AEVRIX',
      html: founderTestimonialTemplate(testimonial, approveUrl)
    });

    res.status(201).json({ success: true, message: "Feedback sent for review" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const approveTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndUpdate(req.params.id, { isApproved: true });
    
    // Improved Response UI for the founder
    res.send(`
      <div style="background: #000; color: #39FF14; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: sans-serif; text-align: center;">
        <h1 style="text-shadow: 0 0 10px #39FF14; font-size: 3rem;">AEVRIX</h1>
        <p style="color: #fff; font-size: 1.5rem;">Testimonial Approved Successfully!</p>
        <p style="color: #888;">It is now visible on the website.</p>
      </div>
    `);
  } catch (error) {
    res.status(500).send("Error approving testimonial");
  }
};