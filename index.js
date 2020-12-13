var http = require("http");
http
  .createServer((req, res) => {
    res.write("welcome to node server");
    res.end();
  })
  .listen(8000, () => console.log("server listening on 8000"));

////////////Express server
//
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome To Express Server");
});

app.get("/sample", (req, res) => {
  res.send(" Sample Page");
});

app.listen(9000, () => {
  console.log("Express  Started At 9000 Port");
});
