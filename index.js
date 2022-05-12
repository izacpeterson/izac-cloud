const fs = require("fs");
const http = require("http");
const https = require("https");

const express = require("express");
const app = express();
const cors = require("cors");
const { exec } = require("child_process");

const options = {
  key: fs.readFileSync(
    "/etc/letsencrypt/live/cloud.izacpeterson.com/privkey.pem"
  ),
  cert: fs.readFileSync(
    "/etc/letsencrypt/live/cloud.izacpeterson.com/fullchain.pem"
  ),
};

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

// app.listen(80, () => {
//   console.log("Server up");
// });

const server = https.createServer(options, app).listen(80, () => {
  console.log("server up");
});
