const baseStyle = `
  background: linear-gradient(135deg, #000000 0%, #0a2e0a 100%);
  padding: 40px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #ffffff;
`;

const glassCard = `
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 32px 0 rgba(0, 255, 0, 0.2);
`;

export const founderTestimonialTemplate = (data, approveUrl) => `
  <div style="${baseStyle}">
    <div style="${glassCard}">

      <!-- Logo -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img 
          src="https://aevrix.netlify.app/assets/aevrix_logo-CZN_5YdZ.jpeg"
          alt="AEVRIX Logo"
          style="max-width: 110px;"
        />
      </div>

      <!-- Brand -->
      <h1 style="text-align: center; font-size: 32px; margin: 0;">
        <span style="color: #FFFFFF;">AEVRI</span><span style="color: #39FF14; text-shadow: 0 0 10px #39FF14;">X</span>
      </h1>

      <p>New Testimonial Received from <strong>${data.name}</strong></p>

      <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 10px; margin: 20px 0;">
        <p><strong>Feedback:</strong> ${data.feedback}</p>
        <p><strong>Show on Web:</strong> ${data.showOnWebsite ? 'Yes' : 'No'}</p>
      </div>

      <a 
        href="${approveUrl}" 
        style="display: inline-block; padding: 15px 30px; background: #39FF14; color: #000; text-decoration: none; border-radius: 50px; font-weight: bold; box-shadow: 0 4px 15px rgba(57, 255, 20, 0.4);"
      >
        Approve Testimonial
      </a>

    </div>
  </div>
`;

export const userThanksTemplate = (name) => `
  <div style="${baseStyle}">
    <div style="${glassCard}">
      
      <!-- Logo -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img 
          src="https://aevrix.netlify.app/assets/aevrix_logo-CZN_5YdZ.jpeg" 
          alt="AEVRIX Logo" 
          style="max-width: 120px;"
        />
      </div>

      <!-- Brand Name -->
      <h1 style="margin: 0; font-size: 32px; text-align: center;">
        <span style="color: #FFFFFF;">AEVRI</span><span style="color: #39FF14;">X</span>
      </h1>

      <h2 style="margin-top: 25px;">Hello ${name},</h2>

      <p>
        Thanks for contacting us. We've received your message and will get back to you soon.
      </p>

      <p style="margin-top: 20px;">
        For more queries, visit our website: 
        <a href="https://aevrix.in" style="color: #39FF14; text-decoration: none;">
          aevrix.in
        </a>
      </p>

      <p>
        Or contact us at: 
        <a href="mailto:aevrix.tech@gmail.com" style="color: #39FF14; text-decoration: none;">
          aevrix.tech@gmail.com
        </a>
      </p>

      <div style="margin-top: 30px; border-top: 1px solid #39FF14; padding-top: 20px; font-size: 12px; color: #888;">
        Sent by AEVRIX | © 2025 AEVRIX. All rights reserved.
      </div>

    </div>
  </div>
`;