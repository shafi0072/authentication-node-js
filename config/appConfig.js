const express = require("express");
const cors = require("cors");
const HeadLineRoute = require("../RoutHandler/Home/headLine");
const authentication = require("../RoutHandler/authentication");
const errorConfig = require("./errorConfig");
function app() {
  const app = express();
  return (
    app.use(express.json()),
    app.use(cors()),
    app.use("/home/headline", HeadLineRoute),
    app.use("/authentication", authentication),
    app.get("/", (req, res) => {
      res.send("Hello world");
    }),
    app.listen(process.env.DEV_PORT, () => {
      console.log(
        `the server is running on port number ${process.env.DEV_PORT}`
      );
    })
  );
  errorConfig();
}

module.exports = app();
