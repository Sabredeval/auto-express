
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "imap.ethereal.email",
  port: 993,
  secure: false,
  auth: {
    user: "roman.beier15@ethereal.email",
    pass: "r3BsJK8FUDbpZbRcHf",
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <roman.beier15@ethereal.email>', // sender address
    to: "sabredeval@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);