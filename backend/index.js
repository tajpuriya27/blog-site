const express = require("express");
const app = express();
const config = require("./utils/config");

app.get("/", (req, res) => {
  res.send("Response by backend");
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
