const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();
app.use(express.json()); // parse json request bodies for this app

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/create", (req, res) => {
  let name = req.query.name;
  let type = req.query.type;
  let filename = name + "." + type;
  fs.appendFile(filename, " ", (err) => {
    if (err) res.send(err);
    res.send({
      message: "File created!",
      name: name,
      type: type,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
