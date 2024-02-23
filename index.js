const express = require("express");
const app = express();
const port = 3000;

let events = [];

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
