const express = require("express");
const app = express();

const userInfo = require("./userInfo-route");

app.use("/user/", userInfo);

module.exports = app;
