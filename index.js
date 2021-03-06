const fs = require("fs");
const http = require("http");
const https = require("https");

const express = require("express");
const app = express();
const cors = require("cors");
const { exec } = require("child_process");

app.use(cors());

app.use((req, res, next) => {
  console.log("User connected");
  next();
});

app.use(express.static("public"));

app.use("/scripts", express.static("scripts"));
app.use("/images", express.static("images"));

app.get("/update", (req, res) => {
  exec("./scripts/update.sh");
  res.send("Updated");
});

app.listen(8080, () => {
  console.log("Server up");
});
