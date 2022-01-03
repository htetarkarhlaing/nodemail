const nodemailer = require("nodemailer");

const mailSender = async (req, res) => {
  const { host, authUser, authPass, mailFrom, mailTo, subject, html } =
    req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    // host: host,
    port: 587,
    secure: false,
    auth: {
      user: authUser,
      pass: authPass,
    },
  });

  const mailOptions = {
    from: mailFrom,
    to: mailTo,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(500).json({
        meta: {
          success: false,
          message: err,
        },
      });
    } else {
      res.status(200).json({
        meta: {
          success: true,
          message: "Mail sent success.",
        },
        body: data,
      });
    }
  });
};

module.exports = { mailSender };
