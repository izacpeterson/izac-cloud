const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
  console.log("User connected");
  next();
});

app.use(express.static("public"));

app.use("/scripts", express.static("scripts"));

app.listen(8080, () => {
  console.log("Server up");
});
