const express = require("express");
const axios = require("axios");
const port = 3000;

const app = express();
app.use(express.json()); // parse json request bodies for this app

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/ishotdog", (req, res) => {
  let food = req.body.food;
  if (food === "hotdog") {
    res.send("It's a hotdog!");
  } else {
    res.send("No, it's not a hotdog.");
  }
});

app.put("/posts/:id", (req, res) => {
  let id = req.params.id;
  res.send(id);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
