const homeRouter = require("express").Router();

homeRouter.get("/", async (req, res) => {
  res.send("Responded by backend via Router");
});

module.exports = homeRouter;
