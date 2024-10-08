const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "malvina.cremin33@ethereal.email",
            pass: "duFrfhpVWMAPX9uXwQ"
        }
    });

    let message = {
        from: 'Sender Name <malvina.cremin33@ethereal.email>',
        to: 'sabredeval@gmail.com',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: '<p><b>Hello</b> to myself!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});