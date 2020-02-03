"use strict";

var _graphqlYoga = require("graphql-yoga");

var _morgan = _interopRequireDefault(require("morgan"));

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 4000;
var server = new _graphqlYoga.GraphQLServer({
  schema: _schema["default"]
});
server.express.use((0, _morgan["default"])("dev"));
server.start({
  port: PORT
}, function () {
  return console.log("Server running on http://localhost:".concat(PORT));
});