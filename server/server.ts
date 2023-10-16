import express from "express";

const app = express();
const PORT = 2000;

app.get("/", (req, res) => res.send("Hello"));

app.listen(PORT);