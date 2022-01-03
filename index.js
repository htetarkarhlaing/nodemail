const express = require("express");
const cors = require("cors");
require("dotenv").config();

//custom imports
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", routes);

const PORT = process.env.PORT || 8080;
const END_POINT = process.env.END_POINT || "http://localhost:"
app.listen(PORT, () => {
    console.log(`Server is running on ${END_POINT+PORT}`)
})