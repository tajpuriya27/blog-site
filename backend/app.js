const express = require("express");
const app = express();
const blogsRouter = require("./controllers/blogs");

app.use(express.json());
app.use("/", blogsRouter);

module.exports = app;
