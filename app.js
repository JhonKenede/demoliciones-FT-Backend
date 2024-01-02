const express = require("express");
const { json } = require("body-parser");
const createMail = require("./routes/sendEmail");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://3.134.238.10:10000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(json());

app.use(createMail);

module.exports = app;
