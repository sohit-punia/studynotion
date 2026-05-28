const nodemailer = require("nodemailer");

const mailSender = async(email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,  // smtp.gmail.com
            port: 587,                     // 👈 ADD THIS
            secure: false,                 // false for port 587
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        })

        let info = await transporter.sendMail({
            from: `StudyNotion || By Sohit <${process.env.MAIL_USER}>`,  // 👈 fix angle brackets
            to: email,
            subject: title,
            html: body,
        })

        console.log("Node Main Info ->>  ", info);
        return info;
    }
    catch(error) {
        console.log("Error In Mail Sending", error);
        throw error;  // 👈 throw instead of return, so errors bubble up
    }
}

module.exports = mailSender;