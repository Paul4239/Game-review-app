const express = require("express");
const cors = require("cors");
const { Client } = require("pg");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/reviews", async (req, res) => {
  const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    const result = await client.query("SELECT * FROM reviews;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  } finally {
    await client.end();
  }
});

app.listen(port, () => {
  console.log(`Database api: https://game-review-app.onrender.com/reviews`);
});
