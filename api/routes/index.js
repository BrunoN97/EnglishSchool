const bodyParser = require("body-parser");
const person = require("./personRoute");
const level = require("./levelRoute");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(person);
  app.use(level);
};
