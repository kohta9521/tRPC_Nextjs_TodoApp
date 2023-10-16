import express from "express";

const app = express();
const PORT = 1000;

app.get("/", (req, res) => res.send("Hello"));

app.listen(PORT);