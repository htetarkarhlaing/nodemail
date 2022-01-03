const mails = require("./mails");
const routes = require("express").Router();
const path = require("path");

const indexHTML = path.join(__dirname, "/../public/index.html");
const bgImg = path.join(__dirname, "/../public/background.jpg");

routes.get("/", (req, res) => {
  return res.status(200).sendFile(indexHTML)
});
routes.get("/background.jpg", (req, res) => {
  return res.status(200).sendFile(bgImg)
});

routes.use("/mail", mails);

module.exports = routes;
