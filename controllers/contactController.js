import Contact from '../models/contact.js';
import { userThanksTemplate } from '../utils/emailTemplates.js';
import { sendEmail } from '../utils/sendEmail.js';

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Save to MongoDB
    const contactEntry = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // 2. Email to Founder (3D Glass UI)
    await sendEmail({
      email: process.env.FOUNDER_EMAIL,
      subject: `New Inquiry: ${subject}`,
      html: `
        <div style="background: linear-gradient(135deg, #000 0%, #0a2e0a 100%); padding: 40px; color: #fff; font-family: sans-serif;">
          <div style="background: rgba(255,255,255,0.05); border: 1px solid #39FF14; border-radius: 20px; padding: 20px;">
            <h1 style="color: #39FF14;">AEVRIX - New Message</h1>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 10px;">${message}</p>
          </div>
        </div>
      `,
    });

    // 3. Email to User (Auto-response)
    await sendEmail({
      email: email,
      subject: 'Thanks for reaching out to AEVRIX',
      html: userThanksTemplate(name),
      reply_to: process.env.FOUNDER_EMAIL,
    });

    res.status(201).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};