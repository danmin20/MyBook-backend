"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./env");

require("@babel/polyfill");

var _graphqlYoga = require("graphql-yoga");

var _morgan = _interopRequireDefault(require("morgan"));

var _schema = _interopRequireDefault(require("./schema"));

var _passport = require("./passport");

var _middleware = require("./middleware");

var PORT = process.env.PORT || 80;
var server = new _graphqlYoga.GraphQLServer({
  schema: _schema["default"],
  context: function context(_ref) {
    var request = _ref.request;
    return {
      request: request,
      isAuthenticated: _middleware.isAuthenticated
    };
  }
});
server.express.use((0, _morgan["default"])("dev"));
server.express.use(_passport.authenticateJwt);
server.start({
  port: PORT
}, function () {
  return console.log("Server running on http://localhost:".concat(PORT));
});