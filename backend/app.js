const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./utils/config");
const logger = require("./utils/logger");
const blogsRouter = require("./controllers/blogs");

console.log("Connecting to ", config.mongoUrl);

mongoose
  .connect(config.mongoUrl)
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((error) => {
    logger.error("Error occured while connecting to DB.", error);
  });

app.use(express.json());

app.use("/", blogsRouter);

module.exports = app;
