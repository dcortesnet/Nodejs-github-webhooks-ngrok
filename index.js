const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

let events = [];

app.post("/hook", (req, res) => {
  console.log("Capture event of Github WebHook");
  console.log(req);
  return res.status(200).end();
});

app.get("/events", (req, res) => {
  return res.json(events).status(200);
});

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
