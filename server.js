import express from "express";
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
