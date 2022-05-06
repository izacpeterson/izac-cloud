const express = require("express");
const app = express();
const cors = require("cors");
const { bash } = require("child_process");

app.use(cors());

app.use((req, res, next) => {
  console.log("User connected");
  next();
});

app.use(express.static("public"));

app.use("/scripts", express.static("scripts"));

app.get("/update", (req, res) => {
  bash("./scripts/update.sh");
});

app.listen(80, () => {
  console.log("Server up");
});
