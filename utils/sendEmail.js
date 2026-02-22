/*import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, 
    },
    family: 4,
  });

  const mailOptions = {
    from: `"AEVRIX AI" <${process.env.EMAIL_USER}>`,
    to: options.email,
    subject: options.subject,
    html: options.html,
  };

  await transporter.sendMail(mailOptions);
};*/

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ email, subject, html }) => {
  await resend.emails.send({
    from: "AEVRIX AI <onboarding@resend.dev>",
    to: email,
    subject,
    html,
    reply_to: process.env.FOUNDER_EMAIL,
  });
};