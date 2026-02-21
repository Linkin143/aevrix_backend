import Testimonial from '../models/testimonial.js';
import { founderTestimonialTemplate } from '../utils/emailTemplates.js';
import { sendEmail } from '../utils/sendEmail.js';

export const submitTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    
    // Approval URL points to a backend route that updates 'isApproved'
    const approveUrl = `${process.env.BASE_URL}/api/testimonials/approve/${testimonial._id}`;

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
    res.send("<h1>Testimonial Approved Successfully!</h1>");
  } catch (error) {
    res.status(500).send("Error approving testimonial");
  }
};