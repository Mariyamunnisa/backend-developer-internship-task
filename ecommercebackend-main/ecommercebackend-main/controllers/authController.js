const nodemailer = require('nodemailer');

const sendVerificationEmail = async (email, token) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Verify your email',
        text: `Please verify your email by clicking the link: ${process.env.CLIENT_URL}/verify/${token}`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationEmail };
