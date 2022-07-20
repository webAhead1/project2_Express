const express = require("express");
const path = require("path");
const PORT = 4000;

const server = express();

server.use(express.static("public"));

server.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "profile.html"));
});

server.get("/goodbye", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "goodbye.html"));
});

server.listen(PORT, () => console.log("Server listening on localhost:4000"));
