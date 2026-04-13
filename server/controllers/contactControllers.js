const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendEmail = async (req, res) => {
  try {
    const { name, surname, email, subject, message } = req.body;

    if (!name || !surname || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <h3>Mesazh i ri nga website.</h3>
        <p><strong>Emri:</strong> ${name}</p>
        <p><strong>Mbiemri:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjekti:</strong> ${subject}</p>
        <hr />
        <p><strong>Mesazhi:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.json({ message: 'Email sent!' });
  } catch (err) {
    console.error('Send email error:', err);

    return res.status(500).json({
      success: false,
      message: 'Error while sending email',
    });
  }
};
