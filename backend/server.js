import express from "express";
import data from "./data.js";

const app = express();

const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is runnning....");
});

app.get("/api/movies", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log("Server Started..");
});
