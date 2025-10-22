// server/utils/mail.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendEmail = async (to, subject, html) => {
  try {
    // Create transporter (mail server connection)
    const transporter = nodemailer.createTransport({
      service: "gmail", // for Gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email structure
    const mailOptions = {
      from: `"AI SaaS Platform" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully to: ${to}`);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};
