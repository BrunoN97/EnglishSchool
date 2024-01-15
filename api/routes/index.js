const bodyParser = require("body-parser");

const classs = require("./classRoute");
const person = require("./personRoute");
const level = require("./levelRoute");

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    person,
    level,
    classs
  );
};
