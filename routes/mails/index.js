const mails = require("express").Router();

//controllers
const { mailSender } = require("../../controllers/mails")

mails.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello Mail!"
    })
})

mails.post("/send", mailSender);

module.exports = mails