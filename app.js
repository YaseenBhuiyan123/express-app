const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const books = {
  title1: "author1",
  title2: "author2",
  title3: "author3",
};

app.use(cors());

app.get("/", cors(), (req, res) => {
  res.send("Hello World!");
});

app.get("/book", cors(), (req, res) => {
  const title = req.query.title;
  res.json({ title: title, author: books[title] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
