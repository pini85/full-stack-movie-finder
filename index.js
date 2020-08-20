const express = require("express");
const app = express();

app.get("/api/test", (req, res) => {
  res.send("Hello World");
});
const PORT = 5000;
app.listen(PORT);
