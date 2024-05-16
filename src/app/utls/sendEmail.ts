import nodemailer from "nodemailer";
import config from "../config";
const sendEmail = async (receiverEmail: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "rupashi.bangla.club@gmail.com",
      pass: config.smtpPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Health Care" <rupashi.bangla.club@gmail.com>',
    to: receiverEmail,
    subject: "Reset Your Password",
    html,
  });

  return info.messageId;
};
export default sendEmail;
