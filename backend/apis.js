const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
